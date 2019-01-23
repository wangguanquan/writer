package cn.colvin.job;

import cn.colvin.Const;
import cn.colvin.author.note.NoteLog;
import cn.colvin.other.MyDataSource;
import cn.colvin.other.SQL;
import cn.colvin.utils.FileUtil;
import cn.colvin.utils.StringUtil;
import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;

import java.io.BufferedReader;
import java.io.FileReader;
import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.sql.Connection;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Timestamp;
import java.util.*;
import java.util.regex.Pattern;
import java.util.stream.Collectors;


/**
 * Create by guanquan.wang at 2018-11-19 16:27
 */
@Service
public class CleanService {
    private Logger logger = LogManager.getLogger(getClass());
    @Autowired
    private MyDataSource dataSource;
    @Autowired
    private SQL<?> iSQL;
    @Value("${spring.note.path}")
    private String notePath;
    @Value("${spring.image.path}")
    private String imagePath;
    /* 回收站保存60天 */
    @Value("${spring.timeout.recycle}")
    private int timeout_recycle = 5184000;
    /* 日志保存30天 */
    @Value("${spring.timeout.logs}")
    private int timeout_logs = timeout_recycle >> 1;

    /**
     * 清除回收站
     */
    void clearRecycle(long now) {
        final long timeout = now - timeout_recycle;
        try (Connection con = dataSource.getConnection()) {

            boolean autoCommit = con.getAutoCommit();
            con.setAutoCommit(false); // close auto commit
            List<Integer> list = new SQL<Integer>().selectList(con, "select id from note where delete_flag = '1' and delete_at < ?", rs -> rs.getInt(1), ps -> ps.setLong(1, timeout));

            if (list == null || list.isEmpty()) {
                logger.info("Recycle nothing to clear.");
                return;
            }

            logger.info("Delete from note records " + list.size());
            // delete note
            iSQL.update(con, "delete from note where delete_flag = '1' and delete_at < ?", ps -> ps.setLong(1, timeout));

//            Path base = Paths.get(notePath);

            // query note logs
            for (Integer id : list) {
//                List<String> contents = new SQL<String>().selectList(con, "select substr(content, 1, 36) from note_log where note_id = ?", rs -> rs.getString(1), ps -> ps.setInt(1, id));
//                for (String uuid : contents) {
//                    // delete from disk
//                    if (StringUtil.isUUID(uuid)) {
//                        Path path = base.resolve(id.toString()).resolve(uuid);
//                        logger.info("Remove from disk " + path.toString() + " last modified at: " + new Timestamp(path.toFile().lastModified()));
//                        FileUtil.rm(path);
//                    }
//                }
                clearNoteFile(id);

                logger.info("Delete from note_log where note_id is " + id);
                iSQL.update(con, "delete from note_log where note_id = ?", ps -> ps.setInt(1, id));
            }

            con.commit();
            con.setAutoCommit(autoCommit);
        } catch (SQLException e) {
            logger.error("", e);
        }
    }

    /**
     * 清除自动保存
     */
    void clearLogs(long now) {
        final long timeout = now - timeout_logs;
        Path base = Paths.get(notePath);
        try (Connection con = dataSource.getConnection()) {
            List<Integer> logs = new SQL<Integer>().selectList(con, "select t1.id,t1.note_id,substr(t1.content, 1, 36) as uid from note_log t1 left outer join note t2 on t1.id = t2.autosave_control where t1.update_at < ? and t2.id is null", rs -> {
                String context = rs.getString(3);
                int noteId = rs.getInt(2), logId = rs.getInt(1);
                if (StringUtil.isUUID(context)) {
                    Path path = base.resolve(String.valueOf(noteId)).resolve(context);
                    logger.info("Remove from disk " + path.toString() + " last modified at: " + new Timestamp(path.toFile().lastModified()));
                    FileUtil.rm(path);
                }
                removeResources(noteId, logId);
                return logId;
            }, ps -> ps.setLong(1, timeout));

            if (logs == null || logs.isEmpty()) {
                logger.info("Logs nothing to clear.");
                return;
            }

            logger.info("Delete from note_log where id in " + Arrays.toString(logs.toArray()));
            iSQL.update(con, "delete from note_log where update_at < ? and not exists (select id from note where autosave_control = note_log.id)", ps -> ps.setLong(1, timeout));
        } catch (SQLException e) {
            logger.error("", e);
        }
    }

    public void removeResources(int id, int logId) {
        Path indexPath = Paths.get("./", Const.Suffix.index, id + Const.Suffix.index);
        removeResources(indexPath, logId);
    }

    private Pattern pat = Pattern.compile("^\\[\\d\\]$");
    public void removeResources(Path indexPath, int logId) {
        // index file not exists
        if (!Files.exists(indexPath)) {
            return;
        }
        try {
            // remove all resources
            if (logId == -1) {
//                Set<String> paths = Files.lines(indexPath).filter(s -> !(StringUtil.isEmpty(s) || pat.matcher(s).matches())).collect(Collectors.toSet());
                Set<String> paths = new HashSet<>();
                try (BufferedReader reader = new BufferedReader(new FileReader(indexPath.toFile()))) {
                    String line;
                    while ((line = reader.readLine()) != null) {
                        if (StringUtil.isEmpty(line) || pat.matcher(line).matches()) continue;
                        paths.add(line);
                    }
                }
                for (String path : paths) {
                    FileUtil.rm(path);
                    logger.info("Remove " + indexPath + " resource " + path);
                }
            } else {
                Set<String> paths = new HashSet<>(), l = new HashSet<>();
                try (BufferedReader reader = new BufferedReader(new FileReader(indexPath.toFile()))) {
                    String line;
                    boolean find = false;
                    while ((line = reader.readLine()) != null) {
                        if (StringUtil.isEmpty(line)) continue;
                        if (pat.matcher(line).matches()) {
                            find = Integer.parseInt(line.substring(1, line.length() - 1)) == logId;
                            continue;
                        }
                        if (find) {
                            l.add(line);
                        } else {
                            paths.add(line);
                        }
                    }
                }
                l.removeAll(paths);
                for (String path : l) {
                    FileUtil.rm(path);
                    logger.info("Remove " + indexPath + " resource " + path);
                }
            }
        } catch (IOException e) {
            e.printStackTrace();
        }
    }

    /**
     * Clear download temp zip file
     */
    void clearDownTempZip() {
        try (Connection con = dataSource.getConnection()) {
            iSQL.select(con, "select id, slug from note where modified = '1'", (ResultSet rs) -> {
                int id = rs.getInt(1);
                String slug = rs.getString(2);
                Path filePath = Paths.get(notePath, String.valueOf(id)).resolve(slug + ".zip");
                if (Files.exists(filePath)) {
                    logger.info("Remove from disk " + filePath.toString());
                    FileUtil.rm(filePath);
                }
            });
        } catch (SQLException e) {
            logger.error("", e);
        }
    }

    public void clearNoteFile(int noteId) {
        Path filePath = Paths.get(notePath, String.valueOf(noteId));
        if (Files.exists(filePath)) {
            FileUtil.rm_rf(filePath);
            logger.info("Remove note " + noteId);
        }
        // Remove resources index file from desk
        Path indexPath = Paths.get("./", Const.Suffix.index, noteId + Const.Suffix.index);
        if (Files.exists(indexPath)) {
            removeResources(indexPath, -1);
            FileUtil.rm(indexPath);
            logger.info("Remove resources index file: " + indexPath);
        }
    }
}
