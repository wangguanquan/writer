package cn.colvin.other.processor;


import java.sql.ResultSet;
import java.sql.SQLException;

@FunctionalInterface
public interface BeanResultSetProcessor<T> {

    T process(ResultSet resultSet) throws SQLException;
}