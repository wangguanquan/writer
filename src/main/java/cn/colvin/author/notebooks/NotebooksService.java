package cn.colvin.author.notebooks;

import cn.colvin.other.MyDataSource;
import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.sql.Connection;
import java.sql.SQLException;
import java.util.Collections;
import java.util.List;

/**
 * Create by guanquan.wang at 2018-08-23 15:26
 */
@Service
public class NotebooksService {
    private Logger logger = LogManager.getLogger(getClass());
    @Autowired
    private MyDataSource dataSource;
    @Autowired
    private cn.colvin.other.SQL<Notebook> SQL;

    /**
     * 查找文集
     * @return
     */
    public List<Notebook> get(int uid) {
        try (Connection con = dataSource.getConnection()) {
            return SQL.selectList(con, "select id, `name`, seq from notebook where id = 1 union all select id, name, seq from notebook where uid = ? and delete_flag = '0' order by seq desc"
                    , r -> new Notebook(r.getInt(1), r.getString(2), r.getInt(3)), ps -> ps.setInt(1, uid));
        } catch (SQLException e) {
            logger.error("查询文集错误.", e);
        }
        return Collections.emptyList();
    }

    /**
     * 创建文集
     * @param nb
     * @return
     */
    public Notebook create(Notebook nb, int uid) {
        try (Connection con = dataSource.getConnection()) {
            long id = SQL.insert(con, "insert into notebook(uid, `name`, seq) values (?, ?, (select count(t1.id) from notebook t1))", ps -> {
                ps.setInt(1, uid);
                ps.setString(2, nb.getName());
            });
            nb.setId((int)id);
            return nb;
        } catch (SQLException e) {
            logger.error("新建文集错误.", e);
        }
        return nb;
    }

    /**
     * 编辑文集
     * @param nb
     */
    public void edit(Notebook nb, int uid) {
        try (Connection con = dataSource.getConnection()) {
            int n = SQL.count(con, "select count(id) from notebook where id = ? and uid = ?", ps -> {
                ps.setInt(1, nb.getId());
                ps.setInt(2, uid);
            });
            if (n == 0) {
                logger.debug("只能修改本人的文集");
                return;
            }
            SQL.update(con, "update notebook set `name` = ? where id = ?", nb.getName(), nb.getId());
        } catch (SQLException e) {
            logger.error("修改文集错误.", e);
        }
    }

    /**
     * 修改顺序
     * @param seqs
     */
    public void sequence(int[] seqs) {
        try (Connection con = dataSource.getConnection()) {
            SQL.batchUpdateWithTransaction(con, "update notebook set seq = ? where id = ?", ps -> {
                for (int i = 0, len = seqs.length; i < len; i++) {
                    ps.setInt(1, len - i - 1);
                    ps.setInt(2, seqs[i]);
                    ps.addBatch();
                }
            });
        } catch (SQLException e) {
            logger.error("修改顺序错误.", e);
        }
    }

    /**
     * 逻辑删除文集及文集下的所有文章
     * @param id
     * @param uid
     */
    public void destroy(int id, int uid) {
        Connection con = null;
        try {
            con = dataSource.getConnection();
            con.setAutoCommit(false);
            long at = System.currentTimeMillis() / 1000;

            int n = SQL.count(con, "select count(id) from notebook where id = ? and uid = ?", ps -> {
                ps.setInt(1, id);
                ps.setInt(2, uid);
            });
            if (n == 0) {
                logger.debug("只能修改本人的文集");
                return;
            }

            SQL.update(con, "update notebook set delete_flag = ?, last_modify_at = ? where id = ?", ps -> {
                ps.setBoolean(1, true);
                ps.setLong(2, at);
                ps.setInt(3, id);
            });

            SQL.update(con, "update note set delete_flag = ?, delete_at = ? where notebook_id = ?", ps -> {
                ps.setBoolean(1, true);
                ps.setLong(2, at);
                ps.setInt(3, id);
            });
            con.commit();
        } catch (SQLException e) {
            logger.error("删除文集失败.", e);
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
