package cn.colvin.author.note;

import cn.colvin.upload.UploadService;
import cn.colvin.utils.FileUtil;
import cn.colvin.utils.StringUtil;
import cn.colvin.utils.ZipUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.context.properties.ConfigurationProperties;
import org.springframework.web.bind.annotation.*;

import java.io.ByteArrayInputStream;
import java.io.IOException;
import java.nio.charset.StandardCharsets;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.time.LocalDateTime;
import java.time.ZoneOffset;
import java.time.format.DateTimeFormatter;
import java.time.format.DateTimeFormatterBuilder;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.regex.Matcher;
import java.util.regex.Pattern;

import static cn.colvin.enums.LogType.AUTO_SAVE;
import static cn.colvin.enums.LogType.PUBLISH;

/**
 * Create by guanquan.wang at 2018-08-23 16:37
 */
@ConfigurationProperties(prefix = "spring.note")
@RestController
@RequestMapping("/author/notes")
public class NoteController {
    @Autowired
    NoteService service;
    @Autowired
    UploadService uploadService;
    String notePath;

    public void setPath(String path) {
        if (path == null || path.isEmpty()) {
            path = "note";
        }

        Path temp = Paths.get(path);
        if (!Files.exists(temp)) {
            try {
                FileUtil.mkdir(temp);
            } catch (IOException e) {
                e.printStackTrace();
            }
        }
        this.notePath = path;
    }

    static DateTimeFormatter LOCAL_ISO_DATETIME;
    static {
        LOCAL_ISO_DATETIME = new DateTimeFormatterBuilder()
                .append(DateTimeFormatter.ISO_DATE)
                .appendLiteral(' ')
                .append(DateTimeFormatter.ISO_TIME)
                .toFormatter();
    }
    /**
     * 新建文章
     * @param note
     * @return
     */
    @PostMapping
    public Note create(@RequestBody Note note) {
        return service.create(note);
    }

    /**
     * 获取内容
     * @param id
     * @return
     */
    @RequestMapping("/{id}/content")
    public Map<String, String> content(@PathVariable int id) {
        Map<String, String> map = new HashMap<>();
        map.put("content", service.content(id));
        return map;
    }

    /**
     * 自动保存
     * @param id
     * @param nc
     */
    @RequestMapping("/{id}")
    public NoteLog save(@PathVariable int id, @RequestBody NoteContent nc) {
        nc.setId(id);
        return service.save(nc, AUTO_SAVE);
    }

    /**
     * 获取历史版本
     * @param id
     * @return
     */
    @RequestMapping("/{id}/note_logs")
    public List<NoteLogGen> listLogsByNid(@PathVariable int id) {
        return service.listLogsByNid(id);
    }

    @RequestMapping("/{id}/soft_destroy")
    public Map<String, ?> destroy(@PathVariable int id) {
        return service.destroy(id);
    }

    Pattern pat = Pattern.compile("\\[(.*)\\]\\(([\\w\\./-]+)\\)");
    /**
     * 导出
     * @param id
     * @param body
     */
    @RequestMapping("/{id}/publicize")
    public void publicize(@PathVariable int id, @RequestBody String body) {
        try {
            Note note = service.getById(id);
            if (note == null) {
                // note not exists
                return;
            }
            Path path = Files.createTempDirectory("writer+");
            System.out.println(path);
            ClassLoader loader = getClass().getClassLoader();
            // copy style
            FileUtil.cp(loader.getResourceAsStream("static/static/css/entry.css"), Files.createFile(path.resolve("entry.css")));
            String content = service.content(id);
            // copy markdown content
            FileUtil.cp(new ByteArrayInputStream(content.getBytes(StandardCharsets.UTF_8)), Files.createFile(path.resolve("README.md")));
            // copy images
            Matcher matcher = pat.matcher(content);
            boolean mkdir = true;
            Path imagePath = null;
            while (matcher.find()) {
                String image = matcher.group(2);
                Path realPath = uploadService.getRealPath(image);
                // No copy when null path or http/https path
                if (realPath == null) continue;
                if (mkdir) {
                    mkdir = !mkdir;
                    imagePath = FileUtil.mkdir(path.resolve("images"));
                }
                int n;
                String s = image.substring((n = image.lastIndexOf('/')) > 0 ? n + 1 : 0);
                FileUtil.cp(realPath.toFile(), imagePath.resolve(s));
            }
            // write html
            String template = StringUtil.readString(loader.getResourceAsStream("template/index.html"));
            template = template.replace("${title}", note.getTitle())
                    .replace("${body}", body)
                    .replace("${date}", LocalDateTime.ofEpochSecond(note.getContent_updated_at(), 0, ZoneOffset.ofHours(+8)).format(LOCAL_ISO_DATETIME));
            FileUtil.cp(new ByteArrayInputStream(template.getBytes(StandardCharsets.UTF_8)), Files.createFile(path.resolve(note.getTitle() + ".html")));
            // zip to download
            Path outPath = Paths.get(notePath).resolve(note.getSlug());
            ZipUtil.zip(outPath, false, path);
            // delete temp files
            FileUtil.rm_rf(path);

            // 写日志
            NoteContent nc = new NoteContent();
            nc.setId(id);
            nc.setTitle(note.getTitle());
            nc.setContent(content);
            service.save(nc, PUBLISH);
        } catch (IOException e) {
            e.printStackTrace();
        }
    }

    /**
     * 移动文章到某个文集
     * @param id
     * @param body
     */
    @RequestMapping("/{id}/move")
    public void move(@PathVariable int id, @RequestBody Map<String, Integer> body) {
        service.move(id, body.get("notebook_id"));
    }

    @PutMapping("/sequence")
    public void sequence(@RequestBody Sqe sqe) {
        service.sequence(sqe.sequence);
    }

    public static class Sqe {
        private int[] sequence;

        public void setSequence(int[] sequence) {
            this.sequence = sequence;
        }
    }
}
