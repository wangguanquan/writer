package cn.colvin.download;

import cn.colvin.author.note.Note;
import cn.colvin.author.note.NoteService;
import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.core.io.InputStreamResource;
import org.springframework.http.*;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.io.IOException;
import java.net.URLEncoder;
import java.nio.charset.StandardCharsets;
import java.nio.file.Files;
import java.nio.file.Paths;


/**
 * Create by guanquan.wang at 2018-08-27 10:28
 */
@RestController
@RequestMapping("/download")
public class DownloadController {
    private Logger logger = LogManager.getLogger(getClass());
    @Value("${spring.note.path}")
    private String notePath;

    @Autowired
    NoteService service;

    @RequestMapping("/{slug}")
    public ResponseEntity<InputStreamResource> download(@PathVariable String slug) {
        Note note = service.getBySlug(slug);
        if (note == null) {
            logger.warn("Slug [" + slug + "] not exists.");
            return null;
        }

        HttpHeaders header = new HttpHeaders();
        header.setContentType(MediaType.APPLICATION_OCTET_STREAM);
        header.set(HttpHeaders.ACCEPT_CHARSET, "UTF-8");
        try {
            String fileName = URLEncoder.encode(note.getTitle() + ".zip", StandardCharsets.UTF_8.displayName());
            header.set(HttpHeaders.CONTENT_DISPOSITION, "attachment; filename=\"" + fileName + "\"; filename*=utf-8''" + fileName);
            InputStreamResource isr = new InputStreamResource(Files.newInputStream(Paths.get(notePath, String.valueOf(note.getId())).resolve(slug + ".zip")));
//            return new ResponseEntity<>(isr, header, HttpStatus.OK);
            return ResponseEntity.ok().headers(header).body(isr);
        } catch (IOException e) {
            logger.error("", e);
        }
        return null;
    }
}
