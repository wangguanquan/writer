package cn.colvin.other.processor;


import java.sql.ResultSet;
import java.sql.SQLException;

@FunctionalInterface
public interface ResultSetProcessor {

    void process(ResultSet resultSet) throws SQLException;
}