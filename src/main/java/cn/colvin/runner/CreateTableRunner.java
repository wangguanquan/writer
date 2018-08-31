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

import java.sql.Connection;
import java.sql.SQLException;
import java.util.Arrays;

/**
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

        Connection con = dataSource.getConnection();

        // clean table
        int n = StringUtil.indexOf(args, "--clean");
        if (n >= 0 && n < args.length - 1) {
            clean(con, args[n + 1]);
        }

        // create table if not exists
        create(con);
    }

    private void clean(Connection con, String tableName) throws SQLException {
        logger.info("Clean table {}.", tableName);
        if ("_".equals(tableName)) {
            SQL.update(con, "drop table notebook");
            SQL.update(con, "drop table note");
            SQL.update(con, "drop table note_log");
        } else {
            SQL.update(con, "drop table " + tableName);
        }

        logger.info("End clean.");
    }

    private void create(Connection con) throws SQLException {
        logger.info("Start to create table...");

        logger.info("create table notebook.");
        SQL.update(con, "CREATE TABLE IF NOT EXISTS notebook (\n" +
                "   id integer primary key,\n" +
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
                "   `key` text,\n" +
                "   `value` text\n" +
                ")");
        logger.info("End create.");
    }
}
