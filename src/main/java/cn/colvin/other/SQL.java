package cn.colvin.other;

import cn.colvin.other.processor.BatchParamProcessor;
import cn.colvin.other.processor.BeanResultSetProcessor;
import cn.colvin.other.processor.ParamProcessor;
import cn.colvin.other.processor.ResultSetProcessor;
import org.springframework.stereotype.Component;

import java.sql.*;
import java.util.ArrayList;
import java.util.List;

/**
 * 简要封装jdbc实现ORM功能
 *
 * <p>类似Apache DBUtil只对JDBC进行简单封装，可以和JDBC混合使用。<br>
 * 与DBUtil不同之处在于:<br>SQL将结果集或参数设定暴露给开发者,开发者可以直接使用明确的<br>
 * 数据类型和set,get方法操作;<br>而后者将结果集和参数设定封装, 内部使用反射的方法调用set,get方法<br>
 * 完成对象封装.<p>
 *
 * <p>优缺点:<br>
 * 1:SQL只适用于Java8及以上,利用java8新增的方法接口实现. DBUtil使用面积更广,并且Oracel在java7版本
 * 上优化了反射的效率.<br>
 * 2:在一般场景下两者都和jdbc效率相当, 但在数据量较大, 返回的字段较多等场景下效率jdbc &gt;= SQL &gt; DBUtil.
 * <br>3:DBUtil比SQL更加简洁,SQL需要自己处理结果集和替换参数.
 * </p>
 * @author wanggq
 *
 * @param <T>
 */
@Component
public class SQL<T> {
        public void select(Connection conn, String sql, ResultSetProcessor processor, ParamProcessor paramProcessor)
            throws SQLException {
        try (PreparedStatement ps = conn.prepareStatement(sql)) {
            paramProcessor.build(ps);
            try (ResultSet rs = ps.executeQuery()) {
                while (rs.next()) {
                    processor.process(rs);
                }
            }
        }
    }

    public T select(Connection conn, String sql, BeanResultSetProcessor<T> processor, ParamProcessor paramProcessor)
            throws SQLException {
        try (PreparedStatement ps = conn.prepareStatement(sql)) {
            paramProcessor.build(ps);
            try (ResultSet rs = ps.executeQuery()) {
                if (rs.next()) {
                    return processor.process(rs);
                }
            }
        }
        return null;
    }

    public T select(Connection conn, String sql, BeanResultSetProcessor<T> processor, Object... params)
            throws SQLException {
        try (PreparedStatement ps = conn.prepareStatement(sql)) {
            int cnt = 0;
            for (Object param : params) {
                ps.setObject(++cnt, param);
            }
            try (ResultSet rs = ps.executeQuery()) {
                if (rs.next()) {
                    return processor.process(rs);
                }
            }
        }
        return null;
    }

    public List<T> selectList(Connection conn, String sql, BeanResultSetProcessor<T> processor)
            throws SQLException {
        try (PreparedStatement ps = conn.prepareStatement(sql)) {
            try (ResultSet rs = ps.executeQuery()) {
                List<T> result = new ArrayList<>();
                while (rs.next()) {
                    result.add(processor.process(rs));
                }
                return result;
            }
        }
    }

    public List<T> selectList(Connection conn, String sql, BeanResultSetProcessor<T> processor, ParamProcessor paramProcessor)
            throws SQLException {
        try (PreparedStatement ps = conn.prepareStatement(sql)) {
            paramProcessor.build(ps);
            try (ResultSet rs = ps.executeQuery()) {
                List<T> result = new ArrayList<>();
                while (rs.next()) {
                    result.add(processor.process(rs));
                }
                return result;
            }
        }
    }

    public List<T> selectList(Connection conn, String sql, BeanResultSetProcessor<T> processor, Object... params)
            throws SQLException {
        try (PreparedStatement ps = conn.prepareStatement(sql)) {
            int cnt = 0;
            for (Object param : params) {
                ps.setObject(++cnt, param);
            }
            try (ResultSet rs = ps.executeQuery()) {
                List<T> result = new ArrayList<>();
                while (rs.next()) {
                    result.add(processor.process(rs));
                }
                return result;
            }
        }
    }

    public int count(Connection conn, String sql, Object... params)
            throws SQLException {
        try (PreparedStatement ps = conn.prepareStatement(sql)) {
            int cnt = 0;
            for (Object param : params) {
                ps.setObject(++cnt, param);
            }
            try (ResultSet rs = ps.executeQuery()) {
                if (rs.next()) return rs.getInt(1);
            }
        }
        return 0;
    }

    public int count(Connection conn, String sql, ParamProcessor processor)
            throws SQLException {
        try (PreparedStatement ps = conn.prepareStatement(sql)) {
            processor.build(ps);
            try (ResultSet rs = ps.executeQuery()) {
                if (rs.next()) return rs.getInt(1);
            }
        }
        return 0;
    }

    /**
     * 如果需要获取自增长主键的插入时调用此方法
     * @return 自增长主键时返回主键值否则返回插入成功或者失败
     */
    public long insert(Connection conn, String sql, Object... params) throws SQLException {
        try (PreparedStatement ps = conn.prepareStatement(sql, Statement.RETURN_GENERATED_KEYS)) {
            int cnt = 0;
            for (Object param : params) {
                ps.setObject(++cnt, param);
            }
            int r = ps.executeUpdate();
            ResultSet rs = ps.getGeneratedKeys();
            if (rs.next()) {
                return rs.getLong(1);
            } else return r;
        }
    }

    /**
     * 如果需要获取自增长主键的插入时调用此方法
     * @return 自增长主键时返回主键值否则返回插入成功或者失败
     */
    public long insert(Connection conn, String sql, ParamProcessor processor) throws SQLException {
        try (PreparedStatement ps = conn.prepareStatement(sql, Statement.RETURN_GENERATED_KEYS)) {
            processor.build(ps);
            int r = ps.executeUpdate();
            ResultSet rs = ps.getGeneratedKeys();
            if (rs.next()) {
                return rs.getLong(1);
            } else return r;
        }
    }

    /**
     * Insert, Update, Delete
     * @return 返回更新结果,Insert时不返回自增长主键
     */
    public int update(Connection conn, String sql, Object... params) throws SQLException {
        try (PreparedStatement ps = conn.prepareStatement(sql)) {
            int cnt = 0;
            for (Object param : params) {
                ps.setObject(++cnt, param);
            }
            return ps.executeUpdate();
        }
    }

    public int update(Connection conn, String sql, ParamProcessor processor) throws SQLException {
        try (PreparedStatement ps = conn.prepareStatement(sql)) {
            processor.build(ps);
            return ps.executeUpdate();
        }
    }

    public int[] batchUpdate(Connection conn, String sql, ParamProcessor processor)
            throws SQLException {
        boolean ac;
        if (ac = conn.getAutoCommit()) {
            conn.setAutoCommit(!ac);
        }
        try (PreparedStatement ps = conn.prepareStatement(sql)) {
            processor.build(ps);
            return ps.executeBatch();
        } finally {
            // reset auto commit
            if (ac) conn.setAutoCommit(ac);
        }
    }

    public int[] batchUpdate(Connection conn, String sql, BatchParamProcessor<T> processor, List<T> objects)
            throws SQLException {
        boolean ac;
        if (ac = conn.getAutoCommit()) {
            conn.setAutoCommit(!ac);
        }
        try (PreparedStatement ps = conn.prepareStatement(sql)) {
            for (T t : objects) {
                processor.build(ps, t);
                ps.addBatch();
            }
            return ps.executeBatch();
        } finally {
            if (ac) conn.setAutoCommit(ac);
        }
    }

    public int[] batchUpdate(Connection conn, String sql, BatchParamProcessor<T> processor, T[] objects)
            throws SQLException {
        boolean ac;
        if (ac = conn.getAutoCommit()) {
            conn.setAutoCommit(!ac);
        }
        try (PreparedStatement ps = conn.prepareStatement(sql)) {
            for (T t : objects) {
                processor.build(ps, t);
                ps.addBatch();
            }
            return ps.executeBatch();
        } finally {
            if (ac) conn.setAutoCommit(ac);
        }
    }

    public int[] batchUpdateWithTransaction(Connection conn, String sql, ParamProcessor processor)
            throws SQLException {
        boolean ac;
        if (ac = conn.getAutoCommit()) {
            conn.setAutoCommit(!ac);
        }
        try (PreparedStatement ps = conn.prepareStatement(sql)) {
            processor.build(ps);
            int[] r = ps.executeBatch();
            conn.commit();
            return r;
        } catch (SQLException e) {
            conn.rollback();
            throw e;
        } finally {
            // reset auto commit
            if (ac) conn.setAutoCommit(ac);
        }
    }

    public int[] batchUpdateWithTransaction(Connection conn, String sql, BatchParamProcessor<T> processor, List<T> objects)
            throws SQLException {
        boolean ac;
        if (ac = conn.getAutoCommit()) {
            conn.setAutoCommit(!ac);
        }
        try (PreparedStatement ps = conn.prepareStatement(sql)) {
            for (T t : objects) {
                processor.build(ps, t);
                ps.addBatch();
            }
            int[] r = ps.executeBatch();
            conn.commit();
            return r;
        } catch (SQLException e) {
            conn.rollback();
            throw e;
        } finally {
            if (ac) conn.setAutoCommit(ac);
        }
    }

    public int[] batchUpdateWithTransaction(Connection conn, String sql, BatchParamProcessor<T> processor, T[] objects)
            throws SQLException {
        boolean ac;
        if (ac = conn.getAutoCommit()) {
            conn.setAutoCommit(!ac);
        }
        try (PreparedStatement ps = conn.prepareStatement(sql)) {
            for (T t : objects) {
                processor.build(ps, t);
                ps.addBatch();
            }
            int[] r = ps.executeBatch();
            conn.commit();
            return r;
        } catch (SQLException e) {
            conn.rollback();
            throw e;
        } finally {
            if (ac) conn.setAutoCommit(ac);
        }
    }

}