package cn.colvin.author.note;

/**
 * Create by guanquan.wang at 2018-08-24 11:26
 */
public class NoteLog {
    private int id;
    private String content_size_status;
    private long content_updated_at;
    private long last_compiled_at;

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getContent_size_status() {
        return content_size_status;
    }

    public void setContent_size_status(String content_size_status) {
        this.content_size_status = content_size_status;
    }

    public long getContent_updated_at() {
        return content_updated_at;
    }

    public void setContent_updated_at(long content_updated_at) {
        this.content_updated_at = content_updated_at;
    }

    public long getLast_compiled_at() {
        return last_compiled_at;
    }

    public void setLast_compiled_at(long last_compiled_at) {
        this.last_compiled_at = last_compiled_at;
    }
}
