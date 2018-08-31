package cn.colvin.author.note;

/**
 * Create by guanquan.wang at 2018-08-24 14:04
 */
public class NoteLogGen {
    private int app;
    private int id;
    private int note_log_type;
    private int note_type;
    private long updated_at;

    public int getApp() {
        return app;
    }

    public void setApp(int app) {
        this.app = app;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public int getNote_log_type() {
        return note_log_type;
    }

    public void setNote_log_type(int note_log_type) {
        this.note_log_type = note_log_type;
    }

    public int getNote_type() {
        return note_type;
    }

    public void setNote_type(int note_type) {
        this.note_type = note_type;
    }

    public long getUpdated_at() {
        return updated_at;
    }

    public void setUpdated_at(long updated_at) {
        this.updated_at = updated_at;
    }
}
