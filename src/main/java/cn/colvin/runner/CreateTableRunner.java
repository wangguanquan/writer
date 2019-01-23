package cn.colvin.runner;

import cn.colvin.Const;
import cn.colvin.other.MyDataSource;
import cn.colvin.other.SQL;
import cn.colvin.utils.FileUtil;
import cn.colvin.utils.StringUtil;
import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.boot.ApplicationArguments;
import org.springframework.boot.ApplicationRunner;
import org.springframework.stereotype.Component;

import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.sql.Connection;
import java.sql.SQLException;
import java.util.Arrays;
import java.util.UUID;

/**
 * 启动程序的初始化操作
 * java -jar writer.jar  // 默认
 * java -jar writer.jar --clean tablename // 清空指定表数据
 * java -jar writer.jar --clean _ // 清空所有表数据
 * Create by guanquan.wang at 2018-08-28 16:16
 */
@Component
public class CreateTableRunner implements ApplicationRunner {
    private Logger logger = LogManager.getLogger(getClass());
    @Autowired
    private MyDataSource dataSource;
    @Value("${spring.note.path}")
    private String notePath;
    @Value("${spring.image.path}")
    private String imagePath;
    @Value("${spring.note.save-with}")
    private String saveWith;
    private boolean saveWithFile = true;

    private void makePath() {
        if (notePath == null || notePath.isEmpty()) {
            notePath = "notes/";
        }

        Path temp = Paths.get(notePath);
        if (!Files.exists(temp)) {
            try {
                FileUtil.mkdir(temp);
            } catch (IOException e) {
                logger.error("Can't create notes path at " + temp, e);
                System.exit(-1);
            }
        }

        if (imagePath == null || imagePath.isEmpty()) {
            imagePath = "images/";
        }

        temp = Paths.get(imagePath);
        if (!Files.exists(temp)) {
            try {
                FileUtil.mkdir(temp);
            } catch (IOException e) {
                logger.error("Can't create images path at " + temp, e);
                System.exit(-2);
            }
        }

        Path index = Paths.get("./", Const.Suffix.index);
        if (!Files.exists(index)) {
            try {
                FileUtil.mkdir(index);
            } catch (IOException e) {
                logger.error("Can't create index dir at " + index, e);
                System.exit(-3);
            }
        }
    }

    private cn.colvin.other.SQL<Void> SQL = new SQL<>();
    @Override
    public void run(ApplicationArguments applicationArguments) throws Exception {
        this.saveWithFile = "file".equalsIgnoreCase(saveWith);
        makePath();

        String[] args = applicationArguments.getSourceArgs();
        logger.info(Arrays.toString(args));

        try (Connection con = dataSource.getConnection()) {
            con.setAutoCommit(false);
            // clean table
            int n = StringUtil.indexOf(args, "--clean");
            if (n >= 0 && n < args.length - 1) {
                clean(con, args[n + 1]);
            }

            // create table if not exists
            create(con);

            // insert default info
            init(con);
            con.commit();
            con.setAutoCommit(true);
        }
    }

    /**
     * 清除表操作
     * @param con the sql connection
     * @param tableName the table name
     * @throws SQLException if error
     */
    private void clean(Connection con, String tableName) throws SQLException {
        logger.info("Clean table {}.", tableName);
        if ("_".equals(tableName)) {
            SQL.update(con, "drop table notebook");
            SQL.update(con, "drop table note");
            SQL.update(con, "drop table note_log");
            SQL.update(con, "drop table setting");
            SQL.update(con, "drop table job");
            SQL.update(con, "drop table job_log");
        } else {
            SQL.update(con, "drop table " + tableName);
        }

        logger.info("End clean.");
    }

    /**
     * 如果表不存在则创建表
     * @param con
     * @throws SQLException
     */
    private void create(Connection con) throws SQLException {
        logger.info("Start to create table if not exists...");

        final String auto = dataSource.isMysql() ? "   id integer primary key AUTO_INCREMENT,\n" : "   id integer primary key,\n";

        logger.info("create table notebook.");
        SQL.update(con, "CREATE TABLE IF NOT EXISTS notebook (\n" + auto +
                "   uid integer,\n" +
                "   name text DEFAULT NULL,\n" +
                "   seq integer DEFAULT NULL,\n" +
                "   delete_flag integer DEFAULT '0',\n" +
                "   last_modify_at integer DEFAULT NULL\n" +
                " )");

        logger.info("create table note.");
        SQL.update(con, "CREATE TABLE IF NOT EXISTS note (\n" + auto +
                "   slug text DEFAULT NULL,\n" +
                "   shared integer DEFAULT NULL,\n" +
                "   notebook_id integer DEFAULT NULL,\n" +
                "   seq_in_nb integer DEFAULT NULL,\n" +
                "   note_type integer DEFAULT NULL,\n" +
                "   autosave_control integer DEFAULT NULL,\n" +
                "   title text DEFAULT NULL,\n" +
                "   content_updated_at integer DEFAULT NULL,\n" +
                "   last_compiled_at integer DEFAULT NULL,\n" +
                "   paid integer DEFAULT NULL,\n" +
                "   in_book integer DEFAULT NULL,\n" +
                "   modified integer DEFAULT 1,\n" +
                "   delete_at integer DEFAULT NULL,\n" +
                "   delete_flag integer DEFAULT '0'\n" +
                " )");

        logger.info("create table note_log.");
        SQL.update(con, "CREATE TABLE IF NOT EXISTS note_log (\n" + auto +
                "   note_id integer DEFAULT NULL,\n" +
                "   control integer,\n" +
                "   title text DEFAULT NULL,\n" +
                "   content text,\n" +
                "   update_at integer,\n" +
                "   note_log_type integer default 1\n" +
                " )");

        logger.info("create table setting.");
        SQL.update(con, "CREATE TABLE IF NOT EXISTS `setting` (\n" + auto +
                "   uid integer,\n" +
                "   `key` text,\n" +
                "   `value` text\n" +
                ")");

//        logger.info("create table job.");
//        SQL.update(con, "CREATE TABLE IF NOT EXISTS `job` (\n" + auto +
//            "  `name` text NULL,\n" +
//            "  `describe` text NULL,\n" +
//            "  `last_execute` integer DEFAULT NULL" +
//            ")");

        logger.info("Create table job_log.");
        SQL.update(con, "CREATE TABLE IF NOT EXISTS `job_log` (\n" + auto +
            "  `job_id` integer NOT NULL,\n" +
            "  `start_time` integer NOT NULL,\n" +
            "  `end_time` integer DEFAULT NULL,\n" +
            "  `status` integer NOT NULL,\n" +
            "  `log` text DEFAULT NULL" +
            ")");

        if (!indexExists(con, "job_log", "idx_start_time")) {
            SQL.update(con, "CREATE INDEX idx_start_time on job_log(start_time)");
        }
        logger.info("End create.");

        try {
            SQL.count(con, "select modified from note limit 1");
        } catch (SQLException e) {
            SQL.update(con, "alter table note add column modified integer DEFAULT 1");
        }
    }

    /**
     * Check table index is exists
     * @param con the jdbc Connection
     * @param tableName the table name
     * @param indexName the index name
     * @return true if exists
     * @throws SQLException
     */
    private boolean indexExists(Connection con, final String tableName, final String indexName) throws SQLException {
        boolean exists = true;
        if (dataSource.isMysql()) {
            exists = SQL.exists(con, "show index from " + tableName + " where key_name = ?", ps -> ps.setString(1, indexName));
        }
        else if (dataSource.isSQLite()) {
            // sqlite3 index name is unique
            exists = SQL.exists(con, "SELECT * FROM sqlite_master WHERE type = 'index' and name = ?", ps -> {
//                ps.setString(1, tableName);
                ps.setString(1, indexName);
            });
        }
        // @Mark: other database type case
        return exists;
    }

    /**
     * 初始化表
     */
    private void init(Connection con) throws SQLException {
        int n = SQL.count(con, "select id from notebook where id = 1");
        if (n == 1) return;

        // 1. 插入新手指南和说明信息
        SQL.insert(con, "insert into notebook(uid, `name`, seq) values (?, ?, 0)", ps -> {
            ps.setInt(1, 0);
            ps.setString(2, "关于writer");
        });

        String[] titles = {"Markdown 新手指南", "Writer说明"};
        final long at = System.currentTimeMillis() / 1000;
        SQL.batchUpdate(con, "insert into note(slug,shared,notebook_id,seq_in_nb,note_type,autosave_control,title,content_updated_at,last_compiled_at,paid,in_book)" +
            " values(?,?,?,?,?,?,?,?,?,?,?)", ps -> {
            for (int i = 0; i < titles.length; i++) {
                ps.setString(1, StringUtil.randomString(12));
                ps.setBoolean(2, true);
                ps.setInt(3, 1);
                ps.setInt(4, i);
                ps.setInt(5, 2);
                ps.setInt(6, i + 1);
                ps.setString(7, titles[i]);
                ps.setLong(8, at);
                ps.setLong(9, at);
                ps.setBoolean(10, false);
                ps.setBoolean(11, false);
                ps.addBatch();
            }
        });

        String[] contents = new String[titles.length];
        // 以文件格式保存
        if (saveWithFile) {
            for (int i = 0; i < titles.length; i++) {
                contents[i] = UUID.randomUUID().toString();

                Path path = Paths.get(notePath, String.valueOf(i + 1));
                if (!Files.exists(path)) {
                    try {
                        FileUtil.mkdir(path);
                    } catch (IOException e) {
                        logger.error("", e);
                    }
                }
                FileUtil.cp(getClass().getClassLoader().getResourceAsStream("template/" + titles[i] + ".md"), path.resolve(contents[i]));
            }
        } else {
            for (int i = 0; i < titles.length; i++) {
                try {
                    contents[i] = StringUtil.readString(getClass().getClassLoader().getResourceAsStream("template/" + titles[i] + ".md"));
                } catch (IOException e) {
                    logger.error("", e);
                }
            }
        }

        SQL.batchUpdate(con, "insert into note_log(note_id, content, update_at, title, note_log_type) values (?, ?, ?, ?, ?)", ps -> {
            for (int i = 0; i < titles.length; i++) {
                ps.setInt(1, i + 1);
                ps.setString(2, contents[i]);
                ps.setLong(3, at);
                ps.setString(4, titles[i]);
                ps.setInt(5, 1);
                ps.addBatch();
            }
        });
    }
}
