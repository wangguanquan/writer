package cn.colvin.setting;

import cn.colvin.other.MyDataSource;
import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.sql.Connection;
import java.sql.SQLException;
import java.util.HashMap;
import java.util.Map;

/**
 * Create by guanquan.wang at 2018-08-29 16:35
 */
@Service
public class SettingService {
    private Logger logger = LogManager.getLogger(getClass());
    @Autowired
    private MyDataSource dataSource;
    @Autowired
    private cn.colvin.other.SQL<Void> SQL;

    public void setting(Map<String, String> data, int uid) {
        try (Connection con = dataSource.getConnection()) {
            data.forEach((k, v) -> {
                logger.info("{} Change setting {} to {}", uid, k, v);
                try {
                    int n = SQL.update(con, "update setting set value = ? where uid = ? and `key` = ?", ps -> {
                        ps.setString(1, v);
                        ps.setInt(2, uid);
                        ps.setString(3, k);
                    });
                    if (n == 0) {
                        SQL.insert(con, "insert into setting(uid, `key`, `value`) values(?, ?, ?)", ps -> {
                            ps.setInt(1, uid);
                            ps.setString(2, k);
                            ps.setString(3, v);
                        });
                    }
                } catch (SQLException e) {
                    logger.error("", e);
                }
            });
        } catch (SQLException e) {
            logger.error("", e);
        }
    }

    public Map<String, String> getSetting(int uid) {
        Map<String, String> modes = new HashMap<>();
        try (Connection con = dataSource.getConnection()) {
            SQL.selectList(con, "select `key`, `value` from setting where uid = ?", rs -> {
                modes.put(rs.getString(1), rs.getString(2));
                return null;
            }, ps -> ps.setInt(1, uid));
        } catch (SQLException e) {
            logger.error("", e);
        }
        return modes;
    }
}
