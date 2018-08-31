package cn.colvin.author.notebooks;

import cn.colvin.author.note.Note;
import cn.colvin.author.note.NoteService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

/**
 * Create by guanquan.wang at 2018-08-23 15:25
 */
@RestController
@RequestMapping("author/notebooks")
public class NotebooksController {
    @Autowired
    NotebooksService service;
    @Autowired
    NoteService noteService;

    /**
     * 获取文集
     * @return
     */
    @RequestMapping
    public List<Notebook> get() {
        return service.get();
    }

    /**
     * 创建文集
     * @param notebook
     * @return
     */
    @PostMapping
    public Notebook create(@RequestBody Notebook notebook) {
        return service.create(notebook);
    }

    /**
     * 编辑文集
     * @param notebook
     */
    @PutMapping("/{id}")
    public void edit(@PathVariable int id, @RequestBody Notebook notebook) {
        // TODO parameter error.
        notebook.setId(id);
        service.edit(notebook);
    }

    /**
     * 修改顺序
     * @param seq
     */
    @PutMapping("/sequence")
    public void sequence(@RequestBody Seq seq) {
        service.sequence(seq.ids);
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
        service.destroy(id);
    }

    public static class Seq {
        private int[] ids;

        public void setIds(int[] ids) {
            this.ids = ids;
        }
    }
}
