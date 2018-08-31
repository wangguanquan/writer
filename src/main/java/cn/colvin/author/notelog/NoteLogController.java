package cn.colvin.author.notelog;

import cn.colvin.author.note.NoteLog;
import cn.colvin.utils.StringUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.Map;

/**
 * Create by guanquan.wang at 2018-08-24 14:22
 */
@RestController
@RequestMapping("/author/note_logs")
public class NoteLogController {
    @Autowired
    NoteLogService service;

    /**
     * 根据历史记录ID获取信息
     * @param id
     * @param note_id
     * @return
     */
    @RequestMapping("/{id}")
    public Map<String, String> getHistory(@PathVariable int id, @RequestParam("note_id") int note_id) {
        return service.getHistory(id, note_id);
    }

    /**
     * 恢复文章
     * @param id
     * @param data
     */
    @PostMapping("/{id}/restore")
    public void restore(@PathVariable int id, @RequestBody Map<String, String> data) {
        service.restore(id, StringUtil.toInt(data.get("note_id")));
    }
}
