package cn.colvin.upload;

/**
 * Create by guanquan.wang at 2018-08-24 16:55
 */
public class UploadResult {
    private String format;
    private int width;
    private int height;
    private String url;

    public String getFormat() {
        return format;
    }

    public void setFormat(String format) {
        this.format = format;
    }

    public int getWidth() {
        return width;
    }

    public void setWidth(int width) {
        this.width = width;
    }

    public int getHeight() {
        return height;
    }

    public void setHeight(int height) {
        this.height = height;
    }

    public String getUrl() {
        return url;
    }

    public void setUrl(String url) {
        this.url = url;
    }
}
