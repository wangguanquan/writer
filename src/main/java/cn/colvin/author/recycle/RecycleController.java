package cn.colvin.author.recycle;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
import java.util.Map;

/**
 * Create by guanquan.wang at 2018-08-27 16:12
 */
@RestController
@RequestMapping("/author/recycle")
public class RecycleController {
    @Autowired
    RecycleService service;

    /**
     * 拉取已删除的文章
     * @return
     */
    @RequestMapping("/notes")
    public List<RecycleNote> notes() {
        return service.notes();
    }

    /**
     * 恢复日记
     * @param id
     * @return
     */
    @RequestMapping("/notes/{id}/restore")
    public Map<String, Integer> restore(@PathVariable int id) {
        return service.restore(id);
    }

    /**
     * 彻底删除文章
     * @param id
     */
    @DeleteMapping("/notes/{id}")
    public void deleteNote(@PathVariable int id) {
        service.deleteNote(id);
    }

}
