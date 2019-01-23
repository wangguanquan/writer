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

    private String type; // Type name of database

    /**
     * database type: mysql oracle sqlite
     * @return the database type name
     */
    public String getType() {
        if (type != null) {
            return type;
        }
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
            this.type = type;
            return type;
        }
        return null;
    }

    public boolean isMysql() {
        return "mysql".equals(getType());
    }

    public boolean isSQLite() {
        return "sqlite".equals(getType());
    }

    public boolean isOracle() {
        return "oracle".equals(getType());
    }

    public boolean isDB2() {
        return "db2".equals(getType());
    }

    public boolean isSqlserver() {
        return "sqlserver".equals(getType());
    }

    public boolean isInformix() {
        return "informix-sqli".equals(getType());
    }

    public boolean isSybase() {
        return "sybase".equals(getType());
    }

    public boolean isPostgreSQL() {
        return "postgresql".equals(getType());
    }

    public boolean isTeradata() {
        return "teradata".equals(getType());
    }

    public boolean isNetezza() {
        return "netezza".equals(getType());
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
