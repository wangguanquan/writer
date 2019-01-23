package cn.colvin.author.note;

import cn.colvin.Const;
import cn.colvin.enums.LogType;
import cn.colvin.other.MyDataSource;
import cn.colvin.other.SQL;
import cn.colvin.other.processor.BeanResultSetProcessor;
import cn.colvin.upload.UploadService;
import cn.colvin.utils.FileUtil;
import cn.colvin.utils.StringUtil;
import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;

import java.io.*;
import java.nio.file.*;
import java.sql.Connection;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.*;
import java.util.regex.Matcher;
import java.util.regex.Pattern;

/**
 * Create by guanquan.wang at 2018-08-23 16:51
 */
@Service
public class NoteService {
    private Logger logger = LogManager.getLogger(getClass());
    @Autowired
    private MyDataSource dataSource;
    @Autowired
    private cn.colvin.other.SQL<Note> SQL;
    @Value("${spring.note.path}")
    private String path;
    private boolean saveWithFile = true;
    @Autowired
    private UploadService uploadService;

    @Value("${spring.note.save-with}")
    public void setSaveWith(String saveWith) {
        this.saveWithFile = "file".equalsIgnoreCase(saveWith);
    }
    Pattern localImagePat = Pattern.compile("\\[(.*)\\]\\(([\\w\\./-]+)\\)");
    /**
     * 创建文章
     * @return
     */
   public Note create(Note note) {
       note.setSlug(StringUtil.randomString(12));
       note.setContent_updated_at(System.currentTimeMillis() / 1000);
       note.setNote_type(2); // TODO
       try (Connection con = dataSource.getConnection()) {
           String sql;
           int seq;
           if (note.isAt_bottom()) {
               sql = "insert into note(slug,shared,notebook_id,seq_in_nb,note_type,autosave_control,title,content_updated_at,last_compiled_at,paid,in_book)" +
                       " values(?,?,?,?,?,?,?,?,?,?,?)";
               seq = 0;

               List<Integer> ids = new ArrayList<>();
               SQL.select(con, "select id from note where notebook_id = ? order by seq_in_nb desc", rs -> {
                   ids.add(rs.getInt(1));
               }, ps -> ps.setInt(1, note.getNotebook_id()));

               int[] ar = new int[ids.size() + 1];
               ar[ar.length - 1] = 0;
               for (int i = 0, len = ids.size(); i < len; i++) {
                   ar[i] = ids.get(i);
               }
               sequence(ar);
           } else {
               sql = "insert into note(slug,shared,notebook_id,seq_in_nb,note_type,autosave_control,title,content_updated_at,last_compiled_at,paid,in_book)" +
                       " values(?,?,?,(select count(t1.id) from note t1 where t1.notebook_id = ?),?,?,?,?,?,?,?)";
               seq = note.getNotebook_id();
           }

           long id = SQL.insert(con, sql, ps -> {
               ps.setString(1, note.getSlug());
               ps.setBoolean(2, note.isShared());
               ps.setInt(3, note.getNotebook_id());
               ps.setInt(4, seq);
               ps.setInt(5, note.getNote_type());
               ps.setInt(6, note.getAutosave_control());
               ps.setString(7, note.getTitle());
               ps.setLong(8, note.getContent_updated_at());
               ps.setLong(9, note.getLast_compiled_at());
               ps.setBoolean(10, note.isPaid());
               ps.setBoolean(11, note.isIn_book());
           });
           return getById((int) id);
       } catch (SQLException e) {
           logger.error("创建文章失败.", e);
       }
       return null;
   }

    private BeanResultSetProcessor<Note> toNote = (ResultSet r) -> {
       Note o = new Note();
       try {
           o.setId(r.getInt(1));
           o.setSlug(r.getString(2));
           o.setShared(r.getBoolean(3));
           o.setNotebook_id(r.getInt(4));
           o.setSeq_in_nb(r.getInt(5));
           o.setNote_type(r.getInt(6));
           o.setAutosave_control(r.getInt(7));
           o.setTitle(r.getString(8));
           o.setContent_updated_at(r.getLong(9));
           o.setLast_compiled_at(r.getLong(10));
           o.setPaid(r.getBoolean(11));
           o.setIn_book(r.getBoolean(12));
           o.setModified(r.getBoolean(13));
       } catch (SQLException e) {
           logger.error("", e);
       }
       return o;
   };

   public Note getById(int id) {
       try (Connection con = dataSource.getConnection()) {
           return SQL.select(con, "select id,slug,shared,notebook_id,seq_in_nb,note_type,autosave_control,title,content_updated_at,last_compiled_at,paid,in_book,modified from note where id = ?", toNote, p -> p.setInt(1, id));
       } catch (SQLException e) {
           logger.error("", e);
       }
       return null;
   }

    /**
     * 通过文集ID查找文章
     * @param id
     * @return
     */
    public List<Note> listNotesByNotebookId(int id) {
        try (Connection con = dataSource.getConnection()) {
            return SQL.selectList(con, "select id,slug,shared,notebook_id,seq_in_nb,note_type,autosave_control,title,content_updated_at,last_compiled_at,paid,in_book,modified from note where notebook_id = ? and delete_flag = '0' order by seq_in_nb desc", toNote, id);
        } catch (SQLException e) {
            logger.error("查询文集错误.", e);
        }
        return Collections.emptyList();
    }

    public String content(int id) {
        try (Connection con = dataSource.getConnection()) {
            String content = new SQL<String>().select(con, "select content from note_log where id = (select t1.autosave_control from note t1 where t1.id = ?)", SQL.toString, ps -> ps.setInt(1, id));
            if (saveWithFile && StringUtil.isUUID(content)) {
                content = StringUtil.readString(Files.newInputStream(Paths.get(path, String.valueOf(id), content)));
            }
            return content;
        } catch (SQLException | IOException e) {
            logger.error("", e);
        }
        return "";
    }

    public NoteLog save(NoteContent nc, LogType logType) {
        final long at = System.currentTimeMillis() / 1000;
        String content = null;
        if (saveWithFile) {
            content = UUID.randomUUID().toString();
            Path notePath = Paths.get(path, String.valueOf(nc.getId()));
            if (!Files.exists(notePath)) {
                try {
                    FileUtil.mkdir(notePath);
                } catch (IOException e) {
                    logger.error("", e);
                }
            }
            if (nc.getContent() != null) {
                try (BufferedWriter writer = Files.newBufferedWriter(notePath.resolve(content))) {
                    writer.write(nc.getContent());
                } catch (IOException e) {
                    logger.error("", e);
                }
            }
            
        }
        final String ct = content;
        try (Connection con = dataSource.getConnection()) {
          long id = SQL.insert(con, "insert into note_log(note_id, content, update_at, title, note_log_type) values (?, ?, ?, ?, ?)", ps -> {
                ps.setInt(1, nc.getId());
                ps.setString(2, saveWithFile ? ct: nc.getContent());
                ps.setLong(3, at);
                ps.setString(4, nc.getTitle());
                ps.setInt(5, logType.type());
            });

            SQL.update(con, "update note set autosave_control = ?, title = ?, content_updated_at = ?, shared=?,modified=? where id = ?", ps -> {
                ps.setInt(1, (int) id);
                ps.setString(2, nc.getTitle());
                ps.setLong(3, at);
                ps.setBoolean(4, logType == LogType.PUBLISH);
                ps.setBoolean(5, nc.isModified());
                ps.setInt(6, nc.getId());
            });

            resetIndex(nc, id);

        } catch (SQLException e) {
            logger.error("自动保存失败.", e);
        }
        NoteLog log = new NoteLog();
        log.setContent_size_status("fine"); // TODO < 1000 fine
        log.setId(nc.getId());
        log.setContent_updated_at(at);
        return log;
    }

    private Path packagePath = Paths.get(".");
    /**
     * list image resources
     * @param nc
     * @return
     */
    private List<String> listResources(NoteContent nc) {
        if (StringUtil.isEmpty(nc.getContent())) return null;
        Matcher matcher = localImagePat.matcher(nc.getContent());
        List<String> resources = new ArrayList<>();
        while (matcher.find()) {
            String image = matcher.group(2);
            Path realPath = uploadService.getRealPath(image);
            if (realPath != null && !realPath.equals(packagePath)) {
                resources.add(realPath.toString());
            }
        }
        return resources;
    }

    public void resetIndex(NoteContent nc, long logId) {
        // make a resource index file
        List<String> resources = listResources(nc);
        if (resources != null && !resources.isEmpty()) {
            Path indexPath = Paths.get("./", Const.Suffix.index, nc.getId() + Const.Suffix.index);
            try (BufferedWriter writer = new BufferedWriter(new FileWriter(indexPath.toFile(), true))) {
                writer.append('[').append(String.valueOf(logId)).append(']')
                    .append(System.lineSeparator());
                for (String r : resources) {
                    writer.append(r).append(System.lineSeparator());
                }
            } catch (IOException e) {
                logger.error("Writer resources index file error.", e);
            }
        }
    }

    public List<NoteLogGen> listLogsByNid(int id) {
        try (Connection con = dataSource.getConnection()) {
            return new SQL<NoteLogGen>().selectList(con, "select t1.id, t2.note_type, t1.update_at, t1.note_log_type from note_log t1 inner join note t2 on t1.note_id  = t2.id where t2.id = ? and t1.id < t2.autosave_control", r -> {
                NoteLogGen o = new NoteLogGen();
                o.setId(r.getInt(1));
                o.setNote_type(r.getInt(2));
                o.setUpdated_at(r.getLong(3));
                o.setNote_log_type(r.getInt(4));
                o.setApp(4);
                return o;
            }, id);
        } catch (SQLException e) {
            logger.error("", e);
        }
        return Collections.emptyList();
    }

    /**
     * 根据slug获取Note
     * @param slug type of string
     * @return note or null
     */
    public Note getBySlug(String slug) {
        try (Connection con = dataSource.getConnection()) {
            return SQL.select(con, "select id, title from note where slug = ?", r -> {
                Note n = new Note();
                n.setId(r.getInt(1));
                n.setTitle(r.getString(2));
                return n;
            }, p -> p.setString(1, slug));
        } catch (SQLException e) {
            logger.error("", e);
        }

        return null;
    }

    public Map<String, ?> destroy(int id) {
        try (Connection con = dataSource.getConnection()) {
            long at = System.currentTimeMillis() / 1000;
            Map<String, Object> param = new HashMap<>();
            SQL.select(con, "select title,delete_flag from note where id = ?", rs -> {
                param.put("title", rs.getString(1));
                param.put("delete_flag", rs.getBoolean(2));
            }, ps -> ps.setInt(1, id));
           if (param.isEmpty() || (boolean)param.get("delete_flag")) {
               logger.warn("文章不存在或已被删除.");
               return null;
           }
           SQL.update(con, "update note set delete_at = ?, delete_flag = '1' where id = ?", ps -> {
               ps.setLong(1, at);
               ps.setInt(2, id);
           });
           param.remove("delete_flag");
           param.put("id", id);
           param.put("delete_at", at);
           return param;
        } catch (SQLException e) {
            logger.error("", e);
        }
        return null;
    }

    public void move(int id, int notebook_id) {
        try (Connection con = dataSource.getConnection()) {
            SQL.update(con, "update note t1, (select notebook_id, seq_in_nb from note where id = ?) t2 set t1.seq_in_nb = t1.seq_in_nb - 1 where t1.notebook_id = t2.notebook_id and t1.seq_in_nb > t2.seq_in_nb", id);
            SQL.update(con, "update note t1, (select notebook_id, count(t1.id) as seq_in_nb from note t1 where t1.notebook_id = ?) t2 set t1.notebook_id = t2.notebook_id, t1.seq_in_nb = t2.seq_in_nb where id = ?", ps -> {
                ps.setInt(1, notebook_id);
                ps.setInt(2, id);
            });
        } catch (SQLException e) {
            logger.error("", e);
        }
    }

    public void sequence(int[] sequences) {
        try (Connection con = dataSource.getConnection()) {
            SQL.batchUpdateWithTransaction(con, "update note set seq_in_nb = ? where id = ?", ps -> {
                for (int i = 0, len = sequences.length; i < len; i++) {
                    ps.setInt(1, len - i - 1);
                    ps.setInt(2, sequences[i]);
                    ps.addBatch();
                }
            });
        } catch (SQLException e) {
            logger.error("修改顺序错误.", e);
        }
    }


}
