package cn.colvin.author.notebooks;

import cn.colvin.author.UserService;
import cn.colvin.author.note.Note;
import cn.colvin.author.note.NoteService;
import cn.colvin.utils.StringUtil;
import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.HttpRequestHandler;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletRequest;
import java.util.List;

/**
 * Create by guanquan.wang at 2018-08-23 15:25
 */
@RestController
@RequestMapping("author/notebooks")
public class NotebooksController {
    Logger logger = LogManager.getLogger(getClass());
    @Autowired
    NotebooksService service;
    @Autowired
    NoteService noteService;
    @Autowired
    UserService userService;

    /**
     * 获取文集
     * @return
     */
    @RequestMapping
    public List<Notebook> get() {
        return service.get(userService.getUid());
    }

    /**
     * 创建文集
     * @param notebook
     * @return
     */
    @PostMapping
    public Notebook create(@RequestBody Notebook notebook) {
        return service.create(notebook, userService.getUid());
    }

    /**
     * 编辑文集
     * @param notebook
     */
    @PutMapping("/{id}")
    public void edit(@PathVariable int id, @RequestBody Notebook notebook) {
        if (id == 1) {
            logger.debug("默认文集无法删除");
            return;
        }
        notebook.setId(id);
        service.edit(notebook, userService.getUid());
    }

    /**
     * 修改顺序
     * @param seq
     */
    @PutMapping("/sequence")
    public void sequence(@RequestBody Seq seq) {
        service.sequence(seq.sequence);
    }

    /**
     * 获取某个文集下的文章
     * @param id
     * @return
     */
    @RequestMapping("/{id}/notes")
    public List<Note> listNotes(@PathVariable int id) {
        return noteService.listNotesByNotebookId(id);
    }

    /**
     * 删除文件
     * @param id
     */
    @RequestMapping("/{id}/soft_destroy")
    public void destroy(@PathVariable int id) {
        if (id == 1) {
            logger.debug("默认文集无法删除");
            return;
        }
        service.destroy(id, userService.getUid());
    }

    public static class Seq {
        private int[] sequence;

        public void setSequence(int[] sequence) {
            this.sequence = sequence;
        }
    }
}
