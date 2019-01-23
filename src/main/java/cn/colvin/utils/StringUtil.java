package cn.colvin.utils;

import sun.net.util.IPAddressUtil;

import java.io.ByteArrayOutputStream;
import java.io.IOException;
import java.io.InputStream;
import java.nio.charset.StandardCharsets;
import java.util.UUID;
import java.util.concurrent.ThreadLocalRandom;

/**
 * Create by guanquan.wang at 2018-08-23 16:58
 */
public class StringUtil {
    private StringUtil() {}
    static final char[] base = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789".toCharArray();

    public static boolean isEmpty(String s) {
        return s == null || s.isEmpty();
    }

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
        FileUtil.close(in);
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

    public static int ip2Int(String ip) {
        if (isEmpty(ip)) {
            return 0;
        }
        byte[] bytes = IPAddressUtil.textToNumericFormatV4(ip);
        int n = 0, p = 24;
        if (bytes != null) {
            for (byte b : bytes) {
                n |= (b & 0xff) << p;
                p -= 8;
            }
        } else if ((bytes = IPAddressUtil.textToNumericFormatV6(ip)) != null) {
            for (int i = bytes.length - 4; i < bytes.length; i++) {
                n |= (bytes[i] & 0xff) << p;
                p -= 8;
            }
        }
        // ipv6 ::1 == ipv4 127.0.0.1
        return n != 1 ? n : 2130706433;
    }

    public static boolean isUUID(String uuid) {
        if (isEmpty(uuid)) return false;
        try {
            UUID.fromString(uuid);
        } catch(IllegalArgumentException e) {
            return false;
        }
        return true;
    }
}
