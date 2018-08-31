package cn.colvin.author.note;

/**
 * Create by guanquan.wang at 2018-08-23 16:36
 */
public class Note {
    private int id;
    private String slug;
    private boolean shared;
    private int notebook_id;
    private int seq_in_nb;
    private int note_type;
    private int autosave_control;
    private String title;
    private long content_updated_at;
    private long last_compiled_at;
    private boolean paid;
    private boolean in_book;
    private boolean at_bottom;

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getSlug() {
        return slug;
    }

    public void setSlug(String slug) {
        this.slug = slug;
    }

    public boolean isShared() {
        return shared;
    }

    public void setShared(boolean shared) {
        this.shared = shared;
    }

    public int getNotebook_id() {
        return notebook_id;
    }

    public void setNotebook_id(int notebook_id) {
        this.notebook_id = notebook_id;
    }

    public int getSeq_in_nb() {
        return seq_in_nb;
    }

    public void setSeq_in_nb(int seq_in_nb) {
        this.seq_in_nb = seq_in_nb;
    }

    public int getNote_type() {
        return note_type;
    }

    public void setNote_type(int note_type) {
        this.note_type = note_type;
    }

    public int getAutosave_control() {
        return autosave_control;
    }

    public void setAutosave_control(int autosave_control) {
        this.autosave_control = autosave_control;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
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

    public boolean isPaid() {
        return paid;
    }

    public void setPaid(boolean paid) {
        this.paid = paid;
    }

    public boolean isIn_book() {
        return in_book;
    }

    public void setIn_book(boolean in_book) {
        this.in_book = in_book;
    }

    public boolean isAt_bottom() {
        return at_bottom;
    }

    public void setAt_bottom(boolean at_bottom) {
        this.at_bottom = at_bottom;
    }
}
