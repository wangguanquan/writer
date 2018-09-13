package cn.colvin.author;

import cn.colvin.setting.SettingService;
import cn.colvin.utils.CookieUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.util.Map;

/**
 * Create by guanquan.wang at 2018-08-23 14:24
 */
@RestController
@RequestMapping("/author")
public class UserController {

    @Autowired
    UserService service;
    @Autowired
    SettingService settingService;

    /**
     * 获取当前用户信息（多用户时可用）
     * @return
     */
    @RequestMapping("current_user")
    public User getByToken(HttpServletResponse response) {
        // 导入用户设置
        Map<String, String> setting = settingService.getSetting(service.getUid());
        setting.forEach((k, v) -> CookieUtil.addCookie(response, k, v, "*"));
        return service.getByToken(null);
    }

    @RequestMapping("/cors_t")
    public void corsTest(HttpServletRequest request) {
        Cookie[] cookies = request.getCookies();
        for (Cookie c : cookies) {
            System.out.println(c.getName() + ": " + c.getValue());
        }
    }

}
