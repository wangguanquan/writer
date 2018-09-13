package cn.colvin.runner;

import cn.colvin.other.MyDataSource;
import cn.colvin.other.SQL;
import cn.colvin.utils.StringUtil;
import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.ApplicationArguments;
import org.springframework.boot.ApplicationRunner;
import org.springframework.stereotype.Component;

import java.io.IOException;
import java.sql.Connection;
import java.sql.SQLException;
import java.util.Arrays;

/**
 * 启动程序的初始化操作
 * java -jar writer.jar  // 默认
 * java -jar writer.jar --clean tablename // 清空指定表数据
 * java -jar writer.jar --clean _ // 清空所有表数据
 * Create by guanquan.wang at 2018-08-28 16:16
 */
@Component
public class CreateTableRunner implements ApplicationRunner {
    Logger logger = LogManager.getLogger(getClass());
    @Autowired
    private MyDataSource dataSource;

    cn.colvin.other.SQL<Void> SQL = new SQL<>();
    @Override
    public void run(ApplicationArguments applicationArguments) throws Exception {
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
     * @param con
     * @param tableName
     * @throws SQLException
     */
    private void clean(Connection con, String tableName) throws SQLException {
        logger.info("Clean table {}.", tableName);
        if ("_".equals(tableName)) {
            SQL.update(con, "drop table notebook");
            SQL.update(con, "drop table note");
            SQL.update(con, "drop table note_log");
            SQL.update(con, "drop table setting");
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

        logger.info("create table notebook.");
        SQL.update(con, "CREATE TABLE IF NOT EXISTS notebook (\n" +
                "   id integer primary key,\n" +
                "   uid integer,\n" +
                "   name text DEFAULT NULL,\n" +
                "   seq integer DEFAULT NULL,\n" +
                "   delete_flag integer DEFAULT '0',\n" +
                "   last_modify_at integer DEFAULT NULL\n" +
                " )");

        logger.info("create table note.");
        SQL.update(con, "CREATE TABLE IF NOT EXISTS note (\n" +
                "   id integer primary key,\n" +
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
                "   delete_at integer DEFAULT NULL,\n" +
                "   delete_flag integer DEFAULT '0'\n" +
                " )");

        logger.info("create table note_log.");
        SQL.update(con, "CREATE TABLE IF NOT EXISTS note_log (\n" +
                "   id integer primary key,\n" +
                "   note_id integer DEFAULT NULL,\n" +
                "   control integer,\n" +
                "   title text DEFAULT NULL,\n" +
                "   content text,\n" +
                "   update_at integer,\n" +
                "   note_log_type integer default 1\n" +
                " )");

        logger.info("create table setting.");
        SQL.update(con, "CREATE TABLE IF NOT EXISTS setting (\n" +
                "   uid integer,\n" +
                "   `key` text,\n" +
                "   `value` text\n" +
                ")");
        logger.info("End create.");
    }

    /**
     * 初始化表
     */
    private void init(Connection con) throws SQLException {
        int n = SQL.count(con, "select id from notebook where id = 1");
        if (n == 1) return;

        SQL.insert(con, "insert into notebook(uid, name, seq) values (?, ?, 0)", ps -> {
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
                ps.setInt(6, 1);
                ps.setString(7, titles[i]);
                ps.setLong(8, at);
                ps.setLong(9, at);
                ps.setBoolean(10, false);
                ps.setBoolean(11, false);
                ps.addBatch();
            }
        });

        SQL.batchUpdate(con, "insert into note_log(note_id, content, update_at, title, note_log_type) values (?, ?, ?, ?, ?)", ps -> {
            for (int i = 0; i < titles.length; i++) {
                try {
                    ps.setInt(1, i + 1);
                    ps.setString(2, StringUtil.readString(getClass().getClassLoader().getResourceAsStream("template/" + titles[i] + ".md")));
                    ps.setLong(3, at);
                    ps.setString(4, titles[i]);
                    ps.setInt(5, 1);
                    ps.addBatch();
                } catch (IOException e) {

                }
            }
        });
    }
}
