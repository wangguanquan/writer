package cn.colvin.utils;

import java.io.UnsupportedEncodingException;
import java.net.URLDecoder;
import java.net.URLEncoder;

import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

public abstract class CookieUtil {

    private CookieUtil() {}
    /** 
     * 设置cookie 
     * @param response 
     * @param name  cookie名字 
     * @param value cookie值 
     */
    public static void addCookie(HttpServletResponse response, String name, String value) {
        Cookie cookie = new Cookie(name, value);
        cookie.setPath("/");
        response.addCookie(cookie);
    }

    /**
     * 设置cookie 
     * @param response
     * @param name cookie名字 
     * @param value cookie值 
     * @param domain 域
     */
    public static void addCookie(HttpServletResponse response, String name, String value, String domain) {
        Cookie cookie = new Cookie(name, value);
        cookie.setPath("/");
        cookie.setDomain(domain);
        response.addCookie(cookie);
    }

    /**
     * 设置cookie 
     * @param response
     * @param name cookie名字 
     * @param value cookie值 
     * @param domain 域
     * @param path 路由
     */
    public static void addCookie(HttpServletResponse response, String name, String value, String domain, String path) {
        Cookie cookie = new Cookie(name, value);
        cookie.setPath(path);
        if (domain != null && domain.length() != 0 && !domain.equals("*"))
            cookie.setDomain(domain);
        response.addCookie(cookie);
    }

    /** 
     * 设置cookie 
     * @param response 
     * @param name  cookie名字 
     * @param value cookie值 
     * @param maxAge cookie生命周期  以秒为单位 
     */
    public static void addCookie(HttpServletResponse response, String name, String value, int maxAge, String domain) {
        Cookie cookie = new Cookie(name, value);
        cookie.setPath("/");
        if (domain != null && domain.length() != 0 && !domain.equals("*"))
            cookie.setDomain(domain);
        if (maxAge > 0)
            cookie.setMaxAge(maxAge);
        response.addCookie(cookie);
    }

    /** 
     * 根据名字获取cookie 
     * @param request 
     * @param name cookie名字 
     * @return 
     */
    public static Cookie getCookie(HttpServletRequest request, String name) {
        Cookie[] cookies = request.getCookies();
        if (null != cookies && cookies.length > 0) {
            for (Cookie cookie : cookies) {
                if (cookie.getName().equals(name)) {
                    return cookie;
                }
            }
        }
        return null;
    }

    /** 
     * 根据名字获取cookie的值
     * @param request 
     * @param name cookie名字 
     * @return 
     */
    public static String getCookieValue(HttpServletRequest request, String name) {
        Cookie cookie = getCookie(request, name);
        if (cookie != null) {
            return cookie.getValue();
        }
        return null;
    }

    /**
     * 删除指定的cookie
     * @param request
     * @param response
     * @param name
     */
    public static void removeCookie(HttpServletRequest request, HttpServletResponse response, String name) {
        Cookie cookie = getCookie(request, name);
        if (cookie != null) {
            cookie.setMaxAge(0);
            cookie.setValue(null);
            cookie.setPath("/");
            response.addCookie(cookie);
        }
    }

    /**
     * 删除指定域的cookie
     * @param request
     * @param response
     * @param name cookie名字 
     * @param domain 域名
     */
    public static void removeCookie(HttpServletRequest request, HttpServletResponse response, String name,
            String domain) {
        Cookie cookie = getCookie(request, name);
        if (cookie != null) {
            cookie.setMaxAge(0);
            cookie.setValue(null);
            cookie.setPath("/");
            cookie.setDomain(domain);
            response.addCookie(cookie);
        }
    }

    /**
     * 删除指定域指定路径的cookie
     * @param request
     * @param response
     * @param name cookie名字 
     * @param domain 域名
     * @param path 路径
     */
    public static void removeCookie(HttpServletRequest request, HttpServletResponse response, String name,
            String domain, String path) {
        Cookie cookie = getCookie(request, name);
        if (cookie != null) {
            cookie.setMaxAge(0);
            cookie.setValue(null);
            cookie.setPath(path);
            if (domain != null && domain.length() > 0 && !domain.equals("*"))
                cookie.setDomain(domain);
            response.addCookie(cookie);
        }
    }

    /**
     * 删除所有的cookie
     * @param request
     * @param response
     */
    public static void removeAllCookie(HttpServletRequest request, HttpServletResponse response) {
        Cookie[] cookies = request.getCookies();
        if (null != cookies) {
            for (Cookie cookie : cookies) {
                cookie.setMaxAge(0);
                cookie.setValue(null);
                response.addCookie(cookie);
            }
        }
    }
//#############################Cookie中文编码############################
    /**
     * 设置cookie 
     * @param response
     * @param name cookie名字 
     * @param value cookie值 
     * @param domain 域
     * @param path 路由
     */
    public static void addCookieUTF8(HttpServletResponse response, String name, String value, String domain,
            String path) {
        try {
            if (value != null && value.length() > 0)
                value = URLEncoder.encode(value, "UTF-8");
        } catch (UnsupportedEncodingException e) {
        }
        Cookie cookie = new Cookie(name, value);
        cookie.setPath(path);
        if (domain != null && domain.length() != 0 && !domain.equals("*"))
            cookie.setDomain(domain);
        response.addCookie(cookie);
    }

    /** 
     * 根据名字获取cookie的值
     * @param request 
     * @param name cookie名字 
     * @return 
     */
    public static String getCookieValueUTF8(HttpServletRequest request, String name) {
        Cookie cookie = getCookie(request, name);
        if (cookie == null)
            return null;
        String value = cookie.getValue();
        try {
            if (value != null && value.length() > 0)
                value = URLDecoder.decode(value, "UTF-8");
        } catch (UnsupportedEncodingException e) {
        }
        return value;
    }
}

