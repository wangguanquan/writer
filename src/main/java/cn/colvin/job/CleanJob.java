package cn.colvin.job;

import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Component;


/**
 * 清除回收站
 * Create by guanquan.wang at 2018-11-19 15:48
 */
@Component
public class CleanJob {
    private Logger logger = LogManager.getLogger(getClass());
    @Autowired
    private CleanService service;

    /**
     * 清除回收站的文章
     * 每小时执行
     */
//    @Scheduled(fixedRate = 60000L, initialDelay = 60000L)
    @Scheduled(fixedRate = 3600000L)
    public void cleanLogs() {
        logger.info("clean note...");
        long now = System.currentTimeMillis() / 1000;
        service.clearRecycle(now);
        service.clearLogs(now);
    }

    /**
     * 每天定时清除resources资源
     * 零晨3点执行
     */
    @Scheduled(cron = "0 0 3 * * *")
//    @Scheduled(fixedRate = 60000L, initialDelay = 60000L)
    public void cleanResources() {
        logger.info("clean resources...");
        // clear temp down files
        service.clearDownTempZip();
    }
}
