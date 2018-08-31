webpackJsonp([5], {
    "7Gmt": function (e, t, o) {
        "use strict";

        function r(e) {
            return e && e.__esModule ? e : {default: e}
        }

        Object.defineProperty(t, "__esModule", {value: !0}), t.default = void 0;
        var i, n, a = o("0b0c"), l = r(a), s = o("Zx67"), d = r(s), u = o("Zrlr"), c = r(u), f = o("wxAW"), p = r(f),
            h = o("zwoO"), m = r(h), g = o("Pf15"), y = r(g);
        o("1szz");
        var _ = o("zRbn"), b = r(_), v = o("WAiY"), x = r(v), k = o("AKo5"), I = o("9JgI"), N = (r(I), o("al8S")),
            w = (r(N), o("3KG0")), H = (r(w), o("GiK3")), T = r(H), S = o("RH2O"), E = o("F8kA"), L = o("HW6M"),
            O = (r(L), o("+AJo"), o("8LzJ")), D = r(O), A = (i = (0, S.connect)(function (e) {
                return {}
            }, function (e) {
                return {
                    resetNoteHistory: function () {
                        return e((0, k.resetNoteHistory)())
                    }
                }
            }), (0, E.withRouter)(n = i(n = function (e) {
                function t(e) {
                    (0, c.default)(this, t);
                    var o = (0, m.default)(this, (t.__proto__ || (0, d.default)(t)).call(this, e));
                    return o.state = {page: "home", size: "large"}, o
                }

                return (0, y.default)(t, e), (0, p.default)(t, [{
                    key: "componentWillMount", value: function () {
                        this.props.resetNoteHistory()
                    }
                }, {
                    key: "render", value: function () {
                        this.props.match;
                        return T.default.createElement(l.default, {className: D.default["history-page"]}, T.default.createElement(x.default, null), T.default.createElement(b.default, null))
                    }
                }]), t
            }(H.Component)) || n) || n);
        t.default = A
    }, "8LzJ": function (e, t, o) {
        var r = o("OVmf");
        "string" == typeof r && (r = [[e.i, r, ""]]);
        var i = {hmr: !0};
        i.transform = void 0, i.insertInto = void 0;
        o("MTIv")(r, i);
        r.locals && (e.exports = r.locals)
    }, AKo5: function (e, t, o) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0}), t.restoreNoteHistoryContent = t.getNoteHistoryContent = t.getNoteHistoryList = t.resetNoteHistory = void 0;
        var r = o("4HHy"), i = o("lTDY"), n = function (e) {
            return e && e.__esModule ? e : {default: e}
        }(i);
        t.resetNoteHistory = (0, n.default)(r.NoteHistory.NOTE_HISTORY_INIT), t.getNoteHistoryList = (0, n.default)(r.NoteHistory.GET_NOTE_HISTORY_LIST, "noteId"), t.getNoteHistoryContent = (0, n.default)(r.NoteHistory.GET_NOTE_HISTORY_CONTENT, "historyId", "noteId"), t.restoreNoteHistoryContent = (0, n.default)(r.NoteHistory.RESTORE_NOTE_HISTORY_CONTENT, "nbId", "noteId", "historyId")
    }, OVmf: function (e, t, o) {
        t = e.exports = o("FZ+f")(!1), t.push([e.i, "._10ibe{height:100%}", ""]), t.locals = {"history-page": "_10ibe"}
    }, WAiY: function (e, t, o) {
        "use strict";

        function r(e) {
            return e && e.__esModule ? e : {default: e}
        }

        Object.defineProperty(t, "__esModule", {value: !0}), t.default = void 0;
        var i, n, a = o("bOdI"), l = r(a), s = o("Zx67"), d = r(s), u = o("Zrlr"), c = r(u), f = o("wxAW"), p = r(f),
            h = o("zwoO"), m = r(h), g = o("Pf15"), y = r(g), _ = o("GiK3"), b = r(_), v = o("RH2O"), x = o("cl+9"),
            k = r(x), I = o("F8kA"), N = o("HW6M"), w = r(N), H = o("bpb/"), T = r(H), S = o("4HHy"), E = o("66rn"),
            L = r(E), O = o("qiO7"), D = o("9JgI"), A = r(D), z = o("AKo5"), J = o("al8S"), M = r(J), C = o("3KG0"),
            R = r(C), K = (i = (0, v.connect)(function (e) {
                return {noteHistory: (0, O.getNoteHistoryState)(e)}
            }, function (e) {
                return {
                    getNoteHistoryList: function (t) {
                        return e((0, z.getNoteHistoryList)(t))
                    }
                }
            }), (0, I.withRouter)(n = i(n = function (e) {
                function t() {
                    var e, o, r, i;
                    (0, c.default)(this, t);
                    for (var n = arguments.length, a = Array(n), s = 0; s < n; s++) a[s] = arguments[s];
                    return o = r = (0, m.default)(this, (e = t.__proto__ || (0, d.default)(t)).call.apply(e, [this].concat(a))), r.state = {
                        showFilterList: !1,
                        filterItems: [{
                            text: k.default.get("history.auto-save"),
                            logType: 1,
                            checked: !0
                        }, {
                            text: k.default.get("history.publicize"),
                            logType: 2,
                            checked: !0
                        }, {
                            text: k.default.get("history.update"),
                            logType: 3,
                            checked: !0
                        }, {
                            text: k.default.get("history.recovery"),
                            logType: 4,
                            checked: !0
                        }, {text: k.default.get("history.web"), app: 4, checked: !0}, {
                            text: k.default.get("history.ios"),
                            app: 1,
                            checked: !0
                        }, {
                            text: k.default.get("history.android"),
                            app: 2,
                            checked: !0
                        }, {text: k.default.get("history.ios-night"), app: 3, checked: !0}]
                    }, r.onFilterItemChange = function (e, t) {
                        var o = r.state.filterItems[e];
                        o.checked = !o.checked, r.setState({filterItems: r.state.filterItems})
                    }, r.renderFilterItems = function () {
                        return r.state.filterItems.map(function (e, t) {
                            return b.default.createElement("label", {
                                className: "checkbox",
                                key: t
                            }, b.default.createElement("input", {
                                type: "checkbox",
                                checked: e.checked,
                                "data-note-log-type": e.logType,
                                onChange: function (e) {
                                    return r.onFilterItemChange(t, e)
                                }
                            }), e.text)
                        })
                    }, r.onHistoryItemClick = function (e, t) {
                    }, r.getDisplayName = function (e, t) {
                        return (r.state.filterItems.filter(function (o) {
                            return o[e] === t
                        }) || [{}])[0].text || ""
                    }, r.noteListItemOnMouseMove = function (e) {
                        var t = e.currentTarget.querySelector("span");
                        t.innerHTML = t.getAttribute("data-title")
                    }, r.noteListItemOnMouseLeave = function (e) {
                        var t = e.currentTarget.querySelector("span");
                        t.innerHTML = t.getAttribute("data-timeago")
                    }, r.renderHistoryItems = function (e) {
                        var t = r.props, o = (t.noteHistory, t.match), i = o.params, n = i.nbId, a = i.noteId,
                            s = i.historyId;
                        return e.map(function (e, t) {
                            var o = (0, w.default)((0, l.default)({}, T.default.active, +s === e.id)),
                                i = (0, M.default)(1e3 * e.updated_at, k.default.get("history.timeago"));
                            return b.default.createElement("li", {
                                key: t,
                                className: o,
                                onMouseMove: r.noteListItemOnMouseMove,
                                onMouseLeave: r.noteListItemOnMouseLeave
                            }, b.default.createElement(I.Link, {to: "/notebooks/" + n + "/notes/" + a + "/history/" + e.id}, b.default.createElement("span", {
                                "data-title": (0, R.default)(new Date(1e3 * e.updated_at), "yyyy-MM-dd hh:mm"),
                                "data-formatted-created-at": e.updated_at,
                                "data-timeago": i
                            }, i), r.getDisplayName("logType", e.note_log_type)))
                        })
                    }, r.toggleFilterList = function () {
                        r.setState({showFilterList: !r.state.showFilterList})
                    }, i = o, (0, m.default)(r, i)
                }

                return (0, y.default)(t, e), (0, p.default)(t, [{
                    key: "componentWillMount", value: function () {
                        var e = this.props, t = e.match, o = (e.history, t.params), r = (o.nbId, o.noteId);
                        this.props.getNoteHistoryList(r)
                    }
                }, {
                    key: "componentWillReceiveProps", value: function (e) {
                        var t = e.match, o = e.history, r = e.noteHistory, i = t.params, n = i.nbId, a = i.noteId,
                            l = i.historyId, s = r.get("list");
                        if (!l && s.size > 0) {
                            var d = s.first().get("id");
                            o.replace("/notebooks/" + n + "/notes/" + a + "/history/" + d)
                        }
                    }
                }, {
                    key: "render", value: function () {
                        var e = this.props.noteHistory, t = this.state, o = t.showFilterList, r = t.filterItems,
                            i = (0, w.default)(T.default["filter-factors-list"], (0, l.default)({}, T.default["filter-factors-list__active"], o)),
                            n = e.get("status"), a = n === S.NoteHistory.GET_NOTE_HISTORY_LIST, s = r.filter(function (e) {
                                return e.checked
                            }).map(function (e) {
                                return e.logType
                            }).filter(function (e) {
                                return e
                            }), d = r.filter(function (e) {
                                return e.checked
                            }).map(function (e) {
                                return e.app
                            }).filter(function (e) {
                                return e
                            }), u = e.get("list").toJS().filter(function (e) {
                                return s.indexOf(e.note_log_type) > -1
                            }).filter(function (e) {
                                return d.indexOf(e.app) > -1
                            });
                        return b.default.createElement("div", {className: T.default["history-list-wrap"]}, b.default.createElement("div", {className: T.default["filter-wrap"]}, b.default.createElement("div", {className: T.default["filer-title"]}, b.default.createElement(A.default, {
                            name: "clock-o",
                            className: T.default["icon-clock-o"]
                        }), k.default.get("history.total-items", {num: u.length}), b.default.createElement("span", {
                            className: T.default["filter-contol-btn"],
                            onClick: this.toggleFilterList
                        }
							/*, k.default.get("history.filter"), b.default.createElement(A.default, {
                            name: "angle-double-down",
                            className: T.default["icon-clock-o"]
                        })*/
								)), b.default.createElement("div", {className: i}, this.renderFilterItems())), b.default.createElement("ul", {className: T.default["history-list"]}, this.renderHistoryItems(u), b.default.createElement(L.default, {loading: a})))
                    }
                }]), t
            }(_.Component)) || n) || n);
        t.default = K
    }, al8S: function (e, t, o) {
        "use strict";

        function r(e) {
            function t(e) {
                return parseInt(e, 10)
            }

            function o(e, o) {
                return n.length !== l + 1 ? [e, o] : 0 === o ? n[0] : "" + e + n[t(o)]
            }

            var r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "", i = arguments[2];
            if (!e) return "";
            var n = r.split("_"), a = i || [10, 60, 60, 24, 7, 365 / 7 / 12, 12], l = a.length,
                s = new Date - function (e) {
                    return e instanceof Date ? e : new Date(e)
                }(e);
            return function (e) {
                var r = 1;
                if (e < a[0]) return o(e, 0);
                for (; e >= a[r] && r < l; r++) e /= a[r];
                return e = t(e), o(e, r)
            }(s / 1e3)
        }

        Object.defineProperty(t, "__esModule", {value: !0}), t.default = r
    }, "bpb/": function (e, t, o) {
        var r = o("wJcL");
        "string" == typeof r && (r = [[e.i, r, ""]]);
        var i = {hmr: !0};
        i.transform = void 0, i.insertInto = void 0;
        o("MTIv")(r, i);
        r.locals && (e.exports = r.locals)
    }, ijjv: function (e, t, o) {
        t = e.exports = o("FZ+f")(!1), t.push([e.i, "._3Kp23{height:100%;margin:0 0 0 300px;position:relative;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column}body.reader-night-mode ._3Kp23{background-color:#3d3d3d}._3Kp23 ._3vp73{position:relative;padding:20px;border-bottom:1px solid #d9d9d9}body.reader-night-mode ._3Kp23 ._3vp73{border-color:#2e2e2e}._3Kp23 ._3vp73 h3{margin:0 365px 0 20px;line-height:40px;height:40px;font-size:24px;overflow:hidden;-o-text-overflow:ellipsis;text-overflow:ellipsis;white-space:nowrap}body.reader-night-mode ._3Kp23 ._3vp73 h3{color:#b3b3b3}._3Kp23 ._3vp73 ._1Zkg0{position:absolute;right:260px;bottom:26px}body.reader-night-mode ._3Kp23 ._3vp73 ._1Zkg0{color:#b3b3b3}._3Kp23 ._3vp73 ._2TjmB{position:absolute;top:2px;right:20px;cursor:pointer;background:transparent;border:0;padding:5px;font-size:40px}body.reader-night-mode ._3Kp23 ._3vp73 ._2TjmB{color:#b3b3b3}._3Kp23 ._3vp73 .wuk6K{display:block;position:absolute;top:20px;right:66px;color:#fff;border-color:#42c02e;background-color:#42c02e;border-radius:4px;-webkit-box-shadow:none;box-shadow:none;text-shadow:none;padding:11px 19px;font-size:17.5px;text-align:center;cursor:pointer;line-height:20px;-webkit-transition:padding .3s cubic-bezier(.645,.045,.355,1);-o-transition:padding .3s cubic-bezier(.645,.045,.355,1);transition:padding .3s cubic-bezier(.645,.045,.355,1)}._3Kp23 ._3vp73 .wuk6K .fa{margin:0 -33px 0 5px;opacity:0;display:none;-webkit-transition:all .3s cubic-bezier(.645,.045,.355,1);-o-transition:all .3s cubic-bezier(.645,.045,.355,1);transition:all .3s cubic-bezier(.645,.045,.355,1)}._3Kp23 ._3vp73 .Lp5tT{pointer-events:none;padding-right:43px;opacity:.6}._3Kp23 ._3vp73 .Lp5tT .fa{display:inline-block;opacity:1}._3Kp23 ._33LvZ{overflow-y:auto;-webkit-box-sizing:border-box;box-sizing:border-box;position:relative;height:100%;-webkit-box-flex:1;-ms-flex-positive:1;flex-grow:1}._3Kp23 ._33LvZ ._1mtk4{margin:0 auto;max-width:800px;padding:40px 0}", ""]), t.locals = {
            "history-view": "_3Kp23",
            "revision-top": "_3vp73",
            "time-tag": "_1Zkg0",
            close: "_2TjmB",
            "revert-btn": "wuk6K",
            "revert-btn__loading": "Lp5tT",
            "view-area-wrap": "_33LvZ",
            "note-view": "_1mtk4"
        }
    }, rxIi: function (e, t, o) {
        var r = o("ijjv");
        "string" == typeof r && (r = [[e.i, r, ""]]);
        var i = {hmr: !0};
        i.transform = void 0, i.insertInto = void 0;
        o("MTIv")(r, i);
        r.locals && (e.exports = r.locals)
    }, wJcL: function (e, t, o) {
        t = e.exports = o("FZ+f")(!1), t.push([e.i, ".SJkAD{position:fixed;top:0;left:0;bottom:0;width:300px;background:#fff;border-right:1px solid #d9d9d9;z-index:1;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column}body.reader-night-mode .SJkAD{border-color:#2e2e2e}.SJkAD ._24LeD{padding:12px;background:#404040;color:#f2f2f2;font-size:14px}.SJkAD ._24LeD ._3WaPV{line-height:20px}.SJkAD ._24LeD ._3WaPV ._35zzW{float:right;font-size:12px;color:#e6e6e6;cursor:pointer}.SJkAD ._24LeD ._3WaPV ._35zzW i{margin-left:5px}.SJkAD ._24LeD ._3ciQq{height:0;margin-top:0;padding-top:0;border-top:1px solid transparent;overflow:hidden;-webkit-transition:all .4s cubic-bezier(.12,.4,.29,1.46);-o-transition:all .4s cubic-bezier(.12,.4,.29,1.46);transition:all .4s cubic-bezier(.12,.4,.29,1.46)}.SJkAD ._24LeD ._1pDW4{height:195px;margin-top:15px;padding-top:10px;border-color:#333;overflow-y:auto}.SJkAD ._24LeD ._3ciQq label{display:block;font-size:12px;margin-bottom:5px;cursor:pointer}.SJkAD ._24LeD ._3ciQq input[type=checkbox]{float:left;width:12px;-webkit-appearance:checkbox;margin:3px 5px 0 0}.SJkAD ._334h2{overflow-y:auto;margin-bottom:0;height:100%;-webkit-box-flex:1;-ms-flex-positive:1;flex-grow:1}body.reader-night-mode .SJkAD ._334h2{background-color:#3d3d3d}.SJkAD ._334h2 li{display:block;border-bottom:1px solid #d9d9d9;border-left:3px solid transparent;font-size:12px}body.reader-night-mode .SJkAD ._334h2 li{border-bottom-color:#2e2e2e}.SJkAD ._334h2 li:hover{background-color:#e6e6e6}body.reader-night-mode .SJkAD ._334h2 li:hover{background-color:#2e2e2e}.SJkAD ._334h2 li._3oo40{background-color:#e6e6e6;border-left:3px solid #ec7259}body.reader-night-mode .SJkAD ._334h2 li._3oo40{background-color:#2e2e2e}.SJkAD ._334h2 li>a{padding:12px 10px;display:block;line-height:20px;height:44px;color:#595959}body.reader-night-mode .SJkAD ._334h2 li>a{color:#b3b3b3}.SJkAD ._334h2 li>a span{float:right;color:#999}", ""]), t.locals = {
            "history-list-wrap": "SJkAD",
            "filter-wrap": "_24LeD",
            "filer-title": "_3WaPV",
            "filter-contol-btn": "_35zzW",
            "filter-factors-list": "_3ciQq",
            "filter-factors-list__active": "_1pDW4",
            "history-list": "_334h2",
            active: "_3oo40"
        }
    }, zRbn: function (e, t, o) {
        "use strict";

        function r(e) {
            return e && e.__esModule ? e : {default: e}
        }

        Object.defineProperty(t, "__esModule", {value: !0}), t.default = void 0;
        var i, n, a = o("bOdI"), l = r(a), s = o("Zx67"), d = r(s), u = o("Zrlr"), c = r(u), f = o("wxAW"), p = r(f),
            h = o("zwoO"), m = r(h), g = o("Pf15"), y = r(g), _ = o("GiK3"), b = r(_), v = o("RH2O"), x = o("cl+9"),
            k = r(x), I = o("F8kA"), N = o("BYKG"), w = r(N), H = o("HW6M"), T = r(H), S = o("Gr4k"), E = r(S),
            L = o("rxIi"), O = r(L), D = o("4HHy"), A = o("AKo5"), z = o("qiO7"), J = o("mzOA"), M = r(J),
            C = o("3KG0"), R = r(C), K = o("66rn"), W = r(K), F = o("9JgI"), P = r(F), Z = o("oFuF"), G = new E.default,
            Y = (i = (0, v.connect)(function (e) {
                return {noteHistory: (0, z.getNoteHistoryState)(e)}
            }, function (e) {
                return {
                    getNoteHistoryContent: function (t, o) {
                        e((0, A.getNoteHistoryContent)(t, o))
                    }, restoreNoteHistoryContent: function (t, o, r) {
                        e((0, A.restoreNoteHistoryContent)(t, o, r))
                    }
                }
            }), (0, I.withRouter)(n = i(n = function (e) {
                function t() {
                    var e, o, r, i;
                    (0, c.default)(this, t);
                    for (var n = arguments.length, a = Array(n), l = 0; l < n; l++) a[l] = arguments[l];
                    return o = r = (0, m.default)(this, (e = t.__proto__ || (0, d.default)(t)).call.apply(e, [this].concat(a))), r.state = {
                        loading: !1,
                        isRevertBtnLoading: !1
                    }, r.revertBtnClick = function () {
                        var e = r.props.match, t = e.params, o = t.nbId, i = t.noteId, n = t.historyId;
                        !r.state.isRevertBtnLoading && n && (r.setState({isRevertBtnLoading: !0}), r.props.restoreNoteHistoryContent(o, i, n))
                    }, r.getNoteType = function () {
                        var e = r.props, t = e.match, o = e.noteHistory, i = t.params.historyId;
                        return (o.get("list").find(function (e) {
                            return "" + e.get("id") == "" + i
                        }) || w.default.fromJS({})).get("note_type")
                    }, r.getContentHTML = function () {
                        var e = r.props, t = e.match, o = e.noteHistory, i = t.params.historyId, n = r.getNoteType(),
                            a = o.getIn(["contents", "entities", i, "content"], "");
                        return 2 === n ? G.parse(a) : a
                    }, i = o, (0, m.default)(r, i)
                }

                return (0, y.default)(t, e), (0, p.default)(t, [{
                    key: "componentWillMount", value: function () {
                        var e = this.props.match, t = e.params, o = t.historyId, r = t.noteId;
                        o && this.props.getNoteHistoryContent(o, r), this.setState({loading: !0})
                    }
                }, {
                    key: "componentWillReceiveProps", value: function (e) {
                        var t = e.noteHistory, o = e.history, r = e.match, i = r.params, n = i.historyId, a = i.nbId,
                            l = i.noteId;
                        n !== this.props.match.params.historyId && this.props.getNoteHistoryContent(n, l);
                        var s = t.getIn(["contents", "status"]), d = t.getIn(["restore", "status"]);
                        this.setState({
                            loading: s === D.NoteHistory.GET_NOTE_HISTORY_CONTENT,
                            isRevertBtnLoading: d === D.NoteHistory.RESTORE_NOTE_HISTORY_CONTENT
                        }), d === D.NoteHistory.RESTORE_NOTE_HISTORY_CONTENT_SUCCESS && o.push("/notebooks/" + a + "/notes/" + l + "/"), d === D.NoteHistory.RESTORE_NOTE_HISTORY_CONTENT_FAIL && M.default.error("error.try-again")
                    }
                }, {
                    key: "componentDidUpdate", value: function () {
                        this.noteWrapElem && (0, Z.formatTheVideoPackage)(this.noteWrapElem)
                    }
                }, {
                    key: "render", value: function () {
                        var e = this, t = this.props, o = t.match, r = t.noteHistory, i = o.params, n = i.nbId,
                            a = i.noteId, s = i.historyId, d = this.state, u = d.loading, c = d.isRevertBtnLoading,
                            f = r.getIn(["list"], w.default.fromJS([])).toJS(),
                            p = r.getIn(["contents", "entities", s], w.default.fromJS({})).toJS(), h = p.title || "",
                            m = f.filter(function (e) {
                                return e.id === p.id
                            })[0], g = "";
                        m && (g = (0, R.default)(new Date(1e3 * m.updated_at), "yyyy-MM-dd hh:mm"));
                        var y = this.getContentHTML(),
                            _ = (0, T.default)(O.default["revert-btn"], (0, l.default)({}, O.default["revert-btn__loading"], c));
                        return b.default.createElement("div", {className: O.default["history-view"]}, b.default.createElement("div", {className: O.default["revision-top"]}, b.default.createElement("h3", null, h), b.default.createElement("span", {className: O.default["time-tag"]}, g), !c && b.default.createElement(I.Link, {
                            className: O.default.close,
                            to: "/notebooks/" + n + "/notes/" + a + "/"
                        }, "×"), b.default.createElement("span", {
                            className: _,
                            onClick: this.revertBtnClick
                        }, k.default.get("history.recovery-to"), b.default.createElement(P.default, {
                            name: "spinner",
                            spin: !0
                        }))), b.default.createElement("div", {className: O.default["view-area-wrap"]}, b.default.createElement("div", {
                            className: (0, T.default)("note-view", O.default["note-view"]),
                            dangerouslySetInnerHTML: {__html: y},
                            ref: function (t) {
                                e.noteWrapElem = t
                            }
                        }), b.default.createElement(W.default, {loading: u, hasMask: !0})))
                    }
                }]), t
            }(_.Component)) || n) || n);
        t.default = Y
    }
});