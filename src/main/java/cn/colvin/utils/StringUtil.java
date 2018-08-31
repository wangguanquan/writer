package cn.colvin.utils;

import java.io.ByteArrayOutputStream;
import java.io.IOException;
import java.io.InputStream;
import java.nio.charset.StandardCharsets;
import java.util.concurrent.ThreadLocalRandom;

/**
 * Create by guanquan.wang at 2018-08-23 16:58
 */
public class StringUtil {
    private StringUtil() {}
    static final char[] base = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789".toCharArray();

    public static String randomString(int len) {
        char[] v = new char[len];
        while (len-->0) {
            v[len] = base[ThreadLocalRandom.current().nextInt(base.length)];
        }
        return new String(v, 0, v.length).toLowerCase();
    }

    public static String readString(InputStream in) throws IOException {
        ByteArrayOutputStream bos = new ByteArrayOutputStream();
        byte[] bytes = new byte[4096];
        int n;
        while ((n = in.read(bytes)) > 0) {
            bos.write(bytes, 0, n);
        }
        return new String(bos.toByteArray(), StandardCharsets.UTF_8);
    }

    public static int toInt(String s) {
        try {
            return Integer.parseInt(s);
        } catch (NumberFormatException e) {
            return 0;
        }
    }

    public static int indexOf(String[] array, String v) {
        if (v != null) {
            for (int i = 0; i < array.length; i++) {
                if (v.equals(array[i])) {
                    return i;
                }
            }
        } else {
            for (int i = 0; i < array.length; i++) {
                if (array[i] == null) {
                    return i;
                }
            }
        }
        return -1;
    }
}
