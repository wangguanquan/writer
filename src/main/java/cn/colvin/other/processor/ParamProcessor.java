package cn.colvin.other.processor;


import java.sql.PreparedStatement;
import java.sql.SQLException;

@FunctionalInterface
public interface ParamProcessor {

    void build(PreparedStatement ps) throws SQLException;
}