package cn.colvin.author.notelog;

import cn.colvin.enums.LogType;
import cn.colvin.other.MyDataSource;
import cn.colvin.utils.StringUtil;
import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.context.properties.ConfigurationProperties;
import org.springframework.stereotype.Service;

import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Paths;
import java.sql.Connection;
import java.sql.SQLException;
import java.util.HashMap;
import java.util.Map;

/**
 * Create by guanquan.wang at 2018-08-24 14:26
 */
@ConfigurationProperties(prefix = "spring.note")
@Service
public class NoteLogService {
    Logger logger = LogManager.getLogger(getClass());
    @Autowired
    private MyDataSource dataSource;
    private String path;
    private boolean saveWithFile = true;

    public void setSaveWith(String saveWith) {
        this.saveWithFile = "file".equalsIgnoreCase(saveWith);
    }

    public void setPath(String path) {
        this.path = path;
    }
    @Autowired
    cn.colvin.other.SQL<Void> SQL;

    public Map<String, String> getHistory(int id, int note_id) {
        Map<String, String> map = new HashMap<>();
        map.put("id", String.valueOf(id));
        try (Connection con = dataSource.getConnection()) {
            SQL.select(con, "select content, title from note_log where id = ? and note_id = ?", r -> {
               String content = r.getString(1);
                if (saveWithFile && StringUtil.isUUID(content)) {
                    try {
                        content = StringUtil.readString(Files.newInputStream(Paths.get(path, String.valueOf(note_id), content)));
                    } catch (IOException e) {
                        logger.error("", e);
                    }
                }
                map.put("content", content);
                map.put("title", r.getString(2));
            }, ps -> {
                ps.setInt(1, id);
                ps.setInt(2, note_id);
            });
        } catch (SQLException e) {
            logger.error("", e);
        }
        return map;
    }

    public void restore(int id, int note_id) {
        Connection con = null;
        try {
            con = dataSource.getConnection();
            con.setAutoCommit(false);

            long at = System.currentTimeMillis() / 1000;

            long _id = SQL.insert(con, "insert into note_log(note_id, content, update_at) select note_id, content, ? as update_at from note_log where id = ?", ps -> {
                ps.setLong(1, at);
                ps.setInt(2, id);
            });

            SQL.update(con, "update note_log set note_log_type = ?, update_at = ? where id = (select t1.autosave_control from note t1 where t1.id = ?)", ps -> {
                ps.setInt(1, LogType.RESTORE.type());
                ps.setLong(2, at);
                ps.setInt(3, note_id);
            });

            SQL.update(con, "update note set autosave_control = ?, content_updated_at = ? where id = ?", ps -> {
                ps.setInt(1, (int)_id);
                ps.setLong(2, at);
                ps.setInt(3, note_id);
            });

            con.commit();
        } catch (SQLException e) {
            logger.error("", e);
            if (con != null) {
                try {
                    con.rollback();
                } catch (SQLException e1) {
                    e1.printStackTrace();
                }
            }
        } finally {
            if (con != null) {
                try {
                    con.setAutoCommit(true);
                } catch (SQLException e) {
                    e.printStackTrace();
                }
            }
        }
    }
}
