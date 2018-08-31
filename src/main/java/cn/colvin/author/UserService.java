package cn.colvin.author;

import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.springframework.stereotype.Service;

/**
 * Create by guanquan.wang at 2018-08-23 14:44
 */
@Service
public class UserService {
    Logger logger = LogManager.getLogger(UserService.class);

    public User getByToken(String token) {
        // Do nothing
        return null;
    }

}
