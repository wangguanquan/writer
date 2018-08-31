package cn.colvin.enums;

/**
 * Create by guanquan.wang at 2018-08-24 14:53
 */
public enum LogType {
    AUTO_SAVE(1) // 自动保存
    , PUBLISH(2) // 公开发布
    , X(3)
    , RESTORE(4); // 回复

    int t;
    LogType(int t) {
        this.t = t;
    }

    public int type() {
        return t;
    }
}
