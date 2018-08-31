package cn.colvin.author;

/**
 * Create by guanquan.wang at 2018-08-23 15:14
 */
public class User {
    private int id;
    private String nickname;
    private String slug;
    private String avatar;
    private String preferred_note_type;
    private boolean can_publish_paid_note;
    private String paid_note_agreement_agreed_at;
    private boolean can_upload_audio;
    private boolean can_update_cover_images;

    public int getId() {
        return id;
    }

    public String getNickname() {
        return nickname;
    }

    public String getSlug() {
        return slug;
    }

    public String getAvatar() {
        return avatar;
    }

    public String getPreferred_note_type() {
        return preferred_note_type;
    }

    public boolean isCan_publish_paid_note() {
        return can_publish_paid_note;
    }

    public String getPaid_note_agreement_agreed_at() {
        return paid_note_agreement_agreed_at;
    }

    public boolean isCan_upload_audio() {
        return can_upload_audio;
    }

    public void setId(int id) {
        this.id = id;
    }

    public void setNickname(String nickname) {
        this.nickname = nickname;
    }

    public void setSlug(String slug) {
        this.slug = slug;
    }

    public void setAvatar(String avatar) {
        this.avatar = avatar;
    }

    public void setPreferred_note_type(String preferred_note_type) {
        this.preferred_note_type = preferred_note_type;
    }

    public void setCan_publish_paid_note(boolean can_publish_paid_note) {
        this.can_publish_paid_note = can_publish_paid_note;
    }

    public void setPaid_note_agreement_agreed_at(String paid_note_agreement_agreed_at) {
        this.paid_note_agreement_agreed_at = paid_note_agreement_agreed_at;
    }

    public void setCan_upload_audio(boolean can_upload_audio) {
        this.can_upload_audio = can_upload_audio;
    }

    public void setCan_update_cover_images(boolean can_update_cover_images) {
        this.can_update_cover_images = can_update_cover_images;
    }

    public boolean isCan_update_cover_images() {
        return can_update_cover_images;
    }
}
