package cn.colvin.author.notebooks;

/**
 * Create by guanquan.wang at 2018-08-23 15:14
 */
public class Notebook {
    private int id;
    private String name;
    private int seq;
    public Notebook() {}

    public Notebook(int id, String name, int seq) {
        this.id = id;
        this.name = name;
        this.seq = seq;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public int getSeq() {
        return seq;
    }

    public void setSeq(int seq) {
        this.seq = seq;
    }
}
