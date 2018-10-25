package cn.colvin.other;

import org.apache.commons.dbcp2.BasicDataSource;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;

import java.sql.Connection;
import java.sql.SQLException;

@Component
public class MyDataSource {
    private static BasicDataSource dataSource = null;
    @Value("${spring.dataSource.username}")
    private String username;
    @Value("${spring.dataSource.password}")
    private String password;
    @Value("${spring.dataSource.url}")
    private String url;
    @Value("${spring.dataSource.driverClassName}")
    private String driverClassName;

    /**
     * database type: mysql oracle sqlite
     * @return
     */
    public String getType() {
        if (url != null) {
            int index = url.indexOf(':'), next = index > 0 ? url.indexOf(':', ++index) : -1;
            if (next < 0) return null;
            String type = url.substring(index, next);
            // special case type
            if ("microsoft".equals(type)) {
                index = ++next;
                next = url.indexOf(':', index);
                if (next > index) {
                    type = url.substring(next, index);
                }
            }
            return type;
        }
        return null;
    }

    public BasicDataSource getDataSource() {
        if (dataSource == null) {
            createDataSource();
        }
        return dataSource;
    }

    private synchronized void createDataSource() {
        if (dataSource == null) {
            dataSource = new BasicDataSource();
            dataSource.setDriverClassName(driverClassName);
            dataSource.setUsername(username);
            dataSource.setPassword(password);
            dataSource.setUrl(url);
            dataSource.setDefaultAutoCommit(true);
            dataSource.setInitialSize(2);
            dataSource.setMinIdle(2);
            dataSource.setMaxIdle(10);
            dataSource.setValidationQuery("SELECT 1");
        }
    }

    public Connection getConnection() throws SQLException {
        return getDataSource().getConnection();
    }

}
