package cn.colvin.upload;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import javax.servlet.http.HttpServletRequest;
import java.io.IOException;
import java.util.Map;

/**
 * Create by guanquan.wang at 2018-08-24 15:32
 */
@RestController
@RequestMapping("/upload_images")
public class UploadController {
    @Autowired
    UploadService service;

    @RequestMapping("/token.json")
    public ImageToken token(@RequestParam String filename) {
        return service.token(filename);
    }

    /**
     * 上传本地图片面
     * @param file
     * @param request
     * @return
     * @throws IOException
     */
    @PostMapping
    public UploadResult upload(MultipartFile file, HttpServletRequest request) throws IOException {
        String token = request.getParameter("token"), key = request.getParameter("key");
        return service.upload(key, token, file);
    }

    /**
     * 上传网络图片面
     * <p>do nothing. any import network url</p>
     * @param data
     * @return
     */
    @PostMapping("/fetch")
    public UploadResult fatch(@RequestBody Map<String, String> data) {
        String url = data.get("url");
        UploadResult result = new UploadResult();
        result.setFormat(url.substring(url.lastIndexOf('.') + 1));
        result.setUrl(url);
        return result;
    }
}
