package cn.colvin.upload;

import cn.colvin.utils.FileUtil;
import cn.colvin.utils.StringUtil;
import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.UUID;


/**
 * Create by guanquan.wang at 2018-08-24 16:23
 */
@Service
public class UploadService {
    private Logger logger = LogManager.getLogger(getClass());
    @Value("${spring.image.path}")
    private String path;
    private String imagePath = "./images/";
//    @Autowired
//    private NoteService service;

    /**
     * 为上传做准备
     * @param filename
     * @return
     */
    public ImageToken token(String filename) {
        ImageToken it = new ImageToken();
        it.setKey(UUID.randomUUID() + getSuffix(filename));
        it.setToken("0.0.1");
        return it;
    }

    /**
     * 上传
     * @param key the file name
     * @param file the file binary data
     * @param noteId the note id
     * @return
     */
    public UploadResult upload(String key, String token, String noteId, MultipartFile file) throws IOException {
        Path outPath = Paths.get(path, key);
        logger.debug("上传至: {}", outPath);
        // TODO check token
        FileUtil.cp(file.getInputStream(), outPath);

        UploadResult ur = new UploadResult();
        ur.setFormat(file.getContentType());
        ur.setUrl(imagePath + key);
        // TODO get image width and height
        return ur;
    }

    public Path getRealPath(String url) {
        if (url.startsWith(imagePath)) {
            return Paths.get(path, url.substring(imagePath.length()));
        } else if (url.startsWith("static/")) {
            return Paths.get(".");
        }
        return null;
    }

    public String getSuffix(String filename) {
        String suffix = null;
        int n;
        if ((n = filename.lastIndexOf('.')) > 0) {
            suffix = filename.substring(n);
        }
        return suffix != null ? suffix : ".png";
    }
}
