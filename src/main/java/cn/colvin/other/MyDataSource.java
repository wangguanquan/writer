package cn.colvin.other;

import org.apache.commons.dbcp2.BasicDataSource;
import org.springframework.boot.context.properties.ConfigurationProperties;
import org.springframework.stereotype.Component;

import java.sql.Connection;
import java.sql.SQLException;

@Component
@ConfigurationProperties(prefix = "spring.dataSource")
public class MyDataSource {
    private static BasicDataSource dataSource = null;
    private String username;
    private String password;
    private String url;
    private String driverClassName;
    /**
     * @return the username
     */
    public String getUsername() {
        return username;
    }
    /**
     * @param username the username to set
     */
    public void setUsername(String username) {
        this.username = username;
    }
    /**
     * @return the password
     */
    public String getPassword() {
        return password;
    }
    /**
     * @param password the password to set
     */
    public void setPassword(String password) {
        this.password = password;
    }
    /**
     * @return the url
     */
    public String getUrl() {
        return url;
    }
    /**
     * @param url the url to set
     */
    public void setUrl(String url) {
        this.url = url;
    }
    /**
     * @return the driverClassName
     */
    public String getDriverClassName() {
        return driverClassName;
    }
    /**
     * @param driverClassName the driverClassName to set
     */
    public void setDriverClassName(String driverClassName) {
        this.driverClassName = driverClassName;
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
