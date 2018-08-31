package cn.colvin.other.processor;


import java.sql.PreparedStatement;
import java.sql.SQLException;

/**
 *
 * @author wanggq
 */
@FunctionalInterface
public interface BatchParamProcessor<T> {

    void build(PreparedStatement ps, T t) throws SQLException;
}