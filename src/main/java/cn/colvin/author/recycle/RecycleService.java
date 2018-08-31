package cn.colvin.author.recycle;

import cn.colvin.other.MyDataSource;
import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.sql.Connection;
import java.sql.SQLException;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

/**
 * Create by guanquan.wang at 2018-08-27 16:13
 */
@Service
public class RecycleService {
    Logger logger = LogManager.getLogger(getClass());
    @Autowired
    private MyDataSource dataSource;
    @Autowired
    cn.colvin.other.SQL<RecycleNote> SQL;

    public Map<String, Integer> restore(int id) {
        Connection con = null;
        try {
            con = dataSource.getConnection();
            Map<String, Integer> param = new HashMap<>();
            SQL.select(con, "select notebook_id,delete_flag from note where id = ?", rs -> {
                param.put("notebook_id", rs.getInt(1));
                param.put("delete_flag", rs.getInt(2));
            }, ps -> ps.setInt(1, id));
            if (param.isEmpty()) {
                logger.error("文章不存在,不能恢复.");
                return null;
            }
            if (param.get("delete_flag") == 0) {
                logger.info("文章状态正常不需要恢复.");
                return null;
            }
            con.setAutoCommit(false);

            SQL.update(con, "update note set delete_flag = ? where id = ?", ps -> {
                ps.setBoolean(1, false);
                ps.setInt(2, id);
            });

            SQL.update(con, "update notebook set delete_flag = '0', last_modify_at = ? where id = ? and delete_flag = '1'", ps -> {
                ps.setLong(1, System.currentTimeMillis() / 1000);
                ps.setInt(2, param.get("notebook_id"));
            });

            con.commit();

            param.remove("delete_flag");
            return param;
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
        return null;
    }

    public List<RecycleNote> notes() {
        try (Connection con = dataSource.getConnection()) {
            return SQL.selectList(con, "select id, title, note_type, delete_at from note where delete_flag = '1'", rs -> {
                RecycleNote o = new RecycleNote();
                o.setId(rs.getInt(1));
                o.setTitle(rs.getString(2));
                o.setNote_type(rs.getInt(3));
                o.setDeleted_at(rs.getLong(4));
                return o;
            });
        } catch (SQLException e) {
            logger.error("", e);
        }
        return null;
    }

    public void deleteNote(int id) {
        try (Connection con = dataSource.getConnection()) {
            SQL.update(con, "delete from note where id = ? and delete_flag = '1'", ps -> ps.setInt(1, id));
        } catch (SQLException e) {
            logger.error("", e);
        }
    }
}
