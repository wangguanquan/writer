package cn.colvin.author.recycle;

/**
 * Create by guanquan.wang at 2018-08-27 16:58
 */
public class RecycleNote {
    private int id;
    private String title;
    private long deleted_at;
    private int note_type;

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public long getDeleted_at() {
        return deleted_at;
    }

    public void setDeleted_at(long deleted_at) {
        this.deleted_at = deleted_at;
    }

    public int getNote_type() {
        return note_type;
    }

    public void setNote_type(int note_type) {
        this.note_type = note_type;
    }
}
