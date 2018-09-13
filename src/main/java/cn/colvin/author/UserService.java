package cn.colvin.author;

import cn.colvin.utils.CookieUtil;
import cn.colvin.utils.StringUtil;
import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.springframework.stereotype.Service;
import org.springframework.web.context.request.RequestContextHolder;
import org.springframework.web.context.request.ServletRequestAttributes;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

/**
 * Create by guanquan.wang at 2018-08-23 14:44
 */
@Service
public class UserService {
    Logger logger = LogManager.getLogger(UserService.class);
    static final String UID = "_uid_";

    public User getByToken(String token) {
        // Do nothing
        return null;
    }

    public int getUid() {
        HttpServletRequest request = ((ServletRequestAttributes) RequestContextHolder
                .getRequestAttributes()).getRequest();
        // 指定id测试用
        String uid = request.getParameter("uid");
        if (!StringUtil.isEmpty(uid)) {
            return StringUtil.toInt(uid);
        }
        uid = CookieUtil.getCookieValue(request, UID);
        if (StringUtil.isEmpty(uid)) {
            String ip = request.getHeader("X-Forwarded-For");
            if (StringUtil.isEmpty(ip) || "unknown".equalsIgnoreCase(ip)) {
                ip = request.getHeader("X-Real-IP");
            }
            if (StringUtil.isEmpty(ip) || "unknown".equalsIgnoreCase(ip)) {
                ip = request.getRemoteAddr();
            }
            int n = StringUtil.ip2Int(ip);
            HttpServletResponse response = ((ServletRequestAttributes) RequestContextHolder
                    .getRequestAttributes()).getResponse();
            CookieUtil.addCookie(response, UID, String.valueOf(n), 3600, "*");
            return n;
        } else {
            return StringUtil.toInt(uid);
        }
    }
}
