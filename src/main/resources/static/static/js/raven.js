webpackJsonp([9], {
    PBYu: function (e, a, n) {
        "use strict";

        function t(e) {
            return e && e.__esModule ? e : {default: e}
        }

        function i() {
            var e = navigator.userAgent.toLowerCase();
            return e.indexOf("msie") >= 0 && parseInt(e.split("msie")[1], 10)
        }

        function o(e, a, n, t, i) {
            try {
                r.default.config(e, {
                    release: a,
                    environment: n,
                    whitelistUrls: i,
                    includePaths: [/jianshu\.com/, /jianshu\.io/],
                    ignoreUrls: [/^file:\/\//],
                    shouldSendCallback: function (e) {
                        if ("info" === e.level) return !0;
                        if (t && 9 === t) return !0;
                        var a = !0;
                        try {
                            var n = e.exception.values[0], i = n.stacktrace.frames;
                            if (i.length > 1) {
                                if (/jianshu\.com\/p\/[a-z|0-9]+?/.test(i[0].filename)) return a = !1;
                                a = !0
                            } else a = !1
                        } catch (e) {
                            a = !1
                        }
                        return a
                    },
                    ignoreErrors: c.default
                }).install(), window.pageData && window.pageData.user && r.default.setUserContext(window.pageData.user)
            } catch (e) {
                r.default.captureException(e)
            }
        }

        var s = n("/Hyb"), r = t(s), u = n("Tgad"), c = t(u);
        window.Raven = r.default;
        !function () {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
                a = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "";
            if (r.default) {
                var n = i();
                if (!(n && n < 9)) {
                    var t = [/jianshu\.com/, /jianshu\.io/, /geetest\.com/, /google-analytics\.com/, /hm\.baidu\.com/, /push\.zhanzhang\.baidu\.com/, /res\.wx\.qq\.com/, /as\.alipayobjects\.com/, /qzonestyle\.gtimg\.cn/];
                    "production" !== a && t.push(/localhost/), o("https://903aaf6b84044a5aa047e585467698b1@sentry.jianshu.io/13", e, a, n, t)
                }
            }
        }("release-20180822070611", "production")
    }, Tgad: function (e, a, n) {
        "use strict";
        Object.defineProperty(a, "__esModule", {value: !0}), a.default = ["TuiaMedia is not defined", "Can't find variable: $UCBrowser", /MyAppGet.*AtPoint/, /UCArticleFinderJS/, "playBackgroundMusic is not defined", "undefined is not an object (evaluating 'Window.prototype.setTimeout.call')", "null is not an object (evaluating 'conDoc.getElementsByTagName')", "null is not an object (evaluating 'v.src')", "null is not an object (evaluating 'window.mttLongPressVar.tagName')", "canvasList.forEach is not a function. (In 'canvasList.forEach', 'canvasList.forEach' is undefined)"]
    }
}, ["PBYu"]);