package cn.colvin.setting;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.HashMap;
import java.util.Map;

/**
 * Create by guanquan.wang at 2018-08-29 16:32
 */
@RestController
@RequestMapping
public class SettingController {
    @Autowired
    SettingService service;
    /**
     * 模式（day/night）
     * @param data
     * @return
     */
    @PutMapping("/settings/view_mode")
    public Map<String, String> changeMode(@RequestBody Map<String, String> data) {
        // read_mode
        // default_font
        // locale
        service.setting(data);
        Map<String, String> map = new HashMap<>();
        map.put("message", "ok");
        return map;
    }

    /**
     * 编辑模式(markdown/"plain")
     * @param data
     */
    @PutMapping("/author/settings")
    public void changeEditor(@RequestBody Map<String, String> data) {
        service.setting(data);
    }
}
