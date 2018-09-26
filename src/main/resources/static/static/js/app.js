webpackJsonp([8], {
    "+AJo": function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0}), t.JIANSHU_EDITOR = t.PN_ITEM_MASK_CLASSNAME = t.MAX_VIDEO_COUNT = t.NOTE_HISTORY_NOT_FOUND = t.NOTES_NOT_FOUND = t.CONTENT_NOT_FOUND = void 0;
        var o = n("5QVw"), a = function (e) {
            return e && e.__esModule ? e : {default: e}
        }(o);
        t.CONTENT_NOT_FOUND = (0, a.default)("content_not_found"), t.NOTES_NOT_FOUND = (0, a.default)("notes_not_found"), t.NOTE_HISTORY_NOT_FOUND = (0, a.default)("notes_not_found"), t.MAX_VIDEO_COUNT = 10, t.PN_ITEM_MASK_CLASSNAME = "pn-item-mask", t.JIANSHU_EDITOR = (0, a.default)("jianshu_editor")
    }, "+cSM": function (e, t, n) {
        "use strict";
        var o, a = n("bOdI"), r = function (e) {
            return e && e.__esModule ? e : {default: e}
        }(a);
        e.exports = {
            global: {
                timeout: "請求超時",
                "content-loading": "內容加載中",
                "to-home": "返回首頁",
                setting: "設定",
                quit: "按Esc退出",
                "note-loading": "文章加載中",
                "forbidden-desc": "很抱歉，網頁版寫文章功能暫不支持手機/平板電腦，你可以在簡書App中使用",
                cancel: "取消",
                commit: "提交",
                download: "下載簡書App"
            },
            "not-found": {title: "您要找的頁面不見了", desc: "因為您的連結位址有誤，連結位址為", "to-home": "返回「簡書」首頁"},
            "note-action": {
                publicize: "導出文章",
                "publicize-paid-note": "發佈為付費文章",
                publicized: "已導出",
                "compile-paid-note": "導出更新和設定",
                "set-publicize-style": "設置發布樣式",
                "move-note": "移動文章",
                "private-note": "設為私密",
                "open-in-new-window": "在新窗口打開",
                "to-history": "歷史版本",
                share: "分享文章",
                "del-note": "删除文章"
            },
            settings: {
                "change-locale": "顯示語言已切換成功",
                "change-read-mode": "閱讀模式已切換成功",
                "change-font": "顯示字體已切換成功",
                "change-to-simple": "切換至簡體",
                "change-to-traditional": "切換至繁體",
                "open-night-mode": "打開夜間模式",
                "change-to-song": "切換至宋體",
                "close-night-mode": "關閉夜間模式",
                "change-editor": "默認編輯器已切換成功",
                editor: "默認編輯器",
                "rich-editor": "富文字編輯器",
                feedback: "幫助與迴響",
                "md-editor": "MarkDown編輯器",
                recycle: "回收站",
                "need-help": "遇到問題",
                "common-issue": "常見問題",
                "change-to-black": "切換至黑體",
                display: "設定顯示模式"
            },
            notebooks: {
                "new-notebook-ing": "新建文集中…",
                "del-notebook-tip": "確認删除文集《{name}》，文章將被移動到回收站。",
                "new-notebook-empty": "文集名不能為空",
                "new-notebook": "新建文集",
                "rename-notebook-tip": "請輸入新文集名",
                "to-homepage": "文集列表"
            },
            notes: {
                audio: "音頻",
                "new-note-ing": "新建文章中…",
                "new-note": "新建文章",
                "new-note-bottom": "在下方新建文章",
                "save-word": "{wordNum}字",
                "default-note-title": "無標題文章",
                "word-num": "字數：",
                "move-note-success": "文章已移動至新文集",
                "del-note-confirm-tip": "確認删除文章《{title}》，文章將被移動到回收站，您可以在那裡恢復它。60天后將被徹底删除。"
            },
            "pay-note": {
                "step-title": "付費文章設置",
                "agree-title": "付費文章協定",
                "step-two": "輸入定價",
                cancelbtn: "不同意",
                okbtn: "同意",
                "step-one": "設定試讀範圍",
                "step-one-des": "請你在右側選擇免費可讀的部分",
                "i-agree": "我同意",
                "confirming-btn": "發佈中…",
                "cancel-btn": "取消",
                "wrong-price": "請輸入正確的金額（{minnum}-{maxnum}元）",
                "confirm-btn": "確認並發佈",
                yuan: "元",
                "step-three": "設置音頻",
                "pay-for-audio": "購買文章後才能播放",
                "free-for-audio": "免費播放",
                "price-tip": "請你合理設置定價，官方建議合理的單篇文章的定價為2-10元。文章定價不能低於1元，且不能大於99元。",
                "mask-item-des": "該分割線以上免費可讀"
            },
            "publish-setting": {
                "set-cover-img": "設置封面圖，優化文章的顯示效果",
                "set-note": "未設置則自動按默認樣式顯示",
                "choose-img-count": "選擇圖片數量",
                "one-img": "一圖",
                "three-img": "三圖（無摘要）",
                "upload-cover-img": "上傳封面圖",
                "click-to-upload": "點擊上傳",
                "upload-note1": "尺寸大于 360×360，格式 png/jpg",
                "upload-note2": "單張圖片大于 440×320，格式 png/jpg",
                change: "更換",
                "input-abstract": "輸入摘要",
                "input-placeholder": "選填，30字內，如不填寫會默認抓取首段內容",
                "confirm-btn": "保存",
                "confirming-btn": "保存中...",
                "cancel-btn": "取消",
                preview: "效果預覽",
                "preview-note": "僅供參考，具體效果會根據不同手機型號而變化",
                confirmed: "發布樣式已更新"
            },
            share: {
                "to-douban": "豆瓣",
                "to-wechat": "微信",
                more: "更多分享",
                "to-weibo": "微博",
                "copy-link": "複製連結",
                "wechat-des": "打開微信“掃一掃”，打開網頁後點擊荧幕右上角分享按鈕",
                "trailing-jianshushe": "-簡書社",
                "to-googleplus": "Google+",
                "to-qzone": "QQ空間",
                "to-twitter": "Twitter",
                "to-facebook": "Facebook"
            },
            error: {
                "try-again": "操作失敗，請再試一次",
                "save-again": "有內容未保存成功，確定要離開？",
                "text-no-empty": "文字不能為空",
                "link-no-empty": "連結不能為空",
                "file-size-over": "文件大小超過{size}M",
                "file-type-error": "圖片格式錯誤，請使用jpg/jpeg/png/gif檔案",
                "video-max-over": "視頻不能超過{num}個",
                "content-no-empty": "內容不能為空",
                "uploading-img": "正在上傳圖片，請稍等…",
                "file-not-exit": "檔案不存在",
                "fail-refresh": "操作失敗，可以刷新頁面嘗試",
                "need-bind-phone": "需要綁定手機號後才能發佈文章喲~",
                "upload-fail": "有圖片未上傳成功，請删除或重新上傳圖片。如需幫助，請",
                "save-again-soft": "上一篇文章有內容未保存成功，需要手動保存",
                "content-not-enough": "內容少於{num}段，不能發表為付費文章",
                click: "點擊",
                "no-nb": "文集不存在",
                "data-empty": "暫無數據"
            },
            tooltip: {
                bold: "粗體",
                link: "插入連結",
                h3: "標題3",
                video: "插入視頻",
                audio: "插入音頻",
                audioExist: "已有音頻",
                h4: "標題4",
                undo: "撤銷",
                h1: "標題1",
                redo: "重做",
                expand: "全屏",
                save: "保存",
                "to-normal-mode": "返回",
                preview: "切換到預覽模式",
                compress: "退出全屏",
                quote: "引用",
                italic: "斜體",
                strikethrough: "删除線",
                hr: "分割線",
                h2: "標題2",
                history: "歷史版本",
                picture: "插入圖片"
            },
            pubbtn: {
                "publish-update": "發佈更新",
                publishing: "發佈中…",
                "compile-paid-note": "發佈更新和設定",
                "cancel-publish": "取消發佈",
                publicize: "導出文章",
                "publicize-paid-note": "發佈為付費文章",
                "save-fail": "保存失敗，請手動保存",
                publicized: "已發佈",
                saving: "保存中…",
                saved: "已保存",
                "audio-transcoding": "音頻轉碼中，請稍後發布"
            },
            modal: (o = {
                insertlink: "插入連結",
                confirm: "確認",
                "wrong-video-source": "暫不支持此視頻地址",
                cancel: "取消",
                tc: "騰訊",
                "video-url-des": "請輸入視頻地址",
                imglinkdes: "請輸入網絡圖片連結",
                linktxtdes: "連結文字",
                insertimgdes: "點擊上傳（可多張）",
                chooseurlimg: "或選擇網絡圖片",
                imgpolicy: "圖片私密性",
                "only-support": "現時只支持",
                "getting-linkinfo": "正在獲取連結標題…",
                choosesysimg: "或上傳本地圖片",
                "video-loading": "正在加載視頻，請稍等…",
                video: "視頻",
                removeLink: "删除連結",
                insertimg: "插入圖片",
                urldes: "連結位址",
                insertvideo: "插入視頻",
                yk: "優酷",
                "getting-linkinfo-fail": "無法獲取連結標題，請手動輸入連結文字",
                "fetch-video-info-failed": "抱歉，您輸入的地址無法識別！"
            }, (0, r.default)(o, "video-url-des", "请输入视频地址"), (0, r.default)(o, "wrong-video-source", "暂不支持此视频地址"), (0, r.default)(o, "video-loading", "正在加载视频，请稍等..."), (0, r.default)(o, "fetch-video-info-failed", "抱歉，您输入的地址无法识别！"), (0, r.default)(o, "insert-audio", "插入音頻"), (0, r.default)(o, "upload-audio", "點擊上傳"), (0, r.default)(o, "audio-support", "支持 {format} 格式，大小不超過 {size} M"), (0, r.default)(o, "audio-cancle", "取消上傳"), (0, r.default)(o, "audio-upload-unfinished", "音頻上傳尚未完成"), (0, r.default)(o, "reupload-audio", "重新上傳"), (0, r.default)(o, "retry", "重試"), (0, r.default)(o, "audio-upload-failed", "上傳失敗"), (0, r.default)(o, "audio-uploading-failed", "音頻未上傳成功"), (0, r.default)(o, "audio-upload-complete", "上傳完成"), (0, r.default)(o, "audio-upload-error", "網路異常，請稍後再試"), (0, r.default)(o, "audio-name", "音頻名稱"), (0, r.default)(o, "audio-author", "音頻作者"), (0, r.default)(o, "insert-audio-name", "輸入音頻名稱"), (0, r.default)(o, "insert-audio-author", "輸入音頻的創作者"), (0, r.default)(o, "delete-audio", "刪除音頻"), (0, r.default)(o, "audio-confirm", "確定"), (0, r.default)(o, "audio-overlarge", "文件大小超過限制！"), (0, r.default)(o, "audio-delete", "確認刪除音頻嗎？"), (0, r.default)(o, "no-name", "佚名"), (0, r.default)(o, "close-audio-warning", "確認關閉嗎？"), (0, r.default)(o, "close-audio-warning2", "關閉後，當前的更改或上傳將丟失"), (0, r.default)(o, "audio-transcoding", "音頻正在轉碼，請稍候"), (0, r.default)(o, "audio-edit", "編輯"), o),
            history: {
                publicize: "導出文章",
                "recovery-to": "恢復到這個版本",
                timeago: "剛剛_秒以前_分鐘以前_小時以前_天以前_周以前_月以前_年以前",
                android: "簡書Android App",
                "ios-night": "簡書iPhone App黑夜版",
                "total-items": "共{num}條歷史版本",
                ios: "簡書iPhone App",
                update: "導出更新",
                web: "簡書網站",
                "auto-save": "自動保存",
                recovery: "版本恢復",
                filter: "篩選"
            },
            trash: {
                "del-time2": "{time}天后清除",
                recovery: "恢復文章",
                delete: "徹底删除",
                "del-time": "將於{time}清除",
                trash: "回收站（{num}）",
                recovering: "恢復文章中…",
                deleting: "徹底删除中…"
            },
            verifymodal: {
                "resend-captcha": "重新發送驗證碼",
                loading: "正在加載驗證資訊…",
                "send-captcha": "發送驗證碼",
                "by-phone": "用手機短信驗證",
                "send-captcha-error": "驗證碼發送失敗，可刷新頁面重試",
                confirming: "確認中…",
                confirm: "確認",
                "empty-captcha": "驗證碼為空",
                "sending-captcha": "{num}秒後重新發送",
                "email-prefix": "用郵箱",
                captcha: "驗證碼",
                title: "安全驗證",
                "by-email": "用郵箱驗證",
                verify: "驗證",
                "verify-captcha-error": "驗證碼錯誤，請重試",
                des: "為了保證你的帳號安全，請先驗證身份，驗證成功後進行下一步操作，驗證碼{minute}分鐘內有效",
                "sms-prefix": "用手機"
            },
            app: {name: "writer"},
            phoneModal: {
                tip: "綁定遇到問題",
                clickbind: "點擊綁定",
                bindwx: "綁定微信",
                bindwxtip: "請使用微信掃描二維碼進行綁定",
                bindtitle: "綁定手機號和微信",
                nobind: "未綁定",
                bindtip: "根據國家相關法律法規要求發佈公開文章需要同時綁定手機號和微信",
                href: "點擊查看幫助",
                bindwxphone: "綁定手機號和微信",
                "phone-error": "輸入的手機號碼有誤，請重新輸入",
                "captcha-regex-error": "驗證碼格式不對，請重新輸入",
                "get-otp-info-error": "獲取國家區號失敗，請刷新頁面重試",
                "hot-countries": "熱門國家和地區",
                captcha: "簡訊驗證碼",
                "phone-num": "手機號",
                all: "全部",
                title: "綁定手機"
            },
            publishSuccessModal: {
                "lastest-collections": "最近投稿",
                "post-des": "向專題投稿，讓文章被更多人發現",
                "success-des": "發佈成功，點擊查看文章",
                "new-collection": "新建",
                "including-note": "收錄中",
                "copy-success": "已複製到剪貼板中",
                "posted-note": "等待稽核",
                "post-note": "投稿",
                "copy-fail": "此瀏覽器不支持，複製失敗，建議用Chrome",
                "my-collections": "我管理的專題",
                "include-note": "收錄",
                "included-note": "已收錄",
                "no-more-data": "沒有更多了",
                "posting-note": "投稿中",
                "get-more-data": "點擊加載更多",
                "search-collection": "搜索專題",
                "recomend-collections": "推薦專題"
            },
            collections: {"suber-num": "{num}人關注", "note-num": "{num}篇文章"},
            "upload-img": {
                "upload-success": "上傳成功",
                "upload-fail": "上傳失敗",
                "upload-size-error": "上傳圖片尺寸錯誤",
                "upload-net-error": "網絡錯誤，請重試"
            }
        }
    }, "+qiL": function (e, t, n) {
        var o = n("EDcJ");
        "string" == typeof o && (o = [[e.i, o, ""]]);
        var a = {hmr: !0};
        a.transform = void 0, a.insertInto = void 0;
        n("MTIv")(o, a);
        o.locals && (e.exports = o.locals)
    }, "/MvA": function (e, t, n) {
        "use strict";

        function o(e) {
            return e && e.__esModule ? e : {default: e}
        }

        Object.defineProperty(t, "__esModule", {value: !0});
        var a = n("Xpbu"), r = o(a), i = n("1nMn"), l = o(i), s = n("83nq"), c = o(s), u = n("sAuu"), d = o(u),
            f = n("PREo"), A = o(f);
        r.default.Prompt = d.default, r.default.Confirm = l.default, r.default.Alert = A.default, r.default.Button = c.default, t.default = r.default
    }, 0: function (e, t) {
    }, "0Ze7": function (e, t, n) {
        var o = n("cjYq");
        "string" == typeof o && (o = [[e.i, o, ""]]);
        var a = {hmr: !0};
        a.transform = void 0, a.insertInto = void 0;
        n("MTIv")(o, a);
        o.locals && (e.exports = o.locals)
    }, 1: function (e, t) {
    }, "1nMn": function (e, t, n) {
        "use strict";

        function o(e) {
            return e && e.__esModule ? e : {default: e}
        }

        function a(e, t) {
            return new s.default(function (n) {
                function o() {
                    x.default.unmountComponentAtNode(i) && i.parentNode && i.parentNode.removeChild(i)
                }

                function a(e) {
                    r || (r = !0, e.showModal(), n({destroy: o, instance: e, target: i}))
                }

                var r = !1, i = document.createElement("div");
                document.body.appendChild(i);
                var l = (0, u.default)({
                    isMiddle: !0,
                    showMask: !0,
                    maskClosable: !0,
                    width: 312,
                    okText: "确认",
                    cancelText: "取消",
                    onOk: function () {
                    },
                    onCancel: function () {
                    },
                    modalClassName: "",
                    confirmBodyClassName: "",
                    confirmBodyStyle: {},
                    showCancelBtn: !0
                }, t, {title: "", showFooter: !1, closable: !1, content: e, destroy: o});
                x.default.render(y.default.createElement(G, (0, u.default)({}, l, {ref: a})), i)
            })
        }

        Object.defineProperty(t, "__esModule", {value: !0});
        var r, i, l = n("//Fk"), s = o(l), c = n("Dd8w"), u = o(c), d = n("bOdI"), f = o(d), A = n("Zx67"), p = o(A),
            h = n("Zrlr"), g = o(h), m = n("wxAW"), b = o(m), v = n("zwoO"), E = o(v), _ = n("Pf15"), C = o(_),
            N = n("gGqR"), T = o(N);
        t.default = a;
        var w = n("GiK3"), y = o(w), I = n("O27J"), x = o(I), k = n("KSGD"), S = o(k), M = n("HW6M"), O = o(M),
            F = n("cl+9"), D = o(F), B = n("Xpbu"), L = o(B), P = n("UsL9"), R = o(P), G = (i = r = function (e) {
                function t(e) {
                    (0, g.default)(this, t);
                    var n = (0, E.default)(this, (t.__proto__ || (0, p.default)(t)).call(this, e));
                    return n.showModal = function () {
                        n.setState(function (e) {
                            return e.visible ? null : {visible: !0}
                        })
                    }, n.hideModal = function () {
                        n.setState({visible: !1})
                    }, n.handleOk = function (e) {
                        n.hideModal();
                        var t = n.props.onOk;
                        (0, T.default)(t) && t(e)
                    }, n.handleCancel = function (e) {
                        n.hideModal();
                        var t = n.props.onCancel;
                        (0, T.default)(t) && t(e)
                    }, n.getButtonText = function () {
                        var e = n.props, t = e.okText, o = e.cancelText;
                        return {ok: t || D.default.get("modal.confirm"), cancel: o || D.default.get("modal.cancel")}
                    }, n.state = {visible: !1}, n
                }

                return (0, C.default)(t, e), (0, b.default)(t, [{
                    key: "componentWillUnmount", value: function () {
                        this.props.destroy()
                    }
                }, {
                    key: "render", value: function () {
                        var e = this.props, t = e.content, n = e.showCancelBtn, o = e.modalClassName,
                            a = e.confirmBodyClassName, r = e.confirmBodyStyle, i = e.destroy, l = this.getButtonText(),
                            s = (0, O.default)(o, (0, f.default)({}, "" + R.default.confirm, !0)),
                            c = (0, O.default)(a, (0, f.default)({}, "" + R.default["confirm-body"], !0)),
                            d = y.default.createElement("div", {className: c, style: r}, t),
                            A = y.default.createElement("div", {className: R.default["confirm-footer"]}, n && y.default.createElement(L.default.Button, {onClick: this.handleCancel}, l.cancel), y.default.createElement(L.default.Button, {
                                onClick: this.handleOk,
                                type: "primary"
                            }, l.ok));
                        return y.default.createElement(L.default, (0, u.default)({}, this.props, {
                            modalClassName: s,
                            visible: this.state.visible,
                            onOk: this.handleOk,
                            onCancel: this.handleCancel,
                            afterClose: i
                        }), y.default.createElement("div", {className: R.default["confirm-wrapper"]}, d, A))
                    }
                }]), t
            }(w.Component), r.displayName = "Modal.Confirm", r.propTypes = {
                content: S.default.oneOfType([S.default.string, S.default.node]),
                modalClassName: S.default.string,
                confirmBodyClassName: S.default.string,
                confirmBodyStyle: S.default.object,
                destroy: S.default.func,
                showCancelBtn: S.default.bool
            }, i)
    }, "1uUF": function (e, t, n) {
        var o = n("4xFE");
        "string" == typeof o && (o = [[e.i, o, ""]]);
        var a = {hmr: !0};
        a.transform = void 0, a.insertInto = void 0;
        n("MTIv")(o, a);
        o.locals && (e.exports = o.locals)
    }, "2Jz7": function (e, t, n) {
        "use strict";

        function o(e) {
            return e && e.__esModule ? e : {default: e}
        }

        Object.defineProperty(t, "__esModule", {value: !0});
        var a = n("Zx67"), r = o(a), i = n("Zrlr"), l = o(i), s = n("wxAW"), c = o(s), u = n("zwoO"), d = o(u),
            f = n("Pf15"), A = o(f), p = n("GiK3"), h = o(p), g = n("pNOl"), m = o(g);
        t.default = function (e) {
            var t, n;
            return n = t = function (t) {
                function n(e) {
                    (0, l.default)(this, n);
                    var t = (0, d.default)(this, (n.__proto__ || (0, r.default)(n)).call(this, e));
                    return t.state = {Component: n.Component}, t
                }

                return (0, A.default)(n, t), (0, c.default)(n, [{
                    key: "componentWillMount", value: function () {
                        var t = this;
                        this.state.Component || e().then(function (e) {
                            n.Component = e.default, n.displayName = "AsyncRoute(" + (0, m.default)(e.default) + ")", t.setState({Component: e.default})
                        })
                    }
                }, {
                    key: "render", value: function () {
                        var e = this.state.Component;
                        return e ? h.default.createElement(e, this.props) : null
                    }
                }]), n
            }(h.default.Component), t.Component = null, t.displayName = "AsyncRoute()", n
        }
    }, "2PWF": function (e, t, n) {
        "use strict";

        function o(e) {
            return e && e.__esModule ? e : {default: e}
        }

        function a(e) {
            var t, n, o, a;
            return h.default.wrap(function (r) {
                for (; ;) switch (r.prev = r.next) {
                    case 0:
                        return t = e.isForce, r.next = 3, (0, g.select)(v.getState);
                    case 3:
                        if (n = r.sent, r.prev = 4, 0 !== n.get("seq").size && !t) {
                            r.next = 14;
                            break
                        }
                        return r.next = 8, (0, g.call)(_.default.getNotebooks);
                    case 8:
                        return o = r.sent, a = o.data, r.next = 12, (0, g.put)({
                            type: m.Notebooks.GET_NOTEBOOKS_SUCCESS,
                            data: a
                        });
                    case 12:
                        r.next = 16;
                        break;
                    case 14:
                        return r.next = 16, (0, g.put)({type: m.Notebooks.GET_NOTEBOOKS_SUCCESS, isCache: !0});
                    case 16:
                        r.next = 22;
                        break;
                    case 18:
                        return r.prev = 18, r.t0 = r.catch(4), r.next = 22, (0, g.put)({type: m.Notebooks.GET_NOTEBOOKS_FAIL});
                    case 22:
                    case"end":
                        return r.stop()
                }
            }, C, this, [[4, 18]])
        }

        function r(e) {
            var t, n, o, a;
            return h.default.wrap(function (r) {
                for (; ;) switch (r.prev = r.next) {
                    case 0:
                        return t = e.newSeq, n = e.oldSeq, r.prev = 1, r.next = 4, (0, g.call)(_.default.sortNotebooks, t);
                    case 4:
                        return o = r.sent, a = o.data, r.next = 8, (0, g.put)({type: m.Notebooks.SORT_NOTEBOOKS_SUCCESS});
                    case 8:
                        r.next = 14;
                        break;
                    case 10:
                        return r.prev = 10, r.t0 = r.catch(1), r.next = 14, (0, g.put)({
                            type: m.Notebooks.SORT_NOTEBOOKS_FAIL,
                            oldSeq: n
                        });
                    case 14:
                    case"end":
                        return r.stop()
                }
            }, N, this, [[1, 10]])
        }

        function i(e) {
            var t, n, o, a, r;
            return h.default.wrap(function (i) {
                for (; ;) switch (i.prev = i.next) {
                    case 0:
                        return t = e.name, n = e.resolve, o = e.reject, i.prev = 1, i.next = 4, (0, g.call)(_.default.newNoteBook, t);
                    case 4:
                        return a = i.sent, r = a.data, i.next = 8, (0, g.put)({
                            type: m.Notebooks.NEW_NOTEBOOK_SUCCESS,
                            data: r
                        });
                    case 8:
                        n(r), i.next = 16;
                        break;
                    case 11:
                        return i.prev = 11, i.t0 = i.catch(1), i.next = 15, (0, g.put)({type: m.Notebooks.NEW_NOTEBOOK_FAIL});
                    case 15:
                        o(i.t0);
                    case 16:
                    case"end":
                        return i.stop()
                }
            }, T, this, [[1, 11]])
        }

        function l(e) {
            var t, n, o, a, r, i;
            return h.default.wrap(function (l) {
                for (; ;) switch (l.prev = l.next) {
                    case 0:
                        return t = e.nbId, n = e.resolve, o = e.reject, l.next = 3, (0, g.select)(b.getTrashNotesListState);
                    case 3:
                        return a = l.sent, l.prev = 4, l.next = 7, (0, g.call)(_.default.deleteNoteBookSoft, t);
                    case 7:
                        return r = l.sent, i = r.data, l.next = 11, (0, g.put)({
                            type: m.Notebooks.DEL_NOTEBOOK_SOFT_SUCCESS,
                            data: i,
                            nbId: t
                        });
                    case 11:
                        if (!a.get("seq")) {
                            l.next = 14;
                            break
                        }
                        return l.next = 14, (0, g.put)({type: m.Trash.GET_TRASH_NOTES_LIST, isForce: !0});
                    case 14:
                        n(i), l.next = 22;
                        break;
                    case 17:
                        return l.prev = 17, l.t0 = l.catch(4), l.next = 21, (0, g.put)({
                            type: m.Notebooks.DEL_NOTEBOOK_SOFT_FAIL,
                            nbId: t
                        });
                    case 21:
                        o(l.t0);
                    case 22:
                    case"end":
                        return l.stop()
                }
            }, w, this, [[4, 17]])
        }

        function s(e) {
            var t, n, o, a;
            return h.default.wrap(function (r) {
                for (; ;) switch (r.prev = r.next) {
                    case 0:
                        return t = e.nbId, n = e.name, r.prev = 1, r.next = 4, (0, g.call)(_.default.updateBookName, t, n);
                    case 4:
                        return o = r.sent, a = o.data, r.next = 8, (0, g.put)({
                            type: m.Notebooks.RENAME_NOTEBOOK_SUCCESS,
                            data: a,
                            nbId: t,
                            name: n
                        });
                    case 8:
                        r.next = 14;
                        break;
                    case 10:
                        return r.prev = 10, r.t0 = r.catch(1), r.next = 14, (0, g.put)({
                            type: m.Notebooks.RENAME_NOTEBOOK_FAIL,
                            nbId: t,
                            name: n
                        });
                    case 14:
                    case"end":
                        return r.stop()
                }
            }, y, this, [[1, 10]])
        }

        function c() {
            return h.default.wrap(function (e) {
                for (; ;) switch (e.prev = e.next) {
                    case 0:
                        return e.next = 2, (0, g.takeEvery)(m.Notebooks.GET_NOTEBOOKS, a);
                    case 2:
                    case"end":
                        return e.stop()
                }
            }, I, this)
        }

        function u() {
            return h.default.wrap(function (e) {
                for (; ;) switch (e.prev = e.next) {
                    case 0:
                        return e.next = 2, (0, g.takeLatest)(m.Notebooks.SORT_NOTEBOOKS, r);
                    case 2:
                    case"end":
                        return e.stop()
                }
            }, x, this)
        }

        function d() {
            return h.default.wrap(function (e) {
                for (; ;) switch (e.prev = e.next) {
                    case 0:
                        return e.next = 2, (0, g.takeEvery)(m.Notebooks.NEW_NOTEBOOK, i);
                    case 2:
                    case"end":
                        return e.stop()
                }
            }, k, this)
        }

        function f() {
            return h.default.wrap(function (e) {
                for (; ;) switch (e.prev = e.next) {
                    case 0:
                        return e.next = 2, (0, g.takeLatest)(m.Notebooks.DEL_NOTEBOOK_SOFT, l);
                    case 2:
                    case"end":
                        return e.stop()
                }
            }, S, this)
        }

        function A() {
            return h.default.wrap(function (e) {
                for (; ;) switch (e.prev = e.next) {
                    case 0:
                        return e.next = 2, (0, g.takeLatest)(m.Notebooks.RENAME_NOTEBOOK, s);
                    case 2:
                    case"end":
                        return e.stop()
                }
            }, M, this)
        }

        Object.defineProperty(t, "__esModule", {value: !0});
        var p = n("Xxa5"), h = o(p);
        t.watchGetNotebooks = c, t.watchSortNotebooks = u, t.watchNewNoteBook = d, t.watchDelNoteBookSoft = f, t.watchRenameNoteBook = A;
        var g = n("egdi"), m = n("4HHy"), b = n("mXnL"), v = n("gmmG"), E = n("Z1y9"), _ = o(E), C = h.default.mark(a),
            N = h.default.mark(r), T = h.default.mark(i), w = h.default.mark(l), y = h.default.mark(s),
            I = h.default.mark(c), x = h.default.mark(u), k = h.default.mark(d), S = h.default.mark(f),
            M = h.default.mark(A)
    }, "38jt": function (e, t) {
        e.exports = "data:application/x-font-ttf;base64,AAEAAAALAIAAAwAwR1NVQrD+s+0AAAE4AAAAQk9TLzJW7kjeAAABfAAAAFZjbWFwAZTTSAAAAegAAAGyZ2x5ZumAEOYAAAOoAAADOGhlYWQSQ1HrAAAA4AAAADZoaGVhB+IDgwAAALwAAAAkaG10eBPr//wAAAHUAAAAFGxvY2EBhAJuAAADnAAAAAxtYXhwARQAaAAAARgAAAAgbmFtZT5U/n0AAAbgAAACbXBvc3RarCXYAAAJUAAAAEEAAQAAA4D/gABcBAL//P/7BAcAAQAAAAAAAAAAAAAAAAAAAAUAAQAAAAEAAOTrXM9fDzz1AAsEAAAAAADXkIb3AAAAANeQhvf//P+kBAcDXAAAAAgAAgAAAAAAAAABAAAABQBcAAUAAAAAAAIAAAAKAAoAAAD/AAAAAAAAAAEAAAAKAB4ALAABREZMVAAIAAQAAAAAAAAAAQAAAAFsaWdhAAgAAAABAAAAAQAEAAQAAAABAAgAAQAGAAAAAQAAAAAAAQP8AZAABQAIAokCzAAAAI8CiQLMAAAB6wAyAQgAAAIABQMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUGZFZABAAHjm8AOA/4AAXAOAAIAAAAABAAAAAAAABAAAAAPpAAAEAv/8BAAAAAQAAAAAAAAFAAAAAwAAACwAAAAEAAABcgABAAAAAABsAAMAAQAAACwAAwAKAAABcgAEAEAAAAAKAAgAAgACAHjmEOYS5vD//wAAAHjmEOYS5vD//wAAAAAAAAAAAAEACgAKAAoACgAAAAEAAwAEAAIAAAEGAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAwAAAAAAEAAAAAAAAAABAAAAHgAAAB4AAAAAQAA5hAAAOYQAAAAAwAA5hIAAOYSAAAABAAA5vAAAObwAAAAAgAAAAAAAAB2ANIBDgGcAAUAAP/hA7wDGAATACgAMQBEAFAAAAEGKwEiDgIdASEnNC4CKwEVIQUVFxQOAycjJyEHIyIuAz0BFyIGFBYyNjQmFwYHBg8BDgEeATMhMjYnLgInATU0PgI7ATIWHQEBGRsaUxIlHBIDkAEKGCcehf5KAqIBFR8jHA8+Lf5JLD8UMiATCHcMEhIZEhKMCAYFBQgCAgQPDgFtFxYJBQkKBv6kBQ8aFbwfKQIfAQwZJxpMWQ0gGxJhiDRuHSUXCQEBgIABExsgDqc/ERoRERoRfBoWExIZBxANCBgaDSMkFAF35AsYEwwdJuMAAAAABP/8/6YEBwM8AAgAJgAvADMAAAEnMxYfARYGBxcBDgEuATcTIwMOASImJwMjExYOASYnASY2NyEeASU3NjczByMuASUzFyEC73ugIxigDA4RIv6DBhMSCAOuOaoDDhMOA6s5rwMIEhMG/oMJDxADzBEP/AuhGCOfeu0SDQG/dnv+lAJN7wEZpw0gAXD98QgFCRIKAiP9sQkKCgkCT/3eChIJBAkCDg4dAQEdkKcZAe8BIM7vAAAAAAIAAAAAAzoC6QAQACEAAAEnLgE+ARcFFgYHIS4BNDYzExceAQ4BJyUmNjchMhYUBiMClqwOBBIfDQENFhAc/eYQFhYQd60NBBIfDf7zFhAcAhoQFhYQAh6ACx8bBQnIEzMCARYhF/7EgAsfGwUJyBMzAhchFwAAAAQAAP+kA9sDXAAXACIAUgBbAAABFh0BJgYHBhYXISImJxE+ATMhMjMVFBc3FxYGKwEmJzU+ARMOAQcnJgYPAQYiLwEuAQ8BLgEnNzY0LwE+ATcXFjY/ATYyHwEeAT8BHgEXBwYUFwc+ATQmIgYUFgO2AWHlUU0SWf5UHykBASoeAiIBAgcqwgQEBcIHAQEI9gclHSQJEAMIJEwiCAIRCSQdJQcbBwcbByUdJAkQAwgkTCIIAhEJJB0lBxsHB74lMjJKMjICWwEC9EsXXF/lUyofAyQeK/gHAfTDAwkBBsMFA/0EJT4YCwMKCSQMDCQJCgMLGD4lGAcTBhkkPxgLAwkKJAsLJAoJAwsYPyQZBhMHRgExSTExSTEAAAAAAAASAN4AAQAAAAAAAAAVAAAAAQAAAAAAAQAIABUAAQAAAAAAAgAHAB0AAQAAAAAAAwAIACQAAQAAAAAABAAIACwAAQAAAAAABQALADQAAQAAAAAABgAIAD8AAQAAAAAACgArAEcAAQAAAAAACwATAHIAAwABBAkAAAAqAIUAAwABBAkAAQAQAK8AAwABBAkAAgAOAL8AAwABBAkAAwAQAM0AAwABBAkABAAQAN0AAwABBAkABQAWAO0AAwABBAkABgAQAQMAAwABBAkACgBWARMAAwABBAkACwAmAWkKQ3JlYXRlZCBieSBpY29uZm9udAppY29uZm9udFJlZ3VsYXJpY29uZm9udGljb25mb250VmVyc2lvbiAxLjBpY29uZm9udEdlbmVyYXRlZCBieSBzdmcydHRmIGZyb20gRm9udGVsbG8gcHJvamVjdC5odHRwOi8vZm9udGVsbG8uY29tAAoAQwByAGUAYQB0AGUAZAAgAGIAeQAgAGkAYwBvAG4AZgBvAG4AdAAKAGkAYwBvAG4AZgBvAG4AdABSAGUAZwB1AGwAYQByAGkAYwBvAG4AZgBvAG4AdABpAGMAbwBuAGYAbwBuAHQAVgBlAHIAcwBpAG8AbgAgADEALgAwAGkAYwBvAG4AZgBvAG4AdABHAGUAbgBlAHIAYQB0AGUAZAAgAGIAeQAgAHMAdgBnADIAdAB0AGYAIABmAHIAbwBtACAARgBvAG4AdABlAGwAbABvACAAcAByAG8AagBlAGMAdAAuAGgAdAB0AHAAOgAvAC8AZgBvAG4AdABlAGwAbABvAC4AYwBvAG0AAAAAAgAAAAAAAAAKAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAQIBAwEEAQUBBgABeARwYWlkBmNoYW5nZQNzZXQAAAAAAA=="
    }, "3SFg": function (e, t, n) {
        "use strict";

        function o(e) {
            return e && e.__esModule ? e : {default: e}
        }

        function a(e) {
            var t, n;
            return d.default.wrap(function (o) {
                for (; ;) switch (o.prev = o.next) {
                    case 0:
                        return o.prev = 0, t = A.default.options.locales, n = e.locale, o.next = 5, (0, p.call)(v.default.changeLocale, n);
                    case 5:
                        return o.next = 7, (0, p.call)(A.default.init.bind(A.default), {
                            locales: t,
                            currentLocale: e.locale
                        });
                    case 7:
                        return m.default.info(A.default.get("settings.change-locale")), o.next = 10, (0, p.put)({
                            type: h.Global.CHANGE_LOCALE_SUCCESS,
                            locale: n
                        });
                    case 10:
                        o.next = 16;
                        break;
                    case 12:
                        return o.prev = 12, o.t0 = o.catch(0), o.next = 16, (0, p.put)({type: h.Global.CHANGE_LOCALE_FAIL});
                    case 16:
                    case"end":
                        return o.stop()
                }
            }, E, this, [[0, 12]])
        }

        function r(e) {
            var t;
            return d.default.wrap(function (n) {
                for (; ;) switch (n.prev = n.next) {
                    case 0:
                        return n.prev = 0, t = e.readMode, n.next = 4, (0, p.call)(v.default.changeReadMode, t);
                    case 4:
                        return n.next = 6, (0, p.put)({type: h.Global.CHANGE_READ_MODE_SUCCESS, readMode: t});
                    case 6:
                        m.default.info(A.default.get("settings.change-read-mode")), n.next = 13;
                        break;
                    case 9:
                        return n.prev = 9, n.t0 = n.catch(0), n.next = 13, (0, p.put)({type: h.Global.CHANGE_READ_MODE_FAIL});
                    case 13:
                    case"end":
                        return n.stop()
                }
            }, _, this, [[0, 9]])
        }

        function i(e) {
            var t;
            return d.default.wrap(function (n) {
                for (; ;) switch (n.prev = n.next) {
                    case 0:
                        return n.prev = 0, t = e.fontType, n.next = 4, (0, p.call)(v.default.changeFontType, t);
                    case 4:
                        return n.next = 6, (0, p.put)({type: h.Global.CHANGE_FONT_TYPE_SUCCESS, fontType: t});
                    case 6:
                        m.default.info(A.default.get("settings.change-font")), n.next = 13;
                        break;
                    case 9:
                        return n.prev = 9, n.t0 = n.catch(0), n.next = 13, (0, p.put)({type: h.Global.CHANGE_FONT_TYPE_FAIL});
                    case 13:
                    case"end":
                        return n.stop()
                }
            }, C, this, [[0, 9]])
        }

        function l() {
            return d.default.wrap(function (e) {
                for (; ;) switch (e.prev = e.next) {
                    case 0:
                        return e.next = 2, (0, p.takeLatest)(h.Global.CHANGE_LOCALE, a);
                    case 2:
                    case"end":
                        return e.stop()
                }
            }, N, this)
        }

        function s() {
            return d.default.wrap(function (e) {
                for (; ;) switch (e.prev = e.next) {
                    case 0:
                        return e.next = 2, (0, p.takeLatest)(h.Global.CHANGE_READ_MODE, r);
                    case 2:
                    case"end":
                        return e.stop()
                }
            }, T, this)
        }

        function c() {
            return d.default.wrap(function (e) {
                for (; ;) switch (e.prev = e.next) {
                    case 0:
                        return e.next = 2, (0, p.takeLatest)(h.Global.CHANGE_FONT_TYPE, i);
                    case 2:
                    case"end":
                        return e.stop()
                }
            }, w, this)
        }

        Object.defineProperty(t, "__esModule", {value: !0});
        var u = n("Xxa5"), d = o(u);
        t.watchChangeLocale = l, t.watchChangeReadMode = s, t.watchChangeFontType = c;
        var f = n("cl+9"), A = o(f), p = n("egdi"), h = n("4HHy"), g = n("mzOA"), m = o(g), b = n("Z1y9"), v = o(b),
            E = d.default.mark(a), _ = d.default.mark(r), C = d.default.mark(i), N = d.default.mark(l),
            T = d.default.mark(s), w = d.default.mark(c)
    }, "3vUK": function (e, t, n) {
        var o = n("kxFB");
        t = e.exports = n("FZ+f")(!1), t.push([e.i, "@font-face{font-family:iconfont;src:url(" + o(n("Gbmw")) + ");src:url(" + o(n("Gbmw")) + '?#iefix) format("embedded-opentype"),url("data:application/x-font-woff;charset=utf-8;base64,d09GRgABAAAAAAdUAAsAAAAACmAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAABHU1VCAAABCAAAADMAAABCsP6z7U9TLzIAAAE8AAAARAAAAFY8eEj7Y21hcAAAAYAAAABxAAAByIB6gfxnbHlmAAAB9AAAAz0AAAPcN/f6n2hlYWQAAAU0AAAAMQAAADYStrnnaGhlYQAABWgAAAAgAAAAJAhFBBVobXR4AAAFiAAAABcAAAAYGJX//GxvY2EAAAWgAAAADgAAAA4DWgIobWF4cAAABbAAAAAeAAAAIAEWAGhuYW1lAAAF0AAAAUUAAAJtPlT+fXBvc3QAAAcYAAAAPAAAAE4JUN0CeJxjYGRgYOBikGPQYWB0cfMJYeBgYGGAAJAMY05meiJQDMoDyrGAaQ4gZoOIAgCKIwNPAHicY2BkkWScwMDKwMHUyXSGgYGhH0IzvmYwYuRgYGBiYGVmwAoC0lxTGByeMT37wNzwv4EhhrmBoQEozAiSAwD3OgzueJztkcEJwzAMRZ9ipZTiQ8gcmaR0npwyr87ewJWsJpAd+sUz/I+MQAJmoDiboyAHQmj3VEZeeI1cebuvPJlQm0xtsdVa73B3l8S7zwrn/3yeT5MHf9Xxfn5uji0msXfThMiWJO5jazL6W0L5Alx2HWIAAAB4nG1STYscRRiut6qnqrtnp2d6eqa7Z6anZ/rb7Jqdne5Nt1GZ2UNQ4pioMdnV3UDILVECKqJgEJfNISc3HlSyejCCuJCNhiDkGDHx4EH8AwFPScCDLGIQkZ1Zq/1AhBRvfT31Fu9TTz1IQGh3lbTJKlJRE3XRwwgV3BmYhUgdQObYYKgKRHE6H7q0pmv8qJ4Y1HPcSE0zRzfwlv7B1twCwMIcLP413za73blu94w8Onb5AhMniyIrVWC9UlqFhT6x+nlOf+dOf+ERh6fNOWTdyjAen2IADCHK+XwjvESGSEQaslCEDqBFhODv+nFamA+9fJXEKXkAFvGVAvUap+iGPeDBsnDf/ACS2AaoUWZE/GQW/kWWWns9b28L1q260mgodeudZg404ZhVL5tmuW5dUGsrF5emtKrSUE2mt86HH5/66vSJzVfh8MGh/fKzwfLG0tLG8uLGCj6tt6zpVvMPftE2Tej8b3sHH3n36J6HMCYECvTA62c+Wr74wpNvT84PX+udfKw2WttYG43WkLC7s/u5wMjj/P0h6qGEvz1K9A7onDso/GMyzSMKuGFEPE1XIIwgTPOPCrI0S5g3C0FiOHj77CXPvDSlqO7kHNWqIvly/2WiaArZ2n+ViFWNTs5J5Qr5Xi3vFD81vU/e+rlagq/fODt5Hx/ahsZmqQuvjH8RC1JVxt74miTLEn5m/KNclQQJK0oboP3eZgO2ofvDNuIN5wN5FP+EKsjJOc/CAIwCZ+1wtdNEM2zOPgpyrrFeox7+8IoiVDslKOkVa3yvouuVN78o5cjkV47gZo5ge7XYaRWk77QEg+4Yk2//2xuOwUvm/v2M3CbHkYFcdASt8Np6G0LKqG44XCVu48SJE26JzNDpDNdr3wA0BVgU0jJQt8clLed+z9L5HufMs9IhpHEHbBjybjBaM9jgHwOS63Dy7nOHqi9Ojnb2AEzb2AXMpm8KQuEmN7D4GwvavlQhov+0K2JV8tsBazEeD4RvBHH8VBzjFcD3R8bxE3efn+4Q3575ncH9W0QCeqtAxkIwMItElvypKV+SSdEcBCbTaMMfcliS/WLRlyUOD/0G1dgT0D/Y58Gl+RM6SrBGAAAAeJxjYGRgYABiYcVnl+L5bb4ycLMwgMD1Gbu+wuj/f/43sGQxNwC5HAxMIFEAdWMOTgAAAHicY2BkYGBu+N/AEMMy+f+f/79ZshiAIiiADQC2UgdheJxjYWBgYAHhyUDM9P8PC5QPABztAqkAAAAAAABIAMgBJAFgAe4AAHicY2BkYGBgY4gBYhBgAmIuIGRg+A/mMwAAEnIBfwAAeJxlj01OwzAQhV/6B6QSqqhgh+QFYgEo/RGrblhUavdddN+mTpsqiSPHrdQDcB6OwAk4AtyAO/BIJ5s2lsffvHljTwDc4Acejt8t95E9XDI7cg0XuBeuU38QbpBfhJto41W4Rf1N2MczpsJtdGF5g9e4YvaEd2EPHXwI13CNT+E69S/hBvlbuIk7/Aq30PHqwj7mXle4jUcv9sdWL5xeqeVBxaHJIpM5v4KZXu+Sha3S6pxrW8QmU4OgX0lTnWlb3VPs10PnIhVZk6oJqzpJjMqt2erQBRvn8lGvF4kehCblWGP+tsYCjnEFhSUOjDFCGGSIyujoO1Vm9K+xQ8Jee1Y9zed0WxTU/3OFAQL0z1xTurLSeTpPgT1fG1J1dCtuy56UNJFezUkSskJe1rZUQuoBNmVXjhF6XNGJPyhnSP8ACVpuyAAAAHicY2BigAAuBuyAjZGJkZmRhZGVkY2RnYG1ICM/L5WtPDU5I7GEpSAxM4UNyMpLT2UuTi1hYAAAsLQKMg==") format("woff"),url(' + o(n("38jt")) + ') format("truetype"),url(' + o(n("PayV")) + '#iconfont) format("svg")}.iconfont{font-family:iconfont!important;font-size:16px;font-style:normal;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}.ic-paid:before{content:"\\E6F0"}.ic-phone:before{content:"\\E602"}.ic-wechat:before{content:"\\E604"}.ic-change:before{content:"\\E610"}.ic-set:before{content:"\\E612"}', ""])
    }, "3zmX": function (e, t, n) {
        "use strict";

        function o(e) {
            return e && e.__esModule ? e : {default: e}
        }

        function a(e) {
            var t, n, o, a, r, i;
            return A.default.wrap(function (l) {
                for (; ;) switch (l.prev = l.next) {
                    case 0:
                        return t = e.isForce, l.next = 3, (0, h.select)(p.getTrashNotesListState);
                    case 3:
                        if (n = l.sent, o = n.get("seq"), a = void 0, l.prev = 6, o && !t) {
                            l.next = 13;
                            break
                        }
                        return l.next = 10, (0, h.call)(v.default.getTrashNotesList);
                    case 10:
                        r = l.sent, i = r.data, a = i;
                    case 13:
                        return l.next = 15, (0, h.put)({type: m.Trash.GET_TRASH_NOTES_LIST_SUCCESS, data: a});
                    case 15:
                        l.next = 21;
                        break;
                    case 17:
                        return l.prev = 17, l.t0 = l.catch(6), l.next = 21, (0, h.put)({type: m.Trash.GET_TRASH_NOTES_LIST_FAIL});
                    case 21:
                    case"end":
                        return l.stop()
                }
            }, E, this, [[6, 17]])
        }

        function r(e) {
            var t, n, o, a, r, i, l;
            return A.default.wrap(function (s) {
                for (; ;) switch (s.prev = s.next) {
                    case 0:
                        return t = e.isForce, n = e.noteId, s.next = 3, (0, h.select)(p.getTrashNotesState);
                    case 3:
                        if (o = s.sent, a = void 0, r = o.getIn([n, "content"], g.CONTENT_NOT_FOUND), s.prev = 6, r !== g.CONTENT_NOT_FOUND && !t) {
                            s.next = 13;
                            break
                        }
                        return s.next = 10, (0, h.call)(v.default.getNoteContent, n);
                    case 10:
                        i = s.sent, l = i.data, a = l;
                    case 13:
                        return s.next = 15, (0, h.put)({
                            type: m.Trash.GET_TRASH_NOTE_CONTENT_SUCCESS,
                            data: a,
                            noteId: n
                        });
                    case 15:
                        s.next = 21;
                        break;
                    case 17:
                        return s.prev = 17, s.t0 = s.catch(6), s.next = 21, (0, h.put)({
                            type: m.Trash.GET_TRASH_NOTE_CONTENT_FAIL,
                            noteId: n
                        });
                    case 21:
                    case"end":
                        return s.stop()
                }
            }, _, this, [[6, 17]])
        }

        function i(e) {
            var t, n, o, a;
            return A.default.wrap(function (r) {
                for (; ;) switch (r.prev = r.next) {
                    case 0:
                        return t = e.noteId, n = e.doneCallback, r.prev = 1, r.next = 4, (0, h.call)(v.default.deleteNote, t);
                    case 4:
                        return o = r.sent, a = o.data, n(null, {noteId: t}), r.next = 9, (0, h.put)({
                            type: m.Trash.DEL_TRASH_NOTE_SUCCESS,
                            data: a,
                            noteId: t
                        });
                    case 9:
                        r.next = 16;
                        break;
                    case 11:
                        return r.prev = 11, r.t0 = r.catch(1), r.next = 15, (0, h.put)({
                            type: m.Trash.DEL_TRASH_NOTE_FAIL,
                            noteId: t
                        });
                    case 15:
                        n(r.t0.error);
                    case 16:
                    case"end":
                        return r.stop()
                }
            }, C, this, [[1, 11]])
        }

        function l(e) {
            var t, n, o, a, r;
            return A.default.wrap(function (i) {
                for (; ;) switch (i.prev = i.next) {
                    case 0:
                        return t = e.noteId, n = e.doneCallback, i.prev = 1, i.next = 4, (0, h.call)(v.default.recoveryNote, t);
                    case 4:
                        return o = i.sent, a = o.data, r = a.notebook_id, i.next = 9, (0, h.put)({
                            type: m.Trash.RECOVERY_TRASH_NOTE_SUCCESS,
                            data: a,
                            noteId: t
                        });
                    case 9:
                        return n(null, {nbId: r, noteId: t}), i.next = 12, (0, h.put)({
                            type: m.Notebooks.GET_NOTEBOOKS,
                            isForce: !0
                        });
                    case 12:
                        return i.next = 14, (0, h.put)({type: m.Notes.GET_NOTES, isForce: !0, nbId: r});
                    case 14:
                        i.next = 21;
                        break;
                    case 16:
                        return i.prev = 16, i.t0 = i.catch(1), i.next = 20, (0, h.put)({
                            type: m.Trash.RECOVERY_TRASH_NOTE_FAIL,
                            noteId: t
                        });
                    case 20:
                        n(i.t0);
                    case 21:
                    case"end":
                        return i.stop()
                }
            }, N, this, [[1, 16]])
        }

        function s() {
            return A.default.wrap(function (e) {
                for (; ;) switch (e.prev = e.next) {
                    case 0:
                        return e.next = 2, (0, h.takeLatest)(m.Trash.GET_TRASH_NOTES_LIST, a);
                    case 2:
                    case"end":
                        return e.stop()
                }
            }, T, this)
        }

        function c() {
            return A.default.wrap(function (e) {
                for (; ;) switch (e.prev = e.next) {
                    case 0:
                        return e.next = 2, (0, h.takeLatest)(m.Trash.GET_TRASH_NOTE_CONTENT, r);
                    case 2:
                    case"end":
                        return e.stop()
                }
            }, w, this)
        }

        function u() {
            return A.default.wrap(function (e) {
                for (; ;) switch (e.prev = e.next) {
                    case 0:
                        return e.next = 2, (0, h.takeLatest)(m.Trash.DEL_TRASH_NOTE, i);
                    case 2:
                    case"end":
                        return e.stop()
                }
            }, y, this)
        }

        function d() {
            return A.default.wrap(function (e) {
                for (; ;) switch (e.prev = e.next) {
                    case 0:
                        return e.next = 2, (0, h.takeLatest)(m.Trash.RECOVERY_TRASH_NOTE, l);
                    case 2:
                    case"end":
                        return e.stop()
                }
            }, I, this)
        }

        Object.defineProperty(t, "__esModule", {value: !0});
        var f = n("Xxa5"), A = o(f);
        t.watchGetTrashNotesList = s, t.watchGetTrashNote = c, t.watchDelTrashNote = u, t.watchRecoveryTrashNote = d;
        var p = n("mXnL"), h = n("egdi"), g = n("+AJo"), m = n("4HHy"), b = n("Z1y9"), v = o(b), E = A.default.mark(a),
            _ = A.default.mark(r), C = A.default.mark(i), N = A.default.mark(l), T = A.default.mark(s),
            w = A.default.mark(c), y = A.default.mark(u), I = A.default.mark(d)
    }, "4/F/": function (e, t, n) {
        t = e.exports = n("FZ+f")(!1), t.push([e.i, "._2w9pn{font-size:14px;-webkit-box-shadow:0 5px 10px rgba(0,0,0,.2);box-shadow:0 5px 10px rgba(0,0,0,.2);list-style:none;background-color:#fff;color:#595959;border-radius:6px}body.reader-night-mode ._2w9pn{color:#b3b3b3;background-color:#3d3d3d}", ""]), t.locals = {menu: "_2w9pn"}
    }, "4HHy": function (e, t, n) {
        "use strict";

        function o(e) {
            return e && e.__esModule ? e : {default: e}
        }

        Object.defineProperty(t, "__esModule", {value: !0}), t.Trash = t.NoteHistory = t.Global = t.NoteContent = t.User = t.Notes = t.Notebooks = void 0;
        var a = n("Dd8w"), r = o(a), i = n("bOdI"), l = o(i), s = n("5QVw"), c = o(s), u = function (e) {
                var t, n = e + "_SUCCESS", o = e + "_FAIL";
                return t = {}, (0, l.default)(t, e, (0, c.default)(e.toLowerCase())), (0, l.default)(t, n, (0, c.default)(n.toLowerCase())), (0, l.default)(t, o, (0, c.default)(o.toLowerCase())), t
            }, d = (0, c.default)("notebooks_init"), f = (0, c.default)("get_notebooks"),
            A = (0, c.default)("get_notebooks_success"), p = (0, c.default)("get_notebooks_fail"),
            h = (0, c.default)("sort_notebooks"), g = (0, c.default)("sort_notebooks_success"),
            m = (0, c.default)("sort_notebooks_fail"), b = (0, c.default)("notes_init"),
            v = (0, c.default)("get_notes"), E = (0, c.default)("get_notes_success"),
            _ = (0, c.default)("get_notes_fail"), C = (0, c.default)("sort_notes"),
            N = (0, c.default)("sort_notes_success"), T = (0, c.default)("sort_notes_fail"),
            w = (0, c.default)("get_cover_img"), y = (0, c.default)("get_cover_img_success"),
            I = (0, c.default)("get_cover_img_fail"), x = (0, c.default)("post_cover_img"),
            k = (0, c.default)("post_cover_img_success"), S = (0, c.default)("post_cover_img_fail"),
            M = (0, c.default)("user_init"), O = (0, c.default)("user_opt_chanel_init"), F = (0, c.default)("get_user"),
            D = (0, c.default)("get_user_success"), B = (0, c.default)("get_user_fail"), L = (0, c.default)("set_user"),
            P = (0, c.default)("change_editor_type"), R = (0, c.default)("change_editor_type_success"),
            G = (0, c.default)("change_editor_type_fail"), U = (0, c.default)("set_bind_status"),
            j = (0, c.default)("note_content_init"), Q = (0, c.default)("get_note_content"),
            H = (0, c.default)("get_note_content_success"), Y = (0, c.default)("get_note_content_fail"),
            z = (0, c.default)("update_note_content_abbr"), W = (0, c.default)("post_audio"),
            K = (0, c.default)("put_audio_message"), J = (0, c.default)("put_audio_message_success"),
            Z = (0, c.default)("put_audio_message_fail"), q = (0, c.default)("get_audio_url"),
            V = (0, c.default)("get_audio_url_success"), X = (0, c.default)("get_audio_url_fail"),
            $ = (0, c.default)("note_history_init"), ee = (0, c.default)("note_history_content_init"),
            te = (0, c.default)("note_history_restore_init"), ne = (0, c.default)("trash_noteslist_init"),
            oe = (0, c.default)("trash_notescontent_init"), ae = (0, c.default)("change_locale"),
            re = (0, c.default)("change_locale_success"), ie = (0, c.default)("change_locale_fail"),
            le = (0, c.default)("switch_dev"), se = (0, c.default)("set_bind_phone_status"),
            ce = (0, c.default)("set_publish_success_modal_data"), ue = (0, c.default)("set_qrcode_modal_data"),
            de = (0, c.default)("set_pnagree_modal_data"), fe = (0, c.default)("change_read_mode"),
            Ae = (0, c.default)("change_read_mode_success"), pe = (0, c.default)("change_read_mode_fail"),
            he = (0, c.default)("change_font_type"), ge = (0, c.default)("change_font_type_success"),
            me = (0, c.default)("change_font_type_fail"), be = (0, c.default)("set_note_data"),
            ve = (0, c.default)("set_sorted_note_data"), Ee = (0, c.default)("set_bind_wx_status"),
            exportAll = (0, c.default)("export_all")
        ;
        t.Notebooks = (0, r.default)({
            NOTEBOOKS_INIT: d,
            GET_NOTEBOOKS: f,
            GET_NOTEBOOKS_SUCCESS: A,
            GET_NOTEBOOKS_FAIL: p,
            SORT_NOTEBOOKS: h,
            SORT_NOTEBOOKS_SUCCESS: g,
            SORT_NOTEBOOKS_FAIL: m
        }, u("NEW_NOTEBOOK"), u("DEL_NOTEBOOK_SOFT"), u("RENAME_NOTEBOOK")), t.Notes = (0, r.default)({
            NOTES_INIT: b,
            GET_NOTES: v,
            GET_NOTES_SUCCESS: E,
            GET_NOTES_FAIL: _,
            SORT_NOTES: C,
            SORT_NOTES_SUCCESS: N,
            SORT_NOTES_FAIL: T,
            EXPORT_ALL: exportAll
        }, u("NEW_NOTE"), u("PUBLISH_NOTE"), u("UPDATE_NOTE"), u("PRIVATE_NOTE"), u("DEL_NOTE_SOFT"), u("MOVE_NOTE"), u("PUBLISH_PAID_NOTE"), {
            GET_COVER_IMG: w,
            GET_COVER_IMG_SUCCESS: y,
            GET_COVER_IMG_FAIL: I,
            POST_COVER_IMG: x,
            POST_COVER_IMG_SUCCESS: k,
            POST_COVER_IMG_FAIL: S
        }), t.User = (0, r.default)({
            USER_INIT: M,
            GET_USER: F,
            GET_USER_SUCCESS: D,
            GET_USER_FAIL: B,
            SET_USER: L,
            USER_OTP_CHANNEL_INIT: O
        }, u("GET_USER_OTP_CHANNEL"), {
            CHANGE_EDITOR_TYPE: P,
            CHANGE_EDITOR_TYPE_SUCCESS: R,
            CHANGE_EDITOR_TYPE_FAIL: G
        }), t.NoteContent = (0, r.default)({
            NOTE_CONTENT_INIT: j,
            GET_NOTE_CONTENT: Q,
            GET_NOTE_CONTENT_SUCCESS: H,
            GET_NOTE_CONTENT_FAIL: Y,
            UPDATE_NOTE_CONTENT_ABBR: z,
            POST_AUDIO: W,
            PUT_AUDIO_MESSAGE: K,
            PUT_AUDIO_MESSAGE_SUCCESS: J,
            PUT_AUDIO_MESSAGE_FAIL: Z,
            GET_AUDIO_URL: q,
            GET_AUDIO_URL_SUCCESS: V,
            GET_AUDIO_URL_FAIL: X
        }, u("DELETE_AUDIO")), t.Global = {
            CHANGE_LOCALE: ae,
            CHANGE_LOCALE_SUCCESS: re,
            CHANGE_LOCALE_FAIL: ie,
            SWITCH_DEV: le,
            SET_BIND_PHONE_STATUS: se,
            SET_PUBLISH_SUCCESS_MODAL_DATA: ce,
            SET_QRCODE_MODAL_DATA: ue,
            SET_BIND_WX_STATUS: Ee,
            SET_PNAGREE_MODAL_DATA: de,
            CHANGE_READ_MODE: fe,
            CHANGE_READ_MODE_FAIL: pe,
            CHANGE_READ_MODE_SUCCESS: Ae,
            CHANGE_FONT_TYPE: he,
            CHANGE_FONT_TYPE_SUCCESS: ge,
            CHANGE_FONT_TYPE_FAIL: me,
            SET_NOTE_DATA: be,
            SET_BIND_STATUS: U,
            SET_SORTED_NOTE_DATA: ve
        }, t.NoteHistory = (0, r.default)({NOTE_HISTORY_INIT: $}, u("GET_NOTE_HISTORY_LIST"), {NOTE_HISTORY_CONTENT_INIT: ee}, u("GET_NOTE_HISTORY_CONTENT"), {NOTE_HISTORY_RESTORE_INIT: te}, u("RESTORE_NOTE_HISTORY_CONTENT")), t.Trash = (0, r.default)({
            TRASH_NOTES_LIST_INIT: ne,
            TRASH_NOTE_CONTENT_INIT: oe
        }, u("GET_TRASH_NOTES_LIST"), u("GET_TRASH_NOTE_CONTENT"), u("DEL_TRASH_NOTE"), u("RECOVERY_TRASH_NOTE"))
    }, "4J7M": function (e, t, n) {
        "use strict";

        function o(e) {
            return e && e.__esModule ? e : {default: e}
        }

        Object.defineProperty(t, "__esModule", {value: !0}), t.default = void 0;
        var a, r, i = n("Zx67"), l = o(i), s = n("Zrlr"), c = o(s), u = n("wxAW"), d = o(u), f = n("zwoO"), A = o(f),
            p = n("Pf15"), h = o(p), g = n("GiK3"), m = o(g), b = n("cl+9"), v = o(b), E = n("RH2O"), _ = n("/MvA"),
            C = o(_), N = n("1uUF"), T = o(N), w = n("Z1y9"), y = o(w), I = n("hGJ7"), x = (o(I), n("66rn")), k = o(x),
            S = n("XaZM"), M = (a = (0, E.connect)(function (e) {
                return {}
            }, function (e) {
                return {
                    setUser: function (t) {
                        return e((0, S.setUser)(t))
                    }
                }
            }))(r = function (e) {
                function t(e) {
                    (0, c.default)(this, t);
                    var n = (0, A.default)(this, (t.__proto__ || (0, l.default)(t)).call(this, e));
                    return n.onModalCancelBtnClick = function () {
                        (0, n.props.onModalCancelBtnClick)()
                    }, n.state = {content: "", contentLoading: !0}, n
                }

                return (0, h.default)(t, e), (0, d.default)(t, [{
                    key: "render", value: function () {
                        var e = this.props.visible, t = this.state, n = t.content, o = t.contentLoading;
                        return m.default.createElement(C.default, {
                            visible: e,
                            modalClassName: T.default.modal,
                            width: 580,
                            showFooter: !1,
                            isMiddle: !0,
                            title: v.default.get("pay-note.agree-title"),
                            onCancel: this.onModalCancelBtnClick
                        }, o && m.default.createElement(k.default, null), m.default.createElement("div", {
                            className: T.default["modal-body"],
                            dangerouslySetInnerHTML: {__html: n}
                        }))
                    }
                }]), t
            }(g.Component)) || r;
        t.default = M
    }, "4r03": function (e, t, n) {
        "use strict";

        function o(e) {
            return e && e.__esModule ? e : {default: e}
        }

        Object.defineProperty(t, "__esModule", {value: !0}), t.default = void 0;
        var a, r, i, l, s = n("bOdI"), c = o(s), u = n("Zx67"), d = o(u), f = n("Zrlr"), A = o(f), p = n("wxAW"),
            h = o(p), g = n("zwoO"), m = o(g), b = n("Pf15"), v = o(b), E = n("l8jW"), _ = (o(E), n("Q9EA")), C = o(_),
            N = n("mzOA"), T = o(N), w = n("9JgI"), y = o(w), I = n("/MvA"), x = o(I), k = n("oFuF"), S = n("Z1y9"),
            M = o(S), O = n("UpxA"), F = (o(O), n("4HHy"), n("66rn")), D = (o(F), n("GiK3")), B = o(D), L = n("KSGD"),
            P = (o(L), n("RH2O")), R = (n("F8kA"), n("BYKG")), G = (o(R), n("HW6M")), U = o(G), j = n("cl+9"), Q = o(j),
            H = n("jgCU"), Y = o(H), z = [], W = (a = (0, P.connect)(function (e) {
                return {}
            }, function (e) {
                return {}
            }))((l = i = function (e) {
                function t(e) {
                    (0, A.default)(this, t);
                    var n = (0, m.default)(this, (t.__proto__ || (0, d.default)(t)).call(this, e));
                    return n.startConutDown = function (e) {
                        clearInterval(n.captchaTimer), n.setState({curSecond: e}), n.captchaTimer = setInterval(function () {
                            var e = n.state, t = e.curSecond, o = e.isResendCaptcha;
                            t -= 1, t <= 0 && (clearInterval(n.captchaTimer), t = 0, o = !0), n.setState({
                                curSecond: t,
                                isResendCaptcha: o
                            })
                        }, 1e3)
                    }, n.onCountryDropdownItemClick = function (e) {
                        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                        if (t.index) {
                            var o = t.index, a = o.isoCode, r = o.callingCode;
                            n.setState({isoCode: a, callingCode: r}), document.body.click()
                        }
                    }, n.sendCaptchaBtnClick = function () {
                        var e = n.state, t = e.isoCode, o = e.curSecond, a = e.sending, r = n.getPhoneNum();
                        r && (o || a || (n.setState({sending: !0}), M.default.sendCaptchaWhenBindPhone({
                            iso_code: t,
                            mobile_number: r
                        }).then(function () {
                            n.startConutDown(60), n.setState({sending: !1})
                        }).catch(function () {
                            T.default.error(Q.default.get("verifymodal.send-captcha-error")), n.setState({sending: !1})
                        })))
                    }, n.getCountryDropItems = function () {
                        var e = n.state.countryPhoneData, t = e.all_countries, o = e.important_countries;
                        return o && t ? ["divider-hot"].concat(o).concat("divider-all", t).map(function (e, t) {
                            return "divider-hot" === e ? B.default.createElement("div", {
                                key: t,
                                className: Y.default.divider
                            }, Q.default.get("phoneModal.hot-countries")) : "divider-all" === e ? B.default.createElement("div", {
                                key: t,
                                className: Y.default.divider
                            }, Q.default.get("phoneModal.all")) : B.default.createElement(E.MenuItem, {
                                key: t,
                                index: {isoCode: e.iso_code, callingCode: e.calling_code}
                            }, B.default.createElement("span", null, "+", e.calling_code), e.name)
                        }) : null
                    }, n.getPhoneNum = function () {
                        var e = (n.phoneInput.value || "").trim();
                        return /^\d{11}$/.test(e) ? e : (T.default.error(Q.default.get("phoneModal.phone-error")), "")
                    }, n.onModalConfirmBtnClick = function () {
                        var e = n.props.onModalConfirmBtnClick, t = n.state, o = t.isoCode,
                            a = (t.callingCode, t.confirming), r = (n.codeInput.value || "").trim(), i = n.getPhoneNum();
                        if (i) return /^\d{6}$/.test(r) ? void(a || (n.setState({confirming: !0}), M.default.bindPhone({
                            mobile_number: i,
                            iso_code: o,
                            code: r
                        }).then(function () {
                            n.setState({confirming: !1}), e({phone: i})
                        }).catch(function () {
                            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                            n.setState({confirming: !1}), T.default.error(e.error && e.error[0].message || Q.default.get("error.try-again"))
                        }))) : void T.default.error(Q.default.get("phoneModal.captcha-regex-error"))
                    }, n.state = {
                        error: "",
                        confirming: !1,
                        sending: !1,
                        callingCode: "86",
                        isoCode: "CN",
                        curChannel: "sms",
                        curSecond: 0,
                        isResendCaptcha: !1,
                        countryPhoneData: {}
                    }, z.length < 1 && M.default.getCountyOtpInfo().then(function (e) {
                        var t = e.data;
                        n.setState({countryPhoneData: t})
                    }).catch(function () {
                        T.default.error(Q.default.get("phoneModal.get-otp-info-error"))
                    }), n
                }

                return (0, v.default)(t, e), (0, h.default)(t, [{
                    key: "render", value: function () {
                        var e = this, t = this.state, n = (t.countryPhoneData, t.isResendCaptcha), o = t.curSecond,
                            a = t.callingCode, r = t.confirming, i = this.props, l = i.onModalCancelClick, s = i.visible,
                            u = (0, U.default)(Y.default["btn-in-resend"], (0, c.default)({}, Y.default.disable, !!o)),
                            d = "verifymodal.send-captcha";
                        return o ? d = "verifymodal.sending-captcha" : n && (d = "verifymodal.resend-captcha"), B.default.createElement(x.default, {
                            width: 420,
                            visible: s,
                            showFooter: !1,
                            maskClassName: Y.default.mask,
                            modalClassName: Y.default.modal,
                            closable: !0,
                            isMiddle: !0,
                            title: Q.default.get("phoneModal.title"),
                            onCancel: l
                        }, B.default.createElement("form", {className: Y.default.form}, B.default.createElement("div", {className: (0, U.default)(Y.default["input-prepend"], Y.default["phone-input-prepend"])}, B.default.createElement(C.default, {
                            className: Y.default["country-dd"],
                            menuItems: this.getCountryDropItems(),
                            onItemClick: this.onCountryDropdownItemClick,
                            menuCustomClass: Y.default.menu,
                            autoAlign: !1
                        }, B.default.createElement("div", {className: Y.default["phone-icon-wrap"]}, B.default.createElement(y.default, {
                            name: "sort-desc",
                            className: Y.default["arrow-icon"]
                        }), B.default.createElement(y.default, {
                            name: "mobile",
                            className: Y.default["mobile-icon"],
                            size: "2x"
                        }), B.default.createElement("span", null, "+", a))), B.default.createElement("input", {
                            type: "text",
                            pattern: "\\d*",
                            maxLength: "11",
                            placeholder: Q.default.get("phoneModal.phone-num"),
                            ref: function (t) {
                                e.phoneInput = t
                            }
                        })), B.default.createElement("div", {className: (0, U.default)(Y.default["input-prepend"], Y.default["captcha-input-prepend"])}, B.default.createElement(y.default, {
                            name: "shield",
                            size: "lg"
                        }), B.default.createElement("input", {
                            type: "text",
                            placeholder: Q.default.get("phoneModal.captcha"),
                            maxLength: "6",
                            ref: function (t) {
                                e.codeInput = t
                            }
                        }), B.default.createElement("a", {
                            className: u,
                            onClick: this.sendCaptchaBtnClick
                        }, Q.default.get(d, {num: o}))), B.default.createElement("div", {
                            className: Y.default["confirm-btn"],
                            onClick: this.onModalConfirmBtnClick
                        }, r ? Q.default.get("verifymodal.confirming") : Q.default.get("verifymodal.confirm"))))
                    }
                }]), t
            }(D.Component), i.defaultProps = {onModalCancelClick: k.noop, onModalConfirmBtnClick: k.noop}, r = l)) || r;
        t.default = W
    }, "4xFE": function (e, t, n) {
        t = e.exports = n("FZ+f")(!1), t.push([e.i, "._3kZbo ._1DjYz{height:560px;overflow-y:auto;font-size:14px}._3kZbo ._1DjYz p{margin-bottom:20px;line-height:1.7}._3kZbo ._1DjYz ul{margin-top:10px}._3kZbo ._1DjYz ul li{list-style:none;margin-bottom:10px}._3kZbo ._1DjYz>ul>li{padding-left:5px}._3kZbo ._1DjYz>ul>li ul{padding-left:10px}._3kZbo button{height:36px;line-height:26px;width:120px;border-radius:18px}._3kZbo button:first-child{margin-right:100px;border:1px solid #f50;color:#f50}._3kZbo button:last-child{margin:0}", ""]), t.locals = {
            modal: "_3kZbo",
            "modal-body": "_1DjYz"
        }
    }, "5Ara": function (e, t, n) {
        t = e.exports = n("FZ+f")(!1), t.push([e.i, "._3FrjS ul{position:absolute;top:0;right:100%}._3FrjS ul ._1CHYP{padding:7px 12px;line-height:20px}._3FrjS ul ._1CHYP img{margin-right:6px;width:16px;height:16px;display:inline-block;vertical-align:middle}", ""]), t.locals = {
            sharemenu: "_3FrjS",
            shareitem: "_1CHYP"
        }
    }, "5Q8M": function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0}), t.setBindWxStatus = t.setBindStatus = t.setSortedNoteData = t.setPnAgreeModalData = t.changeFontType = t.changeReadMode = t.changeLocale = t.switchDev = t.setNoteData = t.setQrCodeModalData = t.setPublishSuccessData = t.setBindPhoneStatus = void 0;
        var o = n("4HHy"), a = n("lTDY"), r = function (e) {
            return e && e.__esModule ? e : {default: e}
        }(a);
        t.setBindPhoneStatus = (0, r.default)(o.Global.SET_BIND_PHONE_STATUS, "hasBind"), t.setPublishSuccessData = (0, r.default)(o.Global.SET_PUBLISH_SUCCESS_MODAL_DATA, "show", "data"), t.setQrCodeModalData = (0, r.default)(o.Global.SET_QRCODE_MODAL_DATA, "show", "data"), t.setNoteData = (0, r.default)(o.Global.SET_NOTE_DATA, "data"), t.switchDev = (0, r.default)(o.Global.SWITCH_DEV), t.exportAll = (0, r.default)(o.Notes.EXPORT_ALL, "0"), t.changeLocale = (0, r.default)(o.Global.CHANGE_LOCALE, "locale"), t.changeReadMode = (0, r.default)(o.Global.CHANGE_READ_MODE, "readMode"), t.changeFontType = (0, r.default)(o.Global.CHANGE_FONT_TYPE, "fontType"), t.setPnAgreeModalData = (0, r.default)(o.Global.SET_PNAGREE_MODAL_DATA, "show", "data"), t.setSortedNoteData = (0, r.default)(o.Global.SET_SORTED_NOTE_DATA, "data"), t.setBindStatus = (0, r.default)(o.Global.SET_BIND_STATUS, "status", "data"), t.setBindWxStatus = (0, r.default)(o.Global.SET_BIND_WX_STATUS, "status")
    }, "63ug": function (e, t, n) {
        t = e.exports = n("FZ+f")(!1), t.push([e.i, "._33JKm{height:1px;overflow:hidden;background-color:#e5e5e5}", ""]), t.locals = {divider: "_33JKm"}
    }, "66rn": function (e, t, n) {
        "use strict";

        function o(e) {
            return e && e.__esModule ? e : {default: e}
        }

        Object.defineProperty(t, "__esModule", {value: !0}), t.default = void 0;
        var a, r, i = n("bOdI"), l = o(i), s = n("MICi"), c = o(s), u = n("Zx67"), d = o(u), f = n("Zrlr"), A = o(f),
            p = n("wxAW"), h = o(p), g = n("zwoO"), m = o(g), b = n("Pf15"), v = o(b), E = n("GiK3"), _ = o(E),
            C = n("KSGD"), N = o(C), T = n("HW6M"), w = o(T), y = n("8aSS"), I = o(y), x = n("TRCE"), k = o(x),
            S = n("A0uo"), M = o(S), O = (r = a = function (e) {
                function t(e) {
                    (0, A.default)(this, t);
                    var n = (0, m.default)(this, (t.__proto__ || (0, d.default)(t)).call(this, e));
                    return n.state = {loading: n.props.loading}, n.debounceLoading = n.debounceLoading.bind(n), n
                }

                return (0, v.default)(t, e), (0, h.default)(t, [{
                    key: "componentWillReceiveProps", value: function (e) {
                        this.debounceLoading(e)
                    }
                }, {
                    key: "componentWillUnmount", value: function () {
                        this.debounceTimer && (clearTimeout(this.debounceTimer), this.debounceTimer = null)
                    }
                }, {
                    key: "debounceLoading", value: function (e) {
                        var t = this, n = this.props.loading, o = e.loading, a = this.props.delay;
                        this.debounceTimer && clearTimeout(this.debounceTimer), a && !(0, c.default)(+a) && n !== o ? this.debounceTimer = setTimeout(function () {
                            return t.setState({loading: o})
                        }, a) : this.setState({loading: o})
                    }
                }, {
                    key: "render", value: function () {
                        var e, t = this.props, n = t.size, o = t.hasMask, a = t.tip, r = t.wrapperClassName,
                            i = this.state.loading,
                            s = (0, w.default)(r, M.default["loading-panel"], (e = {}, (0, l.default)(e, M.default["loading-panel__none"], !i), (0, l.default)(e, M.default["loading-panel-has-mask"], o), e));
                        return _.default.createElement(I.default, {
                            className: s,
                            transitionName: "fade",
                            component: "div"
                        }, _.default.createElement(k.default, {
                            key: "bb",
                            size: n,
                            tip: a,
                            loading: i,
                            loaderClassName: M.default.center
                        }))
                    }
                }]), t
            }(E.Component), a.propTypes = {
                size: N.default.oneOf(["small", "default", "large"]),
                loading: N.default.bool,
                tip: N.default.string,
                delay: N.default.number,
                hasMask: N.default.bool,
                wrapperClassName: N.default.string
            }, a.defaultProps = {loading: !0, delay: void 0, hasMask: !1}, r);
        t.default = O
    }, "72M+": function (e, t, n) {
        var o = n("QgNW");
        "string" == typeof o && (o = [[e.i, o, ""]]);
        var a = {hmr: !0};
        a.transform = void 0, a.insertInto = void 0;
        n("MTIv")(o, a);
        o.locals && (e.exports = o.locals)
    }, "7ITh": function (e, t, n) {
        "use strict";

        function o(e) {
            return e && e.__esModule ? e : {default: e}
        }

        Object.defineProperty(t, "__esModule", {value: !0});
        var a = n("2KeS"), r = n("boom"), i = o(r), l = n("gmmG"), s = o(l), c = n("R2Qq"), u = o(c), d = n("i0Fb"),
            f = o(d), A = n("THqP"), p = o(A), h = n("qiO7"), g = o(h), m = n("mXnL"), b = o(m),
            v = (0, a.combineReducers)({
                Global: i.default,
                Notebooks: s.default,
                Notes: u.default,
                User: f.default,
                NoteContent: p.default,
                NoteHistory: g.default,
                TrashNotes: b.default
            });
        t.default = v
    }, "83nq": function (e, t, n) {
        "use strict";

        function o(e) {
            return e && e.__esModule ? e : {default: e}
        }

        function a(e) {
            return i.default.createElement(u.default, e)
        }

        Object.defineProperty(t, "__esModule", {value: !0}), t.default = a;
        var r = n("GiK3"), i = o(r), l = n("KSGD"), s = o(l), c = n("KluA"), u = o(c);
        a.displayName = "Modal.Button", a.propTypes = {type: s.default.string, className: s.default.string}
    }, "8Pl5": function (e, t, n) {
        var o = n("FWRk");
        "string" == typeof o && (o = [[e.i, o, ""]]);
        var a = {hmr: !0};
        a.transform = void 0, a.insertInto = void 0;
        n("MTIv")(o, a);
        o.locals && (e.exports = o.locals)
    }, "91PG": function (e, t, n) {
        var o = n("IkM0");
        "string" == typeof o && (o = [[e.i, o, ""]]);
        var a = {hmr: !0};
        a.transform = void 0, a.insertInto = void 0;
        n("MTIv")(o, a);
        o.locals && (e.exports = o.locals)
    }, "9JgI": function (e, t, n) {
        "use strict";

        function o(e) {
            return e && e.__esModule ? e : {default: e}
        }

        Object.defineProperty(t, "__esModule", {value: !0}), t.default = void 0;
        var a, r, i = n("Dd8w"), l = o(i), s = n("bOdI"), c = o(s), u = n("+6Bu"), d = o(u), f = n("Zx67"), A = o(f),
            p = n("Zrlr"), h = o(p), g = n("wxAW"), m = o(g), b = n("zwoO"), v = o(b), E = n("Pf15"), _ = o(E),
            C = n("GiK3"), N = o(C), T = n("KSGD"), w = o(T), y = n("HW6M"), I = o(y),
            x = {size: ["lg", "2x", "3x", "4x", "5x"], rotate: [90, 180, 270]}, k = (r = a = function (e) {
                function t() {
                    return (0, h.default)(this, t), (0, v.default)(this, (t.__proto__ || (0, A.default)(t)).apply(this, arguments))
                }

                return (0, _.default)(t, e), (0, m.default)(t, [{
                    key: "render", value: function () {
                        var e, t = this.props, n = t.name, o = t.size, a = t.fixedWidth, r = t.spin, i = t.pulse,
                            s = t.rotate, u = t.className,
                            f = (0, d.default)(t, ["name", "size", "fixedWidth", "spin", "pulse", "rotate", "className"]),
                            A = (0, I.default)("fa", "fa-" + n, u, (e = {}, (0, c.default)(e, "fa-" + o, o && x.size.includes(o)), (0, c.default)(e, "fa-rotate-" + s, s && x.rotate.includes(s)), (0, c.default)(e, "fa-fw", a), (0, c.default)(e, "fa-spin", r), (0, c.default)(e, "fa-pulse", i), e));
                        return N.default.createElement("i", (0, l.default)({}, f, {className: A}))
                    }
                }]), t
            }(C.PureComponent), a.propTypes = {
                name: w.default.string.isRequired,
                size: w.default.string,
                fixedWidth: w.default.bool,
                spin: w.default.bool,
                pulse: w.default.bool,
                rotate: w.default.number
            }, r);
        t.default = k
    }, "9Q5t": function (e, n, o) {
        "use strict";

        function a(e) {
            return e && e.__esModule ? e : {default: e}
        }

        function r(e) {
            var t = document.createElement("div");
            return t.innerHTML = e, t.children
        }

        function i(e) {
            return !!e && (e instanceof HTMLCollection || e instanceof NodeList)
        }

        function l(e) {
            var t = document.querySelectorAll(e);
            return i(t) ? t : [t]
        }

        function s(e) {
            return null !== e && e.nodeType === e.DOCUMENT_NODE
        }

        function c(e, t) {
            if (!t || !e || 1 !== e.nodeType) return !1;
            var n = e.matches || e.webkitMatchesSelector || e.mozMatchesSelector || e.oMatchesSelector || e.matchesSelector;
            if (n) return n.call(e, t);
            var o = !1, a = e.parentNode, r = !a, i = document.createElement("div");
            return r && (a = i).appendChild(e), d(a.querySelectorAll(t)).forEach(function (t) {
                t === e && (o = !0)
            }), r && i.removeChild(e), o
        }

        function u(e) {
            if (!e) return this.length = 0, this;
            if (e instanceof u) return e;
            this.selector = e;
            var t = [];
            e.nodeType ? t = [e] : i(e) ? t = e : e instanceof Array ? t = e.filter(function (e) {
                return !!e
            }) : "string" == typeof e && (e = e.replace("/\n/mg", "").trim(), t = 0 === e.indexOf("<") ? r(e) : l(e));
            var n = t.length;
            if (!n) return this.length = 0, this;
            var o = void 0;
            for (o = 0; o < n; o++) this[o] = t[o];
            this.length = n
        }

        function d(e) {
            return new u(e)
        }

        function f(e) {
            var t = e.url, n = e.width, o = void 0 === n ? 400 : n, a = e.height, r = void 0 === a ? 400 : a,
                i = e.provider, l = e.flash;
            t = t.replace(/http:|https:/, "");
            var s = "";
            return "bilibili" === i ? (s = '<div class="video-player player">', s += '<video width="' + o + '" height="' + r + '" preload="auto" controls="true">', s += '<source src="' + t + '" type="video/mp4">', s += '<object type="application/x-shockwave-flash" data="http://static.hdslb.com/play.swf" class="flash" style="width:' + o + "px; height:" + r + 'px;">', s += '<param name="bgcolor" value="#ffffff">', s += '<param name="allowfullscreeninteractive" value="true">', s += '<param name="allowfullscreen" value="true">', s += '<param name="quality" value="high">', s += '<param name="allowscriptaccess" value="always">', s += '<param name="wmode" value="direct">', s += '<param name="flashvars" value="' + l + '">', s += "</object>", s += "</video>", s += "</div>") : s = '<iframe class="player" src="' + t + '" height="' + r + '" width="' + o + '" frameborder=0 allowfullscreen style="width:' + o + "px; height:" + r + 'px;"></iframe>', s
        }

        function A(e) {
            for (; e && "P" !== d(e).getNodeName();) e = e.parentNode;
            return d(e)
        }

        function p(e) {
            var t = d(e).getNodeName(), n = ["P", "BLOCKQUOTE", "PRE", "H1", "H2", "H3", "H4"];
            for (var o in n) if (t === n[o]) return !0;
            return !1
        }

        function h(e) {
            return d(e).hasClass(ie.IMG_CONTAINER) || d(e).hasClass(ie.VIDEO_CONTAINER) || "HR" === d(e).getNodeName()
        }

        function g(e) {
            return 0 === e.indexOf("//") ? e = location.protocol + e : /^((https?|ftp):)\/\//i.test(e) ? e : e = location.protocol + "//" + e
        }

        function m() {
            return d("<div class='" + ie.IMG_TITLE + "'></div>")
        }

        function b(e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "",
                n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : -1,
                o = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "auto",
                a = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "auto",
                r = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0,
                i = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : 0, l = arguments[7],
                s = d("\n            <div class='" + ie.IMG_CONTAINER + " " + (l ? ie.UPLOADING : "") + " " + (l ? ie.IMG_CONTAINER + "-" + n : "") + "'  data-index='" + n + "'>\n              <img class='uploaded-img' src=" + e + ' style="min-height:' + i + ";min-width:" + r + ';" width=' + o + " height=" + a + " />\n              <br>\n            </div>\n         ");
            return s.append(m(t)), s
        }

        function v() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
            return d('<div class="' + ie.VIDEO_DESCRIPTION + '">' + e + "</div>")
        }

        function E() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                t = d('<div\n              class="' + ie.VIDEO_CONTAINER + ' "\n              data-video-id="' + e.id + '"\n              data-video-url="' + e.url + '"\n              data-flash-url="' + e.flash + '"\n              data-provider="' + e.provider + '"\n              data-cover-uuid="' + e.cover_id + '"\n          >\n          ' + f(e) + "\n          <br>\n          </div>");
            return t.append(v(e.description)), t
        }

        function _(e, t) {
            return d('<div class="' + ie.UPLOADING_PANEL + '" contenteditable="false">\n              <img class="preview" src="' + e + '">\n              <div class="status-bar">\n                <span class="' + ie.UPLOADING_ICON + '"></span>\n                <div class="status-area">\n                  <span class="' + ie.UPLOADING_MSG + '">正在上传...</span>\n                  <a class="' + ie.UPLOAD_CANCER_BTN + '" data-index="' + t + '" href="javascript:void(0)">取消</a>\n                  <a class="' + ie.UPLOAD_RETRY_BTN + '" data-index="' + t + '" href="javascript:void(0)">重新上传</a>\n                </div>\n              </div>\n            </div>')
        }

        function C(e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "", n = e.split(","), o = re(n, 2),
                a = o[0], r = o[1], i = void 0;
            i = a.indexOf("base64") > -1 ? atob(r) : unescape(r);
            for (var l = a.split(":")[1].split(";")[0], s = new Uint8Array(i.length), c = 0; c < i.length; c++) s[c] = i.charCodeAt(c);
            var u = new Blob([s], {type: l});
            return u.name = t + "." + l.replace("image/", ""), u
        }

        function N(e, t, n) {
            e.find(t).forEach(function (e) {
                e = d(e), e.find(t).forEach(function (t) {
                    n(e, d(t))
                })
            })
        }

        function T(e) {
            var t = d("<div>");
            t.html(e);
            var n = ["b", "strong", "i", "em", "del", "strike"], o = ["p"];
            return n.map(function (e) {
                return N(t, e, function (e, t) {
                    t.unpack()
                }), null
            }), o.map(function (e) {
                return N(t, e, function (e, t) {
                    e.after(t)
                }), null
            }), n.map(function (e) {
                return t.find(e).forEach(function (e) {
                    e = d(e), "" === e.text() && e.remove()
                }), null
            }), t.html()
        }

        function w(e) {
            function t() {
                var t = e.selection.getSelectionContainerElem();
                if (t.parent().equal(a) && ("P" !== t.getNodeName() && !t.text())) {
                    var n = d("<p>a</p>");
                    n.insertBefore(t), t.remove(), e.selection.createRangeByElem(n, !0, !0), e.selection.restoreSelection(), n.html("<br>")
                }
            }

            function n(t) {
                var n = e.selection.getSelectionEndTopContainerElem();
                if (r.isInMediaCaption() && (r.jumpToNextLine(n), t.preventDefault()), n.equal(a.children().get(0)) && r.isInsideMediaBox()) {
                    var o = d("<p><br></p>");
                    n.before(o), r.setCursorInElem(o), t.preventDefault()
                }
            }

            function o(e) {
                if (e.shiftKey) return !0;
                var t = r.getSelectionEndTopContainerElem();
                if ("BLOCKQUOTE" === t.getNodeName()) {
                    var n = t.children(), o = r.getCurrentParagraph();
                    return o.equal(n.last()) && "" === o.text().trim() ? (r.jumpToNextLine(t), o.remove(), 0 === t.children().length && t.remove()) : r.breakOnePtoTwoP(null, !0), e.preventDefault(), !1
                }
                return !0
            }

            var a = e.$editElem, r = e.selection;
            e.on(le.ENTER_KEY_UP, function (e) {
                t()
            }), e.on(le.ENTER_KEY_DOWN, function (e) {
                n(e), o(e)
            })
        }

        function y(e) {
            function t() {
                var t = void 0, o = n.html().toLowerCase().trim();
                a.indexOf(o) > -1 && (t = d("<p><br></p>"), n.html(""), n.append(t), e.selection.setCursorInElem(t))
            }

            var n = e.$editElem, o = e.selection, a = ["", "<br>", "<p><br></p>", "<p></p><br>"];
            e.on(le.DEL_KEY_DOWN, function (t) {
                o.saveRange();
                var r = o.getSelectionEndElem(), i = o.getSelectionEndTopContainerElem();
                if (o.isInMediaCaptionHeader()) return void t.preventDefault();
                if (o.isInMediaCaption()) {
                    var l = r.html(), s = o.getSelectionLength();
                    return void((l.length <= 1 || s === l.length) && (r.html(""), t.preventDefault()))
                }
                var c = o.getSelectionStartElem(), u = ie.IMG_TITLE + " " + ie.VIDEO_DESCRIPTION,
                    d = c.findReverse(u, n);
                if (d) {
                    var f = o.getRange();
                    return f.setEnd(d[0], d.contents().length), f.deleteContents(), d.html(d.html().trim().replace('"', "")), setTimeout(function () {
                        o.setCursorInElem(d)
                    }, 0), void t.preventDefault()
                }
                if (o.isInsideMediaBox()) {
                    var A = i, p = A.data("index");
                    return e.imgUploader.uploadDataCache[p] = null, A.remove(), void t.preventDefault()
                }
                var h = n.html().toLowerCase().trim();
                a.indexOf(h) > -1 && t.preventDefault()
            }), e.on(le.DEL_KEY_UP, t)
        }

        function I(e) {
            e.on(le.TAB_KEY_DOWN, function (t) {
                if (!e.cmd.queryCommandSupported("insertHTML")) return void t.preventDefault();
                var n = e.selection.getSelectionContainerElem();
                if (n) {
                    var o = n.parent(), a = n.getNodeName(), r = o.getNodeName();
                    "CODE" === a && "PRE" === r ? e.cmd.exec("insertHTML", "    ") : e.cmd.exec("insertHTML", "&nbsp;&nbsp;&nbsp;&nbsp;"), t.preventDefault()
                }
            })
        }

        function x(e) {
            var t = e.$editElem, n = e.selection, o = e.cmd;
            t.find(".need-to-insert-img").forEach(function (e) {
                var a = d(e), r = n.getTopContainerByNode(e);
                a.parent().equal(t) || r.after(a);
                var i = a.data("src");
                "data:" === i.substring(0, 5) ? o.exec("insertImg", {
                    url: i,
                    file: C(i),
                    $imgPlaceHolderElem: a
                }) : o.exec("insertImg", {url: i, $imgPlaceHolderElem: a})
            })
        }

        function k(e) {
            return e ? e = e.replace(/&nbsp;/g, " ").replace(/[ ]{2}/gi, "&nbsp; ") : ""
        }

        function S(e) {
            var t = [];
            if (e.html().match(/<\w+.*?>/)) {
                var n = e.contents(), o = "", a = !1;
                n.forEach(function (e) {
                    var n = e.tagName || "#text";
                    if (n = n.toLowerCase(), ue.indexOf(n) >= 0) o.length > 0 && t.push(o), S(d(e)).map(function (e) {
                        return t.push(e)
                    }), o = "", a = !0; else if ("br" === n || "hr" === n) o.length > 0 && t.push(o), t.push(""), o = "", a = !0; else if ("#text" === n) e.nodeType || (e = document.createTextNode(e)), o += d(e).text().replace(/[\n\t]*/g, "").trim(); else if ("img" === n) o.length > 0 && t.push(o), o = '<div class="need-to-insert-img" data-src=' + e.src + ">need-to-insert-img</div>"; else if (["a", "b", "strong", "i", "em", "del", "strike"].indexOf(n) > -1) {
                        var r = "a" === n, i = ["b", "strong"].indexOf(n) > -1, l = ["i", "em"].indexOf(n) > -1,
                            s = ["del", "strike"].indexOf(n) > -1, c = "";
                        r ? (o += '<a href="' + e.href + '" target="_blank">', c = "</a>") : i ? (o += "<b>", c = "</b>") : l ? (o += "<i>", c = "</i>") : s && (o += "<del>", c = "</del>");
                        var u = S(d(e));
                        1 === u.length ? o = o + u[0] + c : u.length > 1 && (u[0] = o + u[0], o = u.pop() + c, u.map(function (e) {
                            return t.push(e)
                        }))
                    } else {
                        var f = S(d(e));
                        1 === f.length ? o += f[0] : f.length > 1 && (f[0] = o + f[0], o = f.pop(), f.map(function (e) {
                            return t.push(e)
                        }))
                    }
                }), o.length > 0 && t.push(o), t.length > 1 && a && t.push("")
            } else t = e.text().split("\n").filter(function (e) {
                return e.length > 0
            });
            return t
        }

        function M() {
            return d("<div>").attr("contenteditable", !0).attr("aria-hidden", !0).attr("tabindex", -1).css("position", "fixed").css("overflow", "hidden").css("left", "-10000px")
        }

        function O(e, t) {
            var n, o, a, r, i, l, s, c, u, d, f;
            if (null == t && (t = 512), !(c = e.match(/^data\:([^\;]+)\;base64\,(.+)$/))) return null;
            for (d = c, c = d[0], l = d[1], n = d[2], r = atob(n), a = [], u = 0; u < r.length;) {
                for (f = r.slice(u, u + t), i = new Array(f.length), s = 0; s < f.length;) i[s] = f.charCodeAt(s), s++;
                o = new Uint8Array(i), a.push(o), u += t
            }
            return new Blob(a, {type: l})
        }

        function F(e) {
            function t(t) {
                if (t) {
                    var n = function () {
                        a.clearRange();
                        var n = !1, o = d("<div>").html(t);
                        o.find("img").length && (n = !0);
                        var r = S(o), i = a.getSelectionEndTopContainerElem(), l = d("<p><br></p>"),
                            s = i.getNodeName();
                        if ("BLOCKQUOTE" === s || /H\d/i.test(s)) return t = d("<div>").html(t).text(), a.insertHtml(t), {v: void 0};
                        i.equal(e.$editElem) ? (i.append(l), i = l, a.setCursorInElem(l)) : (h(i) || "P" !== s) && (i.after(l), i = l, a.setCursorInElem(i));
                        var c = r.shift();
                        if (!c) return {v: void 0};
                        a.insertHtml(c);
                        for (var u = [], f = i, A = void 0, p = r.length - 1; p >= 0; p--) (A = r[p]) && A.length > 0 && (A = d("<p>").html(k(A)), f === i && (a.breakOnePtoTwoP(null, !1, !1), f = A), "" !== A.html().trim() && (i.after(A), A.find(".need-to-insert-img").forEach(function (e) {
                            e = d(e), A.after(e)
                        })));
                        u.length ? (u.map(function (e) {
                            return f.append(d(e))
                        }), A = u[0], a.selectNodeContents(A, null, !0)) : f !== i && a.setCursorInElem(f), n && x(e), "" === i.text() && i.remove()
                    }();
                    if ("object" === (void 0 === n ? "undefined" : ee(n))) return n.v
                }
            }

            function n(e, t) {
                var n = void 0, o = void 0;
                return e.match(/^webkit\-fake\-url\:\/\//) ? (t(null), null) : (n = new Image, n.crossOrigin = "anonymous", n.onload = function () {
                    var e = void 0, a = document.createElement("canvas");
                    a.width = n.width, a.height = n.height, a.getContext("2d").drawImage(n, 0, 0, a.width, a.height), e = null;
                    try {
                        e = a.toDataURL("image/png"), o = O(e)
                    } catch (e) {
                    }
                    t(o)
                }, n.onerror = function () {
                    t(null)
                }, n.src = e, null)
            }

            var o = e.$editElem, a = e.selection;
            o.on("paste", function (r) {
                if (a.saveRange(), r.clipboardData && r.clipboardData.getData || window.clipboardData) {
                    var i = r.clipboardData || window.clipboardData, l = [];
                    if (i.types && (l = [].map.call(i.types, function (e) {
                        return e
                    })), l.indexOf("Files") >= 0 && l.indexOf("text/rtf") < 0) {
                        var s = [], c = i.files, u = i.items;
                        c && c.length ? s = [].map.call(c, function (e) {
                            return {file: e}
                        }) : u && u.length && (s = [].filter.call(u, function (e) {
                            return "file" === e.kind
                        }).map(function (e) {
                            return {file: e.getAsFile()}
                        })), e.cmd.exec("insertImgs", {images: s})
                    } else {
                        if (l.indexOf("image/tiff") > -1) {
                            var f = M();
                            return o.after(f), f.focus(), setTimeout(function () {
                                var t = f.find("img")[0];
                                if (!t) return o.focus(), void f.remove();
                                n(t.src, function (t) {
                                    o.focus(), t && e.cmd.exec("insertImgs", {images: [{file: t}]}), f.remove()
                                })
                            }, 0), !0
                        }
                        var A = void 0;
                        if (window.clipboardData ? A = i.getData("text") : l.indexOf("text/html") > -1 ? A = i.getData("text/html") : l.indexOf("text/plain") > -1 && (A = i.getData("text/plain")), !A) return !1;
                        A = A.replace(/<!DOCTYPE.*?>\n?/gi, "").replace(/\n?<head[ >][\w\W]*?<\/head>\n?/gi, "").replace(/\n?<\/?(body|html|meta)[\w\W]*?>\n?/gi, "").replace(/<!--[\w\W]*?-->/gi, ""), a.isInMediaCaption() ? (A = d("<div>").html(A).text(), a.insertHtml(A)) : t(T(A)), e.handleHtmlChange(!0)
                    }
                }
                return r.preventDefault(), !1
            })
        }

        Object.defineProperty(n, "__esModule", {value: !0});
        var D = o("Zx67"), B = a(D), L = o("us/S"), P = a(L), R = o("BO1k"), G = a(R), U = o("kiBT"), j = a(U),
            Q = o("OvRC"), H = a(Q), Y = o("C4MV"), z = a(Y), W = o("Zzip"), K = a(W), J = o("pFYg"), Z = a(J),
            q = o("5QVw"), V = a(q), X = o("woOf"), $ = a(X);
        !function () {
            "function" != typeof $.default && (Object.assign = function (e) {
                if (null == e) throw new TypeError("Cannot convert undefined or null to object");
                e = Object(e);
                for (var t = arguments.length, n = Array(t > 1 ? t - 1 : 0), o = 1; o < t; o++) n[o - 1] = arguments[o];
                for (var a = 0; a < n.length; a++) {
                    var r = n[a];
                    if (null != r) for (var i in r) Object.prototype.hasOwnProperty.call(r, i) && (e[i] = r[i])
                }
                return e
            }), Array.prototype.filter || (Array.prototype.filter = function (e, n) {
                if ("Function" != typeof e || !this) throw new TypeError;
                var o = this.length >>> 0, a = new Array(o), r = 0, i = -1;
                if (void 0 === n) for (; ++i !== o;) if (i in this) if (e(t[i], i, t)) a[r++] = t[i]; else for (; ++i !== o;) i in this && e.call(n, t[i], i, t) && (a[r++] = t[i]);
                return a.length = r, a
            })
        }();
        var ee = "function" == typeof V.default && "symbol" === (0, Z.default)(K.default) ? function (e) {
            return void 0 === e ? "undefined" : (0, Z.default)(e)
        } : function (e) {
            return e && "function" == typeof V.default && e.constructor === V.default && e !== V.default.prototype ? "symbol" : void 0 === e ? "undefined" : (0, Z.default)(e)
        }, te = function (e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }, ne = function () {
            function e(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var o = t[n];
                    o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), (0, z.default)(e, o.key, o)
                }
            }

            return function (t, n, o) {
                return n && e(t.prototype, n), o && e(t, o), t
            }
        }(), oe = function (e, t) {
            if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + (void 0 === t ? "undefined" : (0, Z.default)(t)));
            e.prototype = (0, H.default)(t && t.prototype, {
                constructor: {
                    value: e,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), t && (j.default ? (0, j.default)(e, t) : e.__proto__ = t)
        }, ae = function (e, t) {
            if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !t || "object" !== (void 0 === t ? "undefined" : (0, Z.default)(t)) && "function" != typeof t ? e : t
        }, re = function () {
            function e(e, t) {
                var n = [], o = !0, a = !1, r = void 0;
                try {
                    for (var i, l = (0, G.default)(e); !(o = (i = l.next()).done) && (n.push(i.value), !t || n.length !== t); o = !0) ;
                } catch (e) {
                    a = !0, r = e
                } finally {
                    try {
                        !o && l.return && l.return()
                    } finally {
                        if (a) throw r
                    }
                }
                return n
            }

            return function (t, n) {
                if (Array.isArray(t)) return t;
                if ((0, P.default)(Object(t))) return e(t, n);
                throw new TypeError("Invalid attempt to destructure non-iterable instance")
            }
        }();
        u.prototype = {
            constructor: u, forEach: function (e) {
                var t = void 0;
                for (t = 0; t < this.length; t++) {
                    var n = this[t];
                    if (!1 === e.call(n, n, t)) break
                }
                return this
            }, closest: function (e, t) {
                var n = [], o = "object" === (void 0 === e ? "undefined" : ee(e)) && d(e);
                return this.forEach(function (a) {
                    for (; a && !(o ? o.indexOf(d(a)) >= 0 : c(a, e));) a = a !== t && !s(a) && a.parentNode;
                    a && n.indexOf(a) < 0 && n.push(a)
                }), d(n)
            }, get: function (e) {
                var t = this.length;
                return e >= t && (e %= t), d(this[e])
            }, first: function () {
                return this.get(0)
            }, last: function () {
                var e = this.length;
                return this.get(e - 1)
            }, pre: function () {
                var e = [];
                return this.forEach(function (t) {
                    e.push(t.previousElementSibling)
                }), d(e)
            }, preNode: function () {
                var e = [];
                return this.forEach(function (t) {
                    t.previousSibling && e.push(t.previousSibling)
                }), d(e)
            }, next: function () {
                var e = [];
                return this.forEach(function (t) {
                    e.push(t.nextElementSibling)
                }), d(e)
            }, nextNode: function () {
                var e = [];
                return this.forEach(function (t) {
                    e.push(t.nextSibling)
                }), d(e)
            }, on: function (e, t, n) {
                n || (n = t, t = null);
                var o = [];
                return o = e.split(/\s+/), this.forEach(function (e) {
                    o.forEach(function (o) {
                        if (o) return t ? void e.addEventListener(o, function (o) {
                            var a = d(o.target).closest(t, e).get(0);
                            a.length && a !== e && n.call(a, o)
                        }, !1) : void e.addEventListener(o, n, !1)
                    })
                })
            }, off: function (e, t) {
                return this.forEach(function (n) {
                    n.removeEventListener(e, t, !1)
                })
            }, data: function (e, t) {
                var n = "data-" + e.replace(/([A-Z])/, "-$1").toLowerCase(),
                    o = 1 in arguments ? this.attr(n, t) : this.attr(n);
                return null !== o ? o : void 0
            }, attr: function (e, t) {
                return null == t ? this[0].getAttribute(e) : this.forEach(function (n) {
                    n.setAttribute(e, t)
                })
            }, hasClass: function (e) {
                var t = !1;
                return e ? (this.forEach(function (n) {
                    var o = void 0;
                    n.className && (o = n.className.split(/\s/), e = e.split(/\s/), o = o.filter(function (t) {
                        return !!((t = t.trim()) && e.indexOf(t) > -1) && t
                    }), o.length && (t = !0))
                }), t) : t
            }, addClass: function (e) {
                return e ? this.forEach(function (t) {
                    var n = void 0;
                    t.className ? (n = t.className.split(/\s/), n = n.filter(function (e) {
                        return !!e.trim()
                    }), n.indexOf(e) < 0 && n.push(e), t.className = n.join(" ")) : t.className = e
                }) : this
            }, removeClass: function (e) {
                return e ? this.forEach(function (t) {
                    var n = void 0;
                    t.className && (n = t.className.split(/\s/), n = n.filter(function (t) {
                        return !(!(t = t.trim()) || t === e)
                    }), t.className = n.join(" "))
                }) : this
            }, css: function (e, t) {
                var n = e + ":" + t + ";";
                return this.forEach(function (t) {
                    var o = (t.getAttribute("style") || "").trim(), a = void 0, r = [];
                    o ? (a = o.split(";"), a.forEach(function (e) {
                        var t = e.split(":").map(function (e) {
                            return e.trim()
                        });
                        2 === t.length && r.push(t[0] + ":" + t[1])
                    }), r = r.map(function (t) {
                        return 0 === t.indexOf(e) ? n : t
                    }), r.indexOf(n) < 0 && r.push(n), t.setAttribute("style", r.join("; "))) : t.setAttribute("style", n)
                })
            }, removeAttr: function (e) {
                return this.forEach(function (t) {
                    t.removeAttribute(e)
                })
            }, show: function () {
                return this.css("display", "block")
            }, hide: function () {
                return this.css("display", "none")
            }, children: function () {
                var e = this[0];
                return d(e ? e.children : [])
            }, append: function (e) {
                return this.forEach(function (t) {
                    e.forEach(function (e) {
                        t.appendChild(e)
                    })
                })
            }, prepend: function (e) {
                return this.forEach(function (t) {
                    e.forEach(function (e) {
                        t.insertBefore(e, t.firstChild)
                    })
                })
            }, remove: function () {
                return this.forEach(function (e) {
                    if (e.remove) e.remove(); else {
                        var t = e.parentElement;
                        t && t.removeChild(e)
                    }
                })
            }, replace: function (e) {
                return this.forEach(function (t) {
                    e.insertBefore(d(t)), d(t).remove()
                })
            }, isContain: function (e) {
                var t = this[0], n = e[0];
                return !(!t || !n) && t.contains(n)
            }, getBoundingClientRect: function () {
                return this[0].getBoundingClientRect()
            }, getNodeName: function () {
                var e = this[0];
                return e ? e.nodeName && e.nodeName.toUpperCase() : ""
            }, findReverse: function (e) {
                for (var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : d(document), n = !1, o = this; !t.equal(o) && !t.equal(d(document));) {
                    if (o.hasClass(e)) {
                        n = o;
                        break
                    }
                    o = o.parent()
                }
                return n
            }, find: function (e) {
                return d(this[0].querySelectorAll(e))
            }, clone: function () {
                return d(this[0].cloneNode(!0))
            }, text: function (e) {
                if (!e) {
                    var t = this[0];
                    return t ? t.innerText || t.textContent || "" : ""
                }
                return this.forEach(function (t) {
                    t.textContent = e
                })
            }, html: function (e) {
                var t = this[0];
                return t ? null == e ? t.innerHTML || "" : (t.innerHTML = e, this) : ""
            }, contents: function () {
                var e = this[0];
                return e ? d(e.contentDocument || Array.prototype.slice.call(e.childNodes)) : d()
            }, val: function () {
                return this[0].value.trim()
            }, focus: function () {
                return this.forEach(function (e) {
                    e.focus()
                })
            }, parent: function () {
                var e = this[0];
                return d(e ? e.parentElement : e)
            }, equal: function (e) {
                return 1 === e.nodeType ? this[0] === e : this[0] === e[0]
            }, before: function (e) {
                return e.insertBefore(this)
            }, after: function (e) {
                return e.insertAfter(this)
            }, insertBefore: function (e) {
                var t = d(e), n = t[0];
                return n ? this.forEach(function (e) {
                    var t = n.parentNode;
                    t && t.insertBefore(e, n)
                }) : this
            }, insertAfter: function (e) {
                var t = d(e), n = t[0];
                return n ? this.forEach(function (e) {
                    var t = n.parentNode;
                    t && (t.lastChild === n ? t.appendChild(e) : t.insertBefore(e, n.nextSibling))
                }) : this
            }, is: function (e) {
                return "string" == typeof e ? this.length > 0 && c(this[0], e) : e && this.selector === e.selector
            }, wrap: function (e) {
                return this.forEach(function (t) {
                    "string" == typeof e ? d(t).before(e = d(e)) : d(t).before(e), e.append(d(t))
                })
            }, unwrap: function () {
                return this.forEach(function (e) {
                    d(e).parent().replace(d(e))
                })
            }, unpack: function () {
                return this.forEach(function (e) {
                    e = d(e), e.contents().forEach(function (t) {
                        e.before(d(t))
                    }), e.remove()
                })
            }
        };
        var ie = {
                PLACE_HOLDER: "PLACE_HOLDER",
                UPLOADING: "img-uploading-status",
                UPLOADING_PANEL: "image-upload-status-panel",
                UPLOADING_ICON: "uploading-icon",
                UPLOAD_CANCER_BTN: "upload-btn-cancel",
                UPLOAD_RETRY_BTN: "upload-btn-retry",
                UPLOADING_MSG: "upload-error-msg",
                IMG_CONTAINER: "image-package",
                IMG_TITLE: "image-caption",
                VIDEO_CONTAINER: "video-package",
                VIDEO_DESCRIPTION: "video-description"
            }, le = {
                ERROR: "error",
                CAPTRUE: "CAPTRUE",
                DRAG_ENTER: "dragenter",
                DRAG_LEAVE: "dragleave",
                DROP: "drop",
                HTML_CONTENT_CHANGE: "contentChange",
                IMG_UPLOAD: "imageUpload",
                ALLIMG_UPLOADED: "AllImgUploaded",
                KEY_DOWN: "KEY_DOWN",
                KEY_UP: "KEY_UP",
                TAB_KEY_DOWN: "TAB_KEY_DOWN",
                TAB_KEY_UP: "TAB_KEY_UP",
                DEL_KEY_DOWN: "DEL_KEY_DOWN",
                DEL_KEY_UP: "DEL_KEY_UP",
                ENTER_KEY_DOWN: "ENTER_KEY_DOWN",
                ENTER_KEY_UP: "ENTER_KEY_UP"
            }, se = function () {
                return function () {
                }
            }, ce = se,
            ue = ["address", "article", "aside", "audio", "blockquote", "canvas", "dd", "div", "dl", "fieldset", "figcaption", "figure", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "header", "hgroup", "hr", "noscript", "ol", "output", "p", "pre", "section", "table", "thead", "tfoot", "tbody", "tr", "ul", "video", "li", "legend"],
            de = ["blockquote", "pre", "code", "p", "div", "ul", "ol", "li", "br", "hr", "h1", "h2", "h3", "h4", "h5", "h6", "img", "a", "b", "i", "u", "del", "strike", "strong", "em"],
            fe = {
                ua: navigator.userAgent, isWebkit: function () {
                    return /webkit/i.test(this.ua)
                }, isIE: function () {
                    return "ActiveXObject" in window
                }
            }, Ae = (ce("Command"), function () {
                function e(t) {
                    te(this, e), this.editor = t, this.donotCaptureCommandList = ["undo", "redo"], this.bindEvent()
                }

                return ne(e, [{
                    key: "bindEvent", value: function () {
                        var e = this.editor, t = e.selection, n = e.$editElem, o = e.imgUploader;
                        n.on("click", "." + ie.UPLOAD_CANCER_BTN, function (e) {
                            var t = d(e.target || e.srcElement).data("index"), n = d("." + ie.IMG_CONTAINER + "-" + t);
                            o.uploadDataCache[t] = null, n.remove()
                        }), n.on("click", "." + ie.UPLOAD_RETRY_BTN, function (e) {
                            var n = d(e.target || e.srcElement).data("index"), a = d("." + ie.IMG_CONTAINER + "-" + n),
                                r = a.find("." + ie.IMG_TITLE);
                            t.setCursorInElem(r), o.beginUpload({id: n})
                        })
                    }
                }, {
                    key: "exec", value: function (e, t) {
                        var n = this.editor, o = n.selection, a = this.donotCaptureCommandList.indexOf(e) >= 0;
                        if (!a && !o.isValidEditSelection()) return null;
                        if (!o.getRange()) return null;
                        var r = void 0, i = "_" + e;
                        return this[i] ? (r = this[i](t), o.saveRange(), o.restoreSelection()) : o.isInsideMediaBox() ? o.restoreSelection() : (o.restoreSelection(), r = this.execCommand(e, t), o.saveRange()), n.handleHtmlChange(!1), a || n.emit(le.CAPTRUE), r
                    }
                }, {
                    key: "_insertHTML", value: function (e) {
                        var t = this.editor, n = t.selection.getRange();
                        (/^<.+>$/.test(e) || fe.isWebkit()) && (this.queryCommandSupported("insertHTML") ? this.execCommand("insertHTML", e) : n.insertNode ? (n.deleteContents(), n.insertNode(d(e)[0])) : n.pasteHTML && n.pasteHTML(e))
                    }
                }, {
                    key: "_insertElem", value: function (e) {
                        this.editor.selection.insertElem(e)
                    }
                }, {
                    key: "_insertImgs", value: function (e) {
                        for (var t = e.images, n = this, o = this.editor, a = o.imgUploader, r = 0; r < t.length; r++) {
                            var i = t[r], l = i.url, s = i.file;
                            s && a.checkImgFile(s) ? n.exec("insertImg", {
                                file: s,
                                title: s.name,
                                islast: r == t.length - 1
                            }) : l && n.exec("insertImg", {url: l, islast: r == t.length - 1})
                        }
                    }
                }, {
                    key: "_insertImg", value: function (e) {
                        var t = e.url, n = void 0 === t ? "" : t, o = e.file, a = e.title,
                            r = void 0 === a ? "image.png" : a, i = e.width, l = void 0 === i ? "auto" : i, s = e.height,
                            c = void 0 === s ? "auto" : s, u = e.minWidth, d = void 0 === u ? 0 : u, f = e.minHeight,
                            A = void 0 === f ? 0 : f, p = e.$imgPlaceHolderElem, h = void 0 === p ? null : p, g = e.islast,
                            m = this.editor, v = m.config, E = m.selection, C = m.imgUploader;
                        if ((o || n) && (!o || C.checkImgFile(o))) {
                            var N = v.jianshuImgUrlRegex.test(n);
                            N && (n = n.replace(/^http:/, window.location.protocol)), o || (A = "200px", d = "200px");
                            var T = C.getNewUploadId(), w = b(n, r, T, l, c, d, A, !N),
                                y = (w.find("." + ie.IMG_TITLE), {id: T});
                            if (o ? y.file = o : y.url = n, !N) {
                                var I = _(n, T);
                                w.append(I)
                            }
                            if (h) h.replace(w); else {
                                var x = E.getSelectionEndTopContainerElem();
                                "P" === x.getNodeName() && E.breakOnePtoTwoP(null, !1, !1), w.insertAfter(x)
                            }
                            if (N) g && m.emit(le.ALLIMG_UPLOADED); else {
                                if (!o) return C.beginUpload(y, g);
                                var k = new FileReader;
                                k.readAsDataURL(o), k.onload = function (e) {
                                    var t = e.target.result;
                                    return w.find("img").attr("src", t), C.beginUpload(y, g)
                                }
                            }
                        }
                    }
                }, {
                    key: "_removeLink", value: function () {
                        var e = this.editor, t = e.selection, n = t.getCurrentLinkElem();
                        n.data("fake") || n.unpack()
                    }
                }, {
                    key: "_insertLink", value: function (e) {
                        var t = e.url, n = e.text, o = this.editor, a = o.selection, r = a.getSelectionContainerElem();
                        t = g(t);
                        var i = d("<a href='" + t + "' target='_blank'>" + (n || t) + "</a>");
                        "A" === r.getNodeName() ? r.replace(i) : this._insertElem(i), a.setCursorAfterElem(i)
                    }
                }, {
                    key: "_insertTitle", value: function (e) {
                        this.editor.selection.toggleBlockTag("H" + e)
                    }
                }, {
                    key: "_insertBlockquote", value: function () {
                        var e = this.editor, t = e.selection;
                        return t.isInsideMediaBox() ? null : (t.toggleBlockTag("BLOCKQUOTE"), null)
                    }
                }, {
                    key: "_insertHRule", value: function () {
                        var e = this.editor, t = e.selection, n = t.getSelectionEndTopContainerElem(), o = d("<hr>"),
                            a = d("<p><br></p>");
                        o.insertAfter(n), o[0].nextElementSibling ? t.setCursorInElem(o.next()) : (a.insertAfter(o), t.setCursorInElem(a))
                    }
                }, {
                    key: "_insertVideo", value: function () {
                        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, t = this.editor,
                            n = t.selection, o = n.getSelectionEndTopContainerElem(), a = E(e);
                        a.insertAfter(o), n.setCursorInElem(a.find("." + ie.VIDEO_DESCRIPTION))
                    }
                }, {
                    key: "_undo", value: function () {
                        this.editor.history.undo()
                    }
                }, {
                    key: "_redo", value: function () {
                        this.editor.history.redo()
                    }
                }, {
                    key: "execCommand", value: function (e, t) {
                        document.execCommand(e, !1, t)
                    }
                }, {
                    key: "queryCommandValue", value: function (e) {
                        return document.queryCommandValue(e)
                    }
                }, {
                    key: "queryCommandState", value: function (e) {
                        return document.queryCommandState(e)
                    }
                }, {
                    key: "queryCommandSupported", value: function (e) {
                        return document.queryCommandSupported(e)
                    }
                }]), e
            }()), pe = {ELEMENT_NODE: 1, TEXT_NODE: 3, CDataSection: 4, Comment: 8}, he = function () {
                function e(t) {
                    te(this, e), this.editor = t
                }

                return ne(e, [{
                    key: "newPlaceHolder", value: function () {
                        return d("<span>").addClass(ie.PLACE_HOLDER)
                    }
                }, {
                    key: "getSelectionContainerElem", value: function (e) {
                        var t = void 0;
                        return e ? (t = e.commonAncestorContainer, d(t.nodeType === pe.ELEMENT_NODE ? t : t.parentNode)) : null
                    }
                }, {
                    key: "getSelectionStartElem", value: function (e) {
                        var t = void 0;
                        return e ? (t = e.startContainer, d(t.nodeType === pe.ELEMENT_NODE ? t : t.parentNode)) : null
                    }
                }, {
                    key: "getSelectionEndElem", value: function (e) {
                        var t = void 0;
                        return e ? (t = e.endContainer, d(t.nodeType === pe.ELEMENT_NODE ? t : t.parentNode)) : null
                    }
                }, {
                    key: "getSelectionEndTopContainerElem", value: function (e) {
                        for (var t = this.editor, n = t.$editElem, o = e.endContainer; !d(o).equal(n) && !d(o.parentNode).equal(n) && o.parentNode;) o = o.parentNode;
                        return d(o)
                    }
                }, {
                    key: "getTopContainerByNode", value: function (e) {
                        for (var t = this.editor, n = t.$editElem, o = e; !d(o.parentNode).equal(n) && o.parentNode;) o = o.parentNode;
                        return d(o)
                    }
                }, {
                    key: "isCharacterDataNode", value: function (e) {
                        var t = e.nodeType;
                        return t === pe.TEXT_NODE || t === pe.CDataSection || t === pe.Comment
                    }
                }, {
                    key: "getTextNodes", value: function (e) {
                        var t = [];
                        if (!e) return t;
                        3 === e.nodeType && t.push(e);
                        var n = e.childNodes;
                        for (var o in n) 3 === n[o].nodeType ? t.push(n[o]) : t = t.concat(this.getTextNodes(n[o]));
                        return t
                    }
                }, {
                    key: "getReverseTextNodes", value: function (e) {
                        var t = [];
                        if (!e) return t;
                        3 === e.nodeType && t.push(e);
                        for (var n = e.childNodes.length - 1; n >= 0; n--) {
                            var o = e.childNodes[n];
                            3 === o.nodeType ? t.push(o) : t = t.concat(this.getReverseTextNodes(o))
                        }
                        return t
                    }
                }, {
                    key: "getStartNodeFromNodes", value: function (e, t) {
                        var n = this.getTextNodes(e), o = null;
                        return n.map(function (e) {
                            return t.isEqualNode(e) && (o = e), null
                        }), o
                    }
                }, {
                    key: "getEndNodeFromNodes", value: function (e, t) {
                        var n = this.getReverseTextNodes(e), o = void 0;
                        return n.map(function (e) {
                            return t.isEqualNode(e) && (o = e), null
                        }), o
                    }
                }, {
                    key: "findNewRange", value: function (e, t) {
                        var n = re(t, 2), o = n[0], a = n[1];
                        return [this.getStartNodeFromNodes(e, o), this.getEndNodeFromNodes(e, a)]
                    }
                }, {
                    key: "getCurrentParagraph", value: function (e) {
                        return A(e.commonAncestorContainer)
                    }
                }, {
                    key: "getSelectedTopNodes", value: function (e) {
                        for (var t = this.getTopContainerByNode(e.startContainer), n = this.getTopContainerByNode(e.endContainer), o = []; !t.equal(n);) o.push(t[0]), t = t.next();
                        return o.push(n[0]), o
                    }
                }, {
                    key: "detectHasSurrounded", value: function (e, t) {
                        var n = !0;
                        return e.map(function (e) {
                            return p(e) && d(e).getNodeName() !== t && (n = !1), null
                        }), n
                    }
                }, {
                    key: "toggleBlockTag", value: function (e, t) {
                        var n = this.getSelectedTopNodes(t);
                        0 !== n.length && (this.detectHasSurrounded(n, e) ? this.removeSurroundBlockTag(n, e, t) : this.surroundBlockTag(n, e, t))
                    }
                }, {
                    key: "removeSurroundBlockTag", value: function (e, t) {
                        var n = this.editor, o = n.selection, a = this.newPlaceHolder();
                        d(e[0]).before(a);
                        var r = void 0, i = void 0, l = void 0;
                        ["PRE", "BLOCKQUOTE"].indexOf(t) > -1 ? (e.map(function (e) {
                            if (e = d(e), "BLOCKQUOTE" === e.getNodeName()) {
                                e.children().forEach(function (t) {
                                    e.before(d(t)), r || (r = t), i = t
                                }), e.remove()
                            }
                            return null
                        }), o.applyRange({
                            startContainer: r,
                            endContainer: i,
                            startOffset: 0,
                            endOffset: d(i).contents().length
                        })) : /H\d/i.test(t) && (e.map(function (e) {
                            return e = d(e), e.getNodeName() === t ? (l = d("<p>"), l.append(e.contents()), e.replace(l), r || (r = l[0]), i = l[0]) : (r || (r = e[0]), i = e[0]), null
                        }), o.applyRange({
                            startContainer: r,
                            startOffset: 0,
                            endContainer: i,
                            endOffset: d(i).contents().length
                        })), a.remove()
                    }
                }, {
                    key: "surroundBlockTag", value: function (e, t) {
                        var n = this.editor, o = n.selection, a = this.newPlaceHolder();
                        d(e[0]).before(a);
                        var r = void 0, i = void 0, l = e.length, s = !1, c = d("<" + t + ">");
                        if (["PRE", "BLOCKQUOTE"].indexOf(t) > -1) {
                            for (var u = 0; u < l; u++) {
                                var f = d(e[u]);
                                if (i = f[0], h(f[0])) c.html() && a.replace(c), c = d("<" + t + ">"), s = !0; else if ("BLOCKQUOTE" === f.getNodeName()) {
                                    s && f.before(a), s = !1;
                                    var A = f.children();
                                    A.forEach(function (e) {
                                        r || (r = e), i = e, c.append(d(e))
                                    }), f.remove()
                                } else if (s && f.before(a), s = !1, "P" !== f.getNodeName()) {
                                    var p = d("<p>").html(f.html());
                                    r || (r = p[0]), i = p[0], c.append(p), f.remove()
                                } else c.append(f);
                                r || (r = f[0])
                            }
                            a.replace(c), o.applyRange({
                                startContainer: r,
                                startOffset: 0,
                                endContainer: i,
                                endOffset: d(i).contents().length
                            })
                        } else /H\d/i.test(t) && (e.map(function (e) {
                            if (h(e)) return s = !0, null;
                            if (s && d(e).before(a), ["PRE", "BLOCKQUOTE"].indexOf(d(e).getNodeName()) > -1) {
                                d(e).contents().forEach(function (e) {
                                    c = d("<" + t + ">"), c.html(d(e).html() || d(e).text()), a.before(c), r || (r = c[0])
                                })
                            } else c = d("<" + t + ">"), c.html(d(e).html() || d(e).text()), a.before(c);
                            return d(e).remove(), r || (r = c[0]), i = c[0], null
                        }), a.remove(), o.applyRange({
                            startContainer: r,
                            startOffset: 0,
                            endContainer: i,
                            endOffset: d(i).contents().length
                        }))
                    }
                }]), e
            }(), ge = navigator.userAgent, me = {
                isMozilla: function () {
                    return d("body").hasClass("mozilla") || ge.match(/(?:firefox|fxios)\/(\d+)/)
                }, lessThanIE8: function () {
                }, isEdge: function () {
                    return /Edge/.test(ge)
                }, isWebkit: function () {
                    return /webkit/i.test(ge)
                }, isIE: function () {
                    return d("body").hasClass("ie") || "ActiveXObject" in window
                }, canPasteImage: function () {
                    return window.navigator.userAgent.toLowerCase().indexOf("chrome") > 0 || window.navigator.userAgent.toLowerCase().indexOf("chromium")
                }, canUseSelection: function () {
                }, canInsertHTML: function () {
                }, isMac: function () {
                    return /(MacPPC|MacIntel|Mac_PowerPC|Macintosh|(Mac\sOS\sX))/.test(ge)
                }
            }, be = (ce("Selection"), function () {
                function e(t) {
                    te(this, e), this.editor = t, this.currentRange = null, this.doms = new he(t)
                }

                return ne(e, [{
                    key: "getRange", value: function () {
                        return this.currentRange
                    }
                }, {
                    key: "isCollapsed", value: function () {
                        return this.currentRange.collapsed
                    }
                }, {
                    key: "getSelectionLength", value: function () {
                        return this.currentRange.endOffset - this.currentRange.startOffset
                    }
                }, {
                    key: "isSelectionInEditor", value: function () {
                        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.getRange(),
                            t = this.editor, n = t.$editElem, o = this.getSelectionContainerElem(e);
                        return !!o && !!n.isContain(o)
                    }
                }, {
                    key: "saveRange", value: function (e) {
                        if (e) return void(this.currentRange = e);
                        var t = window.getSelection();
                        0 !== t.rangeCount && (e = t.getRangeAt(0), this.isSelectionInEditor(e) && (this.currentRange = e))
                    }
                }, {
                    key: "backupRange", value: function (e) {
                        e || (e = this.currentRange);
                        var t = this.editor, n = t.$editElem, o = this.doms, a = e.startContainer, r = e.startOffset,
                            i = e.endContainer, l = e.endOffset;
                        a === i && r === l ? d(i).after(o.newPlaceHolder()) : (d(a).before(o.newPlaceHolder()), d(i).after(o.newPlaceHolder()));
                        var s = t.$editElem.clone();
                        return n.find("." + ie.PLACE_HOLDER).remove(), {
                            collapsed: e.collapsed,
                            backupElem: s,
                            startOffset: e.startOffset,
                            endOffset: e.endOffset,
                            startContainer: d(e.startContainer).clone(),
                            endContainer: d(e.endContainer).clone()
                        }
                    }
                }, {
                    key: "applyRange", value: function (e) {
                        var t = this.editor, n = t.$editElem, o = document.createRange();
                        if (!e || !e.startContainer && !e.endContainer) return void o.selectNodeContents(n[0]);
                        try {
                            e.startContainer ? o.setStart(e.startContainer, e.startOffset || 0) : o.setStart(e.endContainer, 0)
                        } catch (e) {
                        }
                        try {
                            e.endContainer ? o.setEnd(e.endContainer, e.endOffset || 0) : o.setEnd(e.startContainer, d(e.startContainer).contents().length)
                        } catch (e) {
                        }
                        this.saveRange(o), this.restoreSelection()
                    }
                }, {
                    key: "getSelectionContainerElem", value: function () {
                        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.currentRange;
                        return this.doms.getSelectionContainerElem(e)
                    }
                }, {
                    key: "getSelectionStartElem", value: function () {
                        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.currentRange;
                        return this.doms.getSelectionStartElem(e)
                    }
                }, {
                    key: "getSelectionEndElem", value: function () {
                        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.currentRange;
                        return this.doms.getSelectionEndElem(e)
                    }
                }, {
                    key: "getSelectionEndTopContainerElem", value: function () {
                        return this.doms.getSelectionEndTopContainerElem(this.currentRange)
                    }
                }, {
                    key: "getCurrentParagraph", value: function () {
                        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.currentRange;
                        return this.doms.getCurrentParagraph(e)
                    }
                }, {
                    key: "getTopContainerByNode", value: function (e) {
                        return this.doms.getTopContainerByNode(e)
                    }
                }, {
                    key: "getSelectedTopElems", value: function () {
                        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.currentRange;
                        return this.doms.getSelectedTopElems(e)
                    }
                }, {
                    key: "isValidEditSelection", value: function () {
                        var e = this.editor, t = this.currentRange, n = t.endContainer;
                        return !(d(n).equal(e.$editElem) || !n.parentNode)
                    }
                }, {
                    key: "isSelectionEmpty", value: function () {
                        var e = this.currentRange;
                        return !(!e || !e.startContainer || e.startContainer !== e.endContainer || e.startOffset !== e.endOffset)
                    }
                }, {
                    key: "clearRange", value: function () {
                        if (!this.getRange().collapsed) {
                            var e = this.doms.newPlaceHolder();
                            this.insertElem(e, !0), this.saveRange()
                        }
                    }
                }, {
                    key: "restoreSelection", value: function () {
                        var e = this.currentRange, t = window.getSelection(), n = void 0;
                        t.rangeCount > 0 && (n = t.getRangeAt(0)), n && n.startContainer === e.startContainer && n.endContainer === e.endContainer && n.startOffset === e.startOffset && n.endOffset === e.endOffset ? this.saveRange(n) : (t.removeAllRanges(), t.addRange(e)), this.scrollToRange(), this.editor.focusNative()
                    }
                }, {
                    key: "createRangeByElem", value: function (e, t, n) {
                        if (e.length) {
                            var o = e[0], a = document.createRange();
                            n ? a.selectNodeContents(o) : a.selectNode(o), "boolean" == typeof t && a.collapse(t), this.saveRange(a)
                        }
                    }
                }, {
                    key: "scrollToRange", value: function (e) {
                    }
                }, {
                    key: "insertNode", value: function (e) {
                        this.currentRange.insertNode(e)
                    }
                }, {
                    key: "getTextNodes", value: function (e) {
                        return this.doms.getTextNodes(e[0])
                    }
                }, {
                    key: "selectNodeContents", value: function (e) {
                        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : document.createRange(),
                            n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
                        t && (t.selectNodeContents(e), "boolean" == typeof n && t.collapse(n), this.saveRange(t), this.restoreSelection())
                    }
                }, {
                    key: "selectElem", value: function (e) {
                        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : document.createRange();
                        t && (t.selectNode(e[0]), this.saveRange(t), this.restoreSelection())
                    }
                }, {
                    key: "setCursorInElem", value: function (e) {
                        this.createRangeByElem(e, !1, !0), this.restoreSelection()
                    }
                }, {
                    key: "setCursorBeforeElem", value: function (e) {
                        this.createRangeByElem(e, !0, !0), this.restoreSelection()
                    }
                }, {
                    key: "setCursorAfterElem", value: function (e) {
                        this.createRangeByElem(e, !1, !1), this.restoreSelection()
                    }
                }, {
                    key: "isInsideMediaBox", value: function () {
                        if (!this.currentRange) return !1;
                        var e = this.getSelectionEndTopContainerElem();
                        return e.hasClass(ie.IMG_CONTAINER) || e.hasClass(ie.VIDEO_CONTAINER)
                    }
                }, {
                    key: "isInMediaCaption", value: function () {
                        var e = this.editor.$editElem, t = this.getSelectionContainerElem(),
                            n = ie.IMG_TITLE + " " + ie.VIDEO_DESCRIPTION;
                        return !!t.findReverse(n, e)
                    }
                }, {
                    key: "jumpToPreLine", value: function (e) {
                        var t = e.pre();
                        "P" !== t.getNodeName() ? (t = d("<p><br></p>"), e.before(t)) : "" === t.text() && t.html("<br>"), this.setCursorInElem(t)
                    }
                }, {
                    key: "jumpToNextLine", value: function (e) {
                        var t = e.next();
                        "P" !== t.getNodeName() ? (t = d("<p><br></p>"), e.after(t)) : "" === t.text() && t.html("<br>"), this.setCursorInElem(t)
                    }
                }, {
                    key: "toggleBlockTag", value: function (e) {
                        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.currentRange;
                        this.doms.toggleBlockTag(e, t)
                    }
                }, {
                    key: "hasSelectLinkElem", value: function () {
                        return !this.getCurrentLinkElem().data("fake")
                    }
                }, {
                    key: "getCurrentLinkElem", value: function () {
                        var e = this.getSelectionContainerElem(), t = this.getRange(),
                            n = t.cloneContents() || document.createDocumentFragment(), o = d(n).find("a");
                        return "A" === e.getNodeName() ? e : o.length > 0 ? o : d("<a>").attr("href", "").data("fake", "true").html(d(n).text())
                    }
                }, {
                    key: "getCurrentLinkInfo", value: function () {
                        var e = this.getCurrentLinkElem();
                        return {url: e.attr("href"), text: e.text()}
                    }
                }, {
                    key: "insertElem", value: function (e, t) {
                        var n = this.getRange();
                        n.insertNode && (n.deleteContents(), n.insertNode(e[0]), t && this.setCursorInElem(e))
                    }
                }, {
                    key: "breakOnePtoTwoP", value: function (e) {
                        var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                            n = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
                        e || (e = this.getRange()), e.collapsed || e.deleteContents();
                        var o = this.getCurrentParagraph();
                        if (0 !== o.length && "" !== o.text().trim()) {
                            var a = o.contents().last(), r = this.getTextNodes(a);
                            if (r && r.length) {
                                var i = r[r.length - 1];
                                e.setEnd(i, i.length)
                            }
                            var l = d(e.cloneContents()), s = d("<p>");
                            l.length > 0 && s.append(l), (n || "" !== s.html()) && (e.deleteContents(), "" === o.html() && (me.isIE() ? o.html("") : o.html("<br>")), "" === s.html() && (me.isIE() ? s.html("") : s.html("<br>")), o.after(s), t && this.setCursorBeforeElem(s))
                        }
                    }
                }, {
                    key: "insertHtml", value: function (e) {
                        var t = d("<span>").html(e), n = d(t[0].lastChild);
                        this.insertElem(t), t.unpack(), this.setCursorAfterElem(n)
                    }
                }, {
                    key: "isInHeader", value: function () {
                        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.getRange();
                        return !!e.collapsed && 0 === e.startOffset
                    }
                }, {
                    key: "isInMediaCaptionHeader", value: function () {
                        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.getRange();
                        return !!this.isInHeader(e) && !!this.isInMediaCaption()
                    }
                }]), e
            }()), ve = {
                LEFT_KEY: 37,
                UP_KEY: 38,
                RIGHT_KEY: 39,
                DOWN_KEY: 40,
                ESC_KEY: 27,
                C_KEY: 67,
                R_KEY: 82,
                T_KEY: 84,
                Y_KEY: 89,
                Z_KEY: 90,
                S_KEY: 83,
                ENTER_KEY: 13,
                TAB_KEY: 9,
                BACK_KEY: 8,
                DEL_KEY: 46
            }, Ee = (ce("DeletekeyHandle"), ce("PasteHandle"), ce("DragHandle"), function () {
                function e(t) {
                    te(this, e), this.editor = t, this.bindEvent()
                }

                return ne(e, [{
                    key: "bindEvent", value: function () {
                        var e = this.editor, t = e.$editElem;
                        t.on("drop", function (n) {
                            t.removeClass("dragging-over");
                            var o = n.dataTransfer, a = [];
                            if (o.types && (a = [].map.call(o.types, function (e) {
                                return e
                            })), o && a.indexOf("Files") > -1) {
                                for (var r = [], i = o.files || [], l = i.length, s = 0; s < l; s++) {
                                    var c = i[s];
                                    c && r.push({file: c})
                                }
                                e.cmd.exec("insertImgs", {images: r})
                            }
                            e.emit(le.DROP, n), n.preventDefault(), t.focus()
                        });
                        var n = null;
                        t.on("dragenter", function (o) {
                            n = d(o.target || o.srcElement), t.addClass("dragging-over"), e.emit(le.DRAG_ENTER, o)
                        }), t.on("dragover", function (e) {
                            return e.preventDefault(), !1
                        }), t.on("dragleave", function (o) {
                            return !d(o.target || o.srcElement).equal(n) || (t.removeClass("dragging-over"), e.emit(le.DRAG_LEAVE, o), o.stopPropagation(), o.preventDefault(), !1)
                        })
                    }
                }]), e
            }()), _e = (ce("Text"), [ve.DOWN_KEY, ve.UP_KEY, ve.LEFT_KEY, ve.RIGHT_KEY]), Ce = [ve.T_KEY, ve.R_KEY],
            Ne = function () {
                function e(t) {
                    te(this, e), this.editor = t, this.bindEvent()
                }

                return ne(e, [{
                    key: "bindEvent", value: function () {
                        this.mouseHandle(), this.keyHandle(), this.clickhande(), this.dragHandle = new Ee(this.editor)
                    }
                }, {
                    key: "clickhande", value: function () {
                        var e = this.editor, t = e.$editElem, n = e.selection;
                        t.on("click", "." + ie.IMG_CONTAINER, function (e) {
                            var t = d(e.target || e.srcElement), o = this.find("." + ie.IMG_TITLE);
                            o.equal(t) || o.isContain(t) || n.selectElem(d(this).children().first())
                        }), t.on("click", "." + ie.VIDEO_CONTAINER, function (e) {
                            var t = d(e.target || e.srcElement), o = this.find("." + ie.VIDEO_DESCRIPTION);
                            o.equal(t) || o.isContain(t) || n.selectElem(d(this))
                        })
                    }
                }, {
                    key: "mouseHandle", value: function () {
                        var e = this, t = this.editor, n = t.$editElem, o = function () {
                            e.saveRangeRealTime()
                        };
                        n.on("mousedown", function () {
                            n.on("mouseleave", o)
                        }), n.on("mouseup", function () {
                            setTimeout(function () {
                                e.saveRangeRealTime()
                            }, 0), n.off("mouseleave", o)
                        })
                    }
                }, {
                    key: "keyHandle", value: function () {
                        var e = this, t = this.editor, n = t.selection, o = t.$editElem;
                        w(t), y(t), F(t), I(t);
                        var a = !1, r = !1, i = me.isMac();
                        t.isCompositionOn = !1, o.on("compositionstart", function () {
                            t.isCompositionOn = !0
                        }), o.on("compositionend", function () {
                            t.isCompositionOn = !1, e.triggerHtmlChangeEvent(a, r)
                        }), o.on("keydown", function (e) {
                            var o = e.keyCode, l = i ? e.metaKey : e.ctrlKey;
                            return _e.indexOf(o) >= 0 || (!!(l && Ce.indexOf(o) >= 0) || (r = o === ve.Z_KEY && l, a = o === ve.Y_KEY && l, r ? (e.preventDefault(), t.cmd.exec("undo"), !1) : a ? (e.preventDefault(), t.cmd.exec("redo"), !1) : e.keyCode === ve.DEL_KEY || e.keyCode === ve.BACK_KEY ? (t.emit(le.DEL_KEY_DOWN, e), !0) : n.isInsideMediaBox() && !n.isInMediaCaption() ? !(o !== ve.C_KEY || !l) || (o === ve.ENTER_KEY && t.emit(le.ENTER_KEY_DOWN, e), e.preventDefault(), !1) : e.keyCode === ve.ENTER_KEY ? (t.emit(le.ENTER_KEY_DOWN, e), !0) : (e.keyCode === ve.TAB_KEY && t.emit(le.TAB_KEY_DOWN, e), !0)))
                        }), o.on("keyup", function (n) {
                            var o = n.keyCode;
                            t.emit(le.KEY_UP, n), o !== ve.DEL_KEY && n.keyCode !== ve.BACK_KEY || t.emit(le.DEL_KEY_UP, n), o === ve.ENTER_KEY && (t.selection.scrollToRange(), t.emit(le.ENTER_KEY_UP, n), t.emit(le.CAPTRUE)), e.saveRangeRealTime(), e.triggerHtmlChangeEvent(a, r)
                        })
                    }
                }, {
                    key: "triggerHtmlChangeEvent", value: function (e, t) {
                        var n = this.editor;
                        n.isCompositionOn || e || t || n.handleHtmlChange(!0)
                    }
                }, {
                    key: "saveRangeRealTime", value: function () {
                        this.editor.selection.saveRange()
                    }
                }]), e
            }(), Te = (ce("History"), function () {
                function e(t) {
                    var n = this;
                    te(this, e), this.editor = t, this.curPos = -1, this.snapshootArray = [], this.MAX_HISTORY_LENGTH = 25, t.selection.getRange() && this.capture(), t.on(le.CAPTRUE, function () {
                        n.capture()
                    })
                }

                return ne(e, [{
                    key: "capture", value: function () {
                        var e = this.editor, t = e.selection, n = this.snapshootArray, o = e.getHtml(), a = void 0;
                        if (this.curPos >= 0) {
                            a = n[this.curPos].backupRange;
                            var r = a.backupElem.clone();
                            r.find("." + ie.PLACE_HOLDER).remove();
                            if (r.html() === o) return
                        }
                        if (!e.isCompositionOn) {
                            a = t.backupRange(), n.length = this.curPos + 1;
                            n.length >= this.MAX_HISTORY_LENGTH && (n.shift(), this.curPos--), this.curPos++, this.snapshootArray.push({backupRange: a})
                        }
                    }
                }, {
                    key: "undo", value: function () {
                        this.canUndo() && this.setEditorContent(this.snapshootArray[--this.curPos])
                    }
                }, {
                    key: "redo", value: function () {
                        this.canRedo() && this.setEditorContent(this.snapshootArray[++this.curPos])
                    }
                }, {
                    key: "canUndo", value: function () {
                        return this.curPos > 0
                    }
                }, {
                    key: "canRedo", value: function () {
                        return this.curPos < this.snapshootArray.length - 1
                    }
                }, {
                    key: "setEditorContent", value: function (e) {
                        var t = e.backupRange, n = this.editor, o = n.selection, a = n.$editElem;
                        a.html("");
                        var r = t.backupElem;
                        a.append(r.clone().children());
                        var i = a.find("." + ie.PLACE_HOLDER), l = void 0, s = void 0, c = 0, u = void 0;
                        i.length > 1 ? (l = i[0].nextSibling, s = i[1].previousSibling, u = d(s).contents().length) : 1 === i.length && (l = i[0].previousSibling, s = i[0].previousSibling, c = t.startOffset, u = t.endOffset), i.remove(), o.applyRange({
                            collapsed: t.collapsed,
                            startContainer: l,
                            startOffset: c,
                            endContainer: s,
                            endOffset: u
                        })
                    }
                }]), e
            }()), we = {
                FILE_NOT_EXIST: 1,
                FILE_NOT_SUPPORT: 2,
                FILE_TYPE_ERROR: 3,
                FILE_TOO_LARGE: 4,
                NET_WORK_ERROR: 5,
                VIDEO_URL_INVALID: 6,
                OTHER_ERROR: 99
            }, ye = (ce("ImagUpload"), function () {
                function e(t) {
                    te(this, e), this.editor = t, this.upLoadId = 0, this.uploadDataCache = {}, t.imageUploadSuccess = this.imageUploadSuccess.bind(this), t.imageUploadFail = this.imageUploadFail.bind(this), t.on(le.ALLIMG_UPLOADED, function (e) {
                        var n = t.$editElem.find("." + ie.IMG_CONTAINER);
                        n.length && t.selection.setCursorInElem(n[n.length - 1].querySelectorAll("." + ie.IMG_TITLE), !0)
                    })
                }

                return ne(e, [{
                    key: "checkImgFile", value: function (e) {
                        var t = this.editor, n = t.config;
                        return e ? n.imageTypeReg.test(e.type) ? !(e.size > n.fileLimitSize) || (t.emit(le.ERROR, {
                            code: we.FILE_TOO_LARGE,
                            file: e
                        }), !1) : (t.emit(le.ERROR, {
                            code: we.FILE_TYPE_ERROR,
                            file: e
                        }), !1) : (t.emit(le.ERROR, {code: we.FILE_NOT_EXIST, file: e}), !1)
                    }
                }, {
                    key: "replaceImgUrl", value: function (e, t, n) {
                        var o = this.editor, a = new Image;
                        a.onload = function () {
                            e.attr("src", t), n(), o.handleHtmlChange(!0)
                        }, a.src = t
                    }
                }, {
                    key: "getNewUploadId", value: function () {
                        return this.upLoadId = this.upLoadId + 1, this.upLoadId
                    }
                }, {
                    key: "beginUpload", value: function (e, t) {
                        var n = e.id, o = e.file, a = e.url, r = this.uploadDataCache[n];
                        r ? (o = r.file, a = r.url) : this.uploadDataCache[n] = {id: n, file: o, url: a};
                        var i = this.editor, l = i.$editElem, s = l.find("." + ie.IMG_CONTAINER + "-" + n);
                        if (s.length) {
                            var c = s.find("." + ie.UPLOADING_PANEL), u = c.find("." + ie.UPLOADING_ICON),
                                d = c.find("." + ie.UPLOAD_RETRY_BTN);
                            c.find("." + ie.UPLOADING_MSG).html("正在上传..."), u.show(), d.hide(), c.show();
                            var f = {id: n, file: o, url: a, islast: t};
                            i.emit(le.IMG_UPLOAD, f)
                        }
                    }
                }, {
                    key: "imageUploadSuccess", value: function (e) {
                        var t = e.id, n = e.data, o = e.islast, a = this.editor, r = a.$editElem,
                            i = r.find("." + ie.IMG_CONTAINER + "-" + t);
                        if (i.length) {
                            this.uploadDataCache[t] = null;
                            var l = i.find(".uploaded-img"), s = i.find("." + ie.UPLOADING_PANEL);
                            this.replaceImgUrl(l, n.url, function () {
                                i.removeAttr("data-index"), i.removeAttr("data-uploaddata"), i.removeClass(ie.IMG_CONTAINER + "-" + t), s.remove(), i.removeClass(ie.UPLOADING), o && a.emit(le.ALLIMG_UPLOADED)
                            })
                        }
                    }
                }, {
                    key: "imageUploadFail", value: function (e) {
                        var t = e.id, n = e.data;
                        n.msg && n.msg.length > 13 && (n.msg = n.msg.substring(0, 13) + "...");
                        var o = this.editor, a = o.$editElem, r = n.code, i = a.find("." + ie.IMG_CONTAINER + "-" + t);
                        if (i.length) {
                            var l = i.find("." + ie.UPLOADING_PANEL), s = l.find("." + ie.UPLOAD_RETRY_BTN),
                                c = l.find("." + ie.UPLOADING_MSG);
                            switch (s.show(), r) {
                                case we.FILE_TOO_LARGE:
                                    c.html(n.msg || "文件过大"), s.hide();
                                    break;
                                case we.FILE_TYPE_ERROR:
                                    c.html(n.msg || "文件类型不对"), s.hide();
                                    break;
                                case we.NET_WORK_ERROR:
                                    c.html(n.msg || "网络错误");
                                    break;
                                default:
                                    c.html(n.msg || "未知错误")
                            }
                        }
                    }
                }]), e
            }()), Ie = function () {
                function e() {
                    te(this, e), this.events = {}
                }

                return ne(e, [{
                    key: "on", value: function (e, t) {
                        var n = this.events[e];
                        n || (n = [], this.events[e] = n), n.indexOf(t) < 0 && n.push(t)
                    }
                }, {
                    key: "off", value: function (e, t) {
                        var n = this.events[e] || [], o = n.indexOf(t), a = o > -1 ? o : 0, r = t ? 1 : n.length;
                        n.splice(a, r)
                    }
                }, {
                    key: "offAll", value: function () {
                        this.events = {}
                    }
                }, {
                    key: "emit", value: function (e) {
                        var t = this.events[e];
                        if (t) {
                            for (var n = arguments.length, o = Array(n > 1 ? n - 1 : 0), a = 1; a < n; a++) o[a - 1] = arguments[a];
                            for (var r = 0; r < t.length; r += 1) "function" == typeof t[r] && t[r].apply(null, o)
                        }
                    }
                }]), e
            }(), xe = (ce("Clear"), function () {
                function e(t) {
                    te(this, e), this.editor = t
                }

                return ne(e, [{
                    key: "clearTmpElement", value: function () {
                        var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0], t = this.editor,
                            n = t.selection, o = n.getRange(), a = t.$editElem, r = a.contents(), i = !1;
                        r.forEach(function (t) {
                            if ("BR" === d(t).getNodeName()) return d(t).remove(), void(i = !0);
                            if (3 === t.nodeType || ["B", "A", "I", "STRIKE"].indexOf((t.tagName || "").toUpperCase()) > 0) d(t).wrap(d("<p>")), i = !0; else if (!p(t) && !h(t)) {
                                if (!e && o && o.startContainer === o.endContainer && o.startContainer === t) {
                                    var a = d(t).contents().unwrap().wrap("<p></p>");
                                    n.setCursorInElem(a.parent()), o = n.getRange()
                                } else d("<p></p>").html(d(t).html()).insertAfter(d(t)), d(t).remove();
                                i = !0
                            }
                        }), a.find("[style]").forEach(function (e) {
                            var t = n.getTopContainerByNode(e);
                            e = d(e), t.hasClass(ie.IMG_CONTAINER) || t.hasClass(ie.VIDEO_CONTAINER) || e.removeAttr("style"), e.is("span") && !e.attr("class") && (e.unpack(), i = !0)
                        }), a.find("br[type='_moz']").removeAttr("type"), a.find("p").forEach(function (e) {
                            e = d(e), 0 === e.html().length ? me.isIE() || e.remove() : /^\s*$/.test(e.text()) && e.children().length < 1 && (me.isIE() ? e.html("") : e.html("<br>"));
                            var t = e.html();
                            if ("" !== t && "<br>" !== t) {
                                var n = e.contents();
                                n.length && ("BR" === n.last().getNodeName() ? n.last().remove() : "BR" === n.first().getNodeName() && n.first().remove())
                            }
                        }), e && a.find("a").forEach(function (e) {
                            if (e = d(e), "" === e.text().trim()) return void e.remove();
                            "_blank" !== e.attr("target") && e.attr("target", "_blank")
                        }), a.find("blockquote").forEach(function (e) {
                            e = d(e), e.contents().forEach(function (e) {
                                e = d(e), "P" !== e.getNodeName() && (e.text().length < 1 && e.contents() < 1 ? e.remove() : e.wrap("<p></p>"))
                            }), 0 === e.children().length && e.remove()
                        }), this.clearMediaElement(), !e && i && n.applyRange(o)
                    }
                }, {
                    key: "clearMediaElement", value: function () {
                        var e = this.editor, t = e.selection, n = e.$editElem;
                        n.find("." + ie.IMG_CONTAINER).forEach(function (e) {
                            var n = t.getSelectionContainerElem();
                            e = d(e);
                            var o = n === e, a = t.getTopContainerByNode(e[0]);
                            if (a.equal(e) || a.after(e), 0 === e.find("img").length) return void e.remove();
                            var r = [];
                            e.contents().forEach(function (e) {
                                e = d(e);
                                var t = e.getNodeName();
                                "BR" === t ? e.remove() : ["IMG", "DIV"].indexOf(t) < 0 && (e.text().length && r.push(e.text().trim()), e.remove())
                            });
                            var i = e.find("." + ie.IMG_TITLE);
                            0 === i.length && (i = m(), e.append(i)), i.before(d("<br>")), r.length && i.html("" + i.html() + r.join("")), o && t.setCursorInElem(i)
                        }), n.find("." + ie.VIDEO_CONTAINER).forEach(function (e) {
                            var n = t.getSelectionContainerElem();
                            e = d(e);
                            var o = n === e, a = t.getTopContainerByNode(e[0]);
                            if (a.equal(e) || a.after(e), 0 === e.find(".player").length) return void e.remove();
                            var r = [];
                            e.contents().forEach(function (e) {
                                e = d(e);
                                var t = e.getNodeName();
                                "BR" === t ? e.remove() : ["IMG", "DIV", "IFRAME"].indexOf(t) < 0 && (e.text().length && r.push(e.text().trim()), e.remove())
                            });
                            var i = e.find("." + ie.VIDEO_DESCRIPTION);
                            0 === i.length && (i = v(), e.append(i)), i.before(d("<br>")), r.length && i.html("" + i.html() + r.join("")), o && t.setCursorInElem(i)
                        })
                    }
                }, {
                    key: "getContent", value: function () {
                        var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0], t = this.editor,
                            n = t.$editElem;
                        if (this.preHtml === t.getHtml()) return this.editorContent;
                        d("." + ie.PLACE_HOLDER).forEach(function (e) {
                            e = d(e), "" !== e.html() ? e.unpack() : e.remove()
                        }), this.clearTmpElement(e);
                        var o = n.clone(!0), a = void 0;
                        o.find("p").forEach(function (e) {
                            var t = e.innerHTML;
                            t = t.replace(/\s+$/, ""), "<br>" !== t && (t = t.replace(/^<br>|<br>$/g, "")), e.innerHTML = t
                        }), o.find("img").forEach(function (e) {
                            var t = d(e), o = t.attr("src") || "", a = t.parent();
                            if (o.indexOf("file://") > -1 || o.indexOf("blob:") > -1 || o.indexOf("data:") > -1) return void(n.equal(a) ? t.remove() : a.remove());
                            if (o.match(/^http:\/\/(\w+\.)?qpic\.cn/)) {
                                var r = o.split("?");
                                r.length > 1 && (r[2] = [], r[1].split("&").map(function (e) {
                                    return "tp=webp" !== e && r[2].push(e), null
                                }), r[2].length > 0 && (r[1] = r[2].join("&"), r = r[0] + "?" + r[1], t.attr("src", r)))
                            }
                            if (o = t.attr("src"), a.hasClass(ie.UPLOADING)) a.remove(); else if (!a.hasClass(ie.IMG_CONTAINER)) {
                                var i = b(o, "", null, null, null, null, null, !1);
                                n.equal(a) ? t.replace(i) : a.replace(i)
                            }
                        }), o.find("a").forEach(function (e) {
                            if (e = d(e), "" === e.text().trim()) return void e.remove();
                            "_blank" !== e.attr("target") && e.attr("target", "_blank")
                        }), o.find("." + ie.IMG_CONTAINER).forEach(function (e) {
                            var t = d(e).find("." + ie.IMG_TITLE);
                            t.length && "" === t.text().trim() && t.html("")
                        }), o.find("." + ie.VIDEO_CONTAINER).forEach(function (e) {
                            e = d(e), e.removeAttr("contenteditable"), e.removeAttr("flag-generated"), e.find(".player").remove()
                        }), a = o.contents();
                        for (var r = a.length - 1; r >= 0; r--) {
                            var i = d(a[r]);
                            if ("P" !== i.getNodeName() || 0 !== i.text().replace(/[\n ]/gi, "").length) break;
                            i.remove()
                        }
                        for (var l = 0; l < a.length; l++) {
                            var s = d(a[l]);
                            if ("P" !== s.getNodeName() || 0 !== s.text().replace(/[\n ]/gi, "").length) break;
                            s.remove()
                        }
                        return a = o.html(), a = a.replace(/<(\/?)(.*?)>/gi, function (e, t, n) {
                            return n = n.trim(), n.indexOf(" ") > 0 && (n = n.split(" ")[0]), n = n.toLowerCase(), de.indexOf(n) < 0 ? "" : e
                        }), o.html(a), this.preHtml = t.getHtml(), this.editorContent = o.html(), this.editorContent
                    }
                }]), e
            }()), ke = {
                imageTypeReg: /(.|\/)(jpe?g|png|gif)$/i,
                contentChangeDelay: 500,
                content: "<p><br></p>",
                autoFillParentSize: !0,
                videoFetchUrl: "http://www.jianshu.com/videos.json",
                fileLimitSize: 2097152,
                jianshuImgUrlRegex: /^(https?:)?\/\/(([\w-]+\.jianshu\.(io|com))|(jianshu\-(dev\.u|staging)\.qiniudn\.com))\//,
                availableVideoUrlRegex: /^https?:\/\/(?:[\w\.]*?\.(?:youku|tudou|qq|bilibili)\.com|[\w\.-]*?\.acgvideo\.com)\//i
            }, Se = (ce("Editor"), function (e) {
                function t(e, n) {
                    te(this, t);
                    var o = ae(this, (t.__proto__ || (0, B.default)(t)).call(this));
                    if (!e) throw new Error("please give a valid selector when create Dante Editor");
                    return o.selector = e, o.config = (0, $.default)({}, ke, n || {}), o.curOnChangeTimeoutId = 0, o.initDom(), o.initSelectionAPI(), o.initClear(), o.initUploaders(), o.initCommand(), o.initText(), o.initSelection(), o.initHistory(), o.curContent = o.clear.getContent(!0), o.focusNative(), o
                }

                return oe(t, e), ne(t, [{
                    key: "initClear", value: function () {
                        this.clear = new xe(this)
                    }
                }, {
                    key: "setConfig", value: function (e) {
                        this.config = (0, $.default)({}, this.config, e)
                    }
                }, {
                    key: "rebuildVideo", value: function () {
                        this.$editElem.find("." + ie.VIDEO_CONTAINER).forEach(function (e) {
                            e = d(e);
                            var t = {};
                            t.id = e.data("video-id") || "", t.url = e.data("video-url") || "", t.provider = e.data("video-provider") || "", t.cover_id = e.data("cover-uuid") || "";
                            var n = d(f(t));
                            e.prepend(n)
                        })
                    }
                }, {
                    key: "initDom", value: function () {
                        var e = this.config, t = this.selector, n = d(t);
                        this.$editContainerElem = n;
                        var o = T(e.content), a = d("<div>" + o + "</div>");
                        this.$editElem = a, this.rebuildVideo(), a.attr("contenteditable", "true"), e.autoFillParentSize && a.css("width", "100%").css("height", "100%").css("box-sizing", "border-box"), n.html(""), n.append(a), e.defaultTheme && (n.addClass("dante-editor-container"), a.addClass("dante-editor")), e.editorClass && a.addClass(e.editorClass)
                    }
                }, {
                    key: "handleHtmlChange", value: function (e) {
                        var t = this;
                        this.curOnChangeTimeoutId && clearTimeout(this.curOnChangeTimeoutId), this.curOnChangeTimeoutId = setTimeout(function () {
                            if (!t.isCompositionOn) {
                                var n = T(t.clear.getContent()), o = t.curContent;
                                n !== o && (t.curContent = n, t.emit(le.HTML_CONTENT_CHANGE, o, n), e && t.emit(le.CAPTRUE))
                            }
                        }, this.config.contentChangeDelay)
                    }
                }, {
                    key: "initCommand", value: function () {
                        this.cmd = new Ae(this)
                    }
                }, {
                    key: "initSelectionAPI", value: function () {
                        this.selection = new be(this)
                    }
                }, {
                    key: "initText", value: function () {
                        this.txt = new Ne(this)
                    }
                }, {
                    key: "initHistory", value: function () {
                        this.history = new Te(this)
                    }
                }, {
                    key: "initUploaders", value: function () {
                        this.imgUploader = new ye(this)
                    }
                }, {
                    key: "initSelection", value: function () {
                        var e = this.$editElem, t = e.children(), n = this.selection;
                        if (!t.length) return e.append(d("<p><br></p>")), void this.initSelection();
                        var o = t.first();
                        try {
                            if (o.hasClass(ie.IMG_CONTAINER)) n.setCursorInElem(o.find("." + ie.IMG_TITLE)); else if (o.hasClass(ie.VIDEO_CONTAINER)) n.setCursorInElem(o.find("." + ie.VIDEO_DESCRIPTION)); else if ("P" === o.getNodeName()) n.setCursorInElem(o); else {
                                var a = d("<p><br></p>");
                                e.append(a), n.setCursorInElem(a)
                            }
                        } catch (t) {
                            var r = d("<p><br></p>");
                            e.append(r), n.setCursorInElem(r)
                        }
                    }
                }, {
                    key: "getVideoCount", value: function () {
                        return this.$editElem.find("." + ie.VIDEO_CONTAINER).length
                    }
                }, {
                    key: "isUploadingImage", value: function () {
                        return this.$editElem.find("." + ie.UPLOADING).length > 0
                    }
                }, {
                    key: "getContent", value: function () {
                        return this.curContent || ""
                    }
                }, {
                    key: "getCurrentLinkInfo", value: function () {
                        return this.selection.getCurrentLinkInfo()
                    }
                }, {
                    key: "focusNative", value: function () {
                        this.$editElem.focus()
                    }
                }, {
                    key: "focus", value: function () {
                        this.selection.restoreSelection()
                    }
                }, {
                    key: "onEvent", value: function (e, t) {
                        this.on(e, t)
                    }
                }, {
                    key: "offEvent", value: function (e, t) {
                        this.off(e, t)
                    }
                }, {
                    key: "exec", value: function (e, t) {
                        return this.cmd.exec(e, t)
                    }
                }, {
                    key: "getHtml", value: function () {
                        return this.$editElem.html() || ""
                    }
                }, {
                    key: "getText", value: function () {
                        return this.$editElem.text() || ""
                    }
                }, {
                    key: "getWordNum", value: function () {
                        return this.getText().length
                    }
                }, {
                    key: "hasSelectLink", value: function () {
                        return this.selection.hasSelectLinkElem()
                    }
                }, {
                    key: "destroy", value: function () {
                        clearTimeout(this.curOnChangeTimeoutId), this.offAll(), this.$editContainerElem = null
                    }
                }]), t
            }(Ie));
        Se.Events = le, Se.Errors = we, Se.$ = d, n.default = Se
    }, A0uo: function (e, t, n) {
        var o = n("C871");
        "string" == typeof o && (o = [[e.i, o, ""]]);
        var a = {hmr: !0};
        a.transform = void 0, a.insertInto = void 0;
        n("MTIv")(o, a);
        o.locals && (e.exports = o.locals)
    }, A6CO: function (e, t, n) {
        var o = n("iiQK");
        "string" == typeof o && (o = [[e.i, o, ""]]);
        var a = {hmr: !0};
        a.transform = void 0, a.insertInto = void 0;
        n("MTIv")(o, a);
        o.locals && (e.exports = o.locals)
    }, AW9g: function (e, t) {
        e.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAMAAABEpIrGAAAAWlBMVEUAAAAwiB4wiB4xiB0xjB4xhx4yhx4zjx8xhx0xiR0whx0whx0wiB0xiB1JmyRCiisxiB0wiB4xhx0wiB0xiCE3iSSA/4Awhx0wiB4xhx4wiR4yiSAyih0whx2miU+GAAAAHXRSTlMA85qtKaCAGOxOyPvgwQcL0sWCeC8cAtnOu4phV1lham4AAACRSURBVDjL1c3rCoMwDIbhaKu11jmdhx2/+7/NOdKCoRY2GBs+fxroS0J7YZFg3w3GPGGk75nUhmkVaGzQMnCV4KKgJuHwj+BihDoKIp8FplycShZGQ2uzVecjeW2jbEvS3AM38u5AtdSSzuDC1Q4YKDIAOU8PoBELwmE44wdY8VWwDuhf7xXICkYMScSyJPqJJydOGY+9PtjNAAAAAElFTkSuQmCC"
    }, C871: function (e, t, n) {
        t = e.exports = n("FZ+f")(!1), t.push([e.i, "._3ZWln{display:none}._2y-qc{position:absolute;top:0;left:0;height:100%;width:100%;z-index:999}._2y-qc ._25kuI{position:absolute;top:50%;left:50%;-webkit-transform:translate(-50%,-50%);-ms-transform:translate(-50%,-50%);transform:translate(-50%,-50%)}._1aPDY{background-color:#f2f2f2}body.reader-night-mode ._1aPDY{background-color:#3d3d3d}", ""]), t.locals = {
            "loading-panel__none": "_3ZWln",
            "loading-panel": "_2y-qc",
            center: "_25kuI",
            "loading-panel-has-mask": "_1aPDY"
        }
    }, CGNb: function (e, t) {
        e.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAACXBIWXMAAAsTAAALEwEAmpwYAAAKTWlDQ1BQaG90b3Nob3AgSUNDIHByb2ZpbGUAAHjanVN3WJP3Fj7f92UPVkLY8LGXbIEAIiOsCMgQWaIQkgBhhBASQMWFiApWFBURnEhVxILVCkidiOKgKLhnQYqIWotVXDjuH9yntX167+3t+9f7vOec5/zOec8PgBESJpHmomoAOVKFPDrYH49PSMTJvYACFUjgBCAQ5svCZwXFAADwA3l4fnSwP/wBr28AAgBw1S4kEsfh/4O6UCZXACCRAOAiEucLAZBSAMguVMgUAMgYALBTs2QKAJQAAGx5fEIiAKoNAOz0ST4FANipk9wXANiiHKkIAI0BAJkoRyQCQLsAYFWBUiwCwMIAoKxAIi4EwK4BgFm2MkcCgL0FAHaOWJAPQGAAgJlCLMwAIDgCAEMeE80DIEwDoDDSv+CpX3CFuEgBAMDLlc2XS9IzFLiV0Bp38vDg4iHiwmyxQmEXKRBmCeQinJebIxNI5wNMzgwAABr50cH+OD+Q5+bk4eZm52zv9MWi/mvwbyI+IfHf/ryMAgQAEE7P79pf5eXWA3DHAbB1v2upWwDaVgBo3/ldM9sJoFoK0Hr5i3k4/EAenqFQyDwdHAoLC+0lYqG9MOOLPv8z4W/gi372/EAe/tt68ABxmkCZrcCjg/1xYW52rlKO58sEQjFu9+cj/seFf/2OKdHiNLFcLBWK8ViJuFAiTcd5uVKRRCHJleIS6X8y8R+W/QmTdw0ArIZPwE62B7XLbMB+7gECiw5Y0nYAQH7zLYwaC5EAEGc0Mnn3AACTv/mPQCsBAM2XpOMAALzoGFyolBdMxggAAESggSqwQQcMwRSswA6cwR28wBcCYQZEQAwkwDwQQgbkgBwKoRiWQRlUwDrYBLWwAxqgEZrhELTBMTgN5+ASXIHrcBcGYBiewhi8hgkEQcgIE2EhOogRYo7YIs4IF5mOBCJhSDSSgKQg6YgUUSLFyHKkAqlCapFdSCPyLXIUOY1cQPqQ28ggMor8irxHMZSBslED1AJ1QLmoHxqKxqBz0XQ0D12AlqJr0Rq0Hj2AtqKn0UvodXQAfYqOY4DRMQ5mjNlhXIyHRWCJWBomxxZj5Vg1Vo81Yx1YN3YVG8CeYe8IJAKLgBPsCF6EEMJsgpCQR1hMWEOoJewjtBK6CFcJg4Qxwicik6hPtCV6EvnEeGI6sZBYRqwm7iEeIZ4lXicOE1+TSCQOyZLkTgohJZAySQtJa0jbSC2kU6Q+0hBpnEwm65Btyd7kCLKArCCXkbeQD5BPkvvJw+S3FDrFiOJMCaIkUqSUEko1ZT/lBKWfMkKZoKpRzame1AiqiDqfWkltoHZQL1OHqRM0dZolzZsWQ8ukLaPV0JppZ2n3aC/pdLoJ3YMeRZfQl9Jr6Afp5+mD9HcMDYYNg8dIYigZaxl7GacYtxkvmUymBdOXmchUMNcyG5lnmA+Yb1VYKvYqfBWRyhKVOpVWlX6V56pUVXNVP9V5qgtUq1UPq15WfaZGVbNQ46kJ1Bar1akdVbupNq7OUndSj1DPUV+jvl/9gvpjDbKGhUaghkijVGO3xhmNIRbGMmXxWELWclYD6yxrmE1iW7L57Ex2Bfsbdi97TFNDc6pmrGaRZp3mcc0BDsax4PA52ZxKziHODc57LQMtPy2x1mqtZq1+rTfaetq+2mLtcu0W7eva73VwnUCdLJ31Om0693UJuja6UbqFutt1z+o+02PreekJ9cr1Dund0Uf1bfSj9Rfq79bv0R83MDQINpAZbDE4Y/DMkGPoa5hpuNHwhOGoEctoupHEaKPRSaMnuCbuh2fjNXgXPmasbxxirDTeZdxrPGFiaTLbpMSkxeS+Kc2Ua5pmutG003TMzMgs3KzYrMnsjjnVnGueYb7ZvNv8jYWlRZzFSos2i8eW2pZ8ywWWTZb3rJhWPlZ5VvVW16xJ1lzrLOtt1ldsUBtXmwybOpvLtqitm63Edptt3xTiFI8p0in1U27aMez87ArsmuwG7Tn2YfYl9m32zx3MHBId1jt0O3xydHXMdmxwvOuk4TTDqcSpw+lXZxtnoXOd8zUXpkuQyxKXdpcXU22niqdun3rLleUa7rrStdP1o5u7m9yt2W3U3cw9xX2r+00umxvJXcM970H08PdY4nHM452nm6fC85DnL152Xlle+70eT7OcJp7WMG3I28Rb4L3Le2A6Pj1l+s7pAz7GPgKfep+Hvqa+It89viN+1n6Zfgf8nvs7+sv9j/i/4XnyFvFOBWABwQHlAb2BGoGzA2sDHwSZBKUHNQWNBbsGLww+FUIMCQ1ZH3KTb8AX8hv5YzPcZyya0RXKCJ0VWhv6MMwmTB7WEY6GzwjfEH5vpvlM6cy2CIjgR2yIuB9pGZkX+X0UKSoyqi7qUbRTdHF09yzWrORZ+2e9jvGPqYy5O9tqtnJ2Z6xqbFJsY+ybuIC4qriBeIf4RfGXEnQTJAntieTE2MQ9ieNzAudsmjOc5JpUlnRjruXcorkX5unOy553PFk1WZB8OIWYEpeyP+WDIEJQLxhP5aduTR0T8oSbhU9FvqKNolGxt7hKPJLmnVaV9jjdO31D+miGT0Z1xjMJT1IreZEZkrkj801WRNberM/ZcdktOZSclJyjUg1plrQr1zC3KLdPZisrkw3keeZtyhuTh8r35CP5c/PbFWyFTNGjtFKuUA4WTC+oK3hbGFt4uEi9SFrUM99m/ur5IwuCFny9kLBQuLCz2Lh4WfHgIr9FuxYji1MXdy4xXVK6ZHhp8NJ9y2jLspb9UOJYUlXyannc8o5Sg9KlpUMrglc0lamUycturvRauWMVYZVkVe9ql9VbVn8qF5VfrHCsqK74sEa45uJXTl/VfPV5bdra3kq3yu3rSOuk626s91m/r0q9akHV0IbwDa0b8Y3lG19tSt50oXpq9Y7NtM3KzQM1YTXtW8y2rNvyoTaj9nqdf13LVv2tq7e+2Sba1r/dd3vzDoMdFTve75TsvLUreFdrvUV99W7S7oLdjxpiG7q/5n7duEd3T8Wej3ulewf2Re/ranRvbNyvv7+yCW1SNo0eSDpw5ZuAb9qb7Zp3tXBaKg7CQeXBJ9+mfHvjUOihzsPcw83fmX+39QjrSHkr0jq/dawto22gPaG97+iMo50dXh1Hvrf/fu8x42N1xzWPV56gnSg98fnkgpPjp2Snnp1OPz3Umdx590z8mWtdUV29Z0PPnj8XdO5Mt1/3yfPe549d8Lxw9CL3Ytslt0utPa49R35w/eFIr1tv62X3y+1XPK509E3rO9Hv03/6asDVc9f41y5dn3m978bsG7duJt0cuCW69fh29u0XdwruTNxdeo94r/y+2v3qB/oP6n+0/rFlwG3g+GDAYM/DWQ/vDgmHnv6U/9OH4dJHzEfVI0YjjY+dHx8bDRq98mTOk+GnsqcTz8p+Vv9563Or59/94vtLz1j82PAL+YvPv655qfNy76uprzrHI8cfvM55PfGm/K3O233vuO+638e9H5ko/ED+UPPR+mPHp9BP9z7nfP78L/eE8/sl0p8zAAAAIGNIUk0AAHolAACAgwAA+f8AAIDpAAB1MAAA6mAAADqYAAAXb5JfxUYAAAbOSURBVHja7Jd9bFV3Gcc/v3PO7bkv5d5CKfZtbSm9SCnVTQny5kBhRTaCMSCdmmxDE2I0UYLb/qjxDwyiIWp00XYa3aKjRCPOMgRm45LZtTg6YGOQDlDeelsYtKW33Nve3nteHv+4p5eWF9HFhH98kl/uyfM75/f9Pq+/5yoR4X6Kxn2W+07A6Js7/wN/LKMGgdVX8K8cQsZzofQD24FNQAiwgT6gA/gd8C6Q+Z94QIVsxtpLGD88HRXKqT8MrAUeAKYDRcBC4FvA34AdQEHOAx8E1yPuTJggGQ0sBUpAeBd43gO9AviAh4CPeYSeAeYCXwGG/hsCQaAQmOf9ngdOavl2KvWXUnAV/hWD4Ijg0jzJQNdbS4AfAMuBzwLvA99UsWjtvYADnlufBDYC5Z7eAr4D/BiF5cZ9BBquEFgxCCI+cdiI8DCQAA4BXYAJvAys8jz52L0IVACbgaeB/DvsnwSeAo6jwL3uI7j+Mv4l8XIR+4BSfEQcz/6s9du93HgdKAUO6NsKi+4Gvgho8SzPu8s7I8ABIAaggq6ROVEQcGL+pB6xE66t9yrDHVK6lAKfBs544FEvL2YZd+kNa4GfA5X3CE8/EPesqkaYr0WscuvcNMe6HOy0L4a2hr9xWvLqb/wSiy8jPOGF4DXPc5E7Efgc8KvJpXLHOpBcfnwBeBj4JKBQoCIWYim0oN2s/O5WlcdrYvMlhErPm4PeCXIrgQbgF1PAlfK6joDjIK6bfVYKlFqsdH2x95zVk425MgTlc7foM+0faiamM4oG/BNIe/HXAG0ygTrP7YU5YBEknUbSGZS4iG6gDB2laYgI2BaSchBXUGYeyu+fSiTgxK33woavbLxDmfwM4c+SIYXwca8ikhMECoAfATUT4DKeRlIpVDCAMbsKX1UlRnkZWtEsVMAPjoMTH8bp68c+fxHrUi/uyAgqEECZJoigTbPeGv1j2SAOw6F1154Z756GEU2AywlcjgNvTBD4IrBmwhVuIolmGJjLl+BftQpz8SLM2loIBm+/D2wL+/wF0m92M3bwVca7DsPYGCoYBNQsvWh809grJa9rIefM2KFizJVX8S8a+i3I28A5FYvWFgPdXiYjySRa8YeY9tSThDZtRC8uzoFduHSJ+PAwftOkqqqKQCAwhYw7OETihRdJ/PrFrPcCAS9f6HQTxk+1kP2yE89zZ+w4gQqAjGZb5XrggYl46+XlTN+xnUDDI7mDu7u7aWtr49ixYwwMDBAKhairq2PDhg2sXr0a5SWqNrOQyLNPo5TGSMvzkMlAXh6ILNfy7Togo4WtA+kjMx10F//S6xCL1h6MRWslNjsqvXPnS3LffpkQ27Zl7969smDBApkom8mroqJCWltbxXVdmSxOfESufv5x6S2tkFjNPIlFayfWW7G5tTN7S+u5VFLPwBMz0YA6BHBdgitXEFq/Lmf5kSNH2Lp1K6dOncrpwuEwc+bMwTRNent72blz55R9AC0Sxr/4E6i8PMS2J28tRChXIRst3yb11xI0IB9xEV0n0NCQe/PGjRu0trbS19dHMBhkzZo11NfXs3TpUjZv3kwkEgGgp6eHo0eP3t5OCwrAMG6W5F3mCQMYA2ag62izbt4Lw8PDdHZ2EolEaGpqorGxkb6+Pvbs2UN7ezuJRMLrT4LjOLcdbvfGcDMZNF2frD7tzQhT+v5xlALbxrl4aVIDVDiOQ3FxMdu2baOyspJly5aRTCbp6OgglUoBUFZWRk1NzW3g411d4DhZL9yUF4DrtxJoQSmU6zK6fz/iWVNUVMS6des4e/YsLS0t9PT0sGvXLtrb26eANTY2snDhwpsKy2LkJ89hnT6DZpo3Wzm8Aezx5oic6NsKi2JACKWW2H39SDqNf/kyfD4f1dXVnDx5kubmZl49dIhX9u1jZGQk9/GWLVtoamqisDDbvd14nPj3vs/o7/eiNG2iBAHeAb7uXcdT88AbSAqB72JZX0Mpghs3MO2rW/BVz+bCwAC7d+/mYFsbl/v7CYfDfPShB3n00cf4zNq1zAgGQWDs4EGSv3mJ8cNvonQtey9kwduBbwNH75iIkyaiAuBxyWSexXFmG9EogU+tJPLIKqidR79lk0ylMHwGMyIRZhgG8t5pEof/Trqri8zb7+Bej4NpovJ8IDIIPAe8BFy8ayXcMpLpKDUfy1ovGasRQ6/XIxHMshJ8xSVooXxAsEdHyVy7hv3+VZzhYUinQdNRfhOU+gcifwD+BJwCxv/tiH3bTJi9Tv1AKbY9XxxnEa77IBBFqSLAzLZ3AU3LoGlDyjDOoWknEDnigV4GRv+jGf//f07vN4F/DQAn0tMI2WCvFwAAAABJRU5ErkJggg=="
    }, CW2v: function (e, t, n) {
        "use strict";

        function o(e) {
            return e && e.__esModule ? e : {default: e}
        }

        Object.defineProperty(t, "__esModule", {value: !0}), t.default = void 0;
        var a, r, i = n("Zx67"), l = o(i), s = n("Zrlr"), c = o(s), u = n("wxAW"), d = o(u), f = n("zwoO"), A = o(f),
            p = n("Pf15"), h = o(p), g = n("/MvA"), m = o(g), b = n("S+hs"), v = o(b), E = n("HW6M"),
            _ = (o(E), n("cl+9")), C = o(_), N = n("GiK3"), T = o(N), w = n("KSGD"), y = (o(w), n("RH2O")),
            I = (n("F8kA"), n("BYKG")), x = (o(I), n("4HHy"), n("72M+")), k = o(x), S = n("5Q8M"), M = n("z69G"),
            O = o(M), F = n("boom"), D = (a = (0, y.connect)(function (e) {
                return {data: (0, F.getState)(e).get("account")}
            }, function (e) {
                return {
                    setBindPhoneStatus: function (t) {
                        return e((0, S.setBindPhoneStatus)(t))
                    }
                }
            }))(r = function (e) {
                function t() {
                    return (0, c.default)(this, t), (0, A.default)(this, (t.__proto__ || (0, l.default)(t)).apply(this, arguments))
                }

                return (0, h.default)(t, e), (0, d.default)(t, [{
                    key: "render", value: function () {
                        var e = this, t = this.props, n = t.onModalCancelClick, o = t.visible, a = t.data;
                        return T.default.createElement(m.default, {
                            width: 520,
                            visible: o,
                            showFooter: !1,
                            maskClassName: k.default.mask,
                            modalClassName: k.default.modal,
                            closable: !0,
                            isMiddle: !0,
                            title: C.default.get("phoneModal.bindtitle"),
                            onCancel: n
                        }, T.default.createElement("div", {className: k.default.content}, T.default.createElement("div", {className: k.default.left}, T.default.createElement("img", {src: v.default}), T.default.createElement("p", {className: k.default.content}, C.default.get("phoneModal.bindtip"))), T.default.createElement("div", {className: k.default.right}, T.default.createElement("div", {className: k.default.item}, T.default.createElement("div", {
                            className: k.default["item-left"],
                            style: {color: a.mobile_number ? "#2f2f2f" : ""}
                        }, T.default.createElement(O.default, {
                            name: "phone",
                            className: k.default.icon + " " + (a.mobile_number ? k.default.active : "")
                        }), a.mobile_number || C.default.get("phoneModal.nobind")), !a.mobile_number && T.default.createElement("button", {
                            className: k.default.btn,
                            onClick: function () {
                                e.props.setBindPhoneStatus()
                            }
                        }, C.default.get("phoneModal.clickbind"))), T.default.createElement("div", {
                            className: k.default.item,
                            style: {color: a.mobile_number ? "#2f2f2f" : ""}
                        }, T.default.createElement("div", {className: k.default["item-left"]}, T.default.createElement(O.default, {
                            name: "wechat",
                            className: k.default.icon + " " + (a.wechat ? k.default.active : "")
                        }), a.wechat || C.default.get("phoneModal.nobind")), !a.wechat && T.default.createElement("button", {
                            className: k.default.btn,
                            onClick: function () {
                                window.open("/users/auth/wechat?redirect_url=" + window.location.href)
                            }
                        }, " ", C.default.get("phoneModal.clickbind"))))))
                    }
                }]), t
            }(N.Component)) || r;
        t.default = D
    }, CyHg: function (e, t) {
        e.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAMAAABEpIrGAAABL1BMVEUAAAD/yAD/ygD/yAD/yQD/yQD/0QD/yQD/yQD/yQD/yQD/yQD/yQD/ywD/zAD/ywD/zgD+yQT/yQD/yAD/yQD/yAD/yQD/yQD/yQD/yQD/ygD/yQD/yAD/yAD/yQD/ygD/zQD/yAD/2wD00U//4XT/yQD////YuFz/zQD////uwBn/1QD/yAD////gtiL+/fjnuhrxwA/+/vv9+/LqvBf7xgT++u79+Oj99dP26sL+4nf+zh3uvxL++/D+99v479H+8cH87LPz5K776KH+6Zr+5o7r03v+2lTjwUHlvzf+0jDkuB71wwv3wwn6xgX++eT58tr+88n27Mj67L3+8Lz+7Kvv25X54Ijs1YP+44H223npz3P+4HD+3WXpzGPnxU3+10rmvjLmvCT4yRz+ygqQhZLkAAAALHRSTlMA/Fu7gTkS+PXxuaSIOzcdGjP67uHJtKmbkotvZlRLQyQOB/zm1WNILikYBsDBVmAAAAFrSURBVDjLhdPlcsJQEAXgTZpSrMXdqbd7i7t70bq7vP8z9F7CQALTy/cHMmf3zGRnAkvMZuDT6/n5JuImvwBRv6aAX7GB1Aa/gFXwCrgV2zizzSn4t0KzI3pxzivuaBSJZHDYcIXNYZDYHK4BPn7uA/AL9Lf0WWzV8xfZWDIWq1SvGp23AYsFP1AinciMyunv/sd7975ZSxGq8cNyEaYCVpzKjEeJcvqrQEjqJZ5BtAZgJriFc70sIYV+gv7bCsJcSDuLf9t0vcvWURtSXVmHzKBKyPU5W0fd0r0lpIpJEnuMT5CRQM2FWKoTUqPrMheo7WOvQghJ5vK3d+3OU/F17+BYmZ8KpYdm4TLHLpXK5W9az7uHJ8qBI5yU0/HhmWwYTyfGFlAScYWoGjCiTCdJOpQZVQNOZLRGDYDGKF/NqRqws9N6zLPv08NOb1fmEUTBbVo8m9wCYgQWLIIhDCphg6B8jehie9ESBeYPieVTx9PUohAAAAAASUVORK5CYII="
    }, DUrC: function (e, t, n) {
        var o = n("Z9oK");
        "string" == typeof o && (o = [[e.i, o, ""]]);
        var a = {hmr: !0};
        a.transform = void 0, a.insertInto = void 0;
        n("MTIv")(o, a);
        o.locals && (e.exports = o.locals)
    }, DYhM: function (e, t, n) {
        var o = n("kxFB");
        t = e.exports = n("FZ+f")(!1), t.push([e.i, "/*!\n *  Font Awesome 4.7.0 by @davegandy - http://fontawesome.io - @fontawesome\n *  License - http://fontawesome.io/license (Font: SIL OFL 1.1, CSS: MIT License)\n */@font-face{font-family:FontAwesome;src:url(" + o(n("cEaC")) + ");src:url(" + o(n("cmUn")) + '?#iefix&v=4.7.0) format("embedded-opentype"),url(' + o(n("of+2")) + ') format("woff2"),url(' + o(n("jNsU")) + ') format("woff"),url(' + o(n("IMLV")) + ') format("truetype"),url(' + o(n("Fqd/")) + '#fontawesomeregular) format("svg");font-weight:400;font-style:normal}.fa{display:inline-block;font:normal normal normal 14px/1 FontAwesome;font-size:inherit;text-rendering:auto;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}.fa-lg{font-size:1.33333em;line-height:.75em;vertical-align:-15%}.fa-2x{font-size:2em}.fa-3x{font-size:3em}.fa-4x{font-size:4em}.fa-5x{font-size:5em}.fa-fw{width:1.28571em;text-align:center}.fa-ul{padding-left:0;margin-left:2.14286em;list-style-type:none}.fa-ul>li{position:relative}.fa-li{position:absolute;left:-2.14286em;width:2.14286em;top:.14286em;text-align:center}.fa-li.fa-lg{left:-1.85714em}.fa-border{padding:.2em .25em .15em;border:.08em solid #eee;border-radius:.1em}.fa-pull-left{float:left}.fa-pull-right{float:right}.fa.fa-pull-left{margin-right:.3em}.fa.fa-pull-right{margin-left:.3em}.pull-right{float:right}.pull-left{float:left}.fa.pull-left{margin-right:.3em}.fa.pull-right{margin-left:.3em}.fa-spin{-webkit-animation:fa-spin 2s infinite linear;animation:fa-spin 2s infinite linear}.fa-pulse{-webkit-animation:fa-spin 1s infinite steps(8);animation:fa-spin 1s infinite steps(8)}@-webkit-keyframes fa-spin{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(359deg);transform:rotate(359deg)}}@keyframes fa-spin{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(359deg);transform:rotate(359deg)}}.fa-rotate-90{-ms-filter:"progid:DXImageTransform.Microsoft.BasicImage(rotation=1)";-webkit-transform:rotate(90deg);-ms-transform:rotate(90deg);transform:rotate(90deg)}.fa-rotate-180{-ms-filter:"progid:DXImageTransform.Microsoft.BasicImage(rotation=2)";-webkit-transform:rotate(180deg);-ms-transform:rotate(180deg);transform:rotate(180deg)}.fa-rotate-270{-ms-filter:"progid:DXImageTransform.Microsoft.BasicImage(rotation=3)";-webkit-transform:rotate(270deg);-ms-transform:rotate(270deg);transform:rotate(270deg)}.fa-flip-horizontal{-ms-filter:"progid:DXImageTransform.Microsoft.BasicImage(rotation=0, mirror=1)";-webkit-transform:scaleX(-1);-ms-transform:scaleX(-1);transform:scaleX(-1)}.fa-flip-vertical{-ms-filter:"progid:DXImageTransform.Microsoft.BasicImage(rotation=2, mirror=1)";-webkit-transform:scaleY(-1);-ms-transform:scaleY(-1);transform:scaleY(-1)}:root .fa-flip-horizontal,:root .fa-flip-vertical,:root .fa-rotate-90,:root .fa-rotate-180,:root .fa-rotate-270{-webkit-filter:none;filter:none}.fa-stack{position:relative;display:inline-block;width:2em;height:2em;line-height:2em;vertical-align:middle}.fa-stack-1x,.fa-stack-2x{position:absolute;left:0;width:100%;text-align:center}.fa-stack-1x{line-height:inherit}.fa-stack-2x{font-size:2em}.fa-inverse{color:#fff}.fa-glass:before{content:"\\F000"}.fa-music:before{content:"\\F001"}.fa-search:before{content:"\\F002"}.fa-envelope-o:before{content:"\\F003"}.fa-heart:before{content:"\\F004"}.fa-star:before{content:"\\F005"}.fa-star-o:before{content:"\\F006"}.fa-user:before{content:"\\F007"}.fa-film:before{content:"\\F008"}.fa-th-large:before{content:"\\F009"}.fa-th:before{content:"\\F00A"}.fa-th-list:before{content:"\\F00B"}.fa-check:before{content:"\\F00C"}.fa-close:before,.fa-remove:before,.fa-times:before{content:"\\F00D"}.fa-search-plus:before{content:"\\F00E"}.fa-search-minus:before{content:"\\F010"}.fa-power-off:before{content:"\\F011"}.fa-signal:before{content:"\\F012"}.fa-cog:before,.fa-gear:before{content:"\\F013"}.fa-trash-o:before{content:"\\F014"}.fa-home:before{content:"\\F015"}.fa-file-o:before{content:"\\F016"}.fa-clock-o:before{content:"\\F017"}.fa-road:before{content:"\\F018"}.fa-download:before{content:"\\F019"}.fa-arrow-circle-o-down:before{content:"\\F01A"}.fa-arrow-circle-o-up:before{content:"\\F01B"}.fa-inbox:before{content:"\\F01C"}.fa-play-circle-o:before{content:"\\F01D"}.fa-repeat:before,.fa-rotate-right:before{content:"\\F01E"}.fa-refresh:before{content:"\\F021"}.fa-list-alt:before{content:"\\F022"}.fa-lock:before{content:"\\F023"}.fa-flag:before{content:"\\F024"}.fa-headphones:before{content:"\\F025"}.fa-volume-off:before{content:"\\F026"}.fa-volume-down:before{content:"\\F027"}.fa-volume-up:before{content:"\\F028"}.fa-qrcode:before{content:"\\F029"}.fa-barcode:before{content:"\\F02A"}.fa-tag:before{content:"\\F02B"}.fa-tags:before{content:"\\F02C"}.fa-book:before{content:"\\F02D"}.fa-bookmark:before{content:"\\F02E"}.fa-print:before{content:"\\F02F"}.fa-camera:before{content:"\\F030"}.fa-font:before{content:"\\F031"}.fa-bold:before{content:"\\F032"}.fa-italic:before{content:"\\F033"}.fa-text-height:before{content:"\\F034"}.fa-text-width:before{content:"\\F035"}.fa-align-left:before{content:"\\F036"}.fa-align-center:before{content:"\\F037"}.fa-align-right:before{content:"\\F038"}.fa-align-justify:before{content:"\\F039"}.fa-list:before{content:"\\F03A"}.fa-dedent:before,.fa-outdent:before{content:"\\F03B"}.fa-indent:before{content:"\\F03C"}.fa-video-camera:before{content:"\\F03D"}.fa-image:before,.fa-photo:before,.fa-picture-o:before{content:"\\F03E"}.fa-pencil:before{content:"\\F040"}.fa-map-marker:before{content:"\\F041"}.fa-adjust:before{content:"\\F042"}.fa-tint:before{content:"\\F043"}.fa-edit:before,.fa-pencil-square-o:before{content:"\\F044"}.fa-share-square-o:before{content:"\\F045"}.fa-check-square-o:before{content:"\\F046"}.fa-arrows:before{content:"\\F047"}.fa-step-backward:before{content:"\\F048"}.fa-fast-backward:before{content:"\\F049"}.fa-backward:before{content:"\\F04A"}.fa-play:before{content:"\\F04B"}.fa-pause:before{content:"\\F04C"}.fa-stop:before{content:"\\F04D"}.fa-forward:before{content:"\\F04E"}.fa-fast-forward:before{content:"\\F050"}.fa-step-forward:before{content:"\\F051"}.fa-eject:before{content:"\\F052"}.fa-chevron-left:before{content:"\\F053"}.fa-chevron-right:before{content:"\\F054"}.fa-plus-circle:before{content:"\\F055"}.fa-minus-circle:before{content:"\\F056"}.fa-times-circle:before{content:"\\F057"}.fa-check-circle:before{content:"\\F058"}.fa-question-circle:before{content:"\\F059"}.fa-info-circle:before{content:"\\F05A"}.fa-crosshairs:before{content:"\\F05B"}.fa-times-circle-o:before{content:"\\F05C"}.fa-check-circle-o:before{content:"\\F05D"}.fa-ban:before{content:"\\F05E"}.fa-arrow-left:before{content:"\\F060"}.fa-arrow-right:before{content:"\\F061"}.fa-arrow-up:before{content:"\\F062"}.fa-arrow-down:before{content:"\\F063"}.fa-mail-forward:before,.fa-share:before{content:"\\F064"}.fa-expand:before{content:"\\F065"}.fa-compress:before{content:"\\F066"}.fa-plus:before{content:"\\F067"}.fa-minus:before{content:"\\F068"}.fa-asterisk:before{content:"\\F069"}.fa-exclamation-circle:before{content:"\\F06A"}.fa-gift:before{content:"\\F06B"}.fa-leaf:before{content:"\\F06C"}.fa-fire:before{content:"\\F06D"}.fa-eye:before{content:"\\F06E"}.fa-eye-slash:before{content:"\\F070"}.fa-exclamation-triangle:before,.fa-warning:before{content:"\\F071"}.fa-plane:before{content:"\\F072"}.fa-calendar:before{content:"\\F073"}.fa-random:before{content:"\\F074"}.fa-comment:before{content:"\\F075"}.fa-magnet:before{content:"\\F076"}.fa-chevron-up:before{content:"\\F077"}.fa-chevron-down:before{content:"\\F078"}.fa-retweet:before{content:"\\F079"}.fa-shopping-cart:before{content:"\\F07A"}.fa-folder:before{content:"\\F07B"}.fa-folder-open:before{content:"\\F07C"}.fa-arrows-v:before{content:"\\F07D"}.fa-arrows-h:before{content:"\\F07E"}.fa-bar-chart-o:before,.fa-bar-chart:before{content:"\\F080"}.fa-twitter-square:before{content:"\\F081"}.fa-facebook-square:before{content:"\\F082"}.fa-camera-retro:before{content:"\\F083"}.fa-key:before{content:"\\F084"}.fa-cogs:before,.fa-gears:before{content:"\\F085"}.fa-comments:before{content:"\\F086"}.fa-thumbs-o-up:before{content:"\\F087"}.fa-thumbs-o-down:before{content:"\\F088"}.fa-star-half:before{content:"\\F089"}.fa-heart-o:before{content:"\\F08A"}.fa-sign-out:before{content:"\\F08B"}.fa-linkedin-square:before{content:"\\F08C"}.fa-thumb-tack:before{content:"\\F08D"}.fa-external-link:before{content:"\\F08E"}.fa-sign-in:before{content:"\\F090"}.fa-trophy:before{content:"\\F091"}.fa-github-square:before{content:"\\F092"}.fa-upload:before{content:"\\F093"}.fa-lemon-o:before{content:"\\F094"}.fa-phone:before{content:"\\F095"}.fa-square-o:before{content:"\\F096"}.fa-bookmark-o:before{content:"\\F097"}.fa-phone-square:before{content:"\\F098"}.fa-twitter:before{content:"\\F099"}.fa-facebook-f:before,.fa-facebook:before{content:"\\F09A"}.fa-github:before{content:"\\F09B"}.fa-unlock:before{content:"\\F09C"}.fa-credit-card:before{content:"\\F09D"}.fa-feed:before,.fa-rss:before{content:"\\F09E"}.fa-hdd-o:before{content:"\\F0A0"}.fa-bullhorn:before{content:"\\F0A1"}.fa-bell:before{content:"\\F0F3"}.fa-certificate:before{content:"\\F0A3"}.fa-hand-o-right:before{content:"\\F0A4"}.fa-hand-o-left:before{content:"\\F0A5"}.fa-hand-o-up:before{content:"\\F0A6"}.fa-hand-o-down:before{content:"\\F0A7"}.fa-arrow-circle-left:before{content:"\\F0A8"}.fa-arrow-circle-right:before{content:"\\F0A9"}.fa-arrow-circle-up:before{content:"\\F0AA"}.fa-arrow-circle-down:before{content:"\\F0AB"}.fa-globe:before{content:"\\F0AC"}.fa-wrench:before{content:"\\F0AD"}.fa-tasks:before{content:"\\F0AE"}.fa-filter:before{content:"\\F0B0"}.fa-briefcase:before{content:"\\F0B1"}.fa-arrows-alt:before{content:"\\F0B2"}.fa-group:before,.fa-users:before{content:"\\F0C0"}.fa-chain:before,.fa-link:before{content:"\\F0C1"}.fa-cloud:before{content:"\\F0C2"}.fa-flask:before{content:"\\F0C3"}.fa-cut:before,.fa-scissors:before{content:"\\F0C4"}.fa-copy:before,.fa-files-o:before{content:"\\F0C5"}.fa-paperclip:before{content:"\\F0C6"}.fa-floppy-o:before,.fa-save:before{content:"\\F0C7"}.fa-square:before{content:"\\F0C8"}.fa-bars:before,.fa-navicon:before,.fa-reorder:before{content:"\\F0C9"}.fa-list-ul:before{content:"\\F0CA"}.fa-list-ol:before{content:"\\F0CB"}.fa-strikethrough:before{content:"\\F0CC"}.fa-underline:before{content:"\\F0CD"}.fa-table:before{content:"\\F0CE"}.fa-magic:before{content:"\\F0D0"}.fa-truck:before{content:"\\F0D1"}.fa-pinterest:before{content:"\\F0D2"}.fa-pinterest-square:before{content:"\\F0D3"}.fa-google-plus-square:before{content:"\\F0D4"}.fa-google-plus:before{content:"\\F0D5"}.fa-money:before{content:"\\F0D6"}.fa-caret-down:before{content:"\\F0D7"}.fa-caret-up:before{content:"\\F0D8"}.fa-caret-left:before{content:"\\F0D9"}.fa-caret-right:before{content:"\\F0DA"}.fa-columns:before{content:"\\F0DB"}.fa-sort:before,.fa-unsorted:before{content:"\\F0DC"}.fa-sort-desc:before,.fa-sort-down:before{content:"\\F0DD"}.fa-sort-asc:before,.fa-sort-up:before{content:"\\F0DE"}.fa-envelope:before{content:"\\F0E0"}.fa-linkedin:before{content:"\\F0E1"}.fa-rotate-left:before,.fa-undo:before{content:"\\F0E2"}.fa-gavel:before,.fa-legal:before{content:"\\F0E3"}.fa-dashboard:before,.fa-tachometer:before{content:"\\F0E4"}.fa-comment-o:before{content:"\\F0E5"}.fa-comments-o:before{content:"\\F0E6"}.fa-bolt:before,.fa-flash:before{content:"\\F0E7"}.fa-sitemap:before{content:"\\F0E8"}.fa-umbrella:before{content:"\\F0E9"}.fa-clipboard:before,.fa-paste:before{content:"\\F0EA"}.fa-lightbulb-o:before{content:"\\F0EB"}.fa-exchange:before{content:"\\F0EC"}.fa-cloud-download:before{content:"\\F0ED"}.fa-cloud-upload:before{content:"\\F0EE"}.fa-user-md:before{content:"\\F0F0"}.fa-stethoscope:before{content:"\\F0F1"}.fa-suitcase:before{content:"\\F0F2"}.fa-bell-o:before{content:"\\F0A2"}.fa-coffee:before{content:"\\F0F4"}.fa-cutlery:before{content:"\\F0F5"}.fa-file-text-o:before{content:"\\F0F6"}.fa-building-o:before{content:"\\F0F7"}.fa-hospital-o:before{content:"\\F0F8"}.fa-ambulance:before{content:"\\F0F9"}.fa-medkit:before{content:"\\F0FA"}.fa-fighter-jet:before{content:"\\F0FB"}.fa-beer:before{content:"\\F0FC"}.fa-h-square:before{content:"\\F0FD"}.fa-plus-square:before{content:"\\F0FE"}.fa-angle-double-left:before{content:"\\F100"}.fa-angle-double-right:before{content:"\\F101"}.fa-angle-double-up:before{content:"\\F102"}.fa-angle-double-down:before{content:"\\F103"}.fa-angle-left:before{content:"\\F104"}.fa-angle-right:before{content:"\\F105"}.fa-angle-up:before{content:"\\F106"}.fa-angle-down:before{content:"\\F107"}.fa-desktop:before{content:"\\F108"}.fa-laptop:before{content:"\\F109"}.fa-tablet:before{content:"\\F10A"}.fa-mobile-phone:before,.fa-mobile:before{content:"\\F10B"}.fa-circle-o:before{content:"\\F10C"}.fa-quote-left:before{content:"\\F10D"}.fa-quote-right:before{content:"\\F10E"}.fa-spinner:before{content:"\\F110"}.fa-circle:before{content:"\\F111"}.fa-mail-reply:before,.fa-reply:before{content:"\\F112"}.fa-github-alt:before{content:"\\F113"}.fa-folder-o:before{content:"\\F114"}.fa-folder-open-o:before{content:"\\F115"}.fa-smile-o:before{content:"\\F118"}.fa-frown-o:before{content:"\\F119"}.fa-meh-o:before{content:"\\F11A"}.fa-gamepad:before{content:"\\F11B"}.fa-keyboard-o:before{content:"\\F11C"}.fa-flag-o:before{content:"\\F11D"}.fa-flag-checkered:before{content:"\\F11E"}.fa-terminal:before{content:"\\F120"}.fa-code:before{content:"\\F121"}.fa-mail-reply-all:before,.fa-reply-all:before{content:"\\F122"}.fa-star-half-empty:before,.fa-star-half-full:before,.fa-star-half-o:before{content:"\\F123"}.fa-location-arrow:before{content:"\\F124"}.fa-crop:before{content:"\\F125"}.fa-code-fork:before{content:"\\F126"}.fa-chain-broken:before,.fa-unlink:before{content:"\\F127"}.fa-question:before{content:"\\F128"}.fa-info:before{content:"\\F129"}.fa-exclamation:before{content:"\\F12A"}.fa-superscript:before{content:"\\F12B"}.fa-subscript:before{content:"\\F12C"}.fa-eraser:before{content:"\\F12D"}.fa-puzzle-piece:before{content:"\\F12E"}.fa-microphone:before{content:"\\F130"}.fa-microphone-slash:before{content:"\\F131"}.fa-shield:before{content:"\\F132"}.fa-calendar-o:before{content:"\\F133"}.fa-fire-extinguisher:before{content:"\\F134"}.fa-rocket:before{content:"\\F135"}.fa-maxcdn:before{content:"\\F136"}.fa-chevron-circle-left:before{content:"\\F137"}.fa-chevron-circle-right:before{content:"\\F138"}.fa-chevron-circle-up:before{content:"\\F139"}.fa-chevron-circle-down:before{content:"\\F13A"}.fa-html5:before{content:"\\F13B"}.fa-css3:before{content:"\\F13C"}.fa-anchor:before{content:"\\F13D"}.fa-unlock-alt:before{content:"\\F13E"}.fa-bullseye:before{content:"\\F140"}.fa-ellipsis-h:before{content:"\\F141"}.fa-ellipsis-v:before{content:"\\F142"}.fa-rss-square:before{content:"\\F143"}.fa-play-circle:before{content:"\\F144"}.fa-ticket:before{content:"\\F145"}.fa-minus-square:before{content:"\\F146"}.fa-minus-square-o:before{content:"\\F147"}.fa-level-up:before{content:"\\F148"}.fa-level-down:before{content:"\\F149"}.fa-check-square:before{content:"\\F14A"}.fa-pencil-square:before{content:"\\F14B"}.fa-external-link-square:before{content:"\\F14C"}.fa-share-square:before{content:"\\F14D"}.fa-compass:before{content:"\\F14E"}.fa-caret-square-o-down:before,.fa-toggle-down:before{content:"\\F150"}.fa-caret-square-o-up:before,.fa-toggle-up:before{content:"\\F151"}.fa-caret-square-o-right:before,.fa-toggle-right:before{content:"\\F152"}.fa-eur:before,.fa-euro:before{content:"\\F153"}.fa-gbp:before{content:"\\F154"}.fa-dollar:before,.fa-usd:before{content:"\\F155"}.fa-inr:before,.fa-rupee:before{content:"\\F156"}.fa-cny:before,.fa-jpy:before,.fa-rmb:before,.fa-yen:before{content:"\\F157"}.fa-rouble:before,.fa-rub:before,.fa-ruble:before{content:"\\F158"}.fa-krw:before,.fa-won:before{content:"\\F159"}.fa-bitcoin:before,.fa-btc:before{content:"\\F15A"}.fa-file:before{content:"\\F15B"}.fa-file-text:before{content:"\\F15C"}.fa-sort-alpha-asc:before{content:"\\F15D"}.fa-sort-alpha-desc:before{content:"\\F15E"}.fa-sort-amount-asc:before{content:"\\F160"}.fa-sort-amount-desc:before{content:"\\F161"}.fa-sort-numeric-asc:before{content:"\\F162"}.fa-sort-numeric-desc:before{content:"\\F163"}.fa-thumbs-up:before{content:"\\F164"}.fa-thumbs-down:before{content:"\\F165"}.fa-youtube-square:before{content:"\\F166"}.fa-youtube:before{content:"\\F167"}.fa-xing:before{content:"\\F168"}.fa-xing-square:before{content:"\\F169"}.fa-youtube-play:before{content:"\\F16A"}.fa-dropbox:before{content:"\\F16B"}.fa-stack-overflow:before{content:"\\F16C"}.fa-instagram:before{content:"\\F16D"}.fa-flickr:before{content:"\\F16E"}.fa-adn:before{content:"\\F170"}.fa-bitbucket:before{content:"\\F171"}.fa-bitbucket-square:before{content:"\\F172"}.fa-tumblr:before{content:"\\F173"}.fa-tumblr-square:before{content:"\\F174"}.fa-long-arrow-down:before{content:"\\F175"}.fa-long-arrow-up:before{content:"\\F176"}.fa-long-arrow-left:before{content:"\\F177"}.fa-long-arrow-right:before{content:"\\F178"}.fa-apple:before{content:"\\F179"}.fa-windows:before{content:"\\F17A"}.fa-android:before{content:"\\F17B"}.fa-linux:before{content:"\\F17C"}.fa-dribbble:before{content:"\\F17D"}.fa-skype:before{content:"\\F17E"}.fa-foursquare:before{content:"\\F180"}.fa-trello:before{content:"\\F181"}.fa-female:before{content:"\\F182"}.fa-male:before{content:"\\F183"}.fa-gittip:before,.fa-gratipay:before{content:"\\F184"}.fa-sun-o:before{content:"\\F185"}.fa-moon-o:before{content:"\\F186"}.fa-archive:before{content:"\\F187"}.fa-bug:before{content:"\\F188"}.fa-vk:before{content:"\\F189"}.fa-weibo:before{content:"\\F18A"}.fa-renren:before{content:"\\F18B"}.fa-pagelines:before{content:"\\F18C"}.fa-stack-exchange:before{content:"\\F18D"}.fa-arrow-circle-o-right:before{content:"\\F18E"}.fa-arrow-circle-o-left:before{content:"\\F190"}.fa-caret-square-o-left:before,.fa-toggle-left:before{content:"\\F191"}.fa-dot-circle-o:before{content:"\\F192"}.fa-wheelchair:before{content:"\\F193"}.fa-vimeo-square:before{content:"\\F194"}.fa-try:before,.fa-turkish-lira:before{content:"\\F195"}.fa-plus-square-o:before{content:"\\F196"}.fa-space-shuttle:before{content:"\\F197"}.fa-slack:before{content:"\\F198"}.fa-envelope-square:before{content:"\\F199"}.fa-wordpress:before{content:"\\F19A"}.fa-openid:before{content:"\\F19B"}.fa-bank:before,.fa-institution:before,.fa-university:before{content:"\\F19C"}.fa-graduation-cap:before,.fa-mortar-board:before{content:"\\F19D"}.fa-yahoo:before{content:"\\F19E"}.fa-google:before{content:"\\F1A0"}.fa-reddit:before{content:"\\F1A1"}.fa-reddit-square:before{content:"\\F1A2"}.fa-stumbleupon-circle:before{content:"\\F1A3"}.fa-stumbleupon:before{content:"\\F1A4"}.fa-delicious:before{content:"\\F1A5"}.fa-digg:before{content:"\\F1A6"}.fa-pied-piper-pp:before{content:"\\F1A7"}.fa-pied-piper-alt:before{content:"\\F1A8"}.fa-drupal:before{content:"\\F1A9"}.fa-joomla:before{content:"\\F1AA"}.fa-language:before{content:"\\F1AB"}.fa-fax:before{content:"\\F1AC"}.fa-building:before{content:"\\F1AD"}.fa-child:before{content:"\\F1AE"}.fa-paw:before{content:"\\F1B0"}.fa-spoon:before{content:"\\F1B1"}.fa-cube:before{content:"\\F1B2"}.fa-cubes:before{content:"\\F1B3"}.fa-behance:before{content:"\\F1B4"}.fa-behance-square:before{content:"\\F1B5"}.fa-steam:before{content:"\\F1B6"}.fa-steam-square:before{content:"\\F1B7"}.fa-recycle:before{content:"\\F1B8"}.fa-automobile:before,.fa-car:before{content:"\\F1B9"}.fa-cab:before,.fa-taxi:before{content:"\\F1BA"}.fa-tree:before{content:"\\F1BB"}.fa-spotify:before{content:"\\F1BC"}.fa-deviantart:before{content:"\\F1BD"}.fa-soundcloud:before{content:"\\F1BE"}.fa-database:before{content:"\\F1C0"}.fa-file-pdf-o:before{content:"\\F1C1"}.fa-file-word-o:before{content:"\\F1C2"}.fa-file-excel-o:before{content:"\\F1C3"}.fa-file-powerpoint-o:before{content:"\\F1C4"}.fa-file-image-o:before,.fa-file-photo-o:before,.fa-file-picture-o:before{content:"\\F1C5"}.fa-file-archive-o:before,.fa-file-zip-o:before{content:"\\F1C6"}.fa-file-audio-o:before,.fa-file-sound-o:before{content:"\\F1C7"}.fa-file-movie-o:before,.fa-file-video-o:before{content:"\\F1C8"}.fa-file-code-o:before{content:"\\F1C9"}.fa-vine:before{content:"\\F1CA"}.fa-codepen:before{content:"\\F1CB"}.fa-jsfiddle:before{content:"\\F1CC"}.fa-life-bouy:before,.fa-life-buoy:before,.fa-life-ring:before,.fa-life-saver:before,.fa-support:before{content:"\\F1CD"}.fa-circle-o-notch:before{content:"\\F1CE"}.fa-ra:before,.fa-rebel:before,.fa-resistance:before{content:"\\F1D0"}.fa-empire:before,.fa-ge:before{content:"\\F1D1"}.fa-git-square:before{content:"\\F1D2"}.fa-git:before{content:"\\F1D3"}.fa-hacker-news:before,.fa-y-combinator-square:before,.fa-yc-square:before{content:"\\F1D4"}.fa-tencent-weibo:before{content:"\\F1D5"}.fa-qq:before{content:"\\F1D6"}.fa-wechat:before,.fa-weixin:before{content:"\\F1D7"}.fa-paper-plane:before,.fa-send:before{content:"\\F1D8"}.fa-paper-plane-o:before,.fa-send-o:before{content:"\\F1D9"}.fa-history:before{content:"\\F1DA"}.fa-circle-thin:before{content:"\\F1DB"}.fa-header:before{content:"\\F1DC"}.fa-paragraph:before{content:"\\F1DD"}.fa-sliders:before{content:"\\F1DE"}.fa-share-alt:before{content:"\\F1E0"}.fa-share-alt-square:before{content:"\\F1E1"}.fa-bomb:before{content:"\\F1E2"}.fa-futbol-o:before,.fa-soccer-ball-o:before{content:"\\F1E3"}.fa-tty:before{content:"\\F1E4"}.fa-binoculars:before{content:"\\F1E5"}.fa-plug:before{content:"\\F1E6"}.fa-slideshare:before{content:"\\F1E7"}.fa-twitch:before{content:"\\F1E8"}.fa-yelp:before{content:"\\F1E9"}.fa-newspaper-o:before{content:"\\F1EA"}.fa-wifi:before{content:"\\F1EB"}.fa-calculator:before{content:"\\F1EC"}.fa-paypal:before{content:"\\F1ED"}.fa-google-wallet:before{content:"\\F1EE"}.fa-cc-visa:before{content:"\\F1F0"}.fa-cc-mastercard:before{content:"\\F1F1"}.fa-cc-discover:before{content:"\\F1F2"}.fa-cc-amex:before{content:"\\F1F3"}.fa-cc-paypal:before{content:"\\F1F4"}.fa-cc-stripe:before{content:"\\F1F5"}.fa-bell-slash:before{content:"\\F1F6"}.fa-bell-slash-o:before{content:"\\F1F7"}.fa-trash:before{content:"\\F1F8"}.fa-copyright:before{content:"\\F1F9"}.fa-at:before{content:"\\F1FA"}.fa-eyedropper:before{content:"\\F1FB"}.fa-paint-brush:before{content:"\\F1FC"}.fa-birthday-cake:before{content:"\\F1FD"}.fa-area-chart:before{content:"\\F1FE"}.fa-pie-chart:before{content:"\\F200"}.fa-line-chart:before{content:"\\F201"}.fa-lastfm:before{content:"\\F202"}.fa-lastfm-square:before{content:"\\F203"}.fa-toggle-off:before{content:"\\F204"}.fa-toggle-on:before{content:"\\F205"}.fa-bicycle:before{content:"\\F206"}.fa-bus:before{content:"\\F207"}.fa-ioxhost:before{content:"\\F208"}.fa-angellist:before{content:"\\F209"}.fa-cc:before{content:"\\F20A"}.fa-ils:before,.fa-shekel:before,.fa-sheqel:before{content:"\\F20B"}.fa-meanpath:before{content:"\\F20C"}.fa-buysellads:before{content:"\\F20D"}.fa-connectdevelop:before{content:"\\F20E"}.fa-dashcube:before{content:"\\F210"}.fa-forumbee:before{content:"\\F211"}.fa-leanpub:before{content:"\\F212"}.fa-sellsy:before{content:"\\F213"}.fa-shirtsinbulk:before{content:"\\F214"}.fa-simplybuilt:before{content:"\\F215"}.fa-skyatlas:before{content:"\\F216"}.fa-cart-plus:before{content:"\\F217"}.fa-cart-arrow-down:before{content:"\\F218"}.fa-diamond:before{content:"\\F219"}.fa-ship:before{content:"\\F21A"}.fa-user-secret:before{content:"\\F21B"}.fa-motorcycle:before{content:"\\F21C"}.fa-street-view:before{content:"\\F21D"}.fa-heartbeat:before{content:"\\F21E"}.fa-venus:before{content:"\\F221"}.fa-mars:before{content:"\\F222"}.fa-mercury:before{content:"\\F223"}.fa-intersex:before,.fa-transgender:before{content:"\\F224"}.fa-transgender-alt:before{content:"\\F225"}.fa-venus-double:before{content:"\\F226"}.fa-mars-double:before{content:"\\F227"}.fa-venus-mars:before{content:"\\F228"}.fa-mars-stroke:before{content:"\\F229"}.fa-mars-stroke-v:before{content:"\\F22A"}.fa-mars-stroke-h:before{content:"\\F22B"}.fa-neuter:before{content:"\\F22C"}.fa-genderless:before{content:"\\F22D"}.fa-facebook-official:before{content:"\\F230"}.fa-pinterest-p:before{content:"\\F231"}.fa-whatsapp:before{content:"\\F232"}.fa-server:before{content:"\\F233"}.fa-user-plus:before{content:"\\F234"}.fa-user-times:before{content:"\\F235"}.fa-bed:before,.fa-hotel:before{content:"\\F236"}.fa-viacoin:before{content:"\\F237"}.fa-train:before{content:"\\F238"}.fa-subway:before{content:"\\F239"}.fa-medium:before{content:"\\F23A"}.fa-y-combinator:before,.fa-yc:before{content:"\\F23B"}.fa-optin-monster:before{content:"\\F23C"}.fa-opencart:before{content:"\\F23D"}.fa-expeditedssl:before{content:"\\F23E"}.fa-battery-4:before,.fa-battery-full:before,.fa-battery:before{content:"\\F240"}.fa-battery-3:before,.fa-battery-three-quarters:before{content:"\\F241"}.fa-battery-2:before,.fa-battery-half:before{content:"\\F242"}.fa-battery-1:before,.fa-battery-quarter:before{content:"\\F243"}.fa-battery-0:before,.fa-battery-empty:before{content:"\\F244"}.fa-mouse-pointer:before{content:"\\F245"}.fa-i-cursor:before{content:"\\F246"}.fa-object-group:before{content:"\\F247"}.fa-object-ungroup:before{content:"\\F248"}.fa-sticky-note:before{content:"\\F249"}.fa-sticky-note-o:before{content:"\\F24A"}.fa-cc-jcb:before{content:"\\F24B"}.fa-cc-diners-club:before{content:"\\F24C"}.fa-clone:before{content:"\\F24D"}.fa-balance-scale:before{content:"\\F24E"}.fa-hourglass-o:before{content:"\\F250"}.fa-hourglass-1:before,.fa-hourglass-start:before{content:"\\F251"}.fa-hourglass-2:before,.fa-hourglass-half:before{content:"\\F252"}.fa-hourglass-3:before,.fa-hourglass-end:before{content:"\\F253"}.fa-hourglass:before{content:"\\F254"}.fa-hand-grab-o:before,.fa-hand-rock-o:before{content:"\\F255"}.fa-hand-paper-o:before,.fa-hand-stop-o:before{content:"\\F256"}.fa-hand-scissors-o:before{content:"\\F257"}.fa-hand-lizard-o:before{content:"\\F258"}.fa-hand-spock-o:before{content:"\\F259"}.fa-hand-pointer-o:before{content:"\\F25A"}.fa-hand-peace-o:before{content:"\\F25B"}.fa-trademark:before{content:"\\F25C"}.fa-registered:before{content:"\\F25D"}.fa-creative-commons:before{content:"\\F25E"}.fa-gg:before{content:"\\F260"}.fa-gg-circle:before{content:"\\F261"}.fa-tripadvisor:before{content:"\\F262"}.fa-odnoklassniki:before{content:"\\F263"}.fa-odnoklassniki-square:before{content:"\\F264"}.fa-get-pocket:before{content:"\\F265"}.fa-wikipedia-w:before{content:"\\F266"}.fa-safari:before{content:"\\F267"}.fa-chrome:before{content:"\\F268"}.fa-firefox:before{content:"\\F269"}.fa-opera:before{content:"\\F26A"}.fa-internet-explorer:before{content:"\\F26B"}.fa-television:before,.fa-tv:before{content:"\\F26C"}.fa-contao:before{content:"\\F26D"}.fa-500px:before{content:"\\F26E"}.fa-amazon:before{content:"\\F270"}.fa-calendar-plus-o:before{content:"\\F271"}.fa-calendar-minus-o:before{content:"\\F272"}.fa-calendar-times-o:before{content:"\\F273"}.fa-calendar-check-o:before{content:"\\F274"}.fa-industry:before{content:"\\F275"}.fa-map-pin:before{content:"\\F276"}.fa-map-signs:before{content:"\\F277"}.fa-map-o:before{content:"\\F278"}.fa-map:before{content:"\\F279"}.fa-commenting:before{content:"\\F27A"}.fa-commenting-o:before{content:"\\F27B"}.fa-houzz:before{content:"\\F27C"}.fa-vimeo:before{content:"\\F27D"}.fa-black-tie:before{content:"\\F27E"}.fa-fonticons:before{content:"\\F280"}.fa-reddit-alien:before{content:"\\F281"}.fa-edge:before{content:"\\F282"}.fa-credit-card-alt:before{content:"\\F283"}.fa-codiepie:before{content:"\\F284"}.fa-modx:before{content:"\\F285"}.fa-fort-awesome:before{content:"\\F286"}.fa-usb:before{content:"\\F287"}.fa-product-hunt:before{content:"\\F288"}.fa-mixcloud:before{content:"\\F289"}.fa-scribd:before{content:"\\F28A"}.fa-pause-circle:before{content:"\\F28B"}.fa-pause-circle-o:before{content:"\\F28C"}.fa-stop-circle:before{content:"\\F28D"}.fa-stop-circle-o:before{content:"\\F28E"}.fa-shopping-bag:before{content:"\\F290"}.fa-shopping-basket:before{content:"\\F291"}.fa-hashtag:before{content:"\\F292"}.fa-bluetooth:before{content:"\\F293"}.fa-bluetooth-b:before{content:"\\F294"}.fa-percent:before{content:"\\F295"}.fa-gitlab:before{content:"\\F296"}.fa-wpbeginner:before{content:"\\F297"}.fa-wpforms:before{content:"\\F298"}.fa-envira:before{content:"\\F299"}.fa-universal-access:before{content:"\\F29A"}.fa-wheelchair-alt:before{content:"\\F29B"}.fa-question-circle-o:before{content:"\\F29C"}.fa-blind:before{content:"\\F29D"}.fa-audio-description:before{content:"\\F29E"}.fa-volume-control-phone:before{content:"\\F2A0"}.fa-braille:before{content:"\\F2A1"}.fa-assistive-listening-systems:before{content:"\\F2A2"}.fa-american-sign-language-interpreting:before,.fa-asl-interpreting:before{content:"\\F2A3"}.fa-deaf:before,.fa-deafness:before,.fa-hard-of-hearing:before{content:"\\F2A4"}.fa-glide:before{content:"\\F2A5"}.fa-glide-g:before{content:"\\F2A6"}.fa-sign-language:before,.fa-signing:before{content:"\\F2A7"}.fa-low-vision:before{content:"\\F2A8"}.fa-viadeo:before{content:"\\F2A9"}.fa-viadeo-square:before{content:"\\F2AA"}.fa-snapchat:before{content:"\\F2AB"}.fa-snapchat-ghost:before{content:"\\F2AC"}.fa-snapchat-square:before{content:"\\F2AD"}.fa-pied-piper:before{content:"\\F2AE"}.fa-first-order:before{content:"\\F2B0"}.fa-yoast:before{content:"\\F2B1"}.fa-themeisle:before{content:"\\F2B2"}.fa-google-plus-circle:before,.fa-google-plus-official:before{content:"\\F2B3"}.fa-fa:before,.fa-font-awesome:before{content:"\\F2B4"}.fa-handshake-o:before{content:"\\F2B5"}.fa-envelope-open:before{content:"\\F2B6"}.fa-envelope-open-o:before{content:"\\F2B7"}.fa-linode:before{content:"\\F2B8"}.fa-address-book:before{content:"\\F2B9"}.fa-address-book-o:before{content:"\\F2BA"}.fa-address-card:before,.fa-vcard:before{content:"\\F2BB"}.fa-address-card-o:before,.fa-vcard-o:before{content:"\\F2BC"}.fa-user-circle:before{content:"\\F2BD"}.fa-user-circle-o:before{content:"\\F2BE"}.fa-user-o:before{content:"\\F2C0"}.fa-id-badge:before{content:"\\F2C1"}.fa-drivers-license:before,.fa-id-card:before{content:"\\F2C2"}.fa-drivers-license-o:before,.fa-id-card-o:before{content:"\\F2C3"}.fa-quora:before{content:"\\F2C4"}.fa-free-code-camp:before{content:"\\F2C5"}.fa-telegram:before{content:"\\F2C6"}.fa-thermometer-4:before,.fa-thermometer-full:before,.fa-thermometer:before{content:"\\F2C7"}.fa-thermometer-3:before,.fa-thermometer-three-quarters:before{content:"\\F2C8"}.fa-thermometer-2:before,.fa-thermometer-half:before{content:"\\F2C9"}.fa-thermometer-1:before,.fa-thermometer-quarter:before{content:"\\F2CA"}.fa-thermometer-0:before,.fa-thermometer-empty:before{content:"\\F2CB"}.fa-shower:before{content:"\\F2CC"}.fa-bath:before,.fa-bathtub:before,.fa-s15:before{content:"\\F2CD"}.fa-podcast:before{content:"\\F2CE"}.fa-window-maximize:before{content:"\\F2D0"}.fa-window-minimize:before{content:"\\F2D1"}.fa-window-restore:before{content:"\\F2D2"}.fa-times-rectangle:before,.fa-window-close:before{content:"\\F2D3"}.fa-times-rectangle-o:before,.fa-window-close-o:before{content:"\\F2D4"}.fa-bandcamp:before{content:"\\F2D5"}.fa-grav:before{content:"\\F2D6"}.fa-etsy:before{content:"\\F2D7"}.fa-imdb:before{content:"\\F2D8"}.fa-ravelry:before{content:"\\F2D9"}.fa-eercast:before{content:"\\F2DA"}.fa-microchip:before{content:"\\F2DB"}.fa-snowflake-o:before{content:"\\F2DC"}.fa-superpowers:before{content:"\\F2DD"}.fa-wpexplorer:before{content:"\\F2DE"}.fa-meetup:before{content:"\\F2E0"}.sr-only{position:absolute;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0,0,0,0);border:0}.sr-only-focusable:active,.sr-only-focusable:focus{position:static;width:auto;height:auto;margin:0;overflow:visible;clip:auto}', ""])
    }, DgVG: function (e, t, n) {
        "use strict";

        function o(e) {
            return e && e.__esModule ? e : {default: e}
        }

        Object.defineProperty(t, "__esModule", {value: !0}), t.renderChildren = t.cloneItemElement = void 0;
        var a = n("Dd8w"), r = o(a), i = n("GiK3"), l = o(i), s = t.cloneItemElement = function (e, t) {
            return l.default.cloneElement(e, (0, r.default)({}, e.props, t))
        };
        t.renderChildren = function (e, t) {
            return l.default.Children.map(e, function (e) {
                return s(e, t)
            })
        }
    }, E6IZ: function (e, t, n) {
        "use strict";

        function o(e) {
            return e && e.__esModule ? e : {default: e}
        }

        Object.defineProperty(t, "__esModule", {value: !0});
        var a, r, i, l, s = n("Zx67"), c = o(s), u = n("Zrlr"), d = o(u), f = n("wxAW"), A = o(f), p = n("zwoO"),
            h = o(p), g = n("Pf15"), m = o(g), b = n("mwPL"), v = o(b), E = n("CGNb"), _ = o(E), C = n("CyHg"),
            N = o(C), T = n("AW9g"), w = o(T), y = n("j7PK"), I = o(y), x = n("dHmQ"), k = o(x), S = n("Z9ii"),
            M = o(S), O = n("5Q8M"), F = n("cl+9"), D = o(F), B = n("HW6M"), L = o(B), P = n("RH2O"), R = n("GiK3"),
            G = o(R), U = n("n2R4"), j = o(U), Q = n("l8jW"), H = n("PNPU"), Y = o(H),
            z = (a = (0, P.connect)(function (e) {
                return {}
            }, function (e) {
                return {
                    setQrCodeModalData: function (t, n) {
                        return e((0, O.setQrCodeModalData)(t, n))
                    }
                }
            }))((l = i = function (e) {
                function t() {
                    var e, n, o, a;
                    (0, d.default)(this, t);
                    for (var r = arguments.length, i = Array(r), l = 0; l < r; l++) i[l] = arguments[l];
                    return n = o = (0, h.default)(this, (e = t.__proto__ || (0, c.default)(t)).call.apply(e, [this].concat(i))), o.state = {
                        sns: [{
                            action: "wechat",
                            text: D.default.get("share.to-wechat"),
                            icon: v.default
                        }, {action: "weibo", text: D.default.get("share.to-weibo"), icon: _.default}, {
                            action: "qzone",
                            text: D.default.get("share.to-qzone"),
                            icon: N.default
                        }, {
                            action: "douban",
                            text: D.default.get("share.to-douban"),
                            icon: w.default
                        }, {
                            action: "facebook",
                            text: D.default.get("share.to-facebook"),
                            icon: I.default
                        }, {
                            action: "twitter",
                            text: D.default.get("share.to-twitter"),
                            icon: k.default
                        }, {action: "google_plus", text: D.default.get("share.to-googleplus"), icon: M.default}]
                    }, o.onClick = function (e, t) {
                        var n = o.props.shareData;
                        if ("wechat" === t.index) return void o.props.setQrCodeModalData(!0, {link: n.link});
                        (0, Y.default)(t.index, n.link, n.title, n.text)
                    }, o.getSubMenuItems = function () {
                        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
                        arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                        return o.state.sns.filter(function (t) {
                            return e.indexOf(t.action) < 0
                        }).map(function (e, t) {
                            return G.default.createElement(Q.MenuItem, {
                                key: t,
                                index: e.action,
                                className: j.default.shareitem
                            }, G.default.createElement("img", {src: e.icon, alt: ""}), e.text)
                        })
                    }, a = n, (0, h.default)(o, a)
                }

                return (0, m.default)(t, e), (0, A.default)(t, [{
                    key: "render", value: function () {
                        var e = this.props, t = e.text, n = e.index, o = e.className, a = e.iconName, r = e.direction,
                            i = e.filterItems, l = e.renderText;
                        return G.default.createElement(Q.SubMenu, {
                            text: t,
                            iconName: a && "share",
                            index: n,
                            onClick: this.onClick,
                            direction: r,
                            className: (0, L.default)(j.default.sharemenu, o)
                        }, this.getSubMenuItems(i, l))
                    }
                }]), t
            }(R.Component), i.defaultProps = {direction: "left"}, r = l)) || r;
        t.default = z
    }, EDcJ: function (e, t, n) {
        t = e.exports = n("FZ+f")(!1), t.push([e.i, "*{-webkit-box-sizing:border-box;box-sizing:border-box}body{margin:0}body.reader-day-mode{background-color:#fff}body.reader-night-mode{background-color:#3d3d3d}body ol,body ul{padding-left:0}body h1,body h2,body h3,body h4,body h5,body h6{font-weight:700}body a,body a:hover{color:#595959}body input{border:0}body input::-moz-placeholder{color:#999;opacity:1}body input:-moz-placeholder{color:#999}body input:-ms-input-placeholder{color:#999}body input::-webkit-input-placeholder{color:#999}body :focus{outline:0}img.math-block,img.math-inline{max-width:100%}body.reader-night-mode img.math-block,body.reader-night-mode img.math-inline{-webkit-filter:invert(.8);filter:invert(.8)}.note-view{font-size:16px}.note-view blockquote p{font-weight:400;line-height:1.7}.note-view .video-package .video-placeholder-area{position:relative;display:inline-block;min-height:110px;padding:10px 10px 10px 110px;-webkit-box-sizing:border-box;box-sizing:border-box;border:1px solid #d9d9d9;text-align:left;cursor:pointer}.note-view .video-package .video-placeholder-area .video-cover{position:absolute;top:9px;left:9px;display:block;width:90px;height:90px;opacity:.8;-webkit-transition:opacity .1s linear;-o-transition:opacity linear .1s;transition:opacity .1s linear}.note-view .video-package .video-description:empty{display:none}.note-view .video-package .video-close-button,.note-view .video-package .video-provider-button{float:left;font-size:14px;padding:0;line-height:14px;cursor:pointer;-webkit-transition:opacity .1s linear;-o-transition:opacity linear .1s;transition:opacity .1s linear}.note-view .video-package .video-close-button i.fa,.note-view .video-package .video-provider-button i.fa{position:relative;top:1px}body.reader-night-mode .note-view{color:#b3b3b3}.note-view a,.note-view a:hover{color:#3194d0}.note-view h1,.note-view h2,.note-view h3,.note-view h4,.note-view h5,.note-view h6{text-rendering:optimizelegibility;line-height:1.7;margin:0 0 15px;font-weight:700}body.reader-night-mode .note-view h1,body.reader-night-mode .note-view h2,body.reader-night-mode .note-view h3,body.reader-night-mode .note-view h4,body.reader-night-mode .note-view h5,body.reader-night-mode .note-view h6{color:#b3b3b3}.note-view h1{font-size:26px}.note-view h2{font-size:24px}.note-view h3{font-size:22px}.note-view h4{font-size:20px}.note-view h5{font-size:18px}.note-view h6{font-size:16px}.note-view hr{margin:0 0 20px;border:0;border-top:1px solid #d9d9d9!important}.note-view blockquote{padding:20px;background-color:#f2f2f2;border-left:6px solid #b3b3b3;word-break:break-word;font-size:16px;font-weight:400;line-height:30px;margin:0 0 20px}body.reader-night-mode .note-view blockquote{background-color:#595959;border-color:#262626}.note-view blockquote h1:last-child,.note-view blockquote h2:last-child,.note-view blockquote h3:last-child,.note-view blockquote h4:last-child,.note-view blockquote h5:last-child,.note-view blockquote h6:last-child,.note-view blockquote li:last-child,.note-view blockquote ol:last-child,.note-view blockquote p:last-child,.note-view blockquote ul:last-child{margin-bottom:0}.note-view blockquote .image-package{width:100%;margin-left:0}.note-view li p{margin:16px 0;overflow:visible}.note-view p{margin:0 0 25px;word-break:break-word}.note-view ol,.note-view ul{word-break:break-word;margin:-5px 0 20px 20px}.note-view ol li,.note-view ul li{line-height:30px}.note-view ol li ol,.note-view ol li ul,.note-view ul li ol,.note-view ul li ul{margin-top:15px}.note-view ol{list-style-type:decimal}.note-view ul{list-style-type:disc}.note-view pre{word-wrap:normal;word-break:break-all;white-space:pre;overflow:auto;margin-bottom:20px;padding:10px;border:1px solid #d9d9d9;border-radius:0;line-height:20px;background-color:#282c34}body.reader-night-mode .note-view pre{background-color:#262626;border-color:#1a1a1a}.note-view pre code{padding:0;background-color:transparent;white-space:pre}.note-view code{padding:2px 4px;background-color:#f6f6f6;vertical-align:middle;border:none;color:#c7254e;font-size:12px;white-space:pre-wrap}body.reader-night-mode .note-view code{background-color:#262626}.note-view table{width:100%;margin-bottom:20px;border:1px solid #d9d9d9;border-collapse:collapse;border-left:none;word-break:normal}.note-view table td,.note-view table th{padding:8px;border:1px solid #d9d9d9;line-height:20px;vertical-align:middle}.note-view table th{font-weight:700}.note-view table thead th{vertical-align:middle;text-align:inherit}.note-view table tr:nth-of-type(2n){background-color:hsla(0,0%,71%,.1)}.note-view table .image-package{width:100%;margin-left:0}.note-view .image-package{margin:0 -40px 20px;width:calc(100% + 80px);text-align:center;font-size:0}.note-view .image-package img{max-width:100%;width:auto;height:auto;vertical-align:middle;border:0}body.reader-night-mode .note-view .image-package img{opacity:.85}.note-view .image-package .image-caption{min-width:20%;max-width:80%;min-height:43px;display:inline-block;padding:10px;margin:0 auto;border-bottom:1px solid #d9d9d9;font-size:13px;color:#999;line-height:1.7}.note-view .image-package .image-caption:empty{display:none}body.reader-night-mode .note-view .image-package .image-caption{border-color:#2e2e2e}.note-view .video-package{position:relative;margin:0 auto 20px;text-align:center}.note-view .video-package .video-description{display:inline-block;min-width:20%;max-width:80%;min-height:22px;padding:10px;margin:0 auto;border-bottom:1px solid #d9d9d9;font-size:13px;color:#999;line-height:1.7}body.reader-night-mode .note-view .video-package .video-description{border-color:#2e2e2e}.note-view .video-package .video-description p{margin:0}.kalamu-area{color:#333;font-size:16px;font-weight:400;line-height:1.7;bottom:0;outline:0;min-height:100%;-webkit-box-sizing:border-box;box-sizing:border-box;padding:40px 40px 80px}body.reader-night-mode .kalamu-area{color:#b3b3b3}.kalamu-area a,.kalamu-area a:hover{color:#3194d0}.kalamu-area h1,.kalamu-area h2,.kalamu-area h3,.kalamu-area h4,.kalamu-area h5,.kalamu-area h6{text-rendering:optimizelegibility;line-height:1.7;margin:0 0 15px;font-weight:700}body.reader-night-mode .kalamu-area h1,body.reader-night-mode .kalamu-area h2,body.reader-night-mode .kalamu-area h3,body.reader-night-mode .kalamu-area h4,body.reader-night-mode .kalamu-area h5,body.reader-night-mode .kalamu-area h6{color:#b3b3b3}.kalamu-area h1{font-size:26px}.kalamu-area h2{font-size:24px}.kalamu-area h3{font-size:22px}.kalamu-area h4{font-size:20px}.kalamu-area h5{font-size:18px}.kalamu-area h6{font-size:16px}.kalamu-area hr{margin:0 0 20px;border:0;border-top:1px solid #d9d9d9!important}.kalamu-area blockquote{padding:20px;background-color:#f2f2f2;border-left:6px solid #b3b3b3;word-break:break-word;font-size:16px;font-weight:400;line-height:30px;margin:0 0 20px}body.reader-night-mode .kalamu-area blockquote{background-color:#595959;border-color:#262626}.kalamu-area blockquote h1:last-child,.kalamu-area blockquote h2:last-child,.kalamu-area blockquote h3:last-child,.kalamu-area blockquote h4:last-child,.kalamu-area blockquote h5:last-child,.kalamu-area blockquote h6:last-child,.kalamu-area blockquote li:last-child,.kalamu-area blockquote ol:last-child,.kalamu-area blockquote p:last-child,.kalamu-area blockquote ul:last-child{margin-bottom:0}.kalamu-area blockquote .image-package{width:100%;margin-left:0}.kalamu-area li p{margin:16px 0;overflow:visible}.kalamu-area p{margin:0 0 25px;word-break:break-word}.kalamu-area ol,.kalamu-area ul{word-break:break-word;margin:-5px 0 20px 20px}.kalamu-area ol li,.kalamu-area ul li{line-height:30px}.kalamu-area ol li ol,.kalamu-area ol li ul,.kalamu-area ul li ol,.kalamu-area ul li ul{margin-top:15px}.kalamu-area ol{list-style-type:decimal}.kalamu-area ul{list-style-type:disc}.kalamu-area pre{word-wrap:normal;word-break:break-all;white-space:pre;overflow:auto;margin-bottom:20px;padding:10px;border:1px solid #d9d9d9;border-radius:0;line-height:20px;background-color:#282c34}body.reader-night-mode .kalamu-area pre{background-color:#262626;border-color:#1a1a1a}.kalamu-area pre code{padding:0;background-color:transparent;white-space:pre}.kalamu-area code{padding:2px 4px;background-color:#f6f6f6;vertical-align:middle;border:none;color:#c7254e;font-size:12px;white-space:pre-wrap}body.reader-night-mode .kalamu-area code{background-color:#262626}.kalamu-area table{width:100%;margin-bottom:20px;border:1px solid #d9d9d9;border-collapse:collapse;border-left:none;word-break:normal}.kalamu-area table td,.kalamu-area table th{padding:8px;border:1px solid #d9d9d9;line-height:20px;vertical-align:middle}.kalamu-area table th{font-weight:700}.kalamu-area table thead th{vertical-align:middle;text-align:inherit}.kalamu-area table tr:nth-of-type(2n){background-color:hsla(0,0%,71%,.1)}.kalamu-area table .image-package{width:100%;margin-left:0}.kalamu-area .image-package{margin:0 -40px 20px;width:calc(100% + 80px);text-align:center;font-size:0}.kalamu-area .image-package img{max-width:100%;width:auto;height:auto;vertical-align:middle;border:0}body.reader-night-mode .kalamu-area .image-package img{opacity:.85}.kalamu-area .image-package .image-caption{min-width:20%;max-width:80%;min-height:43px;display:inline-block;padding:10px;margin:0 auto;border-bottom:1px solid #d9d9d9;font-size:13px;color:#999;line-height:1.7}.kalamu-area .image-package .image-caption:empty{display:none}body.reader-night-mode .kalamu-area .image-package .image-caption{border-color:#2e2e2e}.kalamu-area .video-package{position:relative;margin:0 auto 20px;text-align:center}.kalamu-area .video-package .video-description{display:inline-block;min-width:20%;max-width:80%;min-height:22px;padding:10px;margin:0 auto;border-bottom:1px solid #d9d9d9;font-size:13px;color:#999;line-height:1.7}body.reader-night-mode .kalamu-area .video-package .video-description{border-color:#2e2e2e}.kalamu-area .video-package .video-description p{margin:0}.kalamu-area .image-package .image-caption:empty{display:inline-block}", ""])
    }, FWRk: function (e, t, n) {
        t = e.exports = n("FZ+f")(!1), t.push([e.i, '._3P4JX{font-size:16px;width:40px;text-align:center;position:relative;min-height:30px;max-height:50px}._3P4JX ul._2V8zt{display:none;position:absolute;z-index:99;right:0}._3P4JX ul._2V8zt:before{position:absolute;right:12px;content:"";display:inline-block}._3P4JX ul.NvfK4{display:block}._3P4JX ul._2AwQg{bottom:100%}._3P4JX ul._2AwQg:before{bottom:-9px;border-left:9px solid transparent;border-right:9px solid transparent;border-top:9px solid #fff}body.reader-night-mode ._3P4JX ul._2AwQg:before{border-top-color:#3d3d3d}._3P4JX ul._3FcHm{top:100%}._3P4JX ul._3FcHm:before{border-left:9px solid transparent;border-right:9px solid transparent;border-bottom:9px solid #fff;top:-9px}body.reader-night-mode ._3P4JX ul._3FcHm:before{border-bottom-color:#3d3d3d}', ""]), t.locals = {
            dropdown: "_3P4JX",
            menu: "_2V8zt",
            show: "NvfK4",
            "menu-top": "_2AwQg",
            "menu-bottom": "_3FcHm"
        }
    }, "Fqd/": function (e, t, n) {
        e.exports = n.p + "static/img/fontawesome-webfont.912ec66.svg"
    }, FrNA: function (e, t, n) {
        "use strict";

        function o(e) {
            return e && e.__esModule ? e : {default: e}
        }

        Object.defineProperty(t, "__esModule", {value: !0});
        var a, r, i = n("bOdI"), l = o(i), s = n("Zx67"), c = o(s), u = n("Zrlr"), d = o(u), f = n("wxAW"), A = o(f),
            p = n("zwoO"), h = o(p), g = n("Pf15"), m = o(g), b = n("9JgI"), v = (o(b), n("oFuF")),
            E = (n("DgVG"), n("l8jW")), _ = o(E), C = n("HW6M"), N = o(C), T = n("GiK3"), w = o(T), y = n("8aSS"),
            I = o(y), x = n("91PG"), k = o(x), S = (0, v.getWindowSize)(), M = (r = a = function (e) {
                function t() {
                    var e, n, o, a;
                    (0, d.default)(this, t);
                    for (var r = arguments.length, i = Array(r), l = 0; l < r; l++) i[l] = arguments[l];
                    return n = o = (0, h.default)(this, (e = t.__proto__ || (0, c.default)(t)).call.apply(e, [this].concat(i))), o.state = {showMenu: !1}, o.onMouseEnter = function (e) {
                        clearTimeout(o.hideTimer), o.setState({showMenu: !0})
                    }, o.onMouseLeave = function (e) {
                        o.hideTimer = setTimeout(function () {
                            o.setState({showMenu: !1})
                        }, 30)
                    }, o.onItemClick = function (e, t) {
                        var n = o.props, a = n.onClick;
                        n.index;
                        a(e, t)
                    }, o.autoAlignMenu = function () {
                        if (o.props.autoAlign && o.menuRef) {
                            var e = o.menuRef.getBoundingClientRect();
                            if (e.width && e.height) {
                                var t = o.menuRef.className;
                                e.height + e.top > S[1] && (t = t.replace(new RegExp(k.default["submenu-bottom"]), ""), o.menuRef.className = t + " " + k.default["submenu-top"])
                            }
                        }
                    }, a = n, (0, h.default)(o, a)
                }

                return (0, m.default)(t, e), (0, A.default)(t, [{
                    key: "componentDidMount", value: function () {
                        this.autoAlignMenu()
                    }
                }, {
                    key: "componentDidUpdate", value: function () {
                        this.autoAlignMenu()
                    }
                }, {
                    key: "render", value: function () {
                        var e = this, t = this.state.showMenu, n = this.props, o = n.children, a = n.iconName, r = n.text,
                            i = n.className, s = n.index, c = n.direction,
                            u = (0, N.default)(k.default.submenu, k.default["submenu-bottom"], (0, l.default)({}, k.default.hidden, !t));
                        return w.default.createElement(E.MenuItem, {
                            iconName: a,
                            className: (0, N.default)(i, k.default.menuitem, k.default["menuitem-" + c]),
                            onClick: this.onItemClick,
                            onMouseEnter: this.onMouseEnter,
                            onMouseLeave: this.onMouseLeave,
                            index: s
                        }, r, w.default.createElement(I.default, {
                            transitionName: "fade",
                            component: "div",
                            className: k.default["submenu-wrapper"]
                        }, w.default.createElement(_.default, {
                            key: "submenu-wrapper",
                            className: u,
                            onClick: this.onItemClick,
                            getMenuDom: function (t) {
                                e.menuRef = t
                            }
                        }, o)))
                    }
                }]), t
            }(T.Component), a.defaultProps = {autoAlign: !0, onClick: v.noop, direction: "left"}, r);
        t.default = M
    }, FruA: function (e, t, n) {
        "use strict";

        function o(e) {
            return e && e.__esModule ? e : {default: e}
        }

        Object.defineProperty(t, "__esModule", {value: !0}), t.default = void 0;
        var a, r, i = n("bOdI"), l = o(i), s = n("Zx67"), c = o(s), u = n("Zrlr"), d = o(u), f = n("wxAW"), A = o(f),
            p = n("zwoO"), h = o(p), g = n("Pf15"), m = o(g), b = n("GiK3"), v = o(b), E = n("KSGD"), _ = o(E),
            C = n("HW6M"), N = o(C), T = n("A6CO"), w = o(T), y = n("hGJ7"), I = n("9JgI"), x = o(I),
            k = (r = a = function (e) {
                function t() {
                    var e, n, o, a;
                    (0, d.default)(this, t);
                    for (var r = arguments.length, i = Array(r), l = 0; l < r; l++) i[l] = arguments[l];
                    return n = o = (0, h.default)(this, (e = t.__proto__ || (0, c.default)(t)).call.apply(e, [this].concat(i))), o.clearCloseTimer = function () {
                        o.closeTimer && (clearTimeout(o.closeTimer), o.closeTimer = null)
                    }, a = n, (0, h.default)(o, a)
                }

                return (0, m.default)(t, e), (0, A.default)(t, [{
                    key: "componentDidMount", value: function () {
                        var e = this, t = this.props, n = t.duration, o = t.onClose;
                        0 !== n && (this.closeTimer = setTimeout(function () {
                            o(), e.clearCloseTimer()
                        }, n))
                    }
                }, {
                    key: "componentWillUnmount", value: function () {
                        this.clearCloseTimer()
                    }
                }, {
                    key: "render", value: function () {
                        var e, t = this.props, n = t.itemClass, o = t.itemStyle, a = t.content, r = t.type,
                            i = (0, N.default)((0, l.default)({}, "" + w.default[y.messagePrefix + "-item"], !0)),
                            s = (0, N.default)((e = {}, (0, l.default)(e, "" + w.default[y.messagePrefix + "-content"], !0), (0, l.default)(e, "" + w.default[y.messagePrefix + "-content-" + r], !0), (0, l.default)(e, n, !!n), e)),
                            c = {
                                info: "info-circle",
                                success: "check-circle",
                                error: "times-circle",
                                warning: "exclamation-circle",
                                loading: "spinner"
                            }[r];
                        return v.default.createElement("div", {className: i}, v.default.createElement("div", {
                            className: s,
                            style: o
                        }, v.default.createElement(x.default, {
                            name: c,
                            spin: "loading" === r
                        }), v.default.createElement("span", null, a)))
                    }
                }]), t
            }(b.Component), a.propTypes = {
                content: _.default.string,
                type: _.default.string,
                duration: _.default.number,
                onClose: _.default.func,
                itemClass: _.default.string,
                itemStyle: _.default.object
            }, a.defaultProps = {
                duration: 2e3, onClose: function () {
                }
            }, r);
        t.default = k
    }, FufB: function (e, t, n) {
        "use strict";
		var _n = n;
        
		function o(e) {
            return e && e.__esModule ? e : {default: e}
        }

        function a(e) {
            var t, n, o, a, r, i;
            return I.default.wrap(function (l) {
                for (; ;) switch (l.prev = l.next) {
                    case 0:
                        return t = e.nbId, n = e.isForce, l.next = 3, (0, B.select)(P.getState);
                    case 3:
                        if (o = l.sent, a = o.getIn(["entities", t, "notes"], R.NOTES_NOT_FOUND), l.prev = 5, a !== R.NOTES_NOT_FOUND && !n) {
                            l.next = 15;
                            break
                        }
                        return l.next = 9, (0, B.call)(U.default.getNotes, t);
                    case 9:
                        return r = l.sent, i = r.data, l.next = 13, (0, B.put)({
                            type: L.Notes.GET_NOTES_SUCCESS,
                            data: i,
                            nbId: t
                        });
                    case 13:
                        l.next = 17;
                        break;
                    case 15:
                        return l.next = 17, (0, B.put)({type: L.Notes.GET_NOTES_SUCCESS, nbId: t, isCache: !0});
                    case 17:
                        l.next = 23;
                        break;
                    case 19:
                        return l.prev = 19, l.t0 = l.catch(5), l.next = 23, (0, B.put)({type: L.Notes.GET_NOTES_FAIL});
                    case 23:
                    case"end":
                        return l.stop()
                }
            }, j, this, [[5, 19]])
        }

        function r(e) {
            var t, n, o, a, r;
            return I.default.wrap(function (i) {
                for (; ;) switch (i.prev = i.next) {
                    case 0:
                        return t = e.newSeq, n = e.oldSeq, o = e.nbId, i.prev = 1, i.next = 4, (0, B.call)(U.default.sortNotes, t);
                    case 4:
                        return a = i.sent, r = a.data, i.next = 8, (0, B.put)({type: L.Notes.SORT_NOTES_SUCCESS});
                    case 8:
                        i.next = 14;
                        break;
                    case 10:
                        return i.prev = 10, i.t0 = i.catch(1), i.next = 14, (0, B.put)({
                            type: L.Notes.SORT_NOTES_FAIL,
                            oldSeq: n,
                            nbId: o
                        });
                    case 14:
                    case"end":
                        return i.stop()
                }
            }, Q, this, [[1, 10]])
        }

        function i(e) {
            var t, n, o, a, r, i, l;
            return I.default.wrap(function (s) {
                for (; ;) switch (s.prev = s.next) {
                    case 0:
                        if (t = e.nbId, n = e.title, o = e.resolve, a = e.reject, r = e.atBottom, t) {
                            s.next = 7;
                            break
                        }
                        return S.default.error(O.default.get("error.no-nb")), s.next = 5, (0, B.put)({
                            type: L.Notes.NEW_NOTE_FAIL,
                            error: {}
                        });
                    case 5:
                        return a({}, t), s.abrupt("return");
                    case 7:
                        return s.prev = 7, s.next = 10, (0, B.call)(U.default.newNote, {
                            nbId: t,
                            title: n,
                            atBottom: r
                        });
                    case 10:
                        return i = s.sent, l = i.data, s.next = 14, (0, B.put)({
                            type: L.Notes.NEW_NOTE_SUCCESS,
                            data: l,
                            nbId: t,
                            atBottom: r
                        });
                    case 14:
                        o(l, t), s.next = 22;
                        break;
                    case 17:
                        return s.prev = 17, s.t0 = s.catch(7), s.next = 21, (0, B.put)({
                            type: L.Notes.NEW_NOTE_FAIL,
                            error: s.t0
                        });
                    case 21:
                        a(s.t0, t);
                    case 22:
                    case"end":
                        return s.stop()
                }
            }, H, this, [[7, 17]])
        }

        function l(e) {
            var t, n, oo, a, r, i, l, s, c, u, d, f, A, p;
            return I.default.wrap(function (h) {
                for (; ;) switch (h.prev = h.next) {
                    case 0:
                        return t = e.noteId, n = void 0 === t ? "" : t, n = n.toString(), h.next = 4, (0, B.select)(F.getState);
                    case 4:
                        if (oo = h.sent, a = oo.getIn(["entities", n, "content"], ""), a.trim()) {
                            h.next = 11;
                            break
                        }
                        return S.default.error(O.default.get("error.content-no-empty")), h.next = 10, (0, B.put)({
                            type: L.Notes.PUBLISH_NOTE_FAIL,
                            error: {},
                            noteId: n
                        });
                    case 10:
                        return h.abrupt("return");
                    case 11:
                        return h.next = 13, (0, B.select)(D.getState);
                    case 13:
						var N = _n("Gr4k"), M = o(N), k = new M.default, a = oo.getIn(["entities", n, "content"], ""), html = k.parse(a.trim())
                        return r = h.sent, i = r.getIn(["entities", n]).toJS()//, l = i.shared 去掉此部分可以重复弹出导出画面
							, s = i.title, c = i.slug, u = i.paid, h.prev = 15, h.next = 18, (0, B.call)(U.default.publishNote, n, html);
                    case 18:
                        if (d = h.sent, f = d.data, l) {
                            h.next = 23;
                            break
                        }
                        return h.next = 23, (0, B.put)({
                            type: L.Global.SET_PUBLISH_SUCCESS_MODAL_DATA,
                            show: !0,
                            data: {noteId: n, title: s, slug: c, paid: u}
                        });
                    case 23:
                        return h.next = 25, (0, B.put)({type: L.Notes.PUBLISH_NOTE_SUCCESS, data: f, noteId: n});
                    case 25:
                        h.next = 40;
                        break;
                    case 27:
                        return h.prev = 27, h.t0 = h.catch(15), h.next = 31, (0, B.put)({
                            type: L.Notes.PUBLISH_NOTE_FAIL,
                            error: h.t0,
                            noteId: n
                        });
                    case 31:
                        if (!(A = h.t0.error) || !A[0] || 7 !== A[0].code) {
                            h.next = 35;
                            break
                        }
                        return h.next = 35, (0, B.put)({type: L.Global.SET_BIND_PHONE_STATUS, hasBind: !1, noteId: n});
                    case 35:
                        if (!A || !A[0] || 2030 !== A[0].code) {
                            h.next = 40;
                            break
                        }
                        return p = A[0].data, p = JSON.parse(p || "{}"), h.next = 40, (0, B.put)({
                            type: L.Global.SET_BIND_STATUS,
                            status: !1,
                            data: p
                        });
                    case 40:
                    case"end":
                        return h.stop()
                }
            }, Y, this, [[15, 27]])
        }

        function s(e) {
            var t, n, o, a, r, i, l, s, c, u, d;
            return I.default.wrap(function (f) {
                for (; ;) switch (f.prev = f.next) {
                    case 0:
                        return t = e.noteId, n = e.title, o = e.content, a = e.resolve, r = void 0 === a ? x.noop : a, i = e.reject, l = void 0 === i ? x.noop : i, f.next = 3, (0, B.select)(D.getState);
                    case 3:
                        return s = f.sent, c = s.getIn(["entities", t, "autosave_control"]), f.prev = 5, f.next = 8, (0, B.call)(U.default.updateNote, t, c, n, o);
                    case 8:
                        return u = f.sent, d = u.data, f.next = 12, (0, B.put)({
                            type: L.Notes.UPDATE_NOTE_SUCCESS,
                            data: d,
                            noteId: t
                        });
                    case 12:
                        r(d), f.next = 20;
                        break;
                    case 15:
                        return f.prev = 15, f.t0 = f.catch(5), f.next = 19, (0, B.put)({
                            type: L.Notes.UPDATE_NOTE_FAIL,
                            error: f.t0,
                            noteId: t
                        });
                    case 19:
                        l(f.t0);
                    case 20:
                    case"end":
                        return f.stop()
                }
            }, z, this, [[5, 15]])
        }

        function c(e) {
            var t, n, o;
            return I.default.wrap(function (a) {
                for (; ;) switch (a.prev = a.next) {
                    case 0:
                        return t = e.noteId, a.prev = 1, a.next = 4, (0, B.call)(U.default.privateNote, t);
                    case 4:
                        return n = a.sent, o = n.data, a.next = 8, (0, B.put)({
                            type: L.Notes.PRIVATE_NOTE_SUCCESS,
                            data: o,
                            noteId: t
                        });
                    case 8:
                        a.next = 14;
                        break;
                    case 10:
                        return a.prev = 10, a.t0 = a.catch(1), a.next = 14, (0, B.put)({
                            type: L.Notes.PRIVATE_NOTE_FAIL,
                            error: a.t0,
                            noteId: t
                        });
                    case 14:
                    case"end":
                        return a.stop()
                }
            }, W, this, [[1, 10]])
        }

        function u(e) {
            var t, n, o, a, r;
            return I.default.wrap(function (i) {
                for (; ;) switch (i.prev = i.next) {
                    case 0:
                        return t = e.noteId, n = e.nbId, o = e.doneCallback, i.prev = 1, i.next = 4, (0, B.call)(U.default.deleteNoteSoft, t);
                    case 4:
                        return a = i.sent, r = a.data, i.next = 8, (0, B.put)({
                            type: L.Notes.DEL_NOTE_SOFT_SUCCESS,
                            data: r,
                            noteId: t,
                            nbId: n
                        });
                    case 8:
                        o(null, r), i.next = 16;
                        break;
                    case 11:
                        return i.prev = 11, i.t0 = i.catch(1), i.next = 15, (0, B.put)({
                            type: L.Notes.DEL_NOTE_SOFT_FAIL,
                            resError: i.t0,
                            noteId: t,
                            nbId: n
                        });
                    case 15:
                        o(i.t0.error);
                    case 16:
                    case"end":
                        return i.stop()
                }
            }, K, this, [[1, 11]])
        }

        function d(e) {
            var t, n, o, a, r, i;
            return I.default.wrap(function (l) {
                for (; ;) switch (l.prev = l.next) {
                    case 0:
                        return t = e.nbId, n = e.noteId, o = e.newNbId, a = e.doneCallback, l.prev = 1, l.next = 4, (0, B.call)(U.default.moveNote, o, n);
                    case 4:
                        return r = l.sent, i = r.data, l.next = 8, (0, B.put)({
                            type: L.Notes.MOVE_NOTE_SUCCESS,
                            data: i,
                            noteId: n,
                            newNbId: o,
                            nbId: t
                        });
                    case 8:
                        a(null, i), l.next = 16;
                        break;
                    case 11:
                        return l.prev = 11, l.t0 = l.catch(1), l.next = 15, (0, B.put)({
                            type: L.Notes.MOVE_NOTE_FAIL,
                            error: l.t0,
                            noteId: n,
                            newNbId: o,
                            nbId: t
                        });
                    case 15:
                        a(l.t0);
                    case 16:
                    case"end":
                        return l.stop()
                }
            }, J, this, [[1, 11]])
        }

        function f(e) {
            var t, n, o, a, r, i, l, s, c, u;
            return I.default.wrap(function (d) {
                for (; ;) switch (d.prev = d.next) {
                    case 0:
                        return t = e.nbId, n = e.noteId, o = e.amount, a = e.content, r = e.license, i = e.audioPaid, l = e.resolve, s = e.reject, d.prev = 1, d.next = 4, (0, B.call)(U.default.updatePNSetting, {
                            note_id: n,
                            amount: o,
                            content: a,
                            license: r,
                            audio_paid: i
                        });
                    case 4:
                        return c = d.sent, u = c.data, d.next = 8, (0, B.put)({
                            type: L.Notes.PUBLISH_PAID_NOTE_SUCCESS,
                            data: u,
                            noteId: n,
                            nbId: t
                        });
                    case 8:
                        l && l(u), d.next = 16;
                        break;
                    case 11:
                        return d.prev = 11, d.t0 = d.catch(1), d.next = 15, (0, B.put)({
                            type: L.Notes.PUBLISH_PAID_NOTE_FAIL,
                            error: d.t0,
                            noteId: n,
                            nbId: t
                        });
                    case 15:
                        s && s(d.t0);
                    case 16:
                    case"end":
                        return d.stop()
                }
            }, Z, this, [[1, 11]])
        }

        function A(e) {
            var t, n, o, a, r;
            return I.default.wrap(function (i) {
                for (; ;) switch (i.prev = i.next) {
                    case 0:
                        return t = e.noteId, n = e.resolve, o = e.reject, i.prev = 1, i.next = 4, (0, B.call)(U.default.getCoverImg, t);
                    case 4:
                        return a = i.sent, r = a.data, i.next = 8, (0, B.put)({
                            type: L.Notes.GET_COVER_IMG_SUCCESS,
                            data: r,
                            noteId: t
                        });
                    case 8:
                        n(r), i.next = 16;
                        break;
                    case 11:
                        return i.prev = 11, i.t0 = i.catch(1), i.next = 15, (0, B.put)({
                            type: L.Notes.GET_COVER_IMG_FAIL,
                            error: i.t0,
                            noteId: t
                        });
                    case 15:
                        o(i.t0);
                    case 16:
                    case"end":
                        return i.stop()
                }
            }, q, this, [[1, 11]])
        }

        function p(e) {
            var t, n, o, a, r, i, l, s;
            return I.default.wrap(function (c) {
                for (; ;) switch (c.prev = c.next) {
                    case 0:
                        return t = e.noteId, n = e.flowType, o = e.coverImgUrls, a = e.abbr, r = e.resolve, i = e.reject, c.prev = 1, c.next = 4, (0, B.call)(U.default.postCoverImg, {
                            noteId: t,
                            flowType: n,
                            coverImgUrls: o,
                            abbr: a
                        });
                    case 4:
                        return l = c.sent, s = l.data, c.next = 8, (0, B.put)({
                            type: L.Notes.POST_COVER_IMG_SUCCESS,
                            data: s,
                            noteId: t
                        });
                    case 8:
                        r(s), c.next = 16;
                        break;
                    case 11:
                        return c.prev = 11, c.t0 = c.catch(1), c.next = 15, (0, B.put)({
                            type: L.Notes.POST_COVER_IMG_FAIL,
                            error: c.t0,
                            noteId: t
                        });
                    case 15:
                        i(c.t0);
                    case 16:
                    case"end":
                        return c.stop()
                }
            }, V, this, [[1, 11]])
        }

        function h() {
            return I.default.wrap(function (e) {
                for (; ;) switch (e.prev = e.next) {
                    case 0:
                        return e.next = 2, (0, B.takeEvery)(L.Notes.GET_NOTES, a);
                    case 2:
                    case"end":
                        return e.stop()
                }
            }, X, this)
        }

        function g() {
            return I.default.wrap(function (e) {
                for (; ;) switch (e.prev = e.next) {
                    case 0:
                        return e.next = 2, (0, B.takeLatest)(L.Notes.SORT_NOTES, r);
                    case 2:
                    case"end":
                        return e.stop()
                }
            }, $, this)
        }

        function m() {
            return I.default.wrap(function (e) {
                for (; ;) switch (e.prev = e.next) {
                    case 0:
                        return e.next = 2, (0, B.takeEvery)(L.Notes.NEW_NOTE, i);
                    case 2:
                    case"end":
                        return e.stop()
                }
            }, ee, this)
        }

        function b() {
            return I.default.wrap(function (e) {
                for (; ;) switch (e.prev = e.next) {
                    case 0:
                        return e.next = 2, (0, B.takeLatest)(L.Notes.PUBLISH_NOTE, l);
                    case 2:
                    case"end":
                        return e.stop()
                }
            }, te, this)
        }

        function v() {
            return I.default.wrap(function (e) {
                for (; ;) switch (e.prev = e.next) {
                    case 0:
                        return e.next = 2, (0, B.takeLatest)(L.Notes.UPDATE_NOTE, s);
                    case 2:
                    case"end":
                        return e.stop()
                }
            }, ne, this)
        }

        function E() {
            return I.default.wrap(function (e) {
                for (; ;) switch (e.prev = e.next) {
                    case 0:
                        return e.next = 2, (0, B.takeLatest)(L.Notes.PRIVATE_NOTE, c);
                    case 2:
                    case"end":
                        return e.stop()
                }
            }, oe, this)
        }

        function _() {
            return I.default.wrap(function (e) {
                for (; ;) switch (e.prev = e.next) {
                    case 0:
                        return e.next = 2, (0, B.takeLatest)(L.Notes.DEL_NOTE_SOFT, u);
                    case 2:
                    case"end":
                        return e.stop()
                }
            }, ae, this)
        }

        function C() {
            return I.default.wrap(function (e) {
                for (; ;) switch (e.prev = e.next) {
                    case 0:
                        return e.next = 2, (0, B.takeLatest)(L.Notes.MOVE_NOTE, d);
                    case 2:
                    case"end":
                        return e.stop()
                }
            }, re, this)
        }

        function N() {
            return I.default.wrap(function (e) {
                for (; ;) switch (e.prev = e.next) {
                    case 0:
                        return e.next = 2, (0, B.takeLatest)(L.Notes.PUBLISH_PAID_NOTE, f);
                    case 2:
                    case"end":
                        return e.stop()
                }
            }, ie, this)
        }

        function T() {
            return I.default.wrap(function (e) {
                for (; ;) switch (e.prev = e.next) {
                    case 0:
                        return e.next = 2, (0, B.takeLatest)(L.Notes.GET_COVER_IMG, A);
                    case 2:
                    case"end":
                        return e.stop()
                }
            }, le, this)
        }

        function w() {
            return I.default.wrap(function (e) {
                for (; ;) switch (e.prev = e.next) {
                    case 0:
                        return e.next = 2, (0, B.takeLatest)(L.Notes.POST_COVER_IMG, p);
                    case 2:
                    case"end":
                        return e.stop()
                }
            }, se, this)
        }

        Object.defineProperty(t, "__esModule", {value: !0});
        var y = n("Xxa5"), I = o(y);
        t.watchGetNotes = h, t.watchSortNotes = g, t.watchNewNote = m, t.watchPublishNote = b, t.watchUpdateNote = v, t.watchPrivateNote = E, t.watchDeleteNoteSoft = _, t.watchMoveNote = C, t.watchPublishPaidNote = N, t.watchGetCoverImg = T, t.watchPostCoverImg = w;
        var x = n("oFuF"), k = n("mzOA"), S = o(k), M = n("cl+9"), O = o(M), F = n("THqP"), D = n("R2Qq"),
            B = n("egdi"), L = n("4HHy"), P = n("gmmG"), R = n("+AJo"), G = n("Z1y9"), U = o(G), j = I.default.mark(a),
            Q = I.default.mark(r), H = I.default.mark(i), Y = I.default.mark(l), z = I.default.mark(s),
            W = I.default.mark(c), K = I.default.mark(u), J = I.default.mark(d), Z = I.default.mark(f),
            q = I.default.mark(A), V = I.default.mark(p), X = I.default.mark(h), $ = I.default.mark(g),
            ee = I.default.mark(m), te = I.default.mark(b), ne = I.default.mark(v), oe = I.default.mark(E),
            ae = I.default.mark(_), re = I.default.mark(C), ie = I.default.mark(N), le = I.default.mark(T),
            se = I.default.mark(w)
    }, G2a6: function (e, t, n) {
        t = e.exports = n("FZ+f")(!1), t.push([e.i, '._3PLTX{position:fixed;top:0;left:0;width:100%;height:100%;background-color:#fff;z-index:1050;overflow-y:auto}body.reader-night-mode ._3PLTX{background-color:#3d3d3d}._3PLTX ._3Q2EW{position:fixed;top:50px;right:100px;font-size:30px;font-weight:700;padding:5px;cursor:pointer}body.reader-night-mode ._3PLTX ._3Q2EW{color:#b3b3b3}._3PLTX ._2Mx1k{background-color:#f2f2f2;padding-bottom:110px}body.reader-night-mode ._3PLTX ._2Mx1k{background-color:#595959}._3PLTX ._2Mx1k ._3CoyQ{padding:80px 0 40px;text-align:center}._3PLTX ._2Mx1k ._3CoyQ ._2-ZiM{display:inline-block;height:40px;font-size:28px;font-weight:500;color:#333;margin-bottom:24px}._3PLTX ._2Mx1k ._3CoyQ ._2-ZiM:hover{text-decoration:underline}body.reader-night-mode ._3PLTX ._2Mx1k ._3CoyQ ._2-ZiM{color:#b3b3b3}._3PLTX ._2Mx1k ._3CoyQ ._2ajaT{font-size:16px;font-weight:600;color:#42c02e}._3PLTX ._2Mx1k ._3CoyQ ._2ajaT:hover{color:#3bab29}._3PLTX ._2Mx1k ._3CoyQ ._2ajaT:hover:before{border-color:#3bab29}._3PLTX ._2Mx1k ._3CoyQ ._2ajaT:before{content:"";display:inline-block;width:18px;height:10px;border:3px solid #42c02e;border-width:0 0 4px 4px;-webkit-transform:rotate(-45deg);-ms-transform:rotate(-45deg);transform:rotate(-45deg);-webkit-transition:0s;-o-transition:0s;transition:0s;position:relative;bottom:4px;right:8px}._3PLTX ._2Mx1k .zelSB{text-align:center;color:#fff;font-size:14px}._3PLTX ._2Mx1k .zelSB>li{display:inline-block;width:124px;line-height:38px;border-radius:100px;margin:0 15px;cursor:pointer;padding:0;text-align:center}._3PLTX ._2Mx1k .zelSB>li>img{width:21px;position:relative;top:5px;right:5px}._3PLTX ._2Mx1k .zelSB>li i{margin-right:5px}._3PLTX ._2Mx1k .zelSB li._35P4c{background-color:#e05244}._3PLTX ._2Mx1k .zelSB li._1c1Eo{background-color:#07b225}._3PLTX ._2Mx1k .zelSB li._1HWk1{background-color:#3194d0}._3PLTX ._2Mx1k .zelSB li._3Qjz6{background-color:#a7a7a7;position:relative}._3PLTX ._2Mx1k .zelSB li._3Qjz6 ul{width:124px;right:-124px;top:100%;z-index:2}._3PLTX ._2Mx1k .zelSB li._3Qjz6 ul li{padding:4px 12px;line-height:24px}._3PLTX ._2TBVX{position:absolute;top:40%;left:0;right:0;-webkit-transform:translateY(-50%);-ms-transform:translateY(-50%);transform:translateY(-50%);background-color:transparent}._3PLTX ._1s967{height:40px;border-radius:50% 50% 0 0/100% 100% 0 0;background-color:#fff;margin-top:-40px}body.reader-night-mode ._3PLTX ._1s967{background-color:#3d3d3d}._3PLTX ._2w_E5{margin:40px auto 0;width:700px;font-size:14px}._3PLTX ._2w_E5 a{color:#42c02e}._3PLTX ._2w_E5 ._23R_O{margin-bottom:36px}._3PLTX ._2w_E5 ._23R_O ._3dZoJ{font-size:16px;font-weight:500;line-height:38px}body.reader-night-mode ._3PLTX ._2w_E5 ._23R_O ._3dZoJ{color:#b3b3b3}._3PLTX ._2w_E5 ._23R_O ._1WCUC{float:right;border:1px solid #d9d9d9;position:relative;width:200px;height:34px;border-radius:17px;padding:5px 20px 5px 30px}body.reader-night-mode ._3PLTX ._2w_E5 ._23R_O ._1WCUC{border-color:#4d4d4d}._3PLTX ._2w_E5 ._23R_O ._1WCUC i{position:absolute;left:10px;top:50%;margin-top:-8px;font-size:16px;color:#ccc}._3PLTX ._2w_E5 ._23R_O ._1WCUC input{line-height:24px;height:24px;width:100%;font-size:14px;background-color:transparent}body.reader-night-mode ._3PLTX ._2w_E5 ._23R_O ._1WCUC input{color:#b3b3b3}._3PLTX ._2w_E5 ._2Yn_Z{position:relative}._3PLTX ._2w_E5 ._18jMg{position:relative;margin-bottom:50px}._3PLTX ._2w_E5 ._18jMg h3{margin-bottom:0;height:40px;line-height:40px;padding:0 6px 0 14px;background-color:#f2f2f2;font-size:14px}body.reader-night-mode ._3PLTX ._2w_E5 ._18jMg h3{color:#b3b3b3;background-color:#4d4d4d}._3PLTX ._2w_E5 ._18jMg h3 a{margin-left:15px}._3PLTX ._2w_E5 ._18jMg h3 .Vd0_D{float:right;color:#999}body.reader-night-mode ._3PLTX ._2w_E5 ._18jMg h3 .Vd0_D{color:#4d4d4d}._3PLTX ._2w_E5 ._18jMg h3 i{padding:0 10px;cursor:pointer;color:#b3b3b3}body.reader-night-mode ._3PLTX ._2w_E5 ._18jMg h3 i{color:#4d4d4d}._3PLTX ._2w_E5 ._18jMg h3 i:hover{color:gray}body.reader-night-mode ._3PLTX ._2w_E5 ._18jMg h3 i:hover{color:#666}._3PLTX ._2w_E5 ._18jMg ._1hEmG{position:relative;margin:1px 0 0 1px;zoom:1;min-height:72px}._3PLTX ._2w_E5 ._18jMg ._1hEmG:after,._3PLTX ._2w_E5 ._18jMg ._1hEmG:before{content:" ";display:table}._3PLTX ._2w_E5 ._18jMg ._1hEmG:after{clear:both;visibility:hidden;font-size:0;height:0}._3PLTX ._2w_E5 ._18jMg ._1hEmG li{float:left;width:234px;border:1px solid #f2f2f2;position:relative;margin:-1px 0 0 -1px;list-style-type:none}body.reader-night-mode ._3PLTX ._2w_E5 ._18jMg ._1hEmG li{border-color:#4d4d4d}._3PLTX ._2w_E5 ._18jMg ._1hEmG li img{position:absolute;left:15px;height:40px;width:40px;top:15px;border-radius:10%}._3PLTX ._2w_E5 ._18jMg ._1hEmG li a{position:absolute;top:24px;right:15px}._3PLTX ._2w_E5 ._18jMg ._1hEmG li ._1CN24{display:block;font-weight:700;color:#595959;width:100%;padding:0 60px 0 75px;line-height:70px;overflow:hidden;-o-text-overflow:ellipsis;text-overflow:ellipsis;white-space:nowrap}body.reader-night-mode ._3PLTX ._2w_E5 ._18jMg ._1hEmG li ._1CN24{color:#b3b3b3}._3PLTX ._2w_E5 ._18jMg ._1hEmG ._3q_Pr{width:100%;text-align:center;padding:24px 0;border:1px solid #f2f2f2;border-top:none}body.reader-night-mode ._3PLTX ._2w_E5 ._18jMg ._1hEmG ._3q_Pr{color:#b3b3b3;border-color:#4d4d4d}._3PLTX ._2w_E5 ._18jMg ._1hEmG ._3GDE6{width:50%}._3PLTX ._2w_E5 ._18jMg ._1hEmG ._3GDE6 ._1CN24{display:block;padding:18px 65px 16px;line-height:1}._3PLTX ._2w_E5 ._18jMg ._1hEmG ._3GDE6 ._1CN24 em{font-weight:400;font-style:normal;color:#999;display:block;margin-top:8px;font-size:12px}._3PLTX ._2w_E5 ._18jMg ._245JG{height:120px;position:relative}._3PLTX ._1NlOh{pointer-events:none;cursor:none}._3PLTX ._31Mmk{padding:30px 0 60px;text-align:center;cursor:pointer}._3PLTX ._31Mmk i{margin-left:5px}body.reader-night-mode ._3PLTX ._31Mmk{color:#b3b3b3}._3PLTX ._27pBl{padding:30px 0;text-align:center}body.reader-night-mode ._3PLTX ._27pBl{color:#b3b3b3}', ""]), t.locals = {
            "success-modal": "_3PLTX",
            "close-btn": "_3Q2EW",
            "modal--top": "_2Mx1k",
            "title-wrap": "_3CoyQ",
            title: "_2-ZiM",
            "status-des": "_2ajaT",
            "share-items": "zelSB",
            weibo: "_35P4c",
            wechat: "_1c1Eo",
            "copy-link": "_1HWk1",
            "more-share": "_3Qjz6",
            "modal-top-middle": "_2TBVX",
            "modal--rec": "_1s967",
            "modal--bottom": "_2w_E5",
            "collection-des": "_23R_O",
            des: "_3dZoJ",
            "search-input-wrap": "_1WCUC",
            "search-result-page": "_2Yn_Z",
            "collection-auto-page": "_18jMg",
            "page-control": "Vd0_D",
            "collection-items": "_1hEmG",
            "collection-title": "_1CN24",
            empty: "_3q_Pr",
            "rec-collection-item": "_3GDE6",
            "rec-loading-wrap": "_245JG",
            disabled: "_1NlOh",
            "get-more": "_31Mmk",
            "no-more": "_27pBl"
        }
    }, Gbmw: function (e, t) {
        e.exports = "data:application/vnd.ms-fontobject;base64,PAoAAJQJAAABAAIAAAAAAAIABQMAAAAAAAABAJABAAAAAExQAAAAAAAAAAAAAAAAAAAAAAEAAAAAAAAAW3Pr5AAAAAAAAAAAAAAAAAAAAAAAABAAaQBjAG8AbgBmAG8AbgB0AAAADgBSAGUAZwB1AGwAYQByAAAAFgBWAGUAcgBzAGkAbwBuACAAMQAuADAAAAAQAGkAYwBvAG4AZgBvAG4AdAAAAAAAAAEAAAALAIAAAwAwR1NVQrD+s+0AAAE4AAAAQk9TLzJW7kjeAAABfAAAAFZjbWFwAZTTSAAAAegAAAGyZ2x5ZumAEOYAAAOoAAADOGhlYWQSQ1HrAAAA4AAAADZoaGVhB+IDgwAAALwAAAAkaG10eBPr//wAAAHUAAAAFGxvY2EBhAJuAAADnAAAAAxtYXhwARQAaAAAARgAAAAgbmFtZT5U/n0AAAbgAAACbXBvc3RarCXYAAAJUAAAAEEAAQAAA4D/gABcBAL//P/7BAcAAQAAAAAAAAAAAAAAAAAAAAUAAQAAAAEAAOTrc1tfDzz1AAsEAAAAAADXkIb3AAAAANeQhvf//P+kBAcDXAAAAAgAAgAAAAAAAAABAAAABQBcAAUAAAAAAAIAAAAKAAoAAAD/AAAAAAAAAAEAAAAKAB4ALAABREZMVAAIAAQAAAAAAAAAAQAAAAFsaWdhAAgAAAABAAAAAQAEAAQAAAABAAgAAQAGAAAAAQAAAAAAAQP8AZAABQAIAokCzAAAAI8CiQLMAAAB6wAyAQgAAAIABQMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUGZFZABAAHjm8AOA/4AAXAOAAIAAAAABAAAAAAAABAAAAAPpAAAEAv/8BAAAAAQAAAAAAAAFAAAAAwAAACwAAAAEAAABcgABAAAAAABsAAMAAQAAACwAAwAKAAABcgAEAEAAAAAKAAgAAgACAHjmEOYS5vD//wAAAHjmEOYS5vD//wAAAAAAAAAAAAEACgAKAAoACgAAAAEAAwAEAAIAAAEGAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAwAAAAAAEAAAAAAAAAABAAAAHgAAAB4AAAAAQAA5hAAAOYQAAAAAwAA5hIAAOYSAAAABAAA5vAAAObwAAAAAgAAAAAAAAB2ANIBDgGcAAUAAP/hA7wDGAATACgAMQBEAFAAAAEGKwEiDgIdASEnNC4CKwEVIQUVFxQOAycjJyEHIyIuAz0BFyIGFBYyNjQmFwYHBg8BDgEeATMhMjYnLgInATU0PgI7ATIWHQEBGRsaUxIlHBIDkAEKGCcehf5KAqIBFR8jHA8+Lf5JLD8UMiATCHcMEhIZEhKMCAYFBQgCAgQPDgFtFxYJBQkKBv6kBQ8aFbwfKQIfAQwZJxpMWQ0gGxJhiDRuHSUXCQEBgIABExsgDqc/ERoRERoRfBoWExIZBxANCBgaDSMkFAF35AsYEwwdJuMAAAAABP/8/6YEBwM8AAgAJgAvADMAAAEnMxYfARYGBxcBDgEuATcTIwMOASImJwMjExYOASYnASY2NyEeASU3NjczByMuASUzFyEC73ugIxigDA4RIv6DBhMSCAOuOaoDDhMOA6s5rwMIEhMG/oMJDxADzBEP/AuhGCOfeu0SDQG/dnv+lAJN7wEZpw0gAXD98QgFCRIKAiP9sQkKCgkCT/3eChIJBAkCDg4dAQEdkKcZAe8BIM7vAAAAAAIAAAAAAzoC6QAQACEAAAEnLgE+ARcFFgYHIS4BNDYzExceAQ4BJyUmNjchMhYUBiMClqwOBBIfDQENFhAc/eYQFhYQd60NBBIfDf7zFhAcAhoQFhYQAh6ACx8bBQnIEzMCARYhF/7EgAsfGwUJyBMzAhchFwAAAAQAAP+kA9sDXAAXACIAUgBbAAABFh0BJgYHBhYXISImJxE+ATMhMjMVFBc3FxYGKwEmJzU+ARMOAQcnJgYPAQYiLwEuAQ8BLgEnNzY0LwE+ATcXFjY/ATYyHwEeAT8BHgEXBwYUFwc+ATQmIgYUFgO2AWHlUU0SWf5UHykBASoeAiIBAgcqwgQEBcIHAQEI9gclHSQJEAMIJEwiCAIRCSQdJQcbBwcbByUdJAkQAwgkTCIIAhEJJB0lBxsHB74lMjJKMjICWwEC9EsXXF/lUyofAyQeK/gHAfTDAwkBBsMFA/0EJT4YCwMKCSQMDCQJCgMLGD4lGAcTBhkkPxgLAwkKJAsLJAoJAwsYPyQZBhMHRgExSTExSTEAAAAAAAASAN4AAQAAAAAAAAAVAAAAAQAAAAAAAQAIABUAAQAAAAAAAgAHAB0AAQAAAAAAAwAIACQAAQAAAAAABAAIACwAAQAAAAAABQALADQAAQAAAAAABgAIAD8AAQAAAAAACgArAEcAAQAAAAAACwATAHIAAwABBAkAAAAqAIUAAwABBAkAAQAQAK8AAwABBAkAAgAOAL8AAwABBAkAAwAQAM0AAwABBAkABAAQAN0AAwABBAkABQAWAO0AAwABBAkABgAQAQMAAwABBAkACgBWARMAAwABBAkACwAmAWkKQ3JlYXRlZCBieSBpY29uZm9udAppY29uZm9udFJlZ3VsYXJpY29uZm9udGljb25mb250VmVyc2lvbiAxLjBpY29uZm9udEdlbmVyYXRlZCBieSBzdmcydHRmIGZyb20gRm9udGVsbG8gcHJvamVjdC5odHRwOi8vZm9udGVsbG8uY29tAAoAQwByAGUAYQB0AGUAZAAgAGIAeQAgAGkAYwBvAG4AZgBvAG4AdAAKAGkAYwBvAG4AZgBvAG4AdABSAGUAZwB1AGwAYQByAGkAYwBvAG4AZgBvAG4AdABpAGMAbwBuAGYAbwBuAHQAVgBlAHIAcwBpAG8AbgAgADEALgAwAGkAYwBvAG4AZgBvAG4AdABHAGUAbgBlAHIAYQB0AGUAZAAgAGIAeQAgAHMAdgBnADIAdAB0AGYAIABmAHIAbwBtACAARgBvAG4AdABlAGwAbABvACAAcAByAG8AagBlAGMAdAAuAGgAdAB0AHAAOgAvAC8AZgBvAG4AdABlAGwAbABvAC4AYwBvAG0AAAAAAgAAAAAAAAAKAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAQIBAwEEAQUBBgABeARwYWlkBmNoYW5nZQNzZXQAAAAAAA=="
    }, H3Ok: function (e, t, n) {
        "use strict";

        function o(e) {
            return e && e.__esModule ? e : {default: e}
        }

        Object.defineProperty(t, "__esModule", {value: !0});
        var a = n("bOdI"), r = o(a), i = n("9JgI"), l = o(i), s = n("l8jW"), c = (o(s), n("66rn")), u = o(c),
            d = n("oFuF"), f = n("cl+9"), A = o(f), p = n("GiK3"), h = o(p), g = n("HW6M"), m = o(g),
            b = function (e, t, n, o, a) {
                if (t <= 1) return null;
                var i = (0, m.default)((0, r.default)({}, n.disabled, e <= 1)),
                    s = (0, m.default)((0, r.default)({}, n.disabled, e >= t));
                return h.default.createElement("span", {className: n["page-control"]}, h.default.createElement(l.default, {
                    name: "chevron-circle-left",
                    size: "m",
                    onClick: o,
                    className: i
                }), e, "/", t, h.default.createElement(l.default, {
                    name: "chevron-circle-right",
                    size: "m",
                    onClick: a,
                    className: s
                }))
            }, v = function () {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [], t = arguments[1],
                    n = arguments[2], o = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {},
                    a = arguments[4];
                return h.default.createElement("ul", {className: n["collection-items"]}, t && h.default.createElement(u.default, null), !t && e.length < 1 && h.default.createElement("div", {className: n.empty}, A.default.get("error.data-empty")), !t && e.map(function (e, t) {
                    return h.default.createElement("li", {key: t}, h.default.createElement("a", {
                        className: n["post-btn"],
                        onClick: a,
                        "data-collection-id": e.id,
                        "data-post-text": o.postText,
                        "data-posting-text": o.postingText,
                        "data-posted-text": o.postedText
                    }, o.postText), h.default.createElement("img", {
                        alt: "png",
                        src: e.avatar,
                        thumbnail: "180x180"
                    }), h.default.createElement("span", {className: n["collection-title"], title: e.title}, e.title))
                }))
            }, E = function () {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [], t = arguments[1],
                    n = arguments[2], o = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {},
                    a = arguments[4], r = arguments[5], i = arguments[6];
                return h.default.createElement("div", null, h.default.createElement("ul", {className: n["collection-items"]}, e.map(function (e, t) {
                    return h.default.createElement("li", {
                        key: t,
                        className: n["rec-collection-item"]
                    }, h.default.createElement("img", {
                        alt: "png",
                        src: e.avatar,
                        thumbnail: "180x180"
                    }), h.default.createElement("span", {className: n["collection-title"]}, e.title, h.default.createElement("em", null, A.default.get("collections.note-num", {num: (0, d.formatNumByK)(e.notes_count)}), "，", A.default.get("collections.suber-num", {num: (0, d.formatNumByK)(e.subscribers_count)}))), h.default.createElement("a", {
                        className: n["post-btn"],
                        onClick: a,
                        "data-collection-id": e.id,
                        "data-post-text": o.postText,
                        "data-posting-text": o.postingText,
                        "data-posted-text": o.postedText
                    }, o.postText))
                }), !t && e.length < 1 && h.default.createElement("div", {className: n.empty}, A.default.get("error.data-empty"))), t && h.default.createElement("div", {className: n["rec-loading-wrap"]}, h.default.createElement(u.default, null)), !t && !0 === r && h.default.createElement("div", {
                    className: n["get-more"],
                    onClick: i
                }, A.default.get("publishSuccessModal.get-more-data"), h.default.createElement(l.default, {
                    name: "caret-down",
                    size: "m"
                })), !t && !1 === r && e.length > 0 && h.default.createElement("div", {className: n["no-more"]}, A.default.get("publishSuccessModal.no-more-data"), " "))
            }, _ = function (e, t) {
                var n = (arguments.length > 2 && void 0 !== arguments[2] && arguments[2], arguments[3]), o = arguments[4];
                return h.default.createElement("ul", {className: t["share-items"]}, h.default.createElement("li", {
                    className: t.weibo,
                    onClick: n
                }, h.default.createElement(l.default, {
                    name: "weibo",
                    className: t.icon
                }), A.default.get("share.to-weibo")), h.default.createElement("li", {
                    className: t.wechat,
                    onClick: o
                }, h.default.createElement(l.default, {
                    name: "wechat",
                    className: t.icon
                }), A.default.get("share.to-wechat")), h.default.createElement("li", {
                    className: t["copy-link"],
                    "data-clipboard-text": e.link
                }, h.default.createElement(l.default, {
                    name: "link",
                    className: t.icon
                }), A.default.get("share.copy-link")), h.default.createElement(s.ShareMenu, {
                    text: A.default.get("share.more"),
                    className: t["more-share"],
                    direction: "",
                    filterItems: ["weibo"],
                    renderText: !0,
                    shareData: e
                }))
            }, C = function (e, t, n) {
                var o = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {}, a = arguments[4],
                    r = arguments[5], i = arguments[6], l = arguments[7], s = arguments[8], c = arguments[9];
                return h.default.createElement("div", {className: n["collection-auto-page"]}, h.default.createElement("h3", null, A.default.get("publishSuccessModal.my-collections"), h.default.createElement("a", {href: c}, A.default.get("publishSuccessModal.new-collection")), b(r, i, n, l, s)), v(e, t, n, o, a))
            }, N = function (e, t, n) {
                var o = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {}, a = arguments[4],
                    r = arguments[5], i = arguments[6], l = arguments[7], s = arguments[8];
                return e[1] && e[1].length < 1 ? null : h.default.createElement("div", {className: n["collection-auto-page"]}, h.default.createElement("h3", null, A.default.get("publishSuccessModal.lastest-collections"), b(r, i, n, l, s)), v(e[r], t, n, o, a))
            }, T = function (e, t, n) {
                var o = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {}, a = arguments[4],
                    r = arguments[5], i = arguments[6], l = arguments[7];
                return h.default.createElement("div", {className: n["collection-auto-page"]}, h.default.createElement("h3", null, A.default.get("publishSuccessModal.recomend-collections")), E(e, t, n, o, a, r < i, l))
            };
        t.default = {
            renderPageControl: b,
            renderCollectionItems: v,
            renderRecomendCollectionItems: E,
            renderShareItems: _,
            renderLatestCoPage: N,
            renderRecCoPage: T,
            renderEditableCoPage: C
        }
    }, I2I8: function (e, t, n) {
        var o = n("l0FP");
        "string" == typeof o && (o = [[e.i, o, ""]]);
        var a = {hmr: !0};
        a.transform = void 0, a.insertInto = void 0;
        n("MTIv")(o, a);
        o.locals && (e.exports = o.locals)
    }, IMLV: function (e, t, n) {
        e.exports = n.p + "static/fonts/fontawesome-webfont.b06871f.ttf"
    }, IkM0: function (e, t, n) {
        t = e.exports = n("FZ+f")(!1), t.push([e.i, '._2_WAp:after{width:0;height:0;border-top:5px solid transparent;border-bottom:5px solid transparent;margin:4px 0 0 -12px}._3df2u:after{float:left;content:"";border-right:5px solid #ccc}._1GURb:after{float:right;content:"";border-left:5px solid #ccc}._2_WAp ._3x4X_{height:100%;top:0}._2_WAp ._2KzJx,._2_WAp ._3x4X_{position:absolute;right:100%}._2_WAp .qhLFp{bottom:0}._2_WAp .oGKRI{top:0}._2_WAp ._3DXDE{display:none}', ""]), t.locals = {
            menuitem: "_2_WAp",
            "menuitem-left": "_3df2u",
            "menuitem-right": "_1GURb",
            "submenu-wrapper": "_3x4X_",
            submenu: "_2KzJx",
            "submenu-top": "qhLFp",
            "submenu-bottom": "oGKRI",
            hidden: "_3DXDE"
        }
    }, "Jl+A": function (e, t, n) {
        "use strict";

        function o(e) {
            return e && e.__esModule ? e : {default: e}
        }

        Object.defineProperty(t, "__esModule", {value: !0});
        var a, r, i = n("bOdI"), l = o(i), s = n("Zx67"), c = o(s), u = n("Zrlr"), d = o(u), f = n("wxAW"), A = o(f),
            p = n("zwoO"), h = o(p), g = n("Pf15"), m = o(g), b = n("9JgI"), v = o(b), E = n("oFuF"), _ = n("GiK3"),
            C = o(_), N = n("HW6M"), T = o(N), w = n("z69G"), y = o(w), I = n("SX5p"), x = o(I),
            k = (r = a = function (e) {
                function t() {
                    var e, n, o, a;
                    (0, d.default)(this, t);
                    for (var r = arguments.length, i = Array(r), l = 0; l < r; l++) i[l] = arguments[l];
                    return n = o = (0, h.default)(this, (e = t.__proto__ || (0, c.default)(t)).call.apply(e, [this].concat(i))), o.onClick = function (e) {
                        var t = o.props, n = t.index;
                        (0, t.onClick)(e, {index: n}), (0, E.stopEvent)(e)
                    }, o.onMouseEnter = function (e) {
                        var t = o.props, n = t.index;
                        (0, t.onMouseEnter)(e, {index: n})
                    }, o.onMouseLeave = function (e) {
                        var t = o.props, n = t.index;
                        (0, t.onMouseLeave)(e, {index: n})
                    }, a = n, (0, h.default)(o, a)
                }

                return (0, m.default)(t, e), (0, A.default)(t, [{
                    key: "render", value: function () {
                        var e = this.props, t = e.children, n = e.iconName, o = e.iconFontName, a = e.className,
                            r = e.hasBorder, i = e.title,
                            s = (0, T.default)(a, x.default.item, (0, l.default)({}, x.default["item-border"], r));
                        return C.default.createElement("li", {
                            className: s,
                            onClick: this.onClick,
                            onMouseEnter: this.onMouseEnter,
                            onMouseLeave: this.onMouseLeave,
                            title: i
                        }, n && C.default.createElement(v.default, {
                            name: n,
                            className: x.default.icon
                        }), o && C.default.createElement(y.default, {name: o, className: x.default.icon}), t)
                    }
                }]), t
            }(_.Component), a.defaultProps = {
                hasBorder: !0,
                onClick: E.noop,
                onMouseEnter: E.noop,
                onMouseLeave: E.noop,
                title: ""
            }, r);
        t.default = k
    }, JxR3: function (e, t, n) {
        "use strict";

        function o(e) {
            return e && e.__esModule ? e : {default: e}
        }

        function a(e) {
            var t, n;
            return d.default.wrap(function (e) {
                for (; ;) switch (e.prev = e.next) {
                    case 0:
                        return e.prev = 0, e.next = 3, (0, g.call)(C.default.getUser);
                    case 3:
                        return t = e.sent, n = t.data, e.next = 7, (0, g.put)({
                            type: b.User.GET_USER_SUCCESS,
                            data: (0, A.default)({}, n, {name: n.nickname, email: n.slug + "@jianshu.com"})
                        });
                    case 7:
                        e.next = 13;
                        break;
                    case 9:
                        return e.prev = 9, e.t0 = e.catch(0), e.next = 13, (0, g.put)({type: b.User.GET_USER_FAIL});
                    case 13:
                    case"end":
                        return e.stop()
                }
            }, N, this, [[0, 9]])
        }

        function r(e) {
            var t, n, o, a;
            return d.default.wrap(function (r) {
                for (; ;) switch (r.prev = r.next) {
                    case 0:
                        return t = e.isForce, r.next = 3, (0, g.select)(m.getUserOtpChannelState);
                    case 3:
                        if (n = r.sent, o = n.get("data"), r.prev = 5, o && !t) {
                            r.next = 11;
                            break
                        }
                        return r.next = 9, (0, g.call)(C.default.getOtpChannel);
                    case 9:
                        a = r.sent, o = a.data;
                    case 11:
                        return r.next = 13, (0, g.put)({type: b.User.GET_USER_OTP_CHANNEL_SUCCESS, data: o});
                    case 13:
                        r.next = 19;
                        break;
                    case 15:
                        return r.prev = 15, r.t0 = r.catch(5), r.next = 19, (0, g.put)({type: b.User.GET_USER_OTP_CHANNEL_FAIL});
                    case 19:
                    case"end":
                        return r.stop()
                }
            }, T, this, [[5, 15]])
        }

        function i(e) {
            var t;
            return d.default.wrap(function (n) {
                for (; ;) switch (n.prev = n.next) {
                    case 0:
                        return t = e.editorType, n.prev = 1, n.next = 4, (0, g.call)(C.default.changeEditorType, t);
                    case 4:
                        return n.next = 6, (0, g.put)({type: b.User.CHANGE_EDITOR_TYPE_SUCCESS, editorType: t});
                    case 6:
                        E.default.info(h.default.get("settings.change-editor")), n.next = 13;
                        break;
                    case 9:
                        return n.prev = 9, n.t0 = n.catch(1), n.next = 13, (0, g.put)({type: b.User.CHANGE_EDITOR_TYPE_FAIL});
                    case 13:
                    case"end":
                        return n.stop()
                }
            }, w, this, [[1, 9]])
        }

        function l() {
            return d.default.wrap(function (e) {
                for (; ;) switch (e.prev = e.next) {
                    case 0:
                        return e.next = 2, (0, g.takeLatest)(b.User.GET_USER, a);
                    case 2:
                    case"end":
                        return e.stop()
                }
            }, y, this)
        }

        function s() {
            return d.default.wrap(function (e) {
                for (; ;) switch (e.prev = e.next) {
                    case 0:
                        return e.next = 2, (0, g.takeLatest)(b.User.GET_USER_OTP_CHANNEL, r);
                    case 2:
                    case"end":
                        return e.stop()
                }
            }, I, this)
        }

        function c() {
            return d.default.wrap(function (e) {
                for (; ;) switch (e.prev = e.next) {
                    case 0:
                        return e.next = 2, (0, g.takeLatest)(b.User.CHANGE_EDITOR_TYPE, i);
                    case 2:
                    case"end":
                        return e.stop()
                }
            }, x, this)
        }

        Object.defineProperty(t, "__esModule", {value: !0});
        var u = n("Xxa5"), d = o(u), f = n("Dd8w"), A = o(f);
        t.watchGetUser = l, t.watchGetUserOtpChannel = s, t.watchChangeEditorType = c;
        var p = n("cl+9"), h = o(p), g = n("egdi"), m = n("i0Fb"), b = n("4HHy"), v = n("mzOA"), E = o(v),
            _ = n("Z1y9"), C = o(_), N = d.default.mark(a), T = d.default.mark(r), w = d.default.mark(i),
            y = d.default.mark(l), I = d.default.mark(s), x = d.default.mark(c)
    }, K3ts: function (e, t, n) {
        "use strict";

        function o(e) {
            return e && e.__esModule ? e : {default: e}
        }

        function a(e) {
            var t, n, o, a, r, i;
            return A.default.wrap(function (l) {
                for (; ;) switch (l.prev = l.next) {
                    case 0:
                        return l.next = 2, (0, h.select)(m.getState);
                    case 2:
                        if (t = l.sent, n = e.noteId, o = e.isForce, a = t.getIn(["entities", n, "content"], b.CONTENT_NOT_FOUND), l.prev = 5, a !== b.CONTENT_NOT_FOUND && !o) {
                            l.next = 15;
                            break
                        }
                        return l.next = 9, (0, h.call)(E.default.getNoteContent, n);
                    case 9:
                        return r = l.sent, i = r.data, l.next = 13, (0, h.put)({
                            type: g.NoteContent.GET_NOTE_CONTENT_SUCCESS,
                            data: i,
                            noteId: n
                        });
                    case 13:
                        l.next = 17;
                        break;
                    case 15:
                        return l.next = 17, (0, h.put)({
                            type: g.NoteContent.GET_NOTE_CONTENT_SUCCESS,
                            noteId: n,
                            isCache: !0
                        });
                    case 17:
                        l.next = 23;
                        break;
                    case 19:
                        return l.prev = 19, l.t0 = l.catch(5), l.next = 23, (0, h.put)({
                            type: g.NoteContent.GET_NOTE_CONTENT_FAIL,
                            noteId: n
                        });
                    case 23:
                    case"end":
                        return l.stop()
                }
            }, C, this, [[5, 19]])
        }

        function r(e) {
            var t, n, o, a;
            return A.default.wrap(function (r) {
                for (; ;) switch (r.prev = r.next) {
                    case 0:
                        return t = e.noteId, n = e.params, r.prev = 1, r.next = 4, (0, h.call)(E.default.putAudioMessage, t, n);
                    case 4:
                        return o = r.sent, a = o.data, r.next = 8, (0, h.put)({
                            type: g.NoteContent.PUT_AUDIO_MESSAGE_SUCCESS,
                            data: a,
                            noteId: t,
                            params: n
                        });
                    case 8:
                        r.next = 14;
                        break;
                    case 10:
                        return r.prev = 10, r.t0 = r.catch(1), r.next = 14, (0, h.put)({
                            type: g.NoteContent.PUT_AUDIO_MESSAGE_FAIL,
                            error: r.t0,
                            noteId: t
                        });
                    case 14:
                    case"end":
                        return r.stop()
                }
            }, N, this, [[1, 10]])
        }

        function i(e) {
            var t, n, o;
            return A.default.wrap(function (a) {
                for (; ;) switch (a.prev = a.next) {
                    case 0:
                        return t = e.noteId, a.prev = 1, a.next = 4, (0, h.call)(E.default.deleteAudio, t);
                    case 4:
                        return n = a.sent, o = n.data, a.next = 8, (0, h.put)({
                            type: g.NoteContent.DELETE_AUDIO_SUCCESS,
                            data: o,
                            noteId: t
                        });
                    case 8:
                        a.next = 14;
                        break;
                    case 10:
                        return a.prev = 10, a.t0 = a.catch(1), a.next = 14, (0, h.put)({
                            type: g.NoteContent.DELETE_AUDIO_FAIL,
                            error: a.t0,
                            noteId: t
                        });
                    case 14:
                    case"end":
                        return a.stop()
                }
            }, T, this, [[1, 10]])
        }

        function l(e) {
            var t, n, o;
            return A.default.wrap(function (a) {
                for (; ;) switch (a.prev = a.next) {
                    case 0:
                        return t = e.noteId, a.prev = 1, a.next = 4, (0, h.call)(E.default.getAudioUrl, t);
                    case 4:
                        return n = a.sent, o = n.data, a.next = 8, (0, h.put)({
                            type: g.NoteContent.GET_AUDIO_URL_SUCCESS,
                            data: o,
                            noteId: t
                        });
                    case 8:
                        a.next = 14;
                        break;
                    case 10:
                        return a.prev = 10, a.t0 = a.catch(1), a.next = 14, (0, h.put)({
                            type: g.NoteContent.GET_AUDIO_URL_FAIL,
                            error: a.t0,
                            noteId: t
                        });
                    case 14:
                    case"end":
                        return a.stop()
                }
            }, w, this, [[1, 10]])
        }

        function s() {
            return A.default.wrap(function (e) {
                for (; ;) switch (e.prev = e.next) {
                    case 0:
                        return e.next = 2, (0, h.takeLatest)(g.NoteContent.GET_NOTE_CONTENT, a);
                    case 2:
                    case"end":
                        return e.stop()
                }
            }, y, this)
        }

        function c() {
            return A.default.wrap(function (e) {
                for (; ;) switch (e.prev = e.next) {
                    case 0:
                        return e.next = 2, (0, h.takeLatest)(g.NoteContent.PUT_AUDIO_MESSAGE, r);
                    case 2:
                    case"end":
                        return e.stop()
                }
            }, I, this)
        }

        function u() {
            return A.default.wrap(function (e) {
                for (; ;) switch (e.prev = e.next) {
                    case 0:
                        return e.next = 2, (0, h.takeLatest)(g.NoteContent.DELETE_AUDIO, i);
                    case 2:
                    case"end":
                        return e.stop()
                }
            }, x, this)
        }

        function d() {
            return A.default.wrap(function (e) {
                for (; ;) switch (e.prev = e.next) {
                    case 0:
                        return e.next = 2, (0, h.takeLatest)(g.NoteContent.GET_AUDIO_URL, l);
                    case 2:
                    case"end":
                        return e.stop()
                }
            }, k, this)
        }

        Object.defineProperty(t, "__esModule", {value: !0});
        var f = n("Xxa5"), A = o(f);
        t.watchGetNoteContent = s, t.watchPutAudioMessageAsync = c, t.watchDeleteAudio = u, t.watchGetAudioUrl = d;
        var p = n("cl+9"), h = (o(p), n("egdi")), g = n("4HHy"), m = n("THqP"), b = n("+AJo"), v = n("Z1y9"), E = o(v),
            _ = n("mzOA"), C = (o(_), A.default.mark(a)), N = A.default.mark(r), T = A.default.mark(i),
            w = A.default.mark(l), y = A.default.mark(s), I = A.default.mark(c), x = A.default.mark(u),
            k = A.default.mark(d)
    }, KluA: function (e, t, n) {
        "use strict";

        function o(e) {
            return e && e.__esModule ? e : {default: e}
        }

        Object.defineProperty(t, "__esModule", {value: !0}), t.default = void 0;
        var a, r, i = n("Dd8w"), l = o(i), s = n("bOdI"), c = o(s), u = n("+6Bu"), d = o(u), f = n("Zx67"), A = o(f),
            p = n("Zrlr"), h = o(p), g = n("wxAW"), m = o(g), b = n("zwoO"), v = o(b), E = n("Pf15"), _ = o(E),
            C = n("gGqR"), N = o(C), T = n("JDN0"), w = o(T), y = n("GiK3"), I = o(y), x = n("O27J"), k = o(x),
            S = n("KSGD"), M = o(S), O = n("HW6M"), F = o(O), D = n("wyFM"), B = o(D),
            L = {type: ["primary", "danger"]}, P = /^[\u4e00-\u9fa5]{2}$/, R = P.test.bind(P),
            G = (r = a = function (e) {
                function t(e) {
                    (0, h.default)(this, t);
                    var n = (0, v.default)(this, (t.__proto__ || (0, A.default)(t)).call(this, e));
                    return n.getChildren = function () {
                        var e = n.props.children;
                        return I.default.Children.map(e, function (e) {
                            return (0, w.default)(e) && R(e) ? I.default.createElement("span", null, e.split("").join(" ")) : (0, w.default)(e) ? I.default.createElement("span", null, e) : e
                        })
                    }, n.clickBtn = function (e) {
                        n.setState({clicked: !1}), n.removeClicked && clearTimeout(n.removeClicked), n.addClicked = setTimeout(function () {
                            n.setState({clicked: !0})
                        }, 10), n.removeClicked = setTimeout(function () {
                            n.setState({clicked: !1})
                        }, 500), (0, N.default)(n.props.onClick) && n.props.onClick(e)
                    }, n.blurBtn = function () {
                        k.default.findDOMNode(n).blur()
                    }, n.state = {clicked: !1}, n
                }

                return (0, _.default)(t, e), (0, m.default)(t, [{
                    key: "componentWillUnmount", value: function () {
                        this.addClicked && (clearTimeout(this.addClicked), this.addClicked = null), this.removeClicked && (clearTimeout(this.removeClicked), this.removeClicked = null)
                    }
                }, {
                    key: "render", value: function () {
                        var e, t = this.props, n = t.type, o = t.strong, a = t.className, r = t.htmlType,
                            i = (0, d.default)(t, ["type", "strong", "className", "htmlType"]), s = this.state.clicked,
                            u = (0, F.default)((e = {}, (0, c.default)(e, "" + a, !!a), (0, c.default)(e, "" + B.default.btn, !0), (0, c.default)(e, "" + B.default["btn-strong"], !!o), (0, c.default)(e, "" + B.default["btn-clicked"], s), (0, c.default)(e, "" + B.default["btn-" + n], n && L.type.includes(n)), e));
                        return I.default.createElement("button", (0, l.default)({}, i, {
                            type: r || "button",
                            className: u,
                            onClick: this.clickBtn,
                            onMouseUp: this.blurBtn
                        }), this.getChildren())
                    }
                }]), t
            }(y.Component), a.propTypes = {
                type: M.default.oneOf(L.type),
                htmlType: M.default.string,
                className: M.default.string,
                strong: M.default.bool,
                onClick: M.default.func
            }, a.defaultProps = {strong: !1}, a.__Button__ = !0, r);
        t.default = G
    }, MAZe: function (e, t, n) {
        var o = n("G2a6");
        "string" == typeof o && (o = [[e.i, o, ""]]);
        var a = {hmr: !0};
        a.transform = void 0, a.insertInto = void 0;
        n("MTIv")(o, a);
        o.locals && (e.exports = o.locals)
    }, OPmc: function (e, t, n) {
        "use strict";

        function o() {
            return r.default.wrap(function (e) {
                for (; ;) switch (e.prev = e.next) {
                    case 0:
                        return e.next = 2, (0, i.all)([(0, l.watchChangeLocale)(), (0, l.watchChangeReadMode)(), (0, l.watchChangeFontType)(), (0, s.watchGetUser)(), (0, s.watchGetUserOtpChannel)(), (0, s.watchChangeEditorType)(), (0, c.watchGetNotebooks)(), (0, c.watchSortNotebooks)(), (0, c.watchNewNoteBook)(), (0, c.watchDelNoteBookSoft)(), (0, c.watchRenameNoteBook)(), (0, u.watchGetNotes)(), (0, u.watchSortNotes)(), (0, u.watchNewNote)(), (0, u.watchPublishNote)(), (0, u.watchUpdateNote)(), (0, u.watchPrivateNote)(), (0, u.watchDeleteNoteSoft)(), (0, u.watchMoveNote)(), (0, u.watchPublishPaidNote)(), (0, u.watchGetCoverImg)(), (0, u.watchPostCoverImg)(), (0, d.watchGetNoteContent)(), (0, d.watchPutAudioMessageAsync)(), (0, d.watchDeleteAudio)(), (0, d.watchGetAudioUrl)(), (0, f.watchGetNoteHistoryList)(), (0, f.watchGetNoteHistoryContent)(), (0, f.watchRestoreNoteHistoryContent)(), (0, A.watchGetTrashNotesList)(), (0, A.watchGetTrashNote)(), (0, A.watchDelTrashNote)(), (0, A.watchRecoveryTrashNote)()]);
                    case 2:
                    case"end":
                        return e.stop()
                }
            }, p, this)
        }

        Object.defineProperty(t, "__esModule", {value: !0});
        var a = n("Xxa5"), r = function (e) {
            return e && e.__esModule ? e : {default: e}
        }(a);
        t.default = o;
        var i = n("egdi"), l = n("3SFg"), s = n("JxR3"), c = n("2PWF"), u = n("FufB"), d = n("K3ts"), f = n("Qs4s"),
            A = n("3zmX"), p = r.default.mark(o)
    }, Ohkn: function (e, t, n) {
        "use strict";

        function o(e) {
            return e && e.__esModule ? e : {default: e}
        }

        Object.defineProperty(t, "__esModule", {value: !0});
        var a = n("Zrlr"), r = o(a), i = n("wxAW"), l = o(i), s = n("fZjL"), c = o(s), u = n("uYVh"), d = o(u),
            f = n("aNgh"), A = o(f), p = n("oFuF");
        window.SAEVENTS = A.default;
        var h = [];
        (0, c.default)(A.default).forEach(function (e) {
            h.push(A.default[e])
        });
        var g = "/", m = !0, b = function () {
            function e() {
                var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                (0, r.default)(this, e);
                var n = !m && !!t.debug;
                "true" === (0, p.getParameterByName)("sensor_debug") && (n = !0), d.default.init({
                    server_url: t.server_url || g,
                    show_log: n,
                    debug_mode: !m && !!t.debug_mode,
                    is_single_page: t.is_single_page || !1
                }), this.initUser(t.user), d.default.registerPage({
                    platform: "web",
                    site: "martin"
                }), d.default.quick("autoTrack")
            }

            return (0, l.default)(e, [{
                key: "initUser", value: function (e) {
                    e ? this.login(e.id) : this.logout()
                }
            }, {
                key: "login", value: function (e) {
                    d.default.login(e)
                }
            }, {
                key: "logout", value: function (e) {
                    d.default.logout(e)
                }
            }, {
                key: "setPageName", value: function (e) {
                    d.default.registerPage({pagename: e})
                }
            }, {
                key: "sendPV", value: function (e) {
                    d.default.quick("autoTrack", e)
                }
            }, {
                key: "trackEvent", value: function (e, t, n) {
                    h.indexOf(e) >= 0 ? d.default.track(e, t, n) : !m && window.console && console.warn("when you see this warning, the track data is failure, because %s is not listed in events.js", e)
                }
            }]), e
        }();
        t.default = b
    }, PNPU: function (e, t, n) {
        "use strict";

        function o(e, t) {
            function n() {
                window.open(e, t, "toolbar=0,resizable=1,scrollbars=yes,status=1,width=" + o + ",height=" + a) || (window.location.href = e)
            }

            var o = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 600,
                a = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 600;
            e && (/Firefox/.test(navigator.userAgent) ? setTimeout(n, 0) : n())
        }

        function a(e, t, n) {
            var a = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "",
                r = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : [], l = encodeURIComponent;
            t = l(t + "?utm_campaign=maleskine&utm_content=note&utm_medium=writer_share&utm_source=" + e), n = n && n.length > 0 ? n.replace(/\'|\"/g, "'") : "";
            var s = "";
            n = l(n);
            var c = document, u = window.getSelection, d = c.getSelection, f = c.selection,
                A = u ? u() : d ? d() : f ? f.createRange().text : "";
            switch (e) {
                case"weibo":
                    s = "http://service.weibo.com/share/share.php?appkey=1881139527&\n        title=" + n + "&url=" + t + "&searchPic=false&style=simple", r.length > 0 && (s += "&pic=" + l(r[0]));
                    break;
                case"douban":
                    s = "http://www.douban.com/recommend/?url=" + t + "&title=" + n + "'&sel=" + l(A) + "&v=1&r=1";
                    break;
                case"tweibo":
                    s = "http://share.v.t.qq.com/index.php?c=share&a=index&url=" + t + "&title=" + n;
                    break;
                case"qzone":
                    s = "http://sns.qzone.qq.com/cgi-bin/qzshare/cgi_qzshare_onekey?url='" + t + "'&title=" + n;
                    break;
                case"twitter":
                    s = "https://twitter.com/share?url=" + t + "&text=" + n + "&related=jianshuio";
                    break;
                case"facebook":
                    s = "http://www.facebook.com/sharer.php?s=100&p[url]=" + t + "&p[title]=" + n + " " + i.default.get("share.trailing-jianshushe") + "&p[summary]=" + (a || n);
                    break;
                case"google_plus":
                    s = "https://plus.google.com/share?url=" + t
            }
            o(s, n)
        }

        Object.defineProperty(t, "__esModule", {value: !0}), t.default = a;
        var r = n("cl+9"), i = function (e) {
            return e && e.__esModule ? e : {default: e}
        }(r)
    }, PREo: function (e, t, n) {
        "use strict";

        function o(e) {
            return e && e.__esModule ? e : {default: e}
        }

        Object.defineProperty(t, "__esModule", {value: !0});
        var a = n("woOf"), r = o(a);
        t.default = function (e, t) {
            return (0, l.default)(e, (0, r.default)({}, t, {showCancelBtn: !1}))
        };
        var i = n("1nMn"), l = o(i)
    }, PayV: function (e, t) {
        e.exports = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/Pgo8IURPQ1RZUEUgc3ZnIFBVQkxJQyAiLS8vVzNDLy9EVEQgU1ZHIDEuMS8vRU4iICJodHRwOi8vd3d3LnczLm9yZy9HcmFwaGljcy9TVkcvMS4xL0RURC9zdmcxMS5kdGQiID4KPCEtLQoyMDEzLTktMzA6IENyZWF0ZWQuCi0tPgo8c3ZnPgo8bWV0YWRhdGE+CkNyZWF0ZWQgYnkgaWNvbmZvbnQKPC9tZXRhZGF0YT4KPGRlZnM+Cgo8Zm9udCBpZD0iaWNvbmZvbnQiIGhvcml6LWFkdi14PSIxMDI0IiA+CiAgPGZvbnQtZmFjZQogICAgZm9udC1mYW1pbHk9Imljb25mb250IgogICAgZm9udC13ZWlnaHQ9IjUwMCIKICAgIGZvbnQtc3RyZXRjaD0ibm9ybWFsIgogICAgdW5pdHMtcGVyLWVtPSIxMDI0IgogICAgYXNjZW50PSI4OTYiCiAgICBkZXNjZW50PSItMTI4IgogIC8+CiAgICA8bWlzc2luZy1nbHlwaCAvPgogICAgCiAgICA8Z2x5cGggZ2x5cGgtbmFtZT0ieCIgdW5pY29kZT0ieCIgaG9yaXotYWR2LXg9IjEwMDEiCmQ9Ik0yODEgNTQzcS0yNyAtMSAtNTMgLTFoLTgzcS0xOCAwIC0zNi41IC02dC0zMi41IC0xOC41dC0yMyAtMzJ0LTkgLTQ1LjV2LTc2aDkxMnY0MXEwIDE2IC0wLjUgMzB0LTAuNSAxOHEwIDEzIC01IDI5dC0xNyAyOS41dC0zMS41IDIyLjV0LTQ5LjUgOWgtMTMzdi05N2gtNDM4djk3ek05NTUgMzEwdi01MnEwIC0yMyAwLjUgLTUydDAuNSAtNTh0LTEwLjUgLTQ3LjV0LTI2IC0zMHQtMzMgLTE2dC0zMS41IC00LjVxLTE0IC0xIC0yOS41IC0wLjUKdC0yOS41IDAuNWgtMzJsLTQ1IDEyOGgtNDM5bC00NCAtMTI4aC0yOWgtMzRxLTIwIDAgLTQ1IDFxLTI1IDAgLTQxIDkuNXQtMjUuNSAyM3QtMTMuNSAyOS41dC00IDMwdjE2N2g5MTF6TTE2MyAyNDdxLTEyIDAgLTIxIC04LjV0LTkgLTIxLjV0OSAtMjEuNXQyMSAtOC41cTEzIDAgMjIgOC41dDkgMjEuNXQtOSAyMS41dC0yMiA4LjV6TTMxNiAxMjNxLTggLTI2IC0xNCAtNDhxLTUgLTE5IC0xMC41IC0zN3QtNy41IC0yNXQtMyAtMTV0MSAtMTQuNQp0OS41IC0xMC41dDIxLjUgLTRoMzdoNjdoODFoODBoNjRoMzZxMjMgMCAzNCAxMnQyIDM4cS01IDEzIC05LjUgMzAuNXQtOS41IDM0LjVxLTUgMTkgLTExIDM5aC0zNjh6TTMzNiA0OTh2MjI4cTAgMTEgMi41IDIzdDEwIDIxLjV0MjAuNSAxNS41dDM0IDZoMTg4cTMxIDAgNTEuNSAtMTQuNXQyMC41IC01Mi41di0yMjdoLTMyN3oiIC8+CiAgICAKCiAgICAKICAgIDxnbHlwaCBnbHlwaC1uYW1lPSJwYWlkIiB1bmljb2RlPSImIzU5MTIwOyIgZD0iTTc1MS4xNDQyNzcgNTg4LjhsLTEyMy4wMTY1MzMgMjM4LjkzMzMzM2gxNTkuNzc4MTMzYTgxLjkyIDgxLjkyIDAgMCAwIDU5LjE4NzItMjUuMjU4NjY2bDE2MC4yNTYtMTY3LjQ5MjI2N0EyNy4zMDY2NjcgMjcuMzA2NjY3IDAgMCAwIDk4Ny42MjAwMTEgNTg4LjhoLTIzNi40NzU3MzR6IG0yNzAuNTA2NjY3LTExMS41NDc3MzNMNjQwLjkyNzc0NC01MC4wMzk0NjY5OTk5OTk5NDVhMjcuMzA2NjY3IDI3LjMwNjY2NyAwIDAgMC00OC4xMjggMjQuMjM0NjY3TDc2Ni41MDQyNzcgNTIwLjUzMzMzMzAwMDAwMDFoLTU2LjM4ODI2NmwtMTcwLjU5ODQtNTkwLjE2NTMzM2EyNy4zMDY2NjcgMjcuMzA2NjY3IDAgMCAwLTUyLjQ2MjkzNC0wLjAzNDEzM0wzMTUuNTAwNTQ0IDUyMC41MzMzMzMwMDAwMDAxSDI1OS4xMTIyNzdsMTc0LjUyMzczNC01NDUuNTg3MmEyNy4zMDY2NjcgMjcuMzA2NjY3IDAgMCAwLTQ4LjEyOC0yNC4zMDI5MzNMNS4xNjAyNzcgNDc3LjI1MjI2N0EyNy4zMDY2NjcgMjcuMzA2NjY3IDAgMCAwIDI3LjM0Njk0NCA1MjAuNTMzMzMzMDAwMDAwMUg5OTkuNDY0Mjc3YTI3LjMwNjY2NyAyNy4zMDY2NjcgMCAwIDAgMjIuMTUyNTM0LTQzLjI4MTA2NnpNMTguMzAxNjExIDYzNC45ODI0TDE3OC41NTc2MTEgODAyLjQ3NDY2N0E4MS45MiA4MS45MiAwIDAgMCAyMzcuNzQ0ODExIDgyNy43MzMzMzNoMTU5Ljc0NEwyNzQuNTA2NDExIDU4OC44SDM4LjAzMDY3N2EyNy4zMDY2NjcgMjcuMzA2NjY3IDAgMCAwLTE5LjcyOTA2NiA0Ni4xODI0ek00NTMuODc3MDc3IDgyNy43MzMzMzNoMTE3Ljg5NjUzNGwxMjIuOTgyNC0yMzguOTMzMzMzSDMzMC44OTQ2NzdsMTIyLjk4MjQgMjM4LjkzMzMzM3oiICBob3Jpei1hZHYteD0iMTAyNiIgLz4KCiAgICAKICAgIDxnbHlwaCBnbHlwaC1uYW1lPSJjaGFuZ2UiIHVuaWNvZGU9IiYjNTg4OTY7IiBkPSJNNjYxLjU1NTIgNTQyLjMxMDQwMDAwMDAwMDFsLTE3Mi4wMzIgMTI4LjA1MTJhNDAuNjUyOCA0MC42NTI4IDAgMCAwLTguNzA0IDU1LjUwMDggMzcuNTgwOCAzNy41ODA4IDAgMCAwIDUzLjU1NTIgOS4wNjI0bDI2OC44LTIwMC4wODk2YzMwLjIwOC0yMi41MjggMTQuODQ4LTcxLjk4NzItMjIuNDI1Ni03MS45ODcyaC01MzcuNkEzOS4wNjU2IDM5LjA2NTYgMCAwIDAgMjA0LjggNTAyLjU3OTJjMCAyMS45NjQ4IDE3LjIwMzIgMzkuNzMxMiAzOC40IDM5LjczMTJoNDE4LjM1NTJ6TTM2Mi40OTYgMjI1LjY4OTYwMDAwMDAwMDA0bDE3Mi4wMzItMTI4LjA1MTJjMTcuMjAzMi0xMi44IDIxLjA5NDQtMzcuNjgzMiA4LjcwNC01NS41MDA4YTM3LjU4MDggMzcuNTgwOCAwIDAgMC01My41NTUyLTkuMDYyNGwtMjY4LjggMjAwLjA4OTZjLTMwLjIwOCAyMi41MjgtMTQuODQ4IDcxLjk4NzIgMjIuNDI1NiA3MS45ODcyaDUzNy42YzIxLjE0NTYgMCAzOC4zNDg4LTE3Ljc2NjQgMzguMzQ4OC0zOS43MzEyYTM5LjA2NTYgMzkuMDY1NiAwIDAgMC0zOC40LTM5LjczMTJIMzYyLjQ5NnoiICBob3Jpei1hZHYteD0iMTAyNCIgLz4KCiAgICAKICAgIDxnbHlwaCBnbHlwaC1uYW1lPSJzZXQiIHVuaWNvZGU9IiYjNTg4OTg7IiBkPSJNOTUwLjE5ODg1NyA2MDMuNDI4NTcwOTk5OTk5OWE3LjMxNDI4NiA3LjMxNDI4NiAwIDAgMCAwLjY1ODI4Ni0zLjAzNTQyOHYtMjQ0LjAwNDU3MkEyOTIuNTcxNDI5IDI5Mi41NzE0MjkgMCAwIDEgNTc0LjQ2NC05MS40Mjg1NzEwMDAwMDAwM0gxNDYuMjg1NzE0YTczLjE0Mjg1NyA3My4xNDI4NTcgMCAwIDAtNzMuMTQyODU3IDczLjE0Mjg1N1Y3ODYuMjg1NzE0YTczLjE0Mjg1NyA3My4xNDI4NTcgMCAwIDAgNzMuMTQyODU3IDczLjE0Mjg1N2g1NDUuNTM2YTcuMzE0Mjg2IDcuMzE0Mjg2IDAgMCAwIDMuMDM1NDI5LTAuNjU4Mjg1VjYxMC43NDI4NTdjMC00LjAyMjg1NyAzLjI5MTQyOS03LjMxNDI4NiA3LjMxNDI4Ni03LjMxNDI4NmgyNDguMDI3NDI4ek03NDMuODk5NDI5IDg0Ni45NTc3MTRMOTM4LjQyMjg1NyA2NTIuNDM0Mjg1OTk5OTk5OWE3LjMxNDI4NiA3LjMxNDI4NiAwIDAgMC01LjE5MzE0My0xMi40NzA4NTdINzM4Ljc0Mjg1N2E3LjMxNDI4NiA3LjMxNDI4NiAwIDAgMC03LjMxNDI4NiA3LjMxNDI4NVY4NDEuNzY0NTcxYTcuMzE0Mjg2IDcuMzE0Mjg2IDAgMCAwIDEyLjQ3MDg1OCA1LjE5MzE0M3pNOTg2LjQ3NzcxNCA4NS42MTM3MTM5OTk5OTk5NmEyMTQuNjM3NzE0IDIxNC42Mzc3MTQgMCAwIDAtNzIuOTk2NTcxLTEyMi43NzAyODVsLTM2LjM4ODU3MiAxMS4xNTQyODVhMjIuMDE2IDIyLjAxNiAwIDAgMS0yNy45NDA1NzEtMTUuODcybC04LjE5Mi0zNi4wMjI4NTdhMjI3Ljk0OTcxNCAyMjcuOTQ5NzE0IDAgMCAwLTcyLjk2LTExLjg4NTcxNGMtMjUuNTYzNDI5IDAtNTAuMTAyODU3IDQuMjA1NzE0LTcyLjk2IDExLjg4NTcxNGwtOC4xOTIgMzYuMDIyODU3YTIxLjk0Mjg1NyAyMS45NDI4NTcgMCAwIDEtMjcuOTQwNTcxIDE1Ljg3MmwtMzYuMzg4NTcyLTExLjE1NDI4NWEyMTQuNjM3NzE0IDIxNC42Mzc3MTQgMCAwIDAtNzIuOTk2NTcxIDEyMi43NzAyODVsMjcuNzIxMTQzIDI0LjY4NTcxNWEyMS4zOTQyODYgMjEuMzk0Mjg2IDAgMCAxIDAgMzIuMDczMTQybC0yNy43MjExNDMgMjQuNjQ5MTQzYTIxNC42Mzc3MTQgMjE0LjYzNzcxNCAwIDAgMCA3Mi45OTY1NzEgMTIyLjc3MDI4NmwzNi4zODg1NzItMTEuMTU0Mjg2YTIyLjAxNiAyMi4wMTYgMCAwIDEgMjcuOTQwNTcxIDE1LjkwODU3Mmw4LjE5MiAzNS45ODYyODVBMjI3Ljk0OTcxNCAyMjcuOTQ5NzE0IDAgMCAwIDc2OCAzNDIuNDE4Mjg1OTk5OTk5OTdjMjUuNTYzNDI5IDAgNTAuMTAyODU3LTQuMTY5MTQzIDcyLjk2LTExLjg4NTcxNWw4LjE5Mi0zNS45ODYyODVhMjEuOTQyODU3IDIxLjk0Mjg1NyAwIDAgMSAyNy45NDA1NzEtMTUuOTA4NTcybDM2LjM4ODU3MiAxMS4xNTQyODZhMjE0LjYzNzcxNCAyMTQuNjM3NzE0IDAgMCAwIDcyLjk5NjU3MS0xMjIuNzcwMjg2bC0yNy43MjExNDMtMjQuNjQ5MTQzYTIxLjM5NDI4NiAyMS4zOTQyODYgMCAwIDEgMC0zMi4wNzMxNDJsMjcuNzIxMTQzLTI0LjY4NTcxNXogbS0yMTcuNTI2ODU3LTQ1LjcxNDI4NWM0OC40OTM3MTQgMCA4Ny43NzE0MjkgMzguNjkyNTcxIDg3Ljc3MTQyOSA4Ni40MTgyODUgMCA0Ny43NjIyODYtMzkuMjc3NzE0IDg2LjQ1NDg1Ny04Ny43NzE0MjkgODYuNDU0ODU3LTQ4LjQ1NzE0MyAwLTg3Ljc3MTQyOS0zOC42OTI1NzEtODcuNzcxNDI4LTg2LjQ1NDg1NyAwLTQ3LjcyNTcxNCAzOS4zMTQyODYtODYuNDE4Mjg2IDg3Ljc3MTQyOC04Ni40MTgyODV6IiAgaG9yaXotYWR2LXg9IjEwMjQiIC8+CgogICAgCgoKICA8L2ZvbnQ+CjwvZGVmcz48L3N2Zz4K"
    }, Q9EA: function (e, t, n) {
        "use strict";

        function o(e) {
            return e && e.__esModule ? e : {default: e}
        }

        Object.defineProperty(t, "__esModule", {value: !0});
        var a, r, i = n("bOdI"), l = o(i), s = n("Zx67"), c = o(s), u = n("Zrlr"), d = o(u), f = n("wxAW"), A = o(f),
            p = n("zwoO"), h = o(p), g = n("Pf15"), m = o(g), b = n("9JgI"), v = o(b), E = n("l8jW"), _ = o(E),
            C = n("DgVG"), N = n("oFuF"), T = n("KSGD"), w = o(T), y = n("O27J"), I = (o(y), n("8aSS")), x = o(I),
            k = n("GiK3"), S = o(k), M = n("HW6M"), O = o(M), F = n("8Pl5"), D = o(F),
            B = ["mousedown", "mousemove", "mouseup"], L = (0, N.getWindowSize)(), P = (r = a = function (e) {
                function t(e) {
                    (0, d.default)(this, t);
                    var n = (0, h.default)(this, (t.__proto__ || (0, c.default)(t)).call(this, e));
                    return n.autoAlignMenu = function () {
                        if (n.props.autoAlign && n.menuRef) {
                            var e = n.menuRef.getBoundingClientRect();
                            if (e.width && e.height) {
                                var t = n.menuRef.className;
                                e.height + e.top > L[1] && (t = t.replace(new RegExp(D.default["menu-bottom"]), ""), n.menuRef.className = t + " " + D.default["menu-top"])
                            }
                        }
                    }, n.stopPropagationEvent = function (e) {
                        e.stopPropagation()
                    }, n.stopEventsForSortableParent = function (e) {
                        e ? B.map(function (e) {
                            return n.dropDown.addEventListener(e, n.stopPropagationEvent, !1), null
                        }) : B.map(function (e) {
                            return n.dropDown.removeEventListener(e, n.stopPropagationEvent, !1), null
                        })
                    }, n.setShowMenu = function (e, t) {
                        n.props.onMenuVisibleChange;
                        "boolean" == typeof e && n.setState({showMenu: e})
                    }, n.iconClickHandler = function (e) {
                        var t = n.state.showMenu;
                        n.setShowMenu(!t)
                    }, n.clickInside = function (e) {
                        n.dropDown.contains(e.target) || n.setShowMenu(!1)
                    }, n.renderDropIcon = function () {
                        var e = n.props.children;
                        return e ? (0, C.renderChildren)(e, {onClick: n.iconClickHandler}) : S.default.createElement(v.default, {
                            name: "gear",
                            className: D.default["icon-gear"],
                            onClick: n.iconClickHandler
                        })
                    }, n.onDropDownItemClick = function (e, t) {
                        (0, n.props.onItemClick)(e, t)
                    }, n.renderDropDownMenu = function () {
                        var e = n.state.showMenu, t = n.props, o = t.menuItems, a = t.menuCustomClass,
                            r = (t.autoFix, [a, D.default.menu, D.default["menu-bottom"]]);
                        return r = (0, O.default)(r, (0, l.default)({}, D.default.show, e)), S.default.createElement(_.default, {
                            getMenuDom: function (e) {
                                n.menuRef = e
                            }, className: r, onClick: n.onDropDownItemClick
                        }, o)
                    }, n.setShowMenu(e.showMenu), n.state = {showMenu: !1}, n
                }

                return (0, m.default)(t, e), (0, A.default)(t, [{
                    key: "componentDidMount", value: function () {
                        this.props.sortable && this.stopEventsForSortableParent(!0), this.autoAlignMenu(), window.addEventListener("click", this.clickInside, !1)
                    }
                }, {
                    key: "componentWillReceiveProps", value: function (e) {
                        this.setShowMenu(e.showMenu)
                    }
                }, {
                    key: "componentDidUpdate", value: function () {
                        this.autoAlignMenu()
                    }
                }, {
                    key: "componentWillUnmount", value: function () {
                        window.removeEventListener("click", this.clickInside, !1), this.stopEventsForSortableParent(!1)
                    }
                }, {
                    key: "render", value: function () {
                        var e = this, t = (this.state.showMenu, this.props), n = (t.children, t.className),
                            o = (0, O.default)(D.default.dropdown, n);
                        return S.default.createElement("div", {
                            className: o, ref: function (t) {
                                e.dropDown = t
                            }
                        }, this.renderDropIcon(), S.default.createElement(x.default, {
                            transitionName: "fade",
                            component: "span"
                        }, this.renderDropDownMenu()))
                    }
                }]), t
            }(k.Component), a.propTypes = {showMenu: w.default.bool}, a.defaultProps = {
                autoAlign: !0,
                onItemClick: N.noop,
                onMenuVisibleChange: N.noop,
                sortable: !1
            }, r);
        t.default = P
    }, QgNW: function (e, t, n) {
        t = e.exports = n("FZ+f")(!1), t.push([e.i, "._2bPLj{height:273px;display:-webkit-box;display:-ms-flexbox;display:flex}._2bPLj ._2O_i0{width:40%;margin-top:50px;height:170px;border-right:1px solid #d8d8d8;padding:0 16px 60px 30px;-webkit-box-sizing:border-box;box-sizing:border-box}._2bPLj ._2O_i0 img{width:100%;margin-bottom:16px}._2bPLj ._2O_i0 ._2bPLj{font-family:PingFang-SC;font-size:14px;font-weight:400;font-style:normal;font-stretch:normal;line-height:normal;letter-spacing:normal;color:#999}._2bPLj ._22F9u{width:60%;margin-top:50px;padding-left:20px}._2bPLj ._22F9u ._2-GkG{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between;width:263px;height:60px;padding:18px;border-radius:8px;background-color:#fafafa;border:1px solid #ddd;margin-bottom:30px;font-size:16px}._2bPLj ._22F9u .ZYxKq{color:#999}._2bPLj ._22F9u .ZYxKq ._2H-zz{margin-right:18px;color:#999;font-size:16px}._2bPLj ._22F9u .ZYxKq ._1B8hd{color:#49be38}._2bPLj ._22F9u ._2-GkG .fOJcl{width:90px;height:30px;border-radius:16px;color:#3294d0;border:1px solid #3294d0}._2bPLj ._22F9u ._2-GkG .fOJcl a{color:#3294d0}", ""]), t.locals = {
            content: "_2bPLj",
            left: "_2O_i0",
            right: "_22F9u",
            item: "_2-GkG",
            "item-left": "ZYxKq",
            icon: "_2H-zz",
            active: "_1B8hd",
            btn: "fOJcl"
        }
    }, Qs4s: function (e, t, n) {
        "use strict";

        function o(e) {
            return e && e.__esModule ? e : {default: e}
        }

        function a(e) {
            var t, n, o;
            return d.default.wrap(function (a) {
                for (; ;) switch (a.prev = a.next) {
                    case 0:
                        return t = e.noteId, a.prev = 1, a.next = 4, (0, A.call)(m.default.getNoteHistoryList, t);
                    case 4:
                        return n = a.sent, o = n.data, a.next = 8, (0, A.put)({
                            type: p.NoteHistory.GET_NOTE_HISTORY_LIST_SUCCESS,
                            data: o
                        });
                    case 8:
                        a.next = 14;
                        break;
                    case 10:
                        return a.prev = 10, a.t0 = a.catch(1), a.next = 14, (0, A.put)({type: p.NoteHistory.GET_NOTE_HISTORY_LIST_FAIL});
                    case 14:
                    case"end":
                        return a.stop()
                }
            }, b, this, [[1, 10]])
        }

        function r(e) {
            var t, n, o, a, r, i, l;
            return d.default.wrap(function (s) {
                for (; ;) switch (s.prev = s.next) {
                    case 0:
                        return t = e.historyId, n = e.isForce, o = e.noteId, s.next = 3, (0, A.select)(h.getNoteHistoryContentsState);
                    case 3:
                        if (a = s.sent, r = a.getIn(["entities", t.toString()]), s.prev = 5, r && !n) {
                            s.next = 14;
                            break
                        }
                        return s.next = 9, (0, A.call)(m.default.getNoteHistoryContent, t, o);
                    case 9:
                        i = s.sent, l = i.data, r = l, s.next = 16;
                        break;
                    case 14:
                        return s.next = 16, (0, f.delay)(300);
                    case 16:
                        return s.next = 18, (0, A.put)({
                            type: p.NoteHistory.GET_NOTE_HISTORY_CONTENT_SUCCESS,
                            data: r,
                            historyId: t
                        });
                    case 18:
                        s.next = 24;
                        break;
                    case 20:
                        return s.prev = 20, s.t0 = s.catch(5), s.next = 24, (0, A.put)({type: p.NoteHistory.GET_NOTE_HISTORY_CONTENT_FAIL});
                    case 24:
                    case"end":
                        return s.stop()
                }
            }, v, this, [[5, 20]])
        }

        function i(e) {
            var t, n, o, a, r, i, l;
            return d.default.wrap(function (s) {
                for (; ;) switch (s.prev = s.next) {
                    case 0:
                        return t = e.historyId, n = e.noteId, o = e.nbId, s.next = 3, (0, A.select)(h.getNoteHistoryContentsState);
                    case 3:
                        return a = s.sent, r = a.getIn(["entities", t.toString()]).toJS(), s.prev = 5, s.next = 8, (0, A.call)(m.default.restoreHistoryContent, t, n);
                    case 8:
                        return i = s.sent, l = i.data, s.next = 12, (0, A.put)({
                            type: p.NoteHistory.RESTORE_NOTE_HISTORY_CONTENT_SUCCESS,
                            data: l,
                            nbId: o,
                            noteId: n,
                            revertData: r
                        });
                    case 12:
                        s.next = 18;
                        break;
                    case 14:
                        return s.prev = 14, s.t0 = s.catch(5), s.next = 18, (0, A.put)({type: p.NoteHistory.RESTORE_NOTE_HISTORY_CONTENT_FAIL});
                    case 18:
                    case"end":
                        return s.stop()
                }
            }, E, this, [[5, 14]])
        }

        function l() {
            return d.default.wrap(function (e) {
                for (; ;) switch (e.prev = e.next) {
                    case 0:
                        return e.next = 2, (0, A.takeLatest)(p.NoteHistory.GET_NOTE_HISTORY_LIST, a);
                    case 2:
                    case"end":
                        return e.stop()
                }
            }, _, this)
        }

        function s() {
            return d.default.wrap(function (e) {
                for (; ;) switch (e.prev = e.next) {
                    case 0:
                        return e.next = 2, (0, A.takeLatest)(p.NoteHistory.GET_NOTE_HISTORY_CONTENT, r);
                    case 2:
                    case"end":
                        return e.stop()
                }
            }, C, this)
        }

        function c() {
            return d.default.wrap(function (e) {
                for (; ;) switch (e.prev = e.next) {
                    case 0:
                        return e.next = 2, (0, A.takeLatest)(p.NoteHistory.RESTORE_NOTE_HISTORY_CONTENT, i);
                    case 2:
                    case"end":
                        return e.stop()
                }
            }, N, this)
        }

        Object.defineProperty(t, "__esModule", {value: !0});
        var u = n("Xxa5"), d = o(u);
        t.watchGetNoteHistoryList = l, t.watchGetNoteHistoryContent = s, t.watchRestoreNoteHistoryContent = c;
        var f = n("igqX"), A = n("egdi"), p = n("4HHy"), h = n("qiO7"), g = n("Z1y9"), m = o(g), b = d.default.mark(a),
            v = d.default.mark(r), E = d.default.mark(i), _ = d.default.mark(l), C = d.default.mark(s),
            N = d.default.mark(c)
    }, R2Qq: function (e, t, n) {
        "use strict";

        function o(e) {
            return e && e.__esModule ? e : {default: e}
        }

        Object.defineProperty(t, "__esModule", {value: !0}), t.getState = void 0, t.default = function () {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : r.default.fromJS(c),
                t = arguments[1];
            switch (t.type) {
                case s.Notes.GET_NOTES:
                    return e = e.set("status", s.Notes.GET_NOTES);
                case s.Notes.GET_NOTES_SUCCESS:
                    var n = t.data;
                    if (!t.isCache) {
                        var o = (0, l.default)(n), a = o.entities, i = e.get("entities").mergeDeep(r.default.fromJS(a));
                        e = e.set("entities", i)
                    }
                    return e = e.set("status", s.Notes.GET_NOTES_SUCCESS);
                case s.Notes.GET_NOTES_FAIL:
                    return e = e.set("status", s.Notes.GET_NOTES_FAIL);
                case s.Notes.SORT_NOTES:
                    return e = e.set("status", s.Notes.SORT_NOTES);
                case s.Notes.SORT_NOTES_SUCCESS:
                    return e = e.set("status", s.Notes.SORT_NOTES_SUCCESS);
                case s.Notes.SORT_NOTES_FAIL:
                    return e = e.set("status", s.Notes.SORT_NOTES_FAIL);
                case s.Notes.NEW_NOTE:
                    return e = e.set("status", s.Notes.NEW_NOTE);
                case s.Notes.NEW_NOTE_SUCCESS:
                    var u = t.data.id;
                    return e = e.setIn(["entities", u.toString()], r.default.fromJS(t.data)), e = e.set("status", s.Notes.NEW_NOTE_SUCCESS);
                case s.Notes.NEW_NOTE_FAIL:
                    return e = e.set("status", s.Notes.NEW_NOTE_FAIL);
                case s.Notes.PUBLISH_NOTE:
                    var d = t.noteId;
                    t.data;
                    return e = e.setIn(["entities", d.toString(), "status"], s.Notes.PUBLISH_NOTE);
                case s.Notes.PUBLISH_NOTE_SUCCESS:
                    var f = t.noteId, A = t.data;
                    return e = e.setIn(["entities", f.toString(), "shared"], !0), e = e.setIn(["entities", f.toString(), "last_compiled_at"], A.last_compiled_at), e = e.setIn(["entities", f.toString(), "status"], s.Notes.PUBLISH_NOTE_SUCCESS);
                case s.Notes.PUBLISH_NOTE_FAIL:
                    var p = t.noteId;
                    t.data;
                    return e = e.setIn(["entities", p.toString(), "status"], s.Notes.PUBLISH_NOTE_FAIL);
				case s.Notes.EXPORT_ALL:
                    return e = e.setIn(["entities", "0", "status"], s.Notes.EXPORT_ALL);
                case s.Notes.EXPORT_ALL_SUCCESS:
                    return e = e.setIn(["entities", "0", "shared"], !0), e = e.setIn(["entities", "0", "last_compiled_at"], A.last_compiled_at), e = e.setIn(["entities", "0", "status"], s.Notes.EXPORT_ALL_SUCCESS);
                case s.Notes.EXPORT_ALL_FAIL:
                    return e = e.setIn(["entities", "0", "status"], s.Notes.EXPORT_ALL_FAIL);
                case s.Notes.PRIVATE_NOTE:
                    var h = t.noteId;
                    t.data;
                    return e = e.setIn(["entities", h.toString(), "status"], s.Notes.PRIVATE_NOTE);
                case s.Notes.PRIVATE_NOTE_SUCCESS:
                    var g = t.noteId;
                    return e = e.setIn(["entities", g.toString(), "shared"], !1), e = e.setIn(["entities", g.toString(), "status"], s.Notes.PRIVATE_NOTE_SUCCESS);
                case s.Notes.PRIVATE_NOTE_FAIL:
                    var m = t.noteId;
                    t.data;
                    return e = e.setIn(["entities", m.toString(), "status"], s.Notes.PRIVATE_NOTE_FAIL);
                case s.Notes.DEL_NOTE_SOFT:
                    var b = (t.nbId, t.noteId);
                    return e = e.setIn(["entities", b.toString(), "status"], s.Notes.DEL_NOTE_SOFT);
                case s.Notes.DEL_NOTE_SOFT_SUCCESS:
                    var v = t.noteId;
                    return e = e.deleteIn(["entities", v.toString()]), e = e.setIn(["entities", v.toString(), "status"], s.Notes.DEL_NOTE_SOFT_SUCCESS);
                case s.Notes.DEL_NOTE_SOFT_FAIL:
                    var E = t.noteId;
                    return e = e.setIn(["entities", E.toString(), "status"], s.Notes.DEL_NOTE_SOFT_FAIL);
                case s.Notes.UPDATE_NOTE:
                    var _ = t.noteId, C = (t.content, t.title);
                    e = e.setIn(["entities", _.toString(), "title"], C);
                    var N = e.getIn(["entities", _.toString(), "autosave_control"]);
                    return e = e.setIn(["entities", _.toString(), "autosave_control"], N + 1);
                case s.Notes.UPDATE_NOTE_SUCCESS:
                    var T = t.noteId, w = t.data;
                    return e = e.setIn(["entities", T, "content_updated_at"], w.content_updated_at), e = e.setIn(["entities", T, "status"], s.Notes.UPDATE_NOTE_SUCCESS);
                case s.NoteHistory.RESTORE_NOTE_HISTORY_CONTENT_SUCCESS:
                    var y = t.revertData, I = y.title, x = (y.content, t.nbId, t.noteId);
                    return e = e.setIn(["entities", x.toString(), "title"], I);
                case s.Notes.MOVE_NOTE_SUCCESS:
                    var k = (t.data, t.nbId, t.newNbId), S = t.noteId;
                    return e = e.setIn(["entities", S.toString(), "notebook_id"], k);
                case s.Notes.PUBLISH_PAID_NOTE_SUCCESS:
                    var M = t.data, O = t.noteId;
                    t.nbId;
                    return e = e.setIn(["entities", O.toString(), "paid"], !0), e = e.setIn(["entities", O.toString(), "shared"], !0), e = e.setIn(["entities", O.toString(), "last_compiled_at"], M.last_compiled_at);
                default:
                    return e
            }
        };
        var a = n("BYKG"), r = o(a), i = n("w0tY"), l = o(i), s = n("4HHy"),
            c = {entities: {}, status: s.Notes.NOTES_INIT};
        t.getState = function (e) {
            return e.Notes
        }
    }, R2Yh: function (e, t, n) {
        t = e.exports = n("FZ+f")(!1), t.push([e.i, '.NVdZF{display:block}._20JYe{position:fixed;top:0;right:0;left:0;bottom:0;background-color:hsla(0,0%,100%,.7);height:100%;z-index:1000;filter:alpha(opacity=30)}body.reader-night-mode ._20JYe{background-color:hsla(0,0%,40%,.7)}._3WS2u{display:none}._23VW8{position:fixed;overflow:auto;top:0;right:0;bottom:0;left:0;z-index:1050;-webkit-overflow-scrolling:touch;outline:0}._3cgNz{position:relative;background-color:#fff;width:auto;border:0;border-radius:6px;margin:0 auto 24px;background-clip:padding-box;-webkit-box-shadow:0 2px 8px rgba(0,0,0,.2);box-shadow:0 2px 8px rgba(0,0,0,.2)}body.reader-night-mode ._3cgNz{background-color:#3d3d3d}.cjahm{position:absolute;top:50%;left:50%;-webkit-transform:translate(-50%,-50%);-ms-transform:translate(-50%,-50%);transform:translate(-50%,-50%)}.cjahm.move-up-appear.move-up-appear-active,.cjahm.move-up-enter.move-up-enter-active{-webkit-animation-name:_2oyZp;animation-name:_2oyZp}.cjahm.move-up-leave.move-up-leave-active{-webkit-animation-name:_3g8pf;animation-name:_3g8pf}._2tIvb{position:relative;border-radius:6px}body.reader-night-mode ._2tIvb{background-color:#3d3d3d}.ZTNas{position:absolute;right:0;top:0;width:48px;height:48px;line-height:46px;text-align:center;font-size:16px;cursor:pointer;color:#999;-webkit-transition:color .3s ease;-o-transition:color .3s ease;transition:color .3s ease}.ZTNas:hover{color:#4d4d4d}._1KgC3{padding:13px 16px;border-radius:4px 4px 0 0;color:#595959;border-bottom:1px solid #d9d9d9}body.reader-night-mode ._1KgC3{border-color:#2e2e2e}.-K8Re{margin:0;font-size:16px;line-height:21px;font-weight:500;color:#4d4d4d}body.reader-night-mode .-K8Re{color:#b3b3b3}._3O4M2{font-size:14px;color:#999}._3O4M2 a{color:#3294d0}.PWCkH{padding:16px;font-size:12px;line-height:1.5;color:#595959}body.reader-night-mode .PWCkH{color:#b3b3b3}.pCffa{padding:0 16px 16px;text-align:right;border-radius:0 0 2px 2px}._26mjB{display:block}.HhIYk{zoom:1}.HhIYk:after,.HhIYk:before{content:" ";display:table}.HhIYk:after{clear:both;visibility:hidden;font-size:0;height:0}._37SYn{font-size:13px;line-height:20px;padding:30px 30px 20px;color:#333}body.reader-night-mode ._37SYn{color:#b3b3b3}._2BmdS{padding:0 16px 16px;text-align:right;border-radius:0 0 2px 2px}._26mjB .PWCkH{padding:0;border-radius:2px}._26mjB .PWCkH a{color:#3194d0}._26mjB .PWCkH a:active,._26mjB .PWCkH a:hover{color:#2b86bc}._26mjB ._38pIX{padding:30px 16px;border:0}._26mjB ._38pIX input{display:block;border-radius:4px;width:100%;line-height:20px;padding:5px 10px;font-size:15px;background-color:transparent;border:1px solid #ccc}body.reader-night-mode ._26mjB ._38pIX input{border-color:#2e2e2e}._26mjB .ZTNas{width:32px;height:32px;line-height:32px}.HSpeJ .PWCkH{border:0}@-webkit-keyframes _2oyZp{0%{-webkit-transform-origin:-50% -50%;transform-origin:-50% -50%;-webkit-transform:translate(-50%,-150%);transform:translate(-50%,-150%);opacity:0}to{-webkit-transform-origin:-50% -50%;transform-origin:-50% -50%;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%);opacity:1}}@keyframes _2oyZp{0%{-webkit-transform-origin:-50% -50%;transform-origin:-50% -50%;-webkit-transform:translate(-50%,-150%);transform:translate(-50%,-150%);opacity:0}to{-webkit-transform-origin:-50% -50%;transform-origin:-50% -50%;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%);opacity:1}}@-webkit-keyframes _3g8pf{0%{-webkit-transform-origin:-50% -50%;transform-origin:-50% -50%;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%);opacity:1}to{-webkit-transform-origin:-50% -50%;transform-origin:-50% -50%;-webkit-transform:translate(-50%,-150%);transform:translate(-50%,-150%);opacity:0}}@keyframes _3g8pf{0%{-webkit-transform-origin:-50% -50%;transform-origin:-50% -50%;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%);opacity:1}to{-webkit-transform-origin:-50% -50%;transform-origin:-50% -50%;-webkit-transform:translate(-50%,-150%);transform:translate(-50%,-150%);opacity:0}}', ""]), t.locals = {
            "modal-container": "NVdZF",
            "modal-mask": "_20JYe",
            "modal-mask-hidden": "_3WS2u",
            "modal-wrap": "_23VW8",
            "modal-entity": "_3cgNz",
            "modal-entity-middle": "cjahm",
            ModalMoveUpIn: "_2oyZp",
            ModalMoveUpOut: "_3g8pf",
            "modal-content": "_2tIvb",
            "modal-closer": "ZTNas",
            "modal-header": "_1KgC3",
            "modal-header-title": "-K8Re",
            "modal-header-tip": "_3O4M2",
            "modal-body": "PWCkH",
            "modal-footer": "pCffa",
            confirm: "_26mjB",
            "confirm-wrapper": "HhIYk",
            "confirm-body": "_37SYn",
            "confirm-footer": "_2BmdS",
            "prompt-body": "_38pIX",
            prompt: "HSpeJ"
        }
    }, "S+hs": function (e, t) {
        e.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAASwAAACgCAMAAACBpqFQAAABX1BMVEUAAACzs7OJiYmVlZW1tbWQkJC1tbW0tLTBwcFR/8Kzs7O0tLSJiYmJiYmJiYmKioqIiIi0tLS0tLS0tLS1tbW0tLSSkpK0tLSJiYm2traJiYkAvCkAvCoAuyqIiIgAvCmJiYkAvCm0tLS0tLSJiYkAvCmzs7MAvSq0tLQAvSwAviu2tra0tLS5ubkA1EYAuyq1tbWzs7OIiIiIiIiWlpaJiYmIiIgAuym1tbWJiYm1tbW0tLSKioqJiYmPj4+xsbEAvCuKioqJiYmIiIiJiYmKiooAuymIiIj////9/v36/foOvzQJvTAmxUkFvC32/Pe27MFz2olk1n3c9eGP4aF83JFJzmbz/PWD3pYzyVQgw0QVwDrw+/LM8dSq6Lem57Sa5KpR0G3r+u7B78uK4JxAzF45yljm+Org9+Utx04awj7W9NzR89nH8NC87caU4qVa03Si5rBt2IRe1Hiu6buS1V9dAAAARnRSTlMAs54MEhZhmAYBgE3zG7Zr/ayWkDorArBPJfzy6OHZ2M+/pZybgnh0WFE7NCAZB4tHQ/A5Ed6spol7cWleKSAXion+16BMjKm0XQAACDlJREFUeNrs1E2LwkAMxvGgFByYduZYqtYKFdGDQq2KoIL70nz/b7QM9iC2Wxp2esnmd8/lz0OgFpoo1eiBTiMTAmdhnqBHSc44V6zRMx0DU8aid9YAS7HFAViW2wo1DkJz/Fs5DiQHdsIEa9H1Vo5ffWEf8fhFebtGWEv4Tcvg0/EA7x7YR+PucMQnfj++HkIWQMM39qAn8C7I6qkCNyk6xb0jZCcDTfcCnRS40ehcoM3kUWCnj88Y2lzQ0cANOjaAX5RBlzG0Cyw6wA06GXiWMY51As9OjGONwLORxJJYEktiORKLQGIRSCwCiUUgsQgkFoHEIpBYBBKLQGIRSCwCiUUgsQgkFoHEIpBYBBKrP7XdLxfT6g+mi+V+q/5BrN16VnkxW++4x9rMK2/mG9ax1KryaqX4xlLnyrOzYhvrhz1760kciAI43iZNBfrE1RA1Rol3cfXNrA/u0+RAy1UoKHcQNoKoq37/bHYKTFNoyyBNOl3/j/D2S8/0DBygtXfgVawT5EAn3sS62EEOtHPhSawj5EhHXsTybyNH2vZ7EOsUOdSpB7F+IIf65UGsPeRQex7E2kUOtetBrC3kUFsexEKO9Y31jYX777B8yehZXIitEWuoltufvXHvpVUt3nsHKxYVQzxuMyDdrgWrX7oDffV8UfYEVgRLzTpMfhVLeSdSpHTznnms8zBvaPPG9xWsbLkLJuWf2MaKBPn5wsLqWIMRmJcus4x1zC9sP74iVraUAsvGGWaxROKTuA6E94mWsBKWkge7ciqjWDOr0CXG8cfF4HQSfStgyT2wL9dnEmtqFbwi+5Xwk9e6ocdSGrBMlQGDWFOrxDmnT9rU3olJaqw2LFc9wxzW1GrDeDxJk32LFuuNcLy8qY9p0NXqdJrk6O+xhjVnRZpM4i0d1rBCaPAST3AAbwxFmPXBFpaFFSdop7xEh/UK01IZw1TWFfwBeVV2ayxhRYmVqWSACmuYIxSTsTSOXRVmlVjC4iQLKy6uHfExGqxHIpFCuAJMG829AOoKS1icZG7F+bXtVKDBugPSG14kRkQPX6Ef6kD6YAqLk4jVXGGMFafAegBduWI2O3gGUreDkNoFXS22sLgr8ycngLHOKLCKhhtzyriJVmZfNT5bf9pVxrAsusZYUQqsV1imSut9oKBs7WEoewcrgbGSFFgtsO+uIGfV0os2julRs5BxOVaUWyKBx/kosPJgV6ODBs2Kga9cczGWyEucfZfYKkSzZ43BulwB9RuLPn+tuRVLXLCYnx1H/IY/MEIYS6TBatpM4JPcTsHCukV3Yonz1xjf4b9d3W94sHBRGqwqWDWu9X+DaU3FhVgir3Wls9KWhAin6zyoTWGMBusDLHqW1Zy1peuwyN3ZaMUfcyQhwU8AabAyVjNYU9Ng2Uh2GZaJlXH9FDZ4XJjyl9IGmJUa3KfBpry7sP6ycy89akJRHMAxIcbHCp9x20mMiZo4u8nMYnZEEBlBfEA7dqxacWJsNf3+qSDNQa8gx1hzFvwXRra/eOHec+SEWVVZK6GBxNICIebqGuCWkv9RCKfFMSWsWohVJuW3gkWIK9FIAVZLZQx7ra64gp/gThV12fsuW3SwCkirGr5vaARgDbryUVXQeoOl56vsTMhgNQTGiquGWCU5PFZneX432oFjoy062XhXQ7eB3f4XiwpWnrWqh1vhscTp+Vu3CjemkfPQU224TfnLqRoRLG8RPvDMTQxrhW+FaYs25EP1LbyRKYrWEjZbNLBKOXjAASBYeXkEKxQW5E+bjan5r+yeDRfSbCP7rhQSWEXYuEPSGWfPkGLq8mCFx1JmLNbXX+2IsUhgJc8eX9KFWp2pNIMVAgvSYX9bYi8qlkkC67AKW1Hq8mCFwoJo0tVYQwpYqYQbHl8bxGOxJ2plGxVrRQGreXgUcphcjzU4IegaUbE6FLCKLtbTnbDWJwTTaUSrJYmtQ/1CM55/vBEWlGrs3aDn7UXnHSka1pYEViWg5AJ70ewtsGAV/tBU5+tKHxsfE0OcRcNakMDiXawv6UCrxHVaAatwND7pCQ4jWfVpHKRLZWjGn7UK1MJjdeUz3Zr3KFg6DSyvGZ8MsnJTvA2WaYlsfsqXrd6pFP+yLofAh1gl/+tbYbvLff0VFazXA8gzwuq2WOKljak0pFOD9+p8WYTVbbGUTXi7ekqoFdb0/q19rNV4wFnhsSCqEbYdNUk1WV88lmcenpEtAW2Fx4L8fgtsGlq02vepvAcjJCtpdwW2cgmwugeW2P0uBbTKqP3Xgfe9w5TPPDkLEGGFwcJz9alhcRVXi03tri+Uf+qTb6Bkbwd9tzZDDYvj8wk2QuH+b9+bU80w5mN98emWv/ZcA3JYXOqlfGqVbxAYVaDb6/0nMSyOa1aPqHIFjsRcB0VzjpPUsDjuNZspe1LJYomjgbUPSax9SnylXmx6LbB4cA8i8UgoROJhY9ETj7FDJB6QiEs8ejNy4qGuiMTjgjGJB1FjEo84/9vevaMwDANBGF4I7mRJpXFhXPgEeUEgSTv3v1GQY0ibIesiy3xH+BFbajj6PJ+hWYbvafCDoSkZlkaK/pViKdZKsQiKRVAsgmIRFIugWATFIigWQbEIikVQLIJiERSLoFgExSIoFkGxSP6xrubsGjjWbM7mwLFqZ666GjNWQnMzVzc0yaKZ0Byf5uh5RDNZNBmruTM33YxVtmgK3i4nc3K64K1YNP2ITb4/zocfnR/3jM3YWzgLdrJYPH3CLlLAh2U2VOygDhZSqXBX4133zZDgLAV9V02/jHA0LiHv1SdXyVOCgzTlEjXVC2LP2kRIs/g+AAAAAElFTkSuQmCC"
    }, SX5p: function (e, t, n) {
        var o = n("jrrN");
        "string" == typeof o && (o = [[e.i, o, ""]]);
        var a = {hmr: !0};
        a.transform = void 0, a.insertInto = void 0;
        n("MTIv")(o, a);
        o.locals && (e.exports = o.locals)
    }, THqP: function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0}), t.getState = void 0, t.default = function () {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : a.default.fromJS(i),
                t = arguments[1];
            switch (t.type) {
                case r.NoteContent.GET_NOTE_CONTENT:
                    var n = t.noteId;
                    return e = e.setIn(["entities", n.toString(), "status"], r.NoteContent.GET_NOTE_CONTENT);
                case r.NoteContent.GET_NOTE_CONTENT_SUCCESS:
                    var l = t.noteId, s = t.data;
                    if (!t.isCache) {
                        var c = s.content, u = s.audio;
                        e = e.setIn(["entities", l, "content"], c), e = e.setIn(["entities", l, "audio"], (0, o.fromJS)(u) || (0, o.fromJS)({})), e = e.setIn(["entities", l.toString(), "updateStatus"], r.Notes.UPDATE_NOTE_SUCCESS)
                    }
                    return e = e.setIn(["entities", l.toString(), "status"], r.NoteContent.GET_NOTE_CONTENT_SUCCESS);
                case r.NoteContent.GET_NOTE_CONTENT_FAIL:
                    var d = t.noteId;
                    return e = e.setIn(["entities", d.toString(), "status"], r.NoteContent.GET_NOTE_CONTENT_FAIL);
                case r.NoteContent.UPDATE_NOTE_CONTENT_ABBR:
                    var f = t.abbr, A = t.wordNum, p = t.noteId;
                    return e = e.setIn(["entities", p.toString(), "abbr"], f), e = e.setIn(["entities", p.toString(), "wordNum"], A);
                case r.Notes.UPDATE_NOTE:
                    var h = t.noteId, g = t.content;
                    t.title;
                    return e = e.setIn(["entities", h.toString(), "content"], g), e = e.setIn(["entities", h.toString(), "status"], r.Notes.UPDATE_NOTE), e = e.setIn(["entities", h.toString(), "updateStatus"], r.Notes.UPDATE_NOTE);
                case r.Notes.UPDATE_NOTE_SUCCESS:
                    var m = t.noteId;
                    return e = e.setIn(["entities", m.toString(), "status"], r.Notes.UPDATE_NOTE_SUCCESS), e = e.setIn(["entities", m.toString(), "updateStatus"], r.Notes.UPDATE_NOTE_SUCCESS);
                case r.Notes.UPDATE_NOTE_FAIL:
                    var b = t.noteId;
                    return e = e.setIn(["entities", b.toString(), "status"], r.Notes.UPDATE_NOTE_FAIL), e = e.setIn(["entities", b.toString(), "updateStatus"], r.Notes.UPDATE_NOTE_FAIL);
                case r.Notes.PUBLISH_NOTE:
                    var v = t.noteId;
                    return e = e.setIn(["entities", v.toString(), "status"], r.Notes.PUBLISH_NOTE);
                case r.Notes.PUBLISH_NOTE_SUCCESS:
                    var E = t.noteId;
                    return e = e.setIn(["entities", E.toString(), "status"], r.Notes.PUBLISH_NOTE_SUCCESS);
                case r.Notes.PUBLISH_NOTE_FAIL:
                    var _ = t.noteId;
                    return e = e.setIn(["entities", _.toString(), "status"], r.Notes.PUBLISH_NOTE_FAIL);
				case r.Notes.EXPORT_ALL:
                    return e = e.setIn(["entities", "0", "status"], r.Notes.EXPORT_ALL);
                case r.Notes.EXPORT_ALL_SUCCESS:
                    return e = e.setIn(["entities", "0", "status"], r.Notes.EXPORT_ALL_SUCCESS);
                case r.Notes.EXPORT_ALL_FAIL:
                    return e = e.setIn(["entities", "0", "status"], r.Notes.EXPORT_ALL_FAIL);
                case r.NoteHistory.RESTORE_NOTE_HISTORY_CONTENT_SUCCESS:
                    var C = t.revertData, N = (C.title, C.content), T = (t.nbId, t.noteId);
                    return e = e.setIn(["entities", T.toString(), "content"], N);
                case r.NoteContent.POST_AUDIO:
                    var w = t.noteId, y = t.audio;
                    return e = e.setIn(["entities", w.toString(), "audio"], (0, o.fromJS)(y));
                case r.NoteContent.PUT_AUDIO_MESSAGE:
                    var I = t.noteId;
                    return e = e.setIn(["entities", I.toString(), "audioStatus"], r.NoteContent.PUT_AUDIO_MESSAGE);
                case r.NoteContent.PUT_AUDIO_MESSAGE_SUCCESS:
                    var x = t.noteId, k = (t.data, t.params);
                    return e = e.setIn(["entities", x.toString(), "audioStatus"], r.NoteContent.PUT_AUDIO_MESSAGE_SUCCESS), e = e.setIn(["entities", x.toString(), "audio", "title"], k.title), e = e.setIn(["entities", x.toString(), "audio", "dubber"], k.dubber);
                case r.NoteContent.PUT_AUDIO_MESSAGE_FAIL:
                    var S = t.noteId;
                    return e = e.setIn(["entities", S.toString(), "audioStatus"], r.NoteContent.PUT_AUDIO_MESSAGE_FAIL);
                case r.NoteContent.DELETE_AUDIO:
                    var M = t.noteId;
                    return e = e.setIn(["entities", M.toString(), "audioStatus"], r.NoteContent.DELETE_AUDIO);
                case r.NoteContent.DELETE_AUDIO_SUCCESS:
                    var O = t.noteId;
                    return e = e.setIn(["entities", O.toString(), "audioStatus"], r.NoteContent.DELETE_AUDIO_SUCCESS), e = e.setIn(["entities", O.toString(), "audio"], (0, o.fromJS)({}));
                case r.NoteContent.DELETE_AUDIO_FAIL:
                    var F = t.noteId;
                    return e = e.setIn(["entities", F.toString(), "audioStatus"], r.NoteContent.DELETE_AUDIO_FAIL);
                case r.NoteContent.GET_AUDIO_URL:
                    var D = t.noteId;
                    return e = e.setIn(["entities", D.toString(), "audioStatus"], r.NoteContent.GET_AUDIO_URL);
                case r.NoteContent.GET_AUDIO_URL_SUCCESS:
                    var B = t.noteId, L = t.data;
                    return e = e.setIn(["entities", B.toString(), "audioStatus"], r.NoteContent.GET_AUDIO_URL_SUCCESS), e = e.setIn(["entities", B.toString(), "audio", "play_url"], L.play_url);
                case r.NoteContent.GET_AUDIO_URL_FAIL:
                    var P = t.noteId;
                    return e = e.setIn(["entities", P.toString(), "audioStatus"], r.NoteContent.GET_AUDIO_URL_FAIL);
                default:
                    return e
            }
        };
        var o = n("BYKG"), a = function (e) {
            return e && e.__esModule ? e : {default: e}
        }(o), r = n("4HHy"), i = {entities: {}};
        t.getState = function (e) {
            return e.NoteContent
        }
    }, TRCE: function (e, t, n) {
        "use strict";

        function o(e) {
            return e && e.__esModule ? e : {default: e}
        }

        function a(e) {
            var t, n = e.size, o = void 0 === n ? void 0 : n, a = e.tip, r = void 0 === a ? "" : a, l = e.hasMask,
                c = void 0 !== l && l, d = e.loading, A = e.loaderClassName, m = {large: "lg", small: "sm"}[o],
                b = (0, f.default)("" + p.default[h], A, (t = {}, (0, i.default)(t, "" + p.default[h + "-" + m], o && (0, s.default)(g.size, o)), (0, i.default)(t, "" + p.default[h + "-show-tip"], !!r), (0, i.default)(t, "" + p.default[h + "-is-loading"], d), (0, i.default)(t, "" + p.default[h + "-has-mask"], c), t));
            return u.default.createElement("div", {className: b}, u.default.createElement("div", {className: "" + p.default[h + "-entity"]}, u.default.createElement("svg", {
                className: "" + p.default[h + "-svg"],
                viewBox: "25 25 50 50"
            }, u.default.createElement("circle", {
                className: "" + p.default[h + "-circle"],
                cx: "50",
                cy: "50",
                r: "20",
                fill: "none"
            }))), !!r && u.default.createElement("div", {className: "" + p.default[h + "-tip"]}, r.toString()))
        }

        Object.defineProperty(t, "__esModule", {value: !0});
        var r = n("bOdI"), i = o(r), l = n("q+Dy"), s = o(l);
        t.default = a;
        var c = n("GiK3"), u = o(c), d = n("HW6M"), f = o(d), A = n("DUrC"), p = o(A), h = "loader",
            g = {size: ["small", "large"]}
    }, UpxA: function (e, t) {
        e.exports = "data:image/gif;base64,R0lGODlhIgAWAJEAAGZmZmVlZQAAAAAAACH/C05FVFNDQVBFMi4wAwEAAAAh/wtYTVAgRGF0YVhNUDw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNS1jMDE0IDc5LjE1MTQ4MSwgMjAxMy8wMy8xMy0xMjowOToxNSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczpkYz0iaHR0cDovL3B1cmwub3JnL2RjL2VsZW1lbnRzLzEuMS8iIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIiB4bWxuczpzdFJlZj0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlUmVmIyIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ0MgKE1hY2ludG9zaCkiIHhtcDpDcmVhdGVEYXRlPSIyMDE0LTA4LTA1VDE1OjAyOjM5KzA4OjAwIiB4bXA6TW9kaWZ5RGF0ZT0iMjAxNC0wOC0wNVQwNzowODoyOSswODowMCIgeG1wOk1ldGFkYXRhRGF0ZT0iMjAxNC0wOC0wNVQwNzowODoyOSswODowMCIgZGM6Zm9ybWF0PSJpbWFnZS9naWYiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6QTUxMDE0NzkxNDkzMTFFNDlCMTFEMDJFMTc3M0M5QzciIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6QTUxMDE0N0ExNDkzMTFFNDlCMTFEMDJFMTc3M0M5QzciPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDpBNTEwMTQ3NzE0OTMxMUU0OUIxMUQwMkUxNzczQzlDNyIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDpBNTEwMTQ3ODE0OTMxMUU0OUIxMUQwMkUxNzczQzlDNyIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PgH//v38+/r5+Pf29fTz8vHw7+7t7Ovq6ejn5uXk4+Lh4N/e3dzb2tnY19bV1NPS0dDPzs3My8rJyMfGxcTDwsHAv769vLu6ubi3trW0s7KxsK+urayrqqmop6alpKOioaCfnp2cm5qZmJeWlZSTkpGQj46NjIuKiYiHhoWEg4KBgH9+fXx7enl4d3Z1dHNycXBvbm1sa2ppaGdmZWRjYmFgX15dXFtaWVhXVlVUU1JRUE9OTUxLSklIR0ZFRENCQUA/Pj08Ozo5ODc2NTQzMjEwLy4tLCsqKSgnJiUkIyIhIB8eHRwbGhkYFxYVFBMSERAPDg0MCwoJCAcGBQQDAgEAACH5BAUDAAIALAAAAAAiABYAAAI4lI+py+0Po5y02ouz3rz7D4QiIo5HGTIoQKJtqbqnbKwxPOM1ndi5udP1eL4gcCgsCpSfpvOpKQAAIfkEBQMAAgAsBAAKAAYAAQAAAgKEXwAh+QQFAwACACwEAAkABgABAAACAwx+BQAh+QQFAwACACwEAAcABgADAAACBISPKVsAIfkEBQMAAgAsBAAGAAYAAQAAAgKEXwAh+QQFAwACACwEAAQAEAAHAAACDYQvqXu4D6OctNraTAEAIfkEBQMAAgAsDgAJAAYAAQAAAgKEXwAh+QQJAwACACwEAAQAEAAFAAACCpSPqcvtB6J0UhYAIfkECQMAAgAsBAAGABAAAwAAAgmELynHrdviiwUAIfkECQMAAgAsBAAEABoABwAAAhaUj6CL7b3YmykCKuw9GndueSJGlloBACH5BAkDAAIALAQABAAaAAcAAAIZlI+gi+292JspAoqFvXluHFhVNG6S8R1bAQAh+QQJAwACACwEAAQAGgAHAAACGZSPoIvtvdibKQKKhb1nY99ZnxhuUXWWSwEAIfkECQMAAgAsDgAGABAABQAAAg2ELynHrdvii1JRZ1sBACH5BAkDAAIALAQABAAaAAcAAAIYlI+ZwK3/moPUSFYvQDpf/lHdoY1WeEoFACH5BAkDAAIALAQABAAaAAcAAAIYlI+ZwK3/moPUSFbrBZnucCGb+EmkeWwFACH5BAkDAAIALAQABAAaAAcAAAIXlI+ZwK3/moPUyDurxVcf3nkCKCGYeRUAIfkECQMAAgAsBAAGABoABQAAAhGEL6m758+iehRIWeFl2W3+FAAh+QQJAwACACwEAAQAGgAHAAACGIQvqct82GJ7RlpFwV05b9w9XxKKoElSBQAh+QQJAwACACwEAAQAGgAHAAACF4Qvqct82GJ7RlpFwb15245RSwYmpZAVACH5BAkDAAIALAQABAAaAAcAAAIYhC+py3zYYntGWkXBypdj2oHfE5IjlGQFACH5BAkDAAIALAQABgAQAAUAAAINhC8px63b4otSUWdbAQAh+QQJAwACACwEAAQAGgAHAAACGZSPoIvtvdibKQIq7D0ad255IRiJJSkZWgEAIfkECQMAAgAsBAAEABoABwAAAhmUj6CL7b3YmykCioW9eW4cWFU0bpLxHVsBACH5BAkDAAIALAQABQAaAAYAAAIXlI+gi+292JspghqpsPdw/XmchUkGVwAAIfkECQMAAgAsDgAGABAABQAAAg2ELynHrdvii1JRZ1sBACH5BAkDAAIALAQABAAaAAcAAAIYlI+ZwK3/moPUSFYvQDpf/lHdoY1WeEoFACH5BAkDAAIALAQABAAaAAcAAAIXlI+ZwK3/moPUSFbrBZnujYDHd4XleBUAIfkECQMAAgAsBAAFABoABgAAAhSUj5nArf+anFDNC+rCUiPeHdc3FQAh+QQJAwACACwEAAYAGgAFAAACEYQvqbvnz6J6FEhZ4WXZbf4UACH5BAkDAAIALAQABQAaAAYAAAIUhC+py3zYYntGToqtw1Qv3imZSBUAIfkECQMAAgAsBAAEABoABwAAAheEL6nLfNhie0ZaRcG9eduOUUsGJqWQFQAh+QQJAwACACwEAAUAGgAGAAACF4Qvqct82GJ7ZlEg07U0i62Akvh1IVUAACH5BAkDAAIALAQABgAQAAUAAAINhC8px63b4otSUWdbAQAh+QQJAwACACwEAAUAEAAGAAACD5SPoIstC2OKdFJor8qqAAAh+QQJAwACACwEAAQAEAAHAAACEpSPoIsty9yBSk5qDd0gcehBBQAh+QQFAwACACwEAAQAEAAHAAACEpSPoIsty9yBSk5qDQX5bXxBBQA7"
    }, UsL9: function (e, t, n) {
        var o = n("R2Yh");
        "string" == typeof o && (o = [[e.i, o, ""]]);
        var a = {hmr: !0};
        a.transform = void 0, a.insertInto = void 0;
        n("MTIv")(o, a);
        o.locals && (e.exports = o.locals)
    }, XaZM: function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0}), t.setUser = t.changeEditorType = t.getUserOtpChannel = t.getUser = void 0;
        var o = n("4HHy"), a = n("lTDY"), r = function (e) {
            return e && e.__esModule ? e : {default: e}
        }(a);
        t.getUser = (0, r.default)(o.User.GET_USER), t.getUserOtpChannel = (0, r.default)(o.User.GET_USER_OTP_CHANNEL), t.changeEditorType = (0, r.default)(o.User.CHANGE_EDITOR_TYPE, "editorType"), t.setUser = (0, r.default)(o.User.SET_USER, "data")
    }, Xpbu: function (e, t, n) {
        "use strict";

        function o(e) {
            return e && e.__esModule ? e : {default: e}
        }

        Object.defineProperty(t, "__esModule", {value: !0}), t.default = void 0;
        var a, r, i = n("bOdI"), l = o(i), s = n("woOf"), c = o(s), u = n("Zx67"), d = o(u), f = n("Zrlr"), A = o(f),
            p = n("wxAW"), h = o(p), g = n("zwoO"), m = o(g), b = n("Pf15"), v = o(b), E = n("gGqR"), _ = o(E),
            C = n("GiK3"), N = o(C), T = n("HW6M"), w = o(T), y = n("KSGD"), I = o(y), x = n("8aSS"), k = o(x),
            S = n("cl+9"), M = o(S), O = n("UsL9"), F = o(O), D = n("r/Fa"), B = o(D), L = n("9JgI"), P = o(L),
            R = n("gESm"), G = o(R), U = n("npO6"), j = o(U), Q = (r = a = function (e) {
                function t(e) {
                    (0, A.default)(this, t);
                    var n = (0, m.default)(this, (t.__proto__ || (0, d.default)(t)).call(this, e));
                    return n.saveRef = function (e) {
                        return function (t) {
                            n[e] = t
                        }
                    }, n.handleOk = function (e) {
                        var t = n.props.onOk;
                        (0, _.default)(t) && t(e)
                    }, n.handleCancel = function (e) {
                        var t = n.props.onCancel;
                        console.log(t), (0, _.default)(t) && t(e)
                    }, n.onWrapClick = function (e) {
                        var t = n.props.maskClosable;
                        e.target === e.currentTarget && t && n.handleCancel(e)
                    }, n.onWrapKeyDown = function (e) {
                        e.keyCode === B.default.ESC && n.handleCancel(e)
                    }, n.onModalLeave = function () {
                        var e = n.props.afterClose;
                        n.wrap && (n.wrap.style.display = "none"), (0, _.default)(e) && e()
                    }, n.getWrapStyle = function () {
                        return n.props.visible ? {display: null} : {}
                    }, n.getModalStyle = function () {
                        var e = n.props, t = e.isMiddle, o = e.modalStyle, a = e.width, r = e.top;
                        return t ? (0, c.default)({}, {width: a, top: r}, o) : (0, c.default)({}, {
                            width: a,
                            top: r || 120
                        }, o)
                    }, n.getButtonText = function () {
                        var e = n.props, t = e.okText, o = e.cancelText;
                        return {ok: t || M.default.get("modal.confirm"), cancel: o || M.default.get("modal.cancel")}
                    }, n.getContainer = function () {
                        if ((0, _.default)(n.props.getContainer)) return n.props.getContainer();
                        var e = document.createElement("div");
                        return document.body.appendChild(e), e
                    }, n.getMaskElement = function () {
                        var e = n.props, t = e.visible, o = e.showMask, a = e.maskClassName, r = e.maskStyle;
                        if (!o) return null;
                        var i = (0, w.default)(a, (0, l.default)({}, "" + F.default["modal-mask"], !0));
                        return N.default.createElement(k.default, {
                            key: "mask",
                            showProp: "visible",
                            transitionAppear: !0,
                            component: "",
                            transitionName: "fade"
                        }, N.default.createElement(G.default, {
                            key: "mask",
                            className: i,
                            hiddenClassName: F.default["modal-mask-hidden"],
                            visible: t,
                            style: r
                        }))
                    }, n.getModalElement = function () {
                        var e, o = n.props, a = o.visible, r = o.closable, i = o.title, s = o.showFooter, c = o.isMiddle,
                            u = o.modalClassName, d = o.bodyStyle, f = o.headerStyle, A = o.footerStyle,
                            p = n.getButtonText(),
                            h = (0, w.default)(u, (e = {}, (0, l.default)(e, "" + F.default["modal-entity"], !0), (0, l.default)(e, "" + F.default["modal-entity-middle"], !!c), e)),
                            g = i ? N.default.createElement("div", {
                                className: F.default["modal-header"],
                                style: f
                            }, N.default.createElement("div", {className: F.default["modal-header-title"]}, i, "  ", N.default.createElement("span", {className: F.default["modal-header-tip"]}, M.default.get("phoneModal.tip"), "？", N.default.createElement("span", {
                                //href: "/",
                                //target: "_blank",
                                //rel: "noopener noreferrer"
                            }, " ", M.default.get("phoneModal.href"))))) : null, m = s ? N.default.createElement("div", {
                                className: F.default["modal-footer"],
                                style: A
                            }, N.default.createElement(t.Button, {onClick: n.handleCancel}, p.cancel), N.default.createElement(t.Button, {
                                onClick: n.handleOk,
                                type: "primary"
                            }, p.ok)) : null, b = r ? N.default.createElement("div", {
                                className: F.default["modal-closer"],
                                "aria-label": "Close",
                                onClick: n.handleCancel
                            }, N.default.createElement(P.default, {name: "close"})) : null,
                            v = N.default.createElement("div", {className: F.default["modal-content"]}, b, g, N.default.createElement("div", {
                                className: F.default["modal-body"],
                                style: d
                            }, n.props.children), m);
                        return N.default.createElement(k.default, {
                            key: "modal-element",
                            showProp: "visible",
                            onLeave: n.onModalLeave,
                            transitionName: "move-up",
                            component: "",
                            transitionAppear: !0
                        }, N.default.createElement(G.default, {
                            key: "modal-element",
                            role: "document",
                            ref: n.saveRef("modal"),
                            className: h,
                            style: n.getModalStyle(),
                            visible: a
                        }, v))
                    }, n.state = {}, n
                }

                return (0, v.default)(t, e), (0, h.default)(t, [{
                    key: "componentDidUpdate", value: function (e) {
                        var t = this;
                        this.props.visible && (e.visible || (this.wrap ? this.wrap.focus() : setTimeout(function () {
                            t.wrap.focus()
                        }, 0)))
                    }
                }, {
                    key: "render", value: function () {
                        return this.props.visible || this.container ? N.default.createElement(j.default, {getContainer: this.getContainer}, N.default.createElement("div", {
                            className: F.default["modal-container"],
                            ref: this.saveRef("container")
                        }, this.getMaskElement(), N.default.createElement("div", {
                            role: "dialog",
                            tabIndex: -1,
                            className: F.default["modal-wrap"],
                            style: this.getWrapStyle(),
                            ref: this.saveRef("wrap"),
                            onKeyDown: this.onWrapKeyDown,
                            onClick: this.onWrapClick
                        }, this.getModalElement()))) : null
                    }
                }]), t
            }(C.Component), a.propTypes = {
                getContainer: I.default.func,
                visible: I.default.bool,
                isMiddle: I.default.bool,
                showMask: I.default.bool,
                maskClosable: I.default.bool,
                closable: I.default.bool,
                showFooter: I.default.bool,
                title: I.default.oneOfType([I.default.string, I.default.node]),
                width: I.default.oneOfType([I.default.string, I.default.number]),
                top: I.default.oneOfType([I.default.string, I.default.number]),
                modalClassName: I.default.string,
                maskClassName: I.default.string,
                modalStyle: I.default.object,
                maskStyle: I.default.object,
                bodyStyle: I.default.object,
                headerStyle: I.default.object,
                footerStyle: I.default.object,
                okText: I.default.string,
                cancelText: I.default.string,
                onOk: I.default.func,
                onCancel: I.default.func,
                afterClose: I.default.func
            }, a.defaultProps = {
                visible: !1,
                isMiddle: !1,
                showMask: !0,
                maskClosable: !0,
                closable: !0,
                showFooter: !0,
                width: 520,
                onOk: function () {
                },
                onCancel: function () {
                },
                afterClose: function () {
                },
                maskStyle: {},
                modalStyle: {},
                bodyStyle: {},
                headerStyle: {},
                footerStyle: {}
            }, r);
        t.default = Q
    }, Z1y9: function (e, t, n) {
        "use strict";

        function o(e) {
            return e && e.__esModule ? e : {default: e}
        }

        Object.defineProperty(t, "__esModule", {value: !0});
        var a = n("//Fk"), r = o(a), i = n("Zrlr"), l = o(i), s = n("Xxa5"), c = o(s), u = n("exGp"), d = o(u),
            f = n("JDN0"), A = o(f), p = n("NGEn"), h = o(p), g = n("O4Lo"), m = o(g), b = n("mtWM"), v = o(b),
            E = n("igqX"), _ = n("mzOA"), C = o(_), N = window.location.origin;
        N || (N = window.location.protocol + "//" + window.location.hostname + (window.location.port ? ":" + window.location.port : ""));
        var T = (0, m.default)(function () {
            var e = (0, d.default)(c.default.mark(function e(t) {
                var n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                return c.default.wrap(function (e) {
                    for (; ;) switch (e.prev = e.next) {
                        case 0:
                            if ((0, h.default)(t) && C.default.error(t[0].message), (0, A.default)(t) && C.default.error(t), !n) {
                                e.next = 6;
                                break
                            }
                            return e.next = 5, (0, E.delay)(2500);
                        case 5:
                            window.location.href = N + "/sign_in";
                        case 6:
                        case"end":
                            return e.stop()
                    }
                }, e, void 0)
            }));
            return function (t) {
                return e.apply(this, arguments)
            }
        }(), 2500, {leading: !0, trailing: !1}), w = function e() {
            var t = this;
            (0, l.default)(this, e), this.getLinkInfo = function (e) {
                return t.ajax.get("/external_pages/info", {params: {url: e}})
            }, this.getVideoInfo = function (e) {
                return t.ajax.post("/videos.json", e)
            }, this.getAudioInfo = function (e) {
                return t.ajax.get("/author/notes/" + e + "/audio/post_policy")
            }, this.sendCaptcha = function (e) {
                return t.ajax.post("/secure_sessions/send_code", e)
            }, this.verifyCaptcha = function (e) {
                return t.ajax.post("/secure_sessions/activate", e)
            }, this.getCountyOtpInfo = function (e) {
                return t.ajax.get("/countries")
            }, this.sendCaptchaWhenBindPhone = function (e) {
                return t.ajax.post("/mobile_phone/send_code", e)
            }, this.bindPhone = function (e) {
                return t.ajax.put("/mobile_phone/bind", e)
            }, this.searchCollections = function (e, n) {
                return t.ajax.get("/notes/" + e + "/submit_collections/search", {params: {q: n}})
            }, this.getEditableCollections = function (e, n, o) {
                return t.ajax.get("/notes/" + e + "/editable_collections", {params: {page: n, per_page: o}})
            }, this.getLatestCollections = function (e, n, o) {
                var a = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
                return t.ajax.get("/notes/" + e + "/submitted_collections", {params: {count: o, max_id: a.maxId}})
            }, this.getRecCollections = function (e, n, o) {
                return t.ajax.get("/notes/" + e + "/recommended_collections", {params: {page: n, per_page: o}})
            }, this.contributeToCollection = function (e, n) {
                return t.ajax.post("/notes/" + n + "/submit", {collection_id: e})
            }, this.getOtpChannel = function (e) {
                return t.ajax.get("/otp_channels")
            }, this.getUser = function () {
                return t.ajax.get("/author/current_user")
            }, this.getNotebooks = function () {
                return t.ajax.get("/author/notebooks")
            }, this.sortNotebooks = function (e) {
                return t.ajax.put("/author/notebooks/sequence", {sequence: e})
            }, this.updateBookName = function (e, n) {
                return t.ajax.put("/author/notebooks/" + e, {name: n})
            }, this.getNotes = function (e) {
                return t.ajax.get("/author/notebooks/" + e + "/notes")
            }, this.sortNotes = function (e) {
                return t.ajax.put("/author/notes/sequence", {sequence: e})
            }, this.getNoteContent = function (e) {
                return t.ajax.get("/author/notes/" + e + "/content")
            }, this.newNoteBook = function (e) {
                return t.ajax.post("/author/notebooks", {name: e})
            }, this.deleteNoteBookSoft = function (e) {
                return t.ajax.post("/author/notebooks/" + e + "/soft_destroy")
            }, this.newNote = function (e) {
                return t.ajax.post("/author/notes", {notebook_id: e.nbId, title: e.title, at_bottom: e.atBottom})
            }, this.publishNote = function (e, h) {
                return t.ajax.post("/author/notes/" + e + "/publicize", h)
            }, this.updateNote = function (e, n, o, a) {
                return t.ajax.put("/author/notes/" + e, {id: e, autosave_control: n, title: o, content: a})
            }, this.privateNote = function (e) {
                return t.ajax.post("/author/notes/" + e + "/privatize")
            }, this.moveNote = function (e, n) {
                return t.ajax.post("/author/notes/" + n + "/move", {notebook_id: e})
            }, this.recoveryNote = function (e) {
                return t.ajax.post("/author/recycle/notes/" + e + "/restore")
            }, this.deleteNoteSoft = function (e) {
                return t.ajax.post("/author/notes/" + e + "/soft_destroy")
            }, this.deleteNote = function (e) {
                return t.ajax.delete("/author/recycle/notes/" + e)
            }, this.getNoteHistoryList = function (e) {
                return t.ajax.get("/author/notes/" + e + "/note_logs")
            }, this.getNoteHistoryContent = function (e, n) {
                return t.ajax.get("/author/note_logs/" + e, {params: {note_id: n}})
            }, this.restoreHistoryContent = function (e, n) {
                return t.ajax.post("/author/note_logs/" + e + "/restore", {note_id: n})
            }, this.getTrashNotesList = function () {
                return t.ajax.get("/author/recycle/notes")
            }, this.changeReadMode = function (e) {
                return t.ajax.put("/settings/view_mode", {read_mode: e})
            }, this.changeFontType = function (e) {
                return t.ajax.put("/settings/view_mode", {default_font: e})
            }, this.changeLocale = function (e) {
                return t.ajax.put("/settings/view_mode", {locale: e})
            }, this.changeEditorType = function (e) {
                return t.ajax.put("/author/settings", {preferred_note_type: e})
            }, this.agreeThePNAgreement = function () {
                return t.ajax.post("/paid_note_agreements/agree")
            }, this.getPayNoteContent = function (e) {
                return t.ajax.get("/author/paid_notes/notes/" + e + "/paid_setting")
            }, this.updatePNSetting = function (e) {
                return t.ajax.post("/author/paid_notes/notes/" + e.note_id + "/publicize", e)
            }, this.getPayNoteAgreement = function () {
                return t.ajax.get("/paid_note_agreement.html")
            }, this.putAudioMessage = function (e, n) {
                return t.ajax.put("/author/notes/" + e + "/audio", n)
            }, this.deleteAudio = function (e) {
                return t.ajax.delete("/author/notes/" + e + "/audio")
            }, this.getAudioUrl = function (e) {
                return t.ajax.get("/author/notes/" + e + "/audio/play_url")
            }, this.getCoverImg = function (e) {
                return t.ajax.get("/author/notes/" + e + "/cover_images")
            }, this.postCoverImg = function (e) {
                var n = e.noteId, o = e.flowType, a = e.abbr, r = e.coverImgUrls;
                return t.ajax.post("/author/notes/" + n + "/update_cover_images", {
                    flow_type: o,
                    abbr: a,
                    cover_image_urls: r
                })
            }, this.getNoteMessage = function (e) {
                return t.ajax.get("/author/notes/" + e)
            }, this.exportAll = function() {
                return t.ajax.get("/author/notebooks/export_all")
            }, this.ajax = v.default.create({
                baseURL: "",
                timeout: 1e4,
                headers: {Accept: "application/json", "Content-type": "application/json; charset=UTF-8"}
            }), this.ajax.interceptors.response.use(function (e) {
                return e
            }, function (e) {
                if (e.message, e.response) {
                    var t = e.response, n = t.data, o = t.status, a = n.error;
                    return a && T(a, 401 === o), n.status = o, r.default.reject(n)
                }
                return r.default.reject(e)
            })
        };
        t.default = new w
    }, Z9ii: function (e, t) {
        e.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAMAAABEpIrGAAAAhFBMVEUAAAD6QC3/WEb/TDv5Py38QS//QDL7QC76Py36Py3/QjD6Py35Py36Py36Py36QC35Py37QC/6Qi/6QTD6Py36Py36Py36QC36Py76Py38QC76Py36Py75Py76QC75Py75Py37QC36QC38QC//RjH/SEj6QS/6Py36Py36QC3/STH5Py10Ms8sAAAAK3RSTlMAWgUJ2FAoesmqGvHgvaWaVj02L/n16cGel0zt0bKPhYF1YEkfA46NcWsV3NJT+wAAAOxJREFUOMvdkmkCgiAQhUcS1NTSzK193+b+92tAJAo7QH0/HPU9ecMg/BVsxrP88VWeRSVKwgMbkkcTNPiFq49XaDFxvw+VsKzrJZXIzdgiEavwol6/dNY0CxVQyuRx/9ZaGTGQ9YZEDgbHkJrGFp4mo3WFKBA3QghIyOCBxEfNHCDCHpibBGNAZhsquvB3Q0mj5TyjaM45yClcQbKbEvLRN032Y4hPoNA9N2+GAon0rPUjEllnSJI7Fd1wKLqdxnSfsI+zqtTW1rug7U7Nc36GGG1acBC+pV/Y0Nj3lZbTIwxzzvebNvBO8Js8AWRdJxV3vVB1AAAAAElFTkSuQmCC"
    }, Z9oK: function (e, t, n) {
        t = e.exports = n("FZ+f")(!1), t.push([e.i, '.lRx6g{color:#999;text-align:center;vertical-align:middle;display:none;opacity:0}.qaqoV{background-color:#f2f2f2}body.reader-night-mode .qaqoV{background-color:#3d3d3d}._1jDx2{opacity:1;position:static}._1jDx2,._21yV1{display:inline-block}._21yV1{width:48px;height:48px}._1H33l ._21yV1{width:38.4px;height:38.4px}._1xE9Q ._21yV1{width:57.6px;height:57.6px}._3l2Da{-webkit-animation:_3kk3L 2s linear infinite;animation:_3kk3L 2s linear infinite;height:100%;-webkit-transform-origin:center center;-ms-transform-origin:center center;transform-origin:center center;width:100%;will-change:transfrom}._3sMBB{stroke-width:5;stroke-miterlimit:10;stroke-dasharray:1,151;stroke-dashoffset:0;stroke-linecap:round;stroke:#ec7259;-webkit-animation:pjsmG 1.5s cubic-bezier(.645,.045,.355,1) infinite;animation:pjsmG 1.5s cubic-bezier(.645,.045,.355,1) infinite;will-change:stroke-dasharray,stroke-dashoffset}._2mnPN{position:relative}._2mnPN .lRx6g{position:absolute;height:100%;width:100%;z-index:5}._2mnPN ._21yV1{position:absolute;top:50%;left:50%;-webkit-transform:translate(-50%,-50%);-ms-transform:translate(-50%,-50%);transform:translate(-50%,-50%)}._2mnPN ._2crc1 ._21yV1{-webkit-transform:translate(-50%,-50%) translateY(-10px);-ms-transform:translate(-50%,-50%) translateY(-10px);transform:translate(-50%,-50%) translateY(-10px)}._2mnPN .ZKQHD{position:absolute;top:50%;width:100%;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;color:#ec7259;-webkit-transform:translateY(18px);-ms-transform:translateY(18px);transform:translateY(18px)}._2mnPN ._1H33l .ZKQHD{-webkit-transform:translateY(13.2px);-ms-transform:translateY(13.2px);transform:translateY(13.2px)}._2mnPN ._1xE9Q .ZKQHD{-webkit-transform:translateY(22.8px);-ms-transform:translateY(22.8px);transform:translateY(22.8px)}._3br9T{position:relative;-webkit-transition:opacity .3s cubic-bezier(.645,.045,.355,1);-o-transition:opacity .3s cubic-bezier(.645,.045,.355,1);transition:opacity .3s cubic-bezier(.645,.045,.355,1);opacity:1}._3YqXw{pointer-events:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;opacity:.7}._3YqXw:after{content:"";position:absolute;left:0;right:0;top:0;bottom:0;background:transparent}@-webkit-keyframes _3kk3L{to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}@keyframes _3kk3L{to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}@-webkit-keyframes pjsmG{0%{stroke-dasharray:1,151;stroke-dashoffset:0}50%{stroke-dasharray:89,151;stroke-dashoffset:-35px}to{stroke-dasharray:89,151;stroke-dashoffset:-124px}}@keyframes pjsmG{0%{stroke-dasharray:1,151;stroke-dashoffset:0}50%{stroke-dasharray:89,151;stroke-dashoffset:-35px}to{stroke-dasharray:89,151;stroke-dashoffset:-124px}}', ""]), t.locals = {
            loader: "lRx6g",
            "loader-has-mask": "qaqoV",
            "loader-is-loading": "_1jDx2",
            "loader-entity": "_21yV1",
            "loader-sm": "_1H33l",
            "loader-lg": "_1xE9Q",
            "loader-svg": "_3l2Da",
            rotate: "_3kk3L",
            "loader-circle": "_3sMBB",
            "loader-dash": "pjsmG",
            "loading-has-children": "_2mnPN",
            "loader-show-tip": "_2crc1",
            "loader-tip": "ZKQHD",
            "loading-container": "_3br9T",
            "loading-blur": "_3YqXw"
        }
    }, aNgh: function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0}), t.default = {
            PUBLISH_NOTE_BTN_CLICK: "publish_note_btn_click",
            COMPILE_NOTE_BTN_CLICK: "compile_note_btn_click",
            PUBLISH_PAID_NOTE_BTN_CLICK: "publish_paid_note_btn_click",
            COMPILE_PAID_NOTE_BTN_CLICK: "compile_paid_note_btn_click"
        }
    }, aQyQ: function (e, t, n) {
        "use strict";

        function o(e) {
            return e && e.__esModule ? e : {default: e}
        }

        Object.defineProperty(t, "__esModule", {value: !0}), t.default = void 0;
        var a, r, i, l, s, c = n("bOdI"), u = o(c), d = n("Zx67"), f = o(d), A = n("Zrlr"), p = o(A), h = n("wxAW"),
            g = o(h), m = n("zwoO"), b = o(m), v = n("Pf15"), E = o(v), _ = n("mzOA"), C = o(_), N = n("9JgI"),
            T = o(N), w = n("kvZP"), y = (n("oFuF"), n("Z1y9")), I = o(y), x = n("PNPU"), k = o(x),
            S = (n("l8jW"), n("boom")), M = (n("4HHy"), n("CGNb")), O = o(M), F = n("5Q8M"), D = n("GiK3"), B = o(D),
            L = n("RH2O"), P = n("HW6M"), R = o(P), G = n("V33R"), U = o(G), j = n("cl+9"), Q = o(j), H = n("MAZe"),
            Y = o(H), z = n("H3Ok"), W = o(z), K = "publishSuccessModal.post-note",
            J = "publishSuccessModal.posting-note", Z = "publishSuccessModal.posted-note",
            q = (a = (0, L.connect)(function (e) {
                return {globalState: (0, S.getState)(e)}
            }, function (e) {
                return {
                    setPublishSuccessData: function (t, n) {
                        return e((0, F.setPublishSuccessData)(t, n))
                    }, setQrCodeModalData: function (t, n) {
                        return e((0, F.setQrCodeModalData)(t, n))
                    }
                }
            }))((l = i = function (e) {
                function t(e) {
                    (0, p.default)(this, t);
                    var n = (0, b.default)(this, (t.__proto__ || (0, f.default)(t)).call(this, e));
                    s.call(n);
                    var o = n.props.data, a = o.title, r = o.slug;
                    return n.noteSlug = r, n.shareData = {
                        link: (0, w.getNoteSharedUrl)(n.noteSlug),
                        title: a,
                        text: a
                    }, n.cachEditableCoData = {}, n.cachLatestCoData = {}, n.cachRecCoData = {}, n.state = {
                        curEditableCoPageNum: 1,
                        totalEditableCoPage: -1,
                        curLatestCoPageNum: 1,
                        totalLatestCoPage: -1,
                        curRecCoPageNum: 1,
                        totalRecCoPage: -1,
                        searchResultData: [],
                        qrcdoeModalVisible: !1,
                        isLoadingRecCo: !1,
                        isLoadingLatestCo: !1,
                        isLoadingEditableCo: !1,
                        isSearching: !1,
                        hasInputValue: !1
                    }, n
                }

                return (0, E.default)(t, e), (0, g.default)(t, [{
                    key: "componentDidMount", value: function () {
                        var e = this.props.data, t = e.paid;
                        e.noteId, e.title, e.slug;
						// 获取submitted_collections&editable_collections&recommended_collections
                        //t || (this.getDataByPage("EditableCo", 1), this.getDataByPage("LatestCo", 1), this.getDataByPage("RecCo", 1));
                        this.shareData;
                        this.clipboard || (this.clipboard = new U.default("." + Y.default["copy-link"]), this.clipboard.on("success", function (e) {
                            C.default.success(Q.default.get("publishSuccessModal.copy-success")), e.clearSelection()
                        }), this.clipboard.on("error", function (e) {
                            C.default.error(Q.default.get("publishSuccessModal.copy-fail"))
                        }))
                    }
                }, {
                    key: "render", value: function () {
                        var e = this.shareData, t = (this.noteSlug, this.props.data.paid), n = this.state,
                            o = (n.qrcdoeModalVisible, n.isSearching, n.hasInputValue),
                            a = (0, R.default)(Y.default["modal--top"], (0, u.default)({}, Y.default["modal-top-middle"], t));
                        return B.default.createElement("div", {className: Y.default["success-modal"]}, B.default.createElement("div", {className: a}, B.default.createElement("div", {className: Y.default["title-wrap"]}, B.default.createElement("a", {
                            href: e.link,
                            className: Y.default.title
                        }, e.title), B.default.createElement("br", null), B.default.createElement("a", {
                            href: e.link,
                            className: Y.default["status-des"]
                        }, Q.default.get("publishSuccessModal.success-des"))), B.default.createElement("div", {
                            className: Y.default["close-btn"],
                            onClick: this.onCloseClick
                        }, "×")
								/*, B.default.createElement("div", {className: Y.default["modal--rec"]}), !t && B.default.createElement("div", {className: Y.default["modal--bottom"]}, B.default.createElement("div", {className: Y.default["collection-des"]}, B.default.createElement("div", {className: Y.default["search-input-wrap"]}, B.default.createElement(T.default, {
                            name: "search",
                            size: "2x"
                        }), B.default.createElement("input", {
                            type: "text",
                            placeholder: Q.default.get("publishSuccessModal.search-collection"),
                            onChange: this.onSearchInputChange
                        })), B.default.createElement("div", {className: Y.default.des}, Q.default.get("publishSuccessModal.post-des"))), o && this.renderSearchResultPage(), !o && this.renderNormalPage()))
						*/
						));
                    }
                }]), t
            }(D.Component), s = function () {
                var e = this;
                this.contributeToCollection = function (e, t) {
                    return I.default.contributeToCollection(e, t)
                }, this.showBigQrcodeModal = function () {
                    var t = e.shareData;
                    e.props.setQrCodeModalData(!0, {link: t.link})
                }, this.getDataByPage = function (t, n) {
                    var o = "RecCo" === t ? 30 : 6;
                    if (!(n < 1)) {
                        var a = void 0;
                        if ("LatestCo" === t) {
                            if (n > 1 && !e.cachLatestCoData[n - 1]) return;
                            var r = e.cachLatestCoData[n - 1];
                            r && (a = (r[r.length - 1] || {}).submitted_at)
                        }
                        var i = e.props.data.noteId, l = e["cach" + t + "Data"][n];
                        if (e.setState((0, u.default)({}, "cur" + t + "PageNum", n)), l) return void e.setState((0, u.default)({}, "isLoading" + t, !1));
                        e.setState((0, u.default)({}, "isLoading" + t, !0)), I.default["get" + t + "llections"](i, n, o, {maxId: a}).then(function (a) {
                            var r = a.data, i = 0;
                            void 0 !== r.total_pages ? i = r.total_pages : void 0 !== r.total_count && (i = Math.ceil(r.total_count / o)), e.setState((0, u.default)({}, "total" + t + "Page", i)), e["cach" + t + "Data"][n] = a.data.collections, e.state["cur" + t + "PageNum"] === n && e.setState((0, u.default)({}, "isLoading" + t, !1))
                        }).catch(function (n) {
                            e.setState((0, u.default)({}, "isLoading" + t, !1))
                        })
                    }
                }, this.onContributeBtnClick = function (t) {
                    var n = e.props.data.noteId, o = t.target, a = o.getAttribute("data-collection-id"),
                        r = o.getAttribute("data-post-text"), i = o.getAttribute("data-posting-text"),
                        l = o.getAttribute("data-posted-text");
                    if (a) {
                        o.removeAttribute("data-collection-id");
                        o.nextElementSibling;
                        o.innerHTML = i, e.contributeToCollection(a, n).then(function (e) {
                            o.innerHTML = l
                        }).catch(function (e) {
                            o.innerHTML = r, o.setAttribute("data-collection-id", a), C.default.error(e.error)
                        })
                    }
                }, this.onCloseClick = function () {
                    e.props.setPublishSuccessData(!1)
                }, this.onWeiboShareBtnClick = function () {
                    var t = e.shareData;
                    (0, k.default)("weibo", t.link, t.title, t.text)
                }, this.onWechatShareBtnClick = function () {
                    e.showBigQrcodeModal()
                }, this.searchCollections = function (t, n) {
                    e.setState({
                        isSearching: !0,
                        searchResultData: []
                    }), I.default.searchCollections(t, n).then(function (t) {
                        var n = t.data;
                        e.setState({isSearching: !1, searchResultData: n})
                    }).catch(function (t) {
                        e.setState({isSearching: !1, searchResultData: []})
                    })
                }, this.onSearchInputChange = function (t) {
                    var n = e.props.data.noteId, o = (t.target.value || "").trim(), a = e.state.isSearching;
                    if (clearTimeout(e.searchTimer), !o) return void e.setState({
                        hasInputValue: !1,
                        searchResultData: []
                    });
                    a || (e.searchTimer = setTimeout(function () {
                        e.setState({hasInputValue: !0}), e.searchCollections(n, o)
                    }, 500))
                }, this.getCurRecCoData = function () {
                    for (var t = e.cachRecCoData, n = e.state.curRecCoPageNum, o = [], a = 1; a <= n; a++) o = o.concat(t[a] || []);
                    return o
                }, this.renderNormalPage = function () {
                    var t = e.cachEditableCoData, n = e.cachLatestCoData, o = (e.cachRecCoData, e.state),
                        a = o.isLoadingEditableCo, r = o.isLoadingLatestCo, i = o.isLoadingRecCo,
                        l = o.curEditableCoPageNum, s = o.totalEditableCoPage, c = o.curLatestCoPageNum,
                        u = o.totalLatestCoPage, d = o.curRecCoPageNum, f = o.totalRecCoPage, A = e.props.data;
                    A.noteId, A.title, A.slug;
                    return B.default.createElement("div", {className: Y.default["normal-page"]}, W.default.renderEditableCoPage(t[l], a, Y.default, {
                        postText: Q.default.get("publishSuccessModal.include-note"),
                        postingText: Q.default.get("publishSuccessModal.including-note"),
                        postedText: Q.default.get("publishSuccessModal.included-note")
                    }, e.onContributeBtnClick, l, s, function () {
                        e.getDataByPage("EditableCo", l - 1)
                    }, function () {
                        e.getDataByPage("EditableCo", l + 1)
                    }, (0, w.getNewCollectionPageUrl)()), W.default.renderLatestCoPage(n, r, Y.default, {
                        postText: Q.default.get(K),
                        postingText: Q.default.get(J),
                        postedText: Q.default.get(Z)
                    }, e.onContributeBtnClick, c, u, function () {
                        e.getDataByPage("LatestCo", c - 1)
                    }, function () {
                        e.getDataByPage("LatestCo", c + 1)
                    }), W.default.renderRecCoPage(e.getCurRecCoData(), i, Y.default, {
                        postText: Q.default.get(K),
                        postingText: Q.default.get(J),
                        postedText: Q.default.get(Z)
                    }, e.onContributeBtnClick, d, f, function () {
                        e.getDataByPage("RecCo", d + 1)
                    }))
                }, this.renderSearchResultPage = function () {
                    var t = e.state, n = t.isSearching, o = t.searchResultData;
                    return B.default.createElement("div", {className: Y.default["search-result-page"]}, B.default.createElement("div", {className: Y.default["collection-auto-page"]}, W.default.renderRecomendCollectionItems(o, n, Y.default, {
                        postText: Q.default.get(K),
                        postingText: Q.default.get(J),
                        postedText: Q.default.get(Z)
                    }, e.onContributeBtnClick)))
                }
            }, r = l)) || r;
        t.default = q
    }, bByz: function (e, t, n) {
        t = e.exports = n("FZ+f")(!1), t.push([e.i, '._3zXcJ{position:relative;display:inline-block;text-align:center;height:30px;line-height:20px;padding:4px 12px;border:1px solid transparent;border-radius:15px;font-size:14px;font-weight:500;-ms-touch-action:manipulation;touch-action:manipulation;cursor:pointer;background-image:none;white-space:nowrap;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;-webkit-transition:all .2s cubic-bezier(.645,.045,.355,1);-o-transition:all .2s cubic-bezier(.645,.045,.355,1);transition:all .2s cubic-bezier(.645,.045,.355,1);color:#595959;background-color:#fff;border-color:transparent}._3zXcJ+._3zXcJ{margin-left:8px}._3zXcJ:focus,._3zXcJ:hover{color:#404040}._3zXcJ:active,._3zXcJ:focus,._3zXcJ:hover{background-color:#fff;border-color:transparent}._3zXcJ:active{color:#262626}body.reader-night-mode ._3zXcJ{color:#b3b3b3;background-color:#3d3d3d;border-color:transparent}body.reader-night-mode ._3zXcJ:focus,body.reader-night-mode ._3zXcJ:hover{color:#ccc;background-color:#3d3d3d;border-color:transparent}body.reader-night-mode ._3zXcJ:active{color:#e6e6e6;background-color:#3d3d3d;border-color:transparent}._3QfkW{color:#42c02e;background-color:#fff;border-color:#42c02e}._3QfkW:focus,._3QfkW:hover{color:#42c02e;background-color:#f7fcf7;border-color:#42c02e}._3QfkW:active{color:#42c02e;background-color:#f0faee;border-color:#42c02e}body.reader-night-mode ._3QfkW{color:#42c02e;background-color:#3d3d3d;border-color:#42c02e}body.reader-night-mode ._3QfkW:focus,body.reader-night-mode ._3QfkW:hover{color:#42c02e;background-color:#3d423d;border-color:#42c02e}body.reader-night-mode ._3QfkW:active{color:#42c02e;background-color:#3e483c;border-color:#42c02e}._3QfkW._3LBxu:before{content:"";position:absolute;border-radius:inherit;border:0 solid #42c02e;-webkit-animation:_12ABh .3s ease-out forwards;animation:_12ABh .3s ease-out forwards}._3QfkW._1M1e4{color:#fff;background-color:#42c02e;border-color:#42c02e}._3QfkW._1M1e4:focus,._3QfkW._1M1e4:hover{color:#fff;background-color:#4ac336;border-color:#42c02e}._3QfkW._1M1e4:active{color:#fff;background-color:#51c53f;border-color:#42c02e}body.reader-night-mode ._3QfkW._1M1e4{color:#3d3d3d;background-color:#42c02e;border-color:#42c02e}body.reader-night-mode ._3QfkW._1M1e4:focus,body.reader-night-mode ._3QfkW._1M1e4:hover{color:#3d3d3d;background-color:#42bb2f;border-color:#42c02e}body.reader-night-mode ._3QfkW._1M1e4:active{color:#3d3d3d;background-color:#42b62f;border-color:#42c02e}.JrecM{color:#f50;background-color:#fff;border-color:#f50}.JrecM:focus,.JrecM:hover{color:#f50;background-color:#fff8f5;border-color:#f50}.JrecM:active{color:#f50;background-color:#fff1eb;border-color:#f50}body.reader-night-mode .JrecM{color:#f50;background-color:#3d3d3d;border-color:#f50}body.reader-night-mode .JrecM:focus,body.reader-night-mode .JrecM:hover{color:#f50;background-color:#453e3b;border-color:#f50}body.reader-night-mode .JrecM:active{color:#f50;background-color:#4d3f38;border-color:#f50}.JrecM._3LBxu:before{content:"";position:absolute;border-radius:inherit;border:0 solid #f50;-webkit-animation:_12ABh .3s ease-out forwards;animation:_12ABh .3s ease-out forwards}.JrecM._1M1e4{color:#fff;background-color:#f50;border-color:#f50}.JrecM._1M1e4:focus,.JrecM._1M1e4:hover{color:#fff;background-color:#ff5c0a;border-color:#f50}.JrecM._1M1e4:active{color:#fff;background-color:#ff6314;border-color:#f50}body.reader-night-mode .JrecM._1M1e4{color:#3d3d3d;background-color:#f50;border-color:#f50}body.reader-night-mode .JrecM._1M1e4:focus,body.reader-night-mode .JrecM._1M1e4:hover{color:#3d3d3d;background-color:#f75402;border-color:#f50}body.reader-night-mode .JrecM._1M1e4:active{color:#3d3d3d;background-color:#ef5305;border-color:#f50}@-webkit-keyframes _12ABh{0%{opacity:.382;top:-1px;left:-1px;bottom:-1px;right:-1px;border-width:1px}to{opacity:0;top:-6px;left:-6px;bottom:-6px;right:-6px;border-width:6px}}@keyframes _12ABh{0%{opacity:.382;top:-1px;left:-1px;bottom:-1px;right:-1px;border-width:1px}to{opacity:0;top:-6px;left:-6px;bottom:-6px;right:-6px;border-width:6px}}', ""]), t.locals = {
            btn: "_3zXcJ",
            "btn-primary": "_3QfkW",
            "btn-clicked": "_3LBxu",
            buttonClick: "_12ABh",
            "btn-strong": "_1M1e4",
            "btn-danger": "JrecM"
        }
    }, boom: function (e, t, n) {
        "use strict";

        function o(e) {
            return e && e.__esModule ? e : {default: e}
        }

        Object.defineProperty(t, "__esModule", {value: !0}), t.getState = void 0, t.default = function () {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : r.default.fromJS(A),
                t = arguments[1];
            switch (t.type) {
                case s.Global.CHANGE_LOCALE:
                    return e;
                case s.Global.CHANGE_LOCALE_SUCCESS:
                    return e = e.setIn(["locale"], t.locale);
                case s.Global.CHANGE_LOCALE_FAIL:
                case s.Global.CHANGE_READ_MODE:
                    return e;
                case s.Global.CHANGE_READ_MODE_SUCCESS:
                    return e = e.setIn(["readMode"], t.readMode);
                case s.Global.CHANGE_READ_MODE_FAIL:
                case s.Global.CHANGE_FONT_TYPE:
                    return e;
                case s.Global.CHANGE_FONT_TYPE_SUCCESS:
                    return e = e.setIn(["fontType"], t.fontType);
                case s.Global.CHANGE_FONT_TYPE_FAIL:
                    return e;
                case s.Global.SET_BIND_WX_STATUS:
                    var n = t.status;
                    return e = e.setIn(["bindWx"], n);
                case s.Global.SET_BIND_PHONE_STATUS:
                    var o = t.hasBind;
                    return e = e.setIn(["bindPhoneStatus"], o);
                case s.Global.SET_BIND_STATUS:
                    var a = t.data, i = t.status;
                    return e = e.setIn(["bindStatus"], i), a && (e = e.setIn(["account"], a)), e;
                case s.Global.SET_PUBLISH_SUCCESS_MODAL_DATA:
                    var l = t.show, c = t.data, u = void 0 === c ? {} : c;
                    return e = e.setIn(["publishSuccessModalData"], r.default.fromJS({show: l, data: u}));
                case s.Global.SET_QRCODE_MODAL_DATA:
                    var d = t.data, f = void 0 === d ? {} : d, p = t.show;
                    return e = e.setIn(["qrCodeModal"], r.default.fromJS({show: p, data: f}));
                case s.Global.SWITCH_DEV:
                    return e = e.setIn(["isDev"], !e.get("isDev"));
                case s.Global.SET_NOTE_DATA:
                    var h = t.data, g = void 0 === h ? {} : h;
                    return e = e.setIn(["noteData", "isInit"], g.isInit);
                case s.Global.SET_SORTED_NOTE_DATA:
                    var m = t.data, b = void 0 === m ? {} : m;
                    return e = e.setIn(["sortingNote"], r.default.fromJS(b));
                case s.Global.SET_PNAGREE_MODAL_DATA:
                    var v = t.show, E = t.data, _ = void 0 === E ? {} : E;
                    return e = e.setIn(["pnAgreeModal"], r.default.fromJS({show: v, data: _}));
                default:
                    return e
            }
        };
        var a = n("BYKG"), r = o(a), i = n("lbHh"), l = o(i), s = n("4HHy"), c = n("oFuF"),
            u = l.default.get("locale") || "zh-CN", d = l.default.get("read_mode") || "day",
            f = l.default.get("default_font") || "font2", A = {
                locale: u,
                readMode: d,
                fontType: f,
                isDev: c.isDev,
                bindStatus: !0,
                account: {},
                bindWx: !0,
                bindPhoneStatus: !0,
                publishSuccessModalData: {show: !1, data: {}},
                qrCodeModal: {show: !1, data: {}},
                noteData: {isInit: !1},
                pnAgreeModal: {show: !1, data: {}},
                sortingNote: {isSorting: !1, isCursorOnNbItem: !1, noteId: null, nbId: null, newNbId: null}
            };
        t.getState = function (e) {
            return e.Global
        }
    }, cBxc: function (e, t, n) {
        "use strict";

        function o() {
            for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
            var o = t.length;
            return function () {
                for (var e = arguments.length, n = Array(e), a = 0; a < e; a++) n[a] = arguments[a];
                for (var r = 0; r < o; r++) {
                    var i = t[r];
                    i && "function" == typeof i && i.apply(this, n)
                }
            }
        }

        Object.defineProperty(t, "__esModule", {value: !0}), t.default = o
    }, cEaC: function (e, t, n) {
        e.exports = n.p + "static/fonts/fontawesome-webfont.674f50d.eot"
    }, cjYq: function (e, t, n) {
        t = e.exports = n("FZ+f")(!1), t.push([e.i, ".KinQ7{position:fixed;top:0;left:0;width:100%;height:100%;z-index:1051;background-color:hsla(0,0%,100%,.7)}body.reader-night-mode .KinQ7{background-color:hsla(0,0%,40%,.7)}.KinQ7 ._1ZqlG{position:absolute;padding:80px 60px 50px;border-radius:4px;top:50%;left:50%;-webkit-transform:translate(-50%,-50%);-ms-transform:translate(-50%,-50%);transform:translate(-50%,-50%);background-color:#fff;-webkit-box-shadow:0 5px 25px rgba(0,0,0,.1);box-shadow:0 5px 25px rgba(0,0,0,.1)}body.reader-night-mode .KinQ7 ._1ZqlG{background-color:#3d3d3d}.KinQ7 ._1ZqlG ._32hyk{width:240px;color:#4d4d4d;line-height:45px;font-size:14px;line-height:1.3;text-align:center;margin-bottom:30px;margin-top:-15px}body.reader-night-mode .KinQ7 ._1ZqlG ._32hyk{color:#b3b3b3}.KinQ7 ._1ZqlG img{margin:0 auto;padding:10px;width:200px;height:200px;background-color:#fff}.KinQ7 ._1ZqlG ._2vtX2{position:absolute;right:15px;top:6px;padding:5px;font-size:30px;font-weight:400;line-height:1;cursor:pointer}body.reader-night-mode .KinQ7 ._1ZqlG ._2vtX2{color:#b3b3b3}.u_qO5{display:none}", ""]), t.locals = {
            "qrcode-modal": "KinQ7",
            "qr-modal-body": "_1ZqlG",
            "qr-modal--title": "_32hyk",
            "close-btn": "_2vtX2",
            hidden: "u_qO5"
        }
    }, cmUn: function (e, t, n) {
        e.exports = n.p + "static/fonts/fontawesome-webfont.674f50d.eot"
    }, dHmQ: function (e, t) {
        e.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAALEgAACxIB0t1+/AAAABx0RVh0U29mdHdhcmUAQWRvYmUgRmlyZXdvcmtzIENTNui8sowAAAKdSURBVFiF7ddNiFVlGAfw35WpSRG1XmchIm40ECNLVEwXlS4E3Si8gYoYUZouIjcSbmojCH4GEYQQIfgReBIZoYI26kIrZTYuoiSYBM2POYxOqGVyr4tzL565zp0753aHcdEfzuJ53ud5/n/e9zznfU6pUqkYS4wbU/anQUCprdWStAtbsAwV/IAvxNA/ROw4MZRLOcdkMdz5D+Rb8QFm4Zmq9wEu44AYvqzGTcHb6BPDkbyAHnwlhs9aID+EjU2ivsFDrMJ4dImhv1QtMBO91cD3xXCwAPmH+LSA3KtYjX8wrSbgdZzOBe1RqXzkranD92iSTsQfeGGE5GWcRycGsKXWBf/WBW5XKv0kSV9rUnBJAXKyrluKSYhiuFwT8JtsS/JYiHOS9JgkXdSg4KwC5DV8i/m1zsi/hCewZpjEn3ESZ/CLGPol6VocKyhgnRi+rhkduYV38SamNEhcVH1gQJJeKUhcQ2feyI4gSRdgJTahbwRFJuGl6lMUN/NGbQc6cbhK3lmf0Wb0DiWgB7fQNcrkf+L3vCM7ghjuY98ok8N5MTx4UgBUKrvx/SgLOF7veCwg++qtwm78NQrkfehuLOCxfQofo9U2a4TPxXCv3tlRZ5dxAAtk93m70If9Qy0M3oEYytiAv7V3WNkmhoHmAjIRv2IFrreJ/KgYjjRaHHomjOEsXsYuXMSNFskv4J3hAppvc5LOkF04SwuS92C5GG63JiBJ5+A9bMbEguTdWC+Gu80CS5J0ruxSeQ4TMAeLZfNAUdzDJ2LYO9KEDlm/v4gdmNcCKdzHUewUQ2+RxMFHkKSvyIaSZZiN5/FsXU65SngTl/AdusVwrQXhw74Dr+IN2Udpuuyavi0b337EWTFcbYV0kID/f07HWsAjK3ysMn3cJKAAAAAASUVORK5CYII="
    }, eTMa: function (e, t, n) {
        "use strict";

        function o(e) {
            return e && e.__esModule ? e : {default: e}
        }

        Object.defineProperty(t, "__esModule", {value: !0});
        var a, r, i = n("Zx67"), l = o(i), s = n("Zrlr"), c = o(s), u = n("wxAW"), d = o(u), f = n("zwoO"), A = o(f),
            p = n("Pf15"), h = o(p), g = n("DgVG"), m = n("oFuF"), b = n("GiK3"), v = o(b), E = n("HW6M"), _ = o(E),
            C = n("f0Ki"), N = o(C), T = (r = a = function (e) {
                function t() {
                    var e, n, o, a;
                    (0, c.default)(this, t);
                    for (var r = arguments.length, i = Array(r), s = 0; s < r; s++) i[s] = arguments[s];
                    return n = o = (0, A.default)(this, (e = t.__proto__ || (0, l.default)(t)).call.apply(e, [this].concat(i))), o.onMouseLeave = function (e) {
                        (0, o.props.onMouseLeave)(e)
                    }, a = n, (0, A.default)(o, a)
                }

                return (0, h.default)(t, e), (0, d.default)(t, [{
                    key: "render", value: function () {
                        var e = this.props, t = (e.show, e.children), n = e.className, o = e.onClick, a = e.getMenuDom;
                        return v.default.createElement("ul", {
                            ref: a,
                            className: (0, _.default)(n, N.default.menu),
                            onMouseLeave: this.onMouseLeave
                        }, (0, g.renderChildren)(t, {onClick: o}))
                    }
                }]), t
            }(b.Component), a.defaultProps = {onClick: m.noop, onMouseLeave: m.noop}, r);
        t.default = T
    }, f0Ki: function (e, t, n) {
        var o = n("4/F/");
        "string" == typeof o && (o = [[e.i, o, ""]]);
        var a = {hmr: !0};
        a.transform = void 0, a.insertInto = void 0;
        n("MTIv")(o, a);
        o.locals && (e.exports = o.locals)
    }, gESm: function (e, t, n) {
        "use strict";

        function o(e) {
            return e && e.__esModule ? e : {default: e}
        }

        Object.defineProperty(t, "__esModule", {value: !0}), t.default = void 0;
        var a, r, i = n("Dd8w"), l = o(i), s = n("woOf"), c = o(s), u = n("bOdI"), d = o(u), f = n("Zx67"), A = o(f),
            p = n("Zrlr"), h = o(p), g = n("wxAW"), m = o(g), b = n("zwoO"), v = o(b), E = n("Pf15"), _ = o(E),
            C = n("Dc7M"), N = o(C), T = n("GiK3"), w = o(T), y = (n("O27J"), n("KSGD")), I = o(y), x = n("HW6M"),
            k = o(x), S = (r = a = function (e) {
                function t() {
                    return (0, h.default)(this, t), (0, v.default)(this, (t.__proto__ || (0, A.default)(t)).apply(this, arguments))
                }

                return (0, _.default)(t, e), (0, m.default)(t, [{
                    key: "shouldComponentUpdate", value: function (e) {
                        return !!e.hiddenClassName || !!e.visible
                    }
                }, {
                    key: "render", value: function () {
                        var e = this.props, t = e.className, n = e.hiddenClassName, o = e.visible,
                            a = (0, k.default)(t, (0, d.default)({}, "" + n, !!n && !o)),
                            r = (0, N.default)((0, c.default)({}, this.props), ["hiddenClassName", "visible"]);
                        return w.default.createElement("div", (0, l.default)({}, r, {className: a}))
                    }
                }]), t
            }(T.Component), a.propTypes = {
                className: I.default.string,
                visible: I.default.bool,
                hiddenClassName: I.default.string,
                role: I.default.string,
                style: I.default.object
            }, a.defaultProps = {style: {}}, r);
        t.default = S
    }, geoC: function (e, t, n) {
        "use strict";

        function o(e) {
            return e && e.__esModule ? e : {default: e}
        }

        Object.defineProperty(t, "__esModule", {value: !0});
        var a = n("2KeS"), r = n("igqX"), i = o(r), l = n("7ITh"), s = o(l), c = n("OPmc"), u = o(c), d = void 0,
            f = (0, i.default)({
                onError: function (e) {
                    window.Raven && window.Raven.captureException(e)
                }
            });
        d = (0, a.createStore)(s.default, (0, a.applyMiddleware)(f)), f.run(u.default), t.default = d
    }, gmmG: function (e, t, n) {
        "use strict";

        function o(e) {
            return e && e.__esModule ? e : {default: e}
        }

        Object.defineProperty(t, "__esModule", {value: !0}), t.getState = void 0, t.default = function () {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : r.default.fromJS(c),
                t = arguments[1];
            switch (t.type) {
                case s.Notebooks.GET_NOTEBOOKS:
                    return e = e.set("status", s.Notebooks.GET_NOTEBOOKS);
                case s.Notebooks.GET_NOTEBOOKS_SUCCESS:
                    var n = t.data;
                    if (!t.isCache) {
                        var o = (0, l.default)(n), a = o.entities, i = o.seq;
                        e = e.set("entities", r.default.fromJS(a).mergeDeep(e.get("entities"))), e = e.set("seq", r.default.fromJS(i))
                    }
                    return e = e.set("status", s.Notebooks.GET_NOTEBOOKS_SUCCESS);
                case s.Notebooks.GET_NOTEBOOKS_FAIL:
                    return e = e.set("status", s.Notebooks.GET_NOTEBOOKS_FAIL);
                case s.Notebooks.SORT_NOTEBOOKS:
                    var u = t.newSeq;
                    return e = e.set("seq", r.default.fromJS(u)), e = e.set("status", s.Notebooks.SORT_NOTEBOOKS);
                case s.Notebooks.SORT_NOTEBOOKS_SUCCESS:
                    return e = e.set("status", s.Notebooks.SORT_NOTEBOOKS_SUCCESS);
                case s.Notebooks.SORT_NOTEBOOKS_FAIL:
                    var d = t.oldSeq;
                    return e = e.set("seq", r.default.fromJS(d)), e = e.set("status", s.Notebooks.SORT_NOTEBOOKS_FAIL);
                case s.Notebooks.NEW_NOTEBOOK:
                    return e = e.set("status", s.Notebooks.NEW_NOTEBOOK);
                case s.Notebooks.NEW_NOTEBOOK_SUCCESS:
                    var f = t.data;
                    return e = e.setIn(["entities", "" + f.id], r.default.fromJS(f)), e = e.set("seq", e.get("seq").unshift(f.id)), e = e.set("status", s.Notebooks.NEW_NOTEBOOK_SUCCESS);
                case s.Notebooks.NEW_NOTEBOOK_FAIL:
                    return e = e.set("status", s.Notebooks.NEW_NOTEBOOK_FAIL);
                case s.Notebooks.DEL_NOTEBOOK_SOFT:
                    var A = t.nbId;
                    return e = e.setIn(["entities", A.toString(), "status"], s.Notebooks.DEL_NOTEBOOK_SOFT);
                case s.Notebooks.DEL_NOTEBOOK_SOFT_SUCCESS:
                    var p = (t.data, t.nbId), h = e.get("seq").findIndex(function (e) {
                        return e === p
                    });
                    return e = e.deleteIn(["entities", p.toString()]), e = e.deleteIn(["seq", h]);
                case s.Notebooks.DEL_NOTEBOOK_SOFT_FAIL:
                    var g = (t.data, t.nbId);
                    return e = e.setIn(["entities", g.toString(), "status"], s.Notebooks.DEL_NOTEBOOK_SOFT_FAIL);
                case s.Notebooks.RENAME_NOTEBOOK:
                    var m = (t.data, t.nbId);
                    t.name;
                    return e = e.setIn(["entities", m.toString(), "status"], s.Notebooks.RENAME_NOTEBOOK);
                case s.Notebooks.RENAME_NOTEBOOK_SUCCESS:
                    var b = (t.data, t.nbId), v = t.name;
                    return e = e.setIn(["entities", b.toString(), "name"], v), e = e.setIn(["entities", b.toString(), "status"], s.Notebooks.RENAME_NOTEBOOK_SUCCESS);
                case s.Notebooks.RENAME_NOTEBOOK_FAIL:
                    var E = (t.data, t.nbId);
                    t.name;
                    return e = e.setIn(["entities", E.toString(), "status"], s.Notebooks.RENAME_NOTEBOOK_FAIL);
                case s.Notes.GET_NOTES_SUCCESS:
                    var _ = t.nbId;
                    if (!t.isCache) {
                        var C = (0, l.default)(t.data), N = C.seq;
                        e = e.setIn(["entities", _.toString(), "notes"], r.default.fromJS(N))
                    }
                    return e;
                case s.Notes.SORT_NOTES:
                    var T = t.nbId, w = t.newSeq;
                    return e = e.setIn(["entities", T.toString(), "notes"], r.default.fromJS(w));
                case s.Notes.SORT_NOTES_FAIL:
                    var y = t.nbId, I = t.oldSeq;
                    return e = e.setIn(["entities", y.toString(), "notes"], r.default.fromJS(I));
                case s.Notes.NEW_NOTE_SUCCESS:
                    var x = t.data, k = t.nbId, S = t.atBottom, M = ["entities", k.toString(), "notes"], O = void 0;
                    return O = S ? e.getIn(M).push(x.id) : e.getIn(M).unshift(x.id), e = e.setIn(M, O);
                case s.Notes.DEL_NOTE_SOFT_SUCCESS:
                    var F = t.nbId, D = t.noteId, B = ["entities", F.toString(), "notes"], L = e.getIn(B);
                    return L = L.filter(function (e) {
                        return e !== +D
                    }), e = e.setIn(B, L);
                case s.Notes.MOVE_NOTE_SUCCESS:
                    var P = (t.data, t.nbId), R = t.newNbId, G = t.noteId, U = ["entities", P.toString(), "notes"],
                        j = e.getIn(U), Q = j.findIndex(function (e) {
                            return e === +G
                        });
                    j = j.delete(Q), e = e.setIn(U, j);
                    var H = ["entities", R.toString(), "notes"];
                    return j = e.getIn(H), j && (j = j.unshift(+G), e = e.setIn(H, j)), e;
                default:
                    return e
            }
        };
        var a = n("BYKG"), r = o(a), i = n("w0tY"), l = o(i), s = n("4HHy"),
            c = {entities: {}, seq: [], status: s.Notebooks.NOTEBOOKS_INIT};
        t.getState = function (e) {
            return e.Notebooks
        }
    }, hGJ7: function (e, t, n) {
        "use strict";

        function o(e) {
            return e && e.__esModule ? e : {default: e}
        }

        function a() {
            var e = 1;
            return function () {
                var t = +new Date;
                return j + "-" + t + "-" + e++
            }
        }

        Object.defineProperty(t, "__esModule", {value: !0}), t.messagePrefix = void 0;
        var r, i, l = n("+6Bu"), s = o(l), c = n("bOdI"), u = o(c), d = n("Dd8w"), f = o(d), A = n("Zx67"), p = o(A),
            h = n("Zrlr"), g = o(h), m = n("wxAW"), b = o(m), v = n("zwoO"), E = o(v), _ = n("Pf15"), C = o(_),
            N = n("gGqR"), T = o(N), w = n("GiK3"), y = o(w), I = n("KSGD"), x = o(I), k = n("O27J"), S = o(k),
            M = n("HW6M"), O = o(M), F = n("8aSS"), D = o(F), B = n("A6CO"), L = o(B), P = n("cBxc"), R = o(P),
            G = n("FruA"), U = o(G), j = t.messagePrefix = "message", Q = (i = r = function (e) {
                function t(e) {
                    (0, g.default)(this, t);
                    var n = (0, E.default)(this, (t.__proto__ || (0, p.default)(t)).call(this, e));
                    return n.addMessage = function () {
                        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                            t = e.key = e.key || n.getKey();
                        return n.setState(function (n) {
                            var o = n.messages;
                            return -1 === o.findIndex(function (e) {
                                return e.key === t
                            }) ? {messages: o.concat(e)} : null
                        }), e
                    }, n.removeMessage = function (e) {
                        n.setState(function (t) {
                            return {
                                messages: t.messages.filter(function (t) {
                                    return t.key !== e
                                })
                            }
                        })
                    }, n.getItems = function () {
                        return n.state.messages.map(function (e) {
                            var t = e.onClose, o = e.key, a = (0, R.default)(n.removeMessage.bind(n, e.key), t);
                            return y.default.createElement(U.default, (0, f.default)({}, e, {onClose: a, key: o}))
                        })
                    }, n.state = {messages: []}, n
                }

                return (0, C.default)(t, e), (0, b.default)(t, [{
                    key: "componentDidMount", value: function () {
                        this.getKey = a()
                    }
                }, {
                    key: "render", value: function () {
                        var e, t = this.props, n = t.containerClass, o = t.containerStyle,
                            a = (0, O.default)((e = {}, (0, u.default)(e, "" + L.default[j + "-wrap"], !0), (0, u.default)(e, n, !!n), e));
                        return y.default.createElement(D.default, {
                            className: a,
                            style: o,
                            transitionName: "move-up"
                        }, this.getItems())
                    }
                }]), t
            }(w.Component), r.propTypes = {containerClass: x.default.string, containerStyle: x.default.object}, i);
        Q.createInstance = function () {
            function e(e) {
                if (!r) {
                    r = !0;
                    n({
                        add: function (t) {
                            return e.addMessage(t)
                        }, remove: function (t) {
                            return e.removeMessage(t)
                        }, destroy: function () {
                            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : i;
                            S.default.unmountComponentAtNode(e), document.body.removeChild(e)
                        }, instance: e, target: i
                    })
                }
            }

            var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, n = arguments[1],
                o = t.getContainer, a = (0, s.default)(t, ["getContainer"]), r = !1, i = void 0;
            (0, T.default)(o) ? i = o() : (i = document.createElement("div"), document.body.appendChild(i)), S.default.render(y.default.createElement(Q, (0, f.default)({}, a, {ref: e})), i)
        }, t.default = Q
    }, i0Fb: function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0}), t.getUserOtpChannelState = t.getState = void 0, t.default = function () {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : a.default.fromJS(i),
                t = arguments[1];
            switch (t.type) {
                case r.User.GET_USER:
                    return e = e.setIn(["status"], r.User.GET_USER);
                case r.User.GET_USER_SUCCESS:
                    var n = t.data;
                    e = e.setIn(["user"], a.default.fromJS(n)), e = e.setIn(["status"], r.User.GET_USER_SUCCESS);
                    try {
                        window.Raven ? window.Raven.setUserContext(n) : window.pageData = {user: n}
                    } catch (e) {
                    }
                    return e;
                case r.User.GET_USER_FAIL:
                    return e = e.setIn(["status"], r.User.GET_USER_FAIL);
                case r.User.SET_USER:
                    var o = t.data, l = e.get("user");
                    return e = e.setIn(["user"], l.mergeDeep(a.default.fromJS(o)));
                case r.User.CHANGE_EDITOR_TYPE_SUCCESS:
                    var s = t.editorType;
                    return e = e.setIn(["user", "preferred_note_type"], s);
                case r.User.GET_USER_OTP_CHANNEL:
                    return e = e.setIn(["otpChannel", "status"], r.User.GET_USER_OTP_CHANNEL);
                case r.User.GET_USER_OTP_CHANNEL_SUCCESS:
                    var c = t.data;
                    return e = e.setIn(["otpChannel", "data"], a.default.fromJS(c)), e = e.setIn(["otpChannel", "status"], r.User.GET_USER_OTP_CHANNEL_SUCCESS);
                case r.User.GET_USER_OTP_CHANNEL_FAIL:
                    return e = e.setIn(["otpChannel", "status"], r.User.GET_USER_OTP_CHANNEL_FAIL);
                default:
                    return e
            }
        };
        var o = n("BYKG"), a = function (e) {
                return e && e.__esModule ? e : {default: e}
            }(o), r = n("4HHy"),
            i = {user: {}, status: r.User.USER_INIT, otpChannel: {data: void 0, status: r.User.USER_OTP_CHANNEL_INIT}};
        t.getState = function (e) {
            return e.User
        }, t.getUserOtpChannelState = function (e) {
            return e.User.getIn(["otpChannel"])
        }
    }, iiQK: function (e, t, n) {
        t = e.exports = n("FZ+f")(!1), t.push([e.i, "._1Mly1{position:fixed;width:100%;left:0;top:0;font-size:12px;z-index:1100;pointer-events:none}._3IVL9{padding:6px;text-align:center}._3IVL9.move-up-leave.move-up-leave-active{overflow:hidden;-webkit-animation:_1YzhX .3s cubic-bezier(.19,.4,.17,.85);animation:_1YzhX .3s cubic-bezier(.19,.4,.17,.85)}._1rre_{display:inline-block;padding:8px 30px;min-width:200px;text-align:center;font-size:14px;background-color:#fff;-webkit-box-shadow:0 1px 6px rgba(0,0,0,.2);box-shadow:0 1px 6px rgba(0,0,0,.2);border-radius:4px;pointer-events:all}body.reader-night-mode ._1rre_{background-color:#3d3d3d}._1rre_ .fa{margin-right:4px;position:relative;top:1px;font-size:14px}._1woG-,.NJorz{color:#3194d0;border:1px solid #3194d0}._1woG- .fa,.NJorz .fa{color:#3194d0}._2d1w2{border:1px solid #42c02e}._2d1w2,._2d1w2 .fa{color:#42c02e}._2Yunk{border:1px solid #f50}._2Yunk,._2Yunk .fa{color:#f50}._lL-I{border:1px solid #fa0}._lL-I,._lL-I .fa{color:#fa0}@-webkit-keyframes _1YzhX{0%{opacity:1;max-height:150px;padding:6px}to{opacity:0;max-height:0;padding:0}}@keyframes _1YzhX{0%{opacity:1;max-height:150px;padding:6px}to{opacity:0;max-height:0;padding:0}}", ""]), t.locals = {
            "message-wrap": "_1Mly1",
            "message-item": "_3IVL9",
            MessageMoveOut: "_1YzhX",
            "message-content": "_1rre_",
            "message-content-info": "_1woG-",
            "message-content-loading": "NJorz",
            "message-content-success": "_2d1w2",
            "message-content-error": "_2Yunk",
            "message-content-warning": "_lL-I"
        }
    }, j7PK: function (e, t) {
        e.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAMAAABEpIrGAAAAM1BMVEUAAABGZqlEYaFFYaFFYaFEYaJVbqpFYaFGY6NFYKFFYaFEYaFGYaJFYqJGY6BJY6FEYKAtYy3MAAAAEHRSTlMAEPvjgI0KXCjx26VuaD4xlUjU4QAAAGxJREFUOMvlz0sKwCAMRdHk1aj9u//VNoh0ZAx04KR3IoSDJDQnQekGaQDFCA0UMxNgxQAg5EjEJsBdh9EEgRyQdcLpPCwA0rbBFUv93gH8HQR6uzyQPBC6QJiZNH12d8n/AVgADQj6AEJTegCRiCEBOZVvEgAAAABJRU5ErkJggg=="
    }, jNsU: function (e, t, n) {
        e.exports = n.p + "static/fonts/fontawesome-webfont.fee66e7.woff"
    }, jgCU: function (e, t, n) {
        var o = n("s3e1");
        "string" == typeof o && (o = [[e.i, o, ""]]);
        var a = {hmr: !0};
        a.transform = void 0, a.insertInto = void 0;
        n("MTIv")(o, a);
        o.locals && (e.exports = o.locals)
    }, jiq3: function (e, t, n) {
        "use strict";

        function o(e) {
            return e && e.__esModule ? e : {default: e}
        }

        Object.defineProperty(t, "__esModule", {value: !0}), t.default = void 0;
        var a = n("Zx67"), r = o(a), i = n("Zrlr"), l = o(i), s = n("wxAW"), c = o(s), u = n("zwoO"), d = o(u),
            f = n("Pf15"), A = o(f), p = n("GiK3"), h = o(p), g = n("lJyq"), m = o(g), b = function (e) {
                function t() {
                    return (0, l.default)(this, t), (0, d.default)(this, (t.__proto__ || (0, r.default)(t)).apply(this, arguments))
                }

                return (0, A.default)(t, e), (0, c.default)(t, [{
                    key: "render", value: function () {
                        this.props.childern;
                        return h.default.createElement("li", {className: m.default.divider})
                    }
                }]), t
            }(p.Component);
        t.default = b
    }, jrrN: function (e, t, n) {
        t = e.exports = n("FZ+f")(!1), t.push([e.i, "._2po2r{padding:10px 20px;line-height:20px;white-space:nowrap;text-align:left;position:relative;border-bottom:1px solid #d9d9d9}body.reader-night-mode ._2po2r{border-color:#2e2e2e}._2po2r:first-child{border-radius:4px 4px 0 0}._2po2r:last-child{border-radius:0 0 4px 4px;border-bottom:0}._2po2r:hover{background-color:#666;color:#fff}body.reader-night-mode ._2po2r:hover{background-color:#2e2e2e}._2po2r ._22XWG{margin-right:5px}.cRfUr{border-bottom:1px solid #d9d9d9}body.reader-night-mode .cRfUr{border-color:#2e2e2e}", ""]), t.locals = {
            item: "_2po2r",
            icon: "_22XWG",
            "item-border": "cRfUr"
        }
    }, kWOh: function (e, t, n) {
        "use strict";

        function o(e) {
            return e && e.__esModule ? e : {default: e}
        }

        Object.defineProperty(t, "__esModule", {value: !0}), t.default = void 0;
        var a = n("bOdI"), r = o(a), i = n("Zx67"), l = o(i), s = n("Zrlr"), c = o(s), u = n("wxAW"), d = o(u),
            f = n("zwoO"), A = o(f), p = n("Pf15"), h = o(p), g = n("GiK3"), m = o(g), b = n("cl+9"), v = o(b),
            E = n("HW6M"), _ = o(E), C = n("oFuF"), N = n("0Ze7"), T = o(N), w = 200, y = 200, I = function (e) {
                function t(e) {
                    (0, c.default)(this, t);
                    var n = (0, A.default)(this, (t.__proto__ || (0, l.default)(t)).call(this, e));
                    return n.setTheQrcodeData = function (e) {
                        var t = e.link, o = void 0 === t ? "" : t, a = e.w, r = e.h;
                        if (window.QRCode) {
                            if (n.bigQrcode) return n.bigQrcode.clear(), void n.bigQrcode.makeCode(o);
                            n.bigQrcode = new QRCode(document.getElementById("big-qrcode"), {
                                text: o,
                                width: a || w,
                                height: r || y,
                                colorDark: "#000000",
                                colorLight: "#ffffff",
                                correctLevel: QRCode.CorrectLevel.H
                            })
                        }
                    }, n.onQrcodeModalBodyClick = function (e) {
                        (0, C.stopEvent)(e)
                    }, n.onQrcodeModalCancelClick = function (e) {
                        (0, n.props.onModalCancel)(e)
                    }, n.state = {}, n
                }

                return (0, h.default)(t, e), (0, d.default)(t, [{
                    key: "componentDidMount", value: function () {
                        var e = this.props.link;
                        this.setTheQrcodeData({link: e})
                    }
                }, {
                    key: "componentWillReceiveProps", value: function (e) {
                        e.visible !== this.props.visible && this.setTheQrcodeData({link: e.link})
                    }
                }, {
                    key: "render", value: function () {
                        var e = this.props.visible,
                            t = (0, _.default)(T.default["qrcode-modal"], (0, r.default)({}, T.default.hidden, !e));
                        return m.default.createElement("div", {
                            className: t,
                            onClick: this.onQrcodeModalCancelClick
                        }, m.default.createElement("div", {
                            className: T.default["qr-modal-body"],
                            onClick: this.onQrcodeModalBodyClick
                        }, m.default.createElement("span", {
                            className: T.default["close-btn"],
                            onClick: this.onQrcodeModalCancelClick
                        }, "×"), m.default.createElement("div", {className: T.default["qr-modal--title"]}, v.default.get("share.wechat-des")), m.default.createElement("div", {id: "big-qrcode"})))
                    }
                }]), t
            }(g.Component);
        t.default = I
    }, kvZP: function (e, t, n) {
        "use strict";

        function o(e, t) {
            return t ? "/notebooks/" + e + "/notes/" + t : e ? "/notebooks/" + e : "/"
        }

        function a(e, t) {
            return "/notebooks/" + e + "/notes/" + t + "/writing"
        }

        function r(e) {
            return e ? "/recycle/" + e : "/recycle"
        }

        function i(e, t) {
            return "/notebooks/" + e + "/notes/" + t + "/history"
        }

        function l(e, t) {
            return "/notebooks/" + e + "/notes/" + t + "/pnsetting"
        }

        function s(e) {
            return window.location.origin + "/download/" + e
        }

        function c() {
            return window.location.origin + "/collections/new"
        }

        Object.defineProperty(t, "__esModule", {value: !0}), t.getNormalPageUrl = o, t.getWritingPageUrl = a, t.getRecyclePageUrl = r, t.getHistoryPageUrl = i, t.getPNSettingPageUrl = l, t.getNoteSharedUrl = s, t.getNewCollectionPageUrl = c
    }, l0FP: function (e, t, n) {
        t = e.exports = n("FZ+f")(!1), t.push([e.i, "body._2_Wea,body._2_Wea button,body._2_Wea input,body._2_Wea select,body._2_Wea textarea{font-family:-apple-system,SF UI Text,Arial,PingFang SC,Hiragino Sans GB,Microsoft YaHei,WenQuanYi Micro Hei,sans-serif}body._3fOHI,body._3fOHI button,body._3fOHI input,body._3fOHI select,body._3fOHI textarea{font-family:Georgia,Times New Roman,Times,Songti SC,serif}", ""]), t.locals = {
            "reader-black-font": "_2_Wea",
            "reader-song-font": "_3fOHI"
        }
    }, l8jW: function (e, t, n) {
        "use strict";

        function o(e) {
            return e && e.__esModule ? e : {default: e}
        }

        Object.defineProperty(t, "__esModule", {value: !0}), t.ShareMenu = t.SubMenu = t.Divider = t.MenuItem = t.Item = void 0;
        var a = n("eTMa"), r = o(a), i = n("FrNA"), l = o(i), s = n("E6IZ"), c = o(s), u = n("Jl+A"), d = o(u),
            f = n("jiq3"), A = o(f);
        t.Item = d.default, t.MenuItem = d.default, t.Divider = A.default, t.SubMenu = l.default, t.ShareMenu = c.default, t.default = r.default
    }, lGVK: function (e, t, n) {
        var o = n("DYhM");
        "string" == typeof o && (o = [[e.i, o, ""]]);
        var a = {hmr: !0};
        a.transform = void 0, a.insertInto = void 0;
        n("MTIv")(o, a);
        o.locals && (e.exports = o.locals)
    }, lIYd: function (e, t, n) {
        "use strict";
        e.exports = {
            global: {
                "note-loading": "文章加载中",
                "content-loading": "内容加载中",
                quit: "按 Esc 退出",
                timeout: "请求超时",
                commit: "提交",
                cancel: "取消",
                setting: "设置",
                "to-home": "返回首页",
                download: "下载简书App",
                "forbidden-desc": "很抱歉，网页版写文章功能暂不支持手机/平板电脑，你可以在简书 App 中使用"
            },
            "not-found": {title: "您要找的页面不见了", desc: "因为您的链接地址有误，链接地址为", "to-home": "返回「简书」首页"},
            "note-action": {
                //publicize: "直接发布",
                publicize: "导出",
                publicized: "已发布",
                "compile-paid-note": "发布更新和设置",
                "publicize-paid-note": "发布为付费文章",
                "set-publicize-style": "设置发布样式",
                share: "分享文章",
                "move-note": "移动文章",
                "open-in-new-window": "在新窗口打开",
                "private-note": "设为私密",
                "to-history": "历史版本",
                "del-note": "删除文章"
            },
            settings: {
                "change-read-mode": "阅读模式已切换成功",
                "change-locale": "显示语言已切换成功",
                "change-font": "显示字体已切换成功",
                "change-editor": "默认编辑器已切换成功",
                display: "设置显示模式",
                "open-night-mode": "打开夜间模式",
                "close-night-mode": "关闭夜间模式",
                "change-to-song": "切换至宋体",
                "change-to-black": "切换至黑体",
                "change-to-simple": "切换至简体",
                "change-to-traditional": "切换至繁体",
                editor: "默认编辑器",
                "md-editor": "MarkDown编辑器",
                "rich-editor": "富文本编辑器",
                recycle: "回收站",
                feedback: "帮助与反馈",
                "need-help": "遇到问题",
                "common-issue": "常见问题"
            },
            notebooks: {
                "to-homepage": "文集列表",
                "new-notebook": "新建文集",
                "new-notebook-ing": "新建文集中...",
                "rename-notebook-tip": "请输入新文集名",
                "new-notebook-empty": "文集名不能为空",
                "del-notebook-tip": "确认删除文集《{name}》，文章将被移动到回收站。"
            },
            notes: {
                audio: "音频",
                "new-note": "新建文章",
                "new-note-ing": "新建文章中...",
                "new-note-bottom": "在下方新建文章",
                "default-note-title": "无标题文章",
                "word-num": "字数:",
                "save-word": "{wordNum} 字",
                "move-note-success": "文章已移动至新文集",
                "del-note-confirm-tip": "确认删除文章《{title}》，文章将被移动到回收站，您可以在那里恢复它。60天后将被彻底删除。"
            },
            "pay-note": {
                "i-agree": "我同意",
                "agree-title": "付费文章协议",
                cancelbtn: "不同意",
                okbtn: "同意",
                "step-title": "付费文章设置",
                "step-one": "设置试读范围",
                "step-one-des": "请你在右侧选择免费可读的部分",
                "step-two": "输入定价",
                yuan: "元",
                "step-three": "设置音频",
                "pay-for-audio": "购买文章后才能播放",
                "free-for-audio": "免费播放",
                "confirming-btn": "发布中...",
                "confirm-btn": "确认并发布",
                "cancel-btn": "取消",
                "wrong-price": "请输入正确的金额({minnum}-{maxnum}元)",
                "price-tip": "请你合理设置定价，官方建议合理的单篇文章的定价为2-10元。文章定价不能低于1元，且不能大于99元。",
                "mask-item-des": "该分割线以上免费可读"
            },
            "publish-setting": {
                "set-cover-img": "设置封面图，优化文章的显示效果",
                "set-note": "未设置则自动按默认样式显示",
                "choose-img-count": "选择图片数量",
                "one-img": "一图",
                "three-img": "三图（无摘要）",
                "upload-cover-img": "上传封面图",
                "click-to-upload": "点击上传",
                "upload-note1": "尺寸大于 360×360，格式 png/jpg",
                "upload-note2": "单张图片大于 440×320，格式 png/jpg",
                change: "更换",
                "input-abstract": "输入摘要",
                "input-placeholder": "选填，30字内，如不填写会默认抓取首段内容",
                "confirm-btn": "保存",
                "confirming-btn": "保存中...",
                "cancel-btn": "取消",
                preview: "效果预览",
                "preview-note": "仅供参考，具体效果会根据不同手机型号而变化",
                save: "保存",
                saving: "保存中...",
                confirmed: "发布样式已更新"
            },
            share: {
                "trailing-jianshushe": "- 简书社",
                "to-weibo": "微博",
                "to-qzone": "QQ空间",
                "to-douban": "豆瓣",
                "to-wechat": "微信",
                "to-facebook": "Facebook",
                "to-twitter": "Twitter",
                "to-googleplus": "Google+",
                "copy-link": "复制链接",
                "wechat-des": "打开微信“扫一扫”，打开网页后点击屏幕右上角分享按钮",
                more: "更多分享"
            },
            error: {
                "content-not-enough": "内容少于{num}段，不能发表为付费文章",
                "save-again-soft": "上一篇文章有内容未保存成功，需要手动保存",
                "save-again": "有内容未保存成功，确定要离开？",
                "data-empty": "暂无数据",
                "try-again": "操作失败，请再试一次",
                "content-no-empty": "内容不能为空",
                "link-no-empty": "链接不能为空",
                "text-no-empty": "文本不能为空",
                "file-not-exit": "文件不存在",
                "file-type-error": "图片格式错误，请使用jpg/jpeg/png/gif文件",
                "file-size-over": "文件大小超过{size}M",
                "need-bind-phone": "需要绑定手机号后才能发布文章哟~",
                "uploading-img": "正在上传图片，请稍等...",
                "video-max-over": "视频不能超过{num}个",
                "fail-refresh": "操作失败，可以刷新页面尝试",
                "upload-fail": "有图片未上传成功，请删除或重新上传图片。如需帮助，请",
                click: "点击",
                "no-nb": "文集不存在"
            },
            tooltip: {
                bold: "粗体",
                italic: "斜体",
                strikethrough: "删除线",
                quote: "引用",
                picture: "插入图片",
                h1: "标题1",
                h2: "标题2",
                h3: "标题3",
                h4: "标题4",
                hr: "分割线",
                link: "插入链接",
                video: "插入视频",
                audio: "插入音频",
                audioExist: "已有音频",
                undo: "撤销",
                redo: "重做",
                history: "历史版本",
                save: "保存",
                expand: "全屏",
                compress: "退出全屏",
                preview: "切换到预览模式",
                "to-normal-mode": "返回"
            },
            pubbtn: {
                //publishing: "发布中...",
				publishing: "导出中...",
                saving: "保存中...",
                saved: "已保存",
                "save-fail": "保存失败,请手动保存",
                publicize: "导出文章",
                publicized: "已发布",
                "cancel-publish": "取消发布",
                //"publish-update": "发布更新",
				"publish-update": "导出更新",
                "compile-paid-note": "发布更新和设置",
                "publicize-paid-note": "发布为付费文章",
                "audio-transcoding": "音频转码中，请稍后发布"
            },
            modal: {
                insertimg: "插入图片",
                insertlink: "插入链接",
                insertvideo: "插入视频",
                removeLink: "删除链接",
                confirm: "确认",
                cancel: "取消",
                urldes: "链接地址",
                "getting-linkinfo": "正在获取链接标题...",
                "getting-linkinfo-fail": "无法获取链接标题,请手动输入链接文本",
                linktxtdes: "链接文本",
                insertimgdes: "点击上传（可多张）",
                imgpolicy: "图片私密性",
                chooseurlimg: "或选择网络图片",
                imglinkdes: "请输入网络图片链接",
                choosesysimg: "或上传本地图片",
                "only-support": "目前只支持",
                tc: "腾讯",
                yk: "优酷",
                video: "视频",
                "video-url-des": "请输入视频地址",
                "wrong-video-source": "暂不支持此视频地址",
                "video-loading": "正在加载视频，请稍等...",
                "fetch-video-info-failed": "抱歉，您输入的地址无法识别！",
                "insert-audio": "插入音频",
                "upload-audio": "点击上传",
                "audio-support": "支持 {format} 格式，大小不超过 {size} M",
                "audio-cancle": "取消上传",
                "audio-upload-unfinished": "音频上传尚未完成",
                "reupload-audio": "重新上传",
                retry: "重试",
                "audio-upload-failed": "上传失败",
                "audio-uploading-failed": "音频未上传成功",
                "audio-upload-complete": "上传完成",
                "audio-upload-error": "网络异常，请稍后再试",
                "audio-name": "音频名称",
                "audio-author": "音频作者",
                "insert-audio-name": "输入音频名称",
                "insert-audio-author": "输入音频的创作者",
                "delete-audio": "删除音频",
                "audio-confirm": " 确定",
                "audio-overlarge": "文件大小超过限制！",
                "audio-delete": "确认删除音频吗？",
                "no-name": "佚名",
                "close-audio-warning": "确认关闭吗？",
                "close-audio-warning2": "关闭后，当前的更改或上传将丢失",
                "audio-transcoding": "音频正在转码，请稍候",
                "audio-edit": "编辑"
            },
            history: {
                "auto-save": "自动保存",
                publicize: "导出文章",
                //update: "发布更新",
				update: "导出更新",
                recovery: "版本恢复",
                web: "简书网站",
                ios: "简书 iPhone App",
                android: "简书 Android App",
                "ios-night": "简书 iPhone App 黑夜版",
                timeago: "刚刚_秒以前_分钟以前_小时以前_天以前_周以前_月以前_年以前",
                "total-items": "共{num}条历史版本",
                filter: "筛选",
                "recovery-to": "恢复到这个版本"
            },
            trash: {
                trash: "回收站({num})",
                recovery: "恢复文章",
                recovering: "恢复文章中...",
                delete: "彻底删除",
                deleting: "彻底删除中...",
                "del-time": "将于{time}清除",
                "del-time2": "{time}天后清除"
            },
            verifymodal: {
                "sending-captcha": "{num}秒后重新发送",
                "resend-captcha": "重新发送验证码",
                "send-captcha": "发送验证码",
                "empty-captcha": "验证码为空",
                "verify-captcha-error": "验证码错误，请重试",
                "send-captcha-error": "验证码发送失败，可刷新页面重试",
                loading: "正在加载验证信息...",
                confirm: "确认",
                confirming: "确认中...",
                captcha: "验证码",
                title: "安全验证",
                "email-prefix": "用邮箱",
                "sms-prefix": "用手机",
                verify: "验证",
                "by-email": "用邮箱验证",
                "by-phone": "用手机短信验证",
                des: "为了保证你的账号安全，请先验证身份，验证成功后进行下一步操作，验证码{minute}分钟内有效"
            },
            app: {name: "writer"},
            phoneModal: {
                all: "全部",
                clickbind: "点击绑定",
                bindtitle: "绑定手机号和微信",
                bindwx: "綁定微信",
                bindwxtip: "请使用微信扫描二维码进行绑定",
                nobind: "未绑定",
                bindwxphone: "绑定手机号和微信",
                bindtip: "根据国家相关法律法规要求，发布公开文章需要同时绑定手机号和微信",
                tip: "绑定遇到问题",
                href: "点击查看帮助",
                "hot-countries": "热门国家和地区",
                "captcha-regex-error": "验证码格式不对，请重新输入",
                captcha: "短信验证码",
                title: "绑定手机",
                "phone-num": "手机号",
                "phone-error": "输入的手机号码有误，请重新输入",
                "get-otp-info-error": "获取国家区号失败, 请刷新页面重试"
            },
            publishSuccessModal: {
                "post-des": "向专题投稿，让文章被更多人发现",
                //"success-des": "发布成功，点击查看文章",
				"success-des": "导出成功，点击下载",
                "search-collection": "搜索专题",
                "new-collection": "新建",
                "my-collections": "我管理的专题",
                "lastest-collections": "最近投稿",
                "recomend-collections": "推荐专题",
                "include-note": "收录",
                "including-note": "收录中",
                "included-note": "已收录",
                "post-note": "投稿",
                "posting-note": "投稿中",
                "posted-note": "等待审核",
                "copy-success": "已复制到剪贴板中",
                "get-more-data": "点击加载更多",
                "no-more-data": "没有更多了",
                "copy-fail": "此浏览器不支持，复制失败，建议用Chrome"
            },
            collections: {"note-num": "{num}篇文章", "suber-num": "{num}人关注"},
            "upload-img": {
                "upload-success": "上传成功",
                "upload-fail": "上传失败",
                "upload-size-error": "上传图片尺寸错误",
                "upload-net-error": "网络错误，请重试"
            }
        }
    }, lJyq: function (e, t, n) {
        var o = n("63ug");
        "string" == typeof o && (o = [[e.i, o, ""]]);
        var a = {hmr: !0};
        a.transform = void 0, a.insertInto = void 0;
        n("MTIv")(o, a);
        o.locals && (e.exports = o.locals)
    }, lTDY: function (e, t, n) {
        "use strict";

        function o(e) {
            for (var t = arguments.length, n = Array(t > 1 ? t - 1 : 0), o = 1; o < t; o++) n[o - 1] = arguments[o];
            return function () {
                for (var t = arguments.length, o = Array(t), a = 0; a < t; a++) o[a] = arguments[a];
                var r = {type: e};
                return o.forEach(function (e, t) {
                    void 0 !== e && (r[n[t]] = e)
                }), r
            }
        }

        Object.defineProperty(t, "__esModule", {value: !0}), t.default = o
    }, lVK7: function (e, t, n) {
        "use strict";

        function o(e) {
            return e && e.__esModule ? e : {default: e}
        }

        n("4M2W"), n("d5DL");
        var a = n("GiK3"), r = o(a), i = n("O27J"), l = o(i), s = n("RH2O");
        n("tVgH"), n("+qiL"), n("lGVK");
        var c = n("pnOm"), u = o(c), d = n("geoC"), f = o(d), A = n("Ohkn"), p = o(A);
        window.JsSensor = new p.default({debug: !1});
        var h = function (e) {
            l.default.render(r.default.createElement(s.Provider, {store: f.default}, r.default.createElement(e, null)), document.getElementById("root"))
        };
        h(u.default), window.__REACT__ = r.default, window.console && "function" == typeof window.console.log && (console.log("Release:: release-20180822070611"), console.log("Environment:: production"), console.log("Version:: v1.0.5"))
    }, m3yF: function (e, t, n) {
        "use strict";

        function o() {
            var e = window, t = e.navigator.userAgent;
            return u.test(t)
        }

        function a() {
            var e = window, t = e.navigator.userAgent;
            return d.test(t)
        }

        function r() {
            var e = window, t = e.navigator.userAgent;
            return f.test(t) && !a()
        }

        function i() {
            var e = window, t = e.navigator.userAgent;
            return A.test(t)
        }

        function l() {
            var e = window, t = e.navigator.userAgent;
            return p.test(t)
        }

        function s() {
            var e = window, t = e.navigator.userAgent;
            return h.test(t)
        }

        function c() {
            return !(i() || l() || s())
        }

        Object.defineProperty(t, "__esModule", {value: !0}), t.isFirefox = o, t.isChrome = a, t.isSafari = r, t.isAndroid = i, t.isiPhone = l, t.isiPad = s, t.isPC = c;
        var u = /firefox/i, d = /chrome/i, f = /safari/i, A = /android/i, p = /iPhone/i, h = /iPad/i
    }, mIQu: function (e, t, n) {
        t = e.exports = n("FZ+f")(!1), t.push([e.i, '.math-block,.math-inline{max-width:100%}.math-block[mathimg="1"]{display:block;margin:1em auto}.math-inline[mathimg="1"]{display:inline;margin:0 3px;vertical-align:middle}body.reader-night-mode .math-block,body.reader-night-mode .math-inline{-webkit-filter:invert(.8);filter:invert(.8)}', ""])
    }, mXnL: function (e, t, n) {
        "use strict";

        function o(e) {
            return e && e.__esModule ? e : {default: e}
        }

        Object.defineProperty(t, "__esModule", {value: !0}), t.getTrashNotesState = t.getTrashNotesListState = void 0, t.default = function () {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : l.default.fromJS(c),
                t = arguments[1];
            switch (t.type) {
                case s.Trash.GET_TRASH_NOTES_LIST:
                    t.noteId;
                    return e = e.setIn(["list", "status"], s.Trash.GET_TRASH_NOTES_LIST);
                case s.Trash.GET_TRASH_NOTES_LIST_SUCCESS:
                    var n = t.data;
                    if (n) {
                        n.sort(function (e, t) {
                            return e.deleted_at - t.deleted_at
                        });
                        var o = (0, r.default)(n), a = o.entities, i = o.seq;
                        e = e.setIn(["list", "entities"], l.default.fromJS(a)), e = e.setIn(["list", "seq"], l.default.fromJS(i))
                    }
                    return e = e.setIn(["list", "status"], s.Trash.GET_TRASH_NOTES_LIST_SUCCESS);
                case s.Trash.GET_TRASH_NOTES_LIST_FAIL:
                    return e = e.setIn(["list", "status"], s.Trash.GET_TRASH_NOTES_LIST_FAIL);
                case s.Trash.GET_TRASH_NOTE_CONTENT:
                    var u = t.noteId;
                    return e = e.setIn(["notes", u.toString(), "status"], s.Trash.GET_TRASH_NOTE_CONTENT);
                case s.Trash.GET_TRASH_NOTE_CONTENT_SUCCESS:
                    var d = t.noteId, f = t.data;
                    return f && (e = e.setIn(["notes", d.toString()], l.default.fromJS(f))), e = e.setIn(["notes", d.toString(), "status"], s.Trash.GET_TRASH_NOTE_CONTENT_SUCCESS);
                case s.Trash.GET_TRASH_NOTE_CONTENT_FAIL:
                    var A = t.noteId;
                    return e = e.setIn(["notes", A.toString(), "status"], s.Trash.GET_TRASH_NOTE_CONTENT_FAIL);
                case s.Trash.DEL_TRASH_NOTE:
                    var p = t.noteId;
                    return e = e.setIn(["notes", p.toString(), "status"], s.Trash.DEL_TRASH_NOTE);
                case s.Trash.DEL_TRASH_NOTE_SUCCESS:
                    var h = t.noteId;
                    t.data;
                    e = e.deleteIn(["notes", h.toString()]), e = e.deleteIn(["list", "entities", h.toString()]);
                    var g = e.getIn(["list", "seq"]).indexOf(+h);
                    return e = e.deleteIn(["list", "seq", g]);
                case s.Trash.DEL_TRASH_NOTE_FAIL:
                    var m = t.noteId;
                    return e = e.setIn(["notes", m.toString(), "status"], s.Trash.DEL_TRASH_NOTE_FAIL);
                case s.Trash.RECOVERY_TRASH_NOTE:
                    var b = t.noteId;
                    return e = e.setIn(["notes", b.toString(), "status"], s.Trash.RECOVERY_TRASH_NOTE);
                case s.Trash.RECOVERY_TRASH_NOTE_SUCCESS:
                    var v = t.noteId;
                    t.data;
                    e = e.deleteIn(["notes", v.toString()]);
                    var E = e.getIn(["list", "seq"]).indexOf(+v);
                    return e = e.deleteIn(["list", "seq", E]), e = e.deleteIn(["list", "entities", v.toString()]);
                case s.Trash.RECOVERY_TRASH_NOTE_FAIL:
                    var _ = t.noteId;
                    return e = e.setIn(["notes", _.toString(), "status"], s.Trash.RECOVERY_TRASH_NOTE_FAIL);
                case s.Notes.DEL_NOTE_SOFT_SUCCESS:
                    var C = t.data, N = t.noteId, T = (t.nbId, e.getIn(["list", "seq"]));
                    return T && (e = e.setIn(["list", "entities", N], l.default.fromJS(C)), e = e.setIn(["list", "seq"], T.push(+N))), e;
                default:
                    return e
            }
        };
        var a = n("w0tY"), r = o(a), i = n("BYKG"), l = o(i), s = n("4HHy"),
            c = {list: {status: s.Trash.TRASH_NOTES_LIST_INIT}, notes: {}};
        t.getTrashNotesListState = function (e) {
            return e.TrashNotes.get("list")
        }, t.getTrashNotesState = function (e) {
            return e.TrashNotes.get("notes")
        }
    }, mwPL: function (e, t) {
        e.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAMAAABEpIrGAAAAk1BMVEUAAAAAvCkAvCkAvCkAvCkAvCkAvCoA1UMAvCkAvCkAvCoAvCoAvCkAvy0Avy0AvCkAvCkAvCoAuyoAvCkAvCkAvCkAvCkAvSoAvCsAvSsAviwAwC0AwS8AvCoAvCoAvCoAvSoAvSwAv0AAvCoAvCkAuykAvCkAvCkAvCkAvSkAuykAvSsAxDAAxDEA/4AAvCkAuyl1qxS+AAAAMHRSTlMA9vvz5cSFB76ki3VoKSL47NzX0ZqAbmFLQDAcEe9dWU5FBN3azci4oJSPOBcNAq56ALHKAAABKUlEQVQ4y72S2ZKCQAxFwya7IsiObDruOvz/1w1XFpuGqnmZmvPQqc69IZ0K9G+okXGSHcnTg2xRNuVmQLisZ7rtNSyCxen3fcOxmuipg9x2g3OIAWvQkLHIljplvUcX5h1xAx5ECmLaF1w+hl3XtY5FREONBURJHQ3HrjfkPh70IA+fo0HiJlByS5PbV7i3ZMkg+v5mvGgpDF8TQ35ib07ZGgw248POIFZENtt/9Z6oxGbcEvPJT8w5UkioIoLPogwpkyhzB30Tdn2qbXt68e39USzj0BtkVHI41JJp/aKMuUEgoPcXc25woauSeE3C3VmJ5oYrDJE+bPfM66KN9Gdza/7nMomjEia6/iKe5MjoBi1Qh14/Exos84gKq7BfybdCv3Cv6Q/4AVCIWcoDQwrRAAAAAElFTkSuQmCC"
    }, mzOA: function (e, t, n) {
        "use strict";

        function o(e) {
            return e && e.__esModule ? e : {default: e}
        }

        function a(e) {
            if (_) return void e(_);
            b.default.createInstance({containerClass: T, containerStyle: w, getContainer: x}, function (t) {
                if (_) return void e(_);
                _ = t, E.push(t), e(_)
            })
        }

        function r() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
                t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, n = t.itemClass,
                o = void 0 === n ? y : n, r = t.itemStyle, i = void 0 === r ? I : r, l = t.duration,
                s = void 0 === l ? k : l, c = t.onClose, u = void 0 === c ? function () {
                } : c, d = arguments[2], f = v++, A = null;
            return a(function (t) {
                A = t, t.add({key: f, content: e, type: d, duration: s, onClose: u, itemClass: o, itemStyle: i})
            }), function () {
                A && A.remove(f)
            }
        }

        Object.defineProperty(t, "__esModule", {value: !0});
        var i = n("woOf"), l = o(i), s = n("J009"), c = o(s), u = n("gGqR"), d = o(u), f = n("JDN0"), A = o(f),
            p = n("yCNF"), h = o(p), g = n("GiK3"), m = (o(g), n("hGJ7")), b = o(m), v = 1, E = [], _ = null,
            C = {left: 0, top: 6}, N = {}, T = "", w = (0, l.default)({}, C), y = "", I = (0, l.default)({}, N),
            x = null, k = 2e3, S = {
                info: function (e, t) {
                    return r(e, t, "info")
                }, success: function (e, t) {
                    return r(e, t, "success")
                }, error: function (e, t) {
                    return r(e, t, "error")
                }, warning: function (e, t) {
                    return r(e, t, "warning")
                }, loading: function (e, t) {
                    return r(e, t, "loading")
                }, resetOptions: function () {
                    w = (0, l.default)({}, C), I = (0, l.default)({}, N), T = "", y = "", x = null, k = 2e3
                }, setOptions: function (e) {
                    var t = e.containerStyle, n = e.containerClass, o = e.getContainer, a = e.itemStyle, r = e.itemClass,
                        i = e.duration, s = !1;
                    (0, h.default)(t) && (w = (0, l.default)({}, t), s = !0), (0, A.default)(n) && (T = n, s = !0), (0, d.default)(o) && (x = o, s = !0), (0, h.default)(a) && (I = (0, l.default)({}, a)), (0, A.default)(r) && (y = r), (0, c.default)(i) && (k = i), s && (_ = null)
                }, destroy: function () {
                    E.forEach(function (e) {
                        e.destroy(), e = null
                    }), E = [], _ && (S.resetOptions(), _ = null)
                }
            };
        t.default = S
    }, n2R4: function (e, t, n) {
        var o = n("5Ara");
        "string" == typeof o && (o = [[e.i, o, ""]]);
        var a = {hmr: !0};
        a.transform = void 0, a.insertInto = void 0;
        n("MTIv")(o, a);
        o.locals && (e.exports = o.locals)
    }, npO6: function (e, t, n) {
        "use strict";

        function o(e) {
            return e && e.__esModule ? e : {default: e}
        }

        Object.defineProperty(t, "__esModule", {value: !0}), t.default = void 0;
        var a, r, i = n("Zx67"), l = o(i), s = n("Zrlr"), c = o(s), u = n("wxAW"), d = o(u), f = n("zwoO"), A = o(f),
            p = n("Pf15"), h = o(p), g = n("GiK3"), m = (o(g), n("KSGD")), b = o(m), v = n("O27J"),
            E = (r = a = function (e) {
                function t() {
                    return (0, c.default)(this, t), (0, A.default)(this, (t.__proto__ || (0, l.default)(t)).apply(this, arguments))
                }

                return (0, h.default)(t, e), (0, d.default)(t, [{
                    key: "componentDidMount", value: function () {
                        this.createContainer()
                    }
                }, {
                    key: "componentWillUnmount", value: function () {
                        this.removeContainer()
                    }
                }, {
                    key: "createContainer", value: function () {
                        this.container = this.props.getContainer(), this.forceUpdate()
                    }
                }, {
                    key: "removeContainer", value: function () {
                        this.container && this.container.parentNode.removeChild(this.container)
                    }
                }, {
                    key: "render", value: function () {
                        return this.container ? (0, v.createPortal)(this.props.children, this.container) : null
                    }
                }]), t
            }(g.Component), a.propTypes = {
                getContainer: b.default.func.isRequired,
                children: b.default.node.isRequired
            }, r);
        t.default = E
    }, oFuF: function (e, t, n) {
        "use strict";

        function o(e) {
            return e && e.__esModule ? e : {default: e}
        }

        function a() {
            var e = document, t = e.documentElement, n = e.body;
            return [window.innerWidth || t.clientWidth || n.clientWidth, window.innerHeight || t.clientHeight || n.clientHeight]
        }

        function r(e) {
            var t = e.notebooks, n = e.match, o = n.params.nbId, a = t.getIn(["entities", o, "notes"]);
            return a && a.size > 0
        }

        function i(e) {
            var t = e.content, n = e.match, o = n.params.noteId;
            return t.getIn(["entities", o, "content"], I.CONTENT_NOT_FOUND) !== I.CONTENT_NOT_FOUND
        }

        function l(e) {
            return {esc: e.keyCode === k.default.ESC, save: 83 === e.keyCode && (e.ctrlKey || e.metaKey)}
        }

        function s(e) {
            if (arguments.length > 1 && void 0 !== arguments[1] && arguments[1]) {
                var t = new y.default, n = t.parse(e), o = document.createElement("div");
                o.style.display = "none", o.innerHTML = n, e = o.textContent, o = null
            }
            return {abbr: e.slice(0, 61), wordNum: B(e) + L(e)}
        }

        function c(e) {
            var t = e.url, n = e.width, o = void 0 === n ? 400 : n, a = e.height, r = void 0 === a ? 400 : a,
                i = e.provider, l = e.flash, s = void 0 === l ? "" : l, c = /^http:/, u = window.location.protocol;
            t = t.replace(/http:|https:/, ""), s = s.trim().replace(c, u);
            var d = "";
            return "bilibili" === i ? (d = '<div class="video-player player">', d += '<video width="' + o + '" height="' + r + '" preload="auto" controls="true">', d += '<source src="' + t + '" type="video/mp4">', d += '<object type="application/x-shockwave-flash" data="' + u + '//static.hdslb.com/play.swf" class="flash" style="width:' + o + "px; height:" + r + 'px;">', d += '<param name="bgcolor" value="#ffffff">', d += '<param name="allowfullscreeninteractive" value="true">', d += '<param name="allowfullscreen" value="true">', d += '<param name="quality" value="high">', d += '<param name="allowscriptaccess" value="always">', d += '<param name="wmode" value="direct">', d += '<param name="flashvars" value="' + s + '">', d += "</object>", d += "</video>", d += "</div>") : d = '<iframe class="player" src="' + t + '" height="' + r + '" width="' + o + '" frameborder=0 allowfullscreen style="width:' + o + "px; height:" + r + 'px;"></iframe>', O(d)
        }

        function u(e, t) {
            return t ? "//upload.jianshu.io/videos/cover_imgs/" + e + "?imageView2/1/w/" + t + "/h/" + t : "//upload.jianshu.io/videos/cover_imgs/" + e
        }

        function d(e) {
            [].map.call(e.querySelectorAll("div.video-package"), function (e, t) {
                var n = O(e);
                if (t > I.MAX_VIDEO_COUNT) return void n.remove();
                if (!n.find(".video-cover").length) {
                    var o = Math.round(e.offsetWidth), a = Math.round(o / 6 * 5), r = n.attr("data-video-url"),
                        i = n.attr("data-provider"), l = n.attr("data-flash-url"),
                        s = c({url: r, width: o, height: a, provider: i, flash: l}), d = n.find(".video-description"),
                        f = n.attr("data-cover-uuid"),
                        A = O('<div class="video-placeholder-area">' + d.html() + "</div>"),
                        p = O('<img class="video-cover" src=' + u(f, 90) + ">");
                    A.append(p), n.prepend(A);
                    var h = O('<div class="video-close-button"><i class="fa fa-eject"></i> 收起视频</div>');
                    h.hide(), n.append(h), d.remove();
                    var g = !1;
                    A.on("click", function () {
                        g || (g = !0, A.after(s), A.hide(), n.css("margin-bottom", "50px"), h.show())
                    }), h.on("click", function () {
                        g && (g = !1, s.remove(), A.show(), n.css("margin-bottom", "auto"), h.hide())
                    })
                }
            })
        }

        function f(e, t) {
            var n = window, o = n.Raven;
            o && o.captureException(e, {extra: t})
        }

        function A() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
            return O("<div>").html(e).children().length
        }

        function p(e, t, n) {
            var o = O("<span></span>").addClass(I.PN_ITEM_MASK_CLASSNAME).data("index", e);
            return t && o.addClass("active"), n && o.addClass("no-mask"), o.append(O("<em>")), o
        }

        function h(e) {
            var t = O("<div>").html(e);
            return t.children().forEach(function (e, t) {
                var n = O(e);
                ["HR", "PAY-DIVIDE"].indexOf(n.getNodeName()) > -1 || n.append(p(t, 0 === t, t <= 0))
            }), [t.html(), 0]
        }

        function g(e, t) {
            var n = O("<div>").html(e);
            return n.find("pay-divide").forEach(function (e) {
                O(e).remove()
            }), n.contents().get(t).after(O("<pay-divide>")), n.html()
        }

        function m(e, t) {
            t || (t = window.location.href), e = e.replace(/[\[\]]/g, "\\$&");
            var n = new RegExp("[?&]" + e + "(=([^&#]*)|&|#|$)"), o = n.exec(t);
            return o ? o[2] ? decodeURIComponent(o[2].replace(/\+/g, " ")) : "" : null
        }

        function b() {
            return (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "").replace(/\n|\r\n/g, "")
        }

        Object.defineProperty(t, "__esModule", {value: !0}), t.countChinese = t.countWords = t.checkNoteIsInSeq = t.stopEvent = t.martinDispatch = t.formatNumByK = t.noop = t.isDev = void 0;
        var v = n("Dd8w"), E = o(v), _ = n("//Fk"), C = o(_);
        t.getWindowSize = a, t.checkNotes = r, t.checkContent = i, t.keyDownResult = l, t.calcAbbr = s, t.formatTheVideoPackage = d, t.captureException = f, t.getChildrenNum = A, t.formatPNHtml = h, t.cleanPNHtml = g, t.getParameterByName = m, t.cleanTheNoteHtml = b;
        var N = n("BYKG"), T = o(N), w = n("Gr4k"), y = o(w), I = n("+AJo"), x = n("r/Fa"), k = o(x), S = n("9Q5t"),
            M = o(S), O = M.default.$, F = (t.isDev = !1, t.noop = function () {
            }), D = (t.formatNumByK = function (e) {
                return e < 0 ? 0 : e < 100 ? e : (e / 1e3).toFixed(1) + "K"
            }, t.martinDispatch = function (e, t) {
                return new C.default(function () {
                    var n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : F,
                        o = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : F;
                    e((0, E.default)({}, t, {resolve: n, reject: o}))
                })
            }, t.stopEvent = function (e) {
                e.stopPropagation(), e.preventDefault()
            }, t.checkNoteIsInSeq = function (e) {
                var t = e.notebooks, n = e.match, o = n.params, a = o.nbId, r = o.noteId;
                return t.getIn(["entities", a, "notes"], T.default.fromJS([])).includes(+r)
            }, /[^\w\s;,\-.`'"{}[\]+_)）（(*&^@%$#!~\/?]/), B = t.countWords = function (e) {
                var t = e.replace(/[^\w]/g, " ").match(/\S+/g);
                return null !== t ? t.length : 0
            }, L = t.countChinese = function (e) {
                for (var t = 0, n = 0; n < e.length; n++) {
                    var o = e.charAt(n);
                    (o.match(/[\u4e00-\u9fa5]/) || D.test(o)) && t++
                }
                return t
            }
    }, "of+2": function (e, t, n) {
        e.exports = n.p + "static/fonts/fontawesome-webfont.af7ae50.woff2"
    }, pNOl: function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0}), t.default = function (e) {
            return e.displayName || e.name || "Component"
        }
    }, pnOm: function (e, t, n) {
        "use strict";

        function o(e) {
            return e && e.__esModule ? e : {default: e}
        }

        Object.defineProperty(t, "__esModule", {value: !0}), t.default = void 0;
        var a, r, i = n("Zx67"), l = o(i), s = n("Zrlr"), c = o(s), u = n("wxAW"), d = o(u), f = n("zwoO"), A = o(f),
            p = n("Pf15"), h = o(p), g = n("GiK3"), m = o(g), b = n("F8kA"), v = n("RH2O"), E = n("cl+9"), _ = o(E),
            C = n("lIYd"), N = o(C), T = n("+cSM"), w = o(T), y = n("I2I8"), I = o(y), x = n("5Q8M"), k = n("XaZM"),
            S = n("i0Fb"), M = n("boom"), O = n("vw9M"), F = o(O), D = n("4J7M"), B = o(D), L = n("4r03"), P = o(L),
            R = n("aQyQ"), G = o(R), U = n("CW2v"), j = o(U), Q = n("kWOh"), H = o(Q),
            Y = {"zh-CN": N.default, "zh-TW": w.default}, z = {font1: "song", font2: "black"},
            W = (a = (0, v.connect)(function (e) {
                var t = (0, M.getState)(e);
                return {
                    user: (0, S.getState)(e),
                    locale: t.get("locale"),
                    readMode: t.get("readMode"),
                    fontType: t.get("fontType"),
                    bindPhoneStatus: t.get("bindPhoneStatus"),
                    bindStatus: t.get("bindStatus"),
                    bindWx: t.get("bindWx"),
                    publishSuccessModalData: t.get("publishSuccessModalData"),
                    qrCodeModalData: t.get("qrCodeModal"),
                    pnAgreeModalData: t.get("pnAgreeModal")
                }
            }, function (e) {
                return {
                    getUser: function () {
                        return e((0, k.getUser)())
                    }, setBindWxStatus: function (t) {
                        return e((0, x.setBindWxStatus)(t))
                    }, setBindPhoneStatus: function (t) {
                        return e((0, x.setBindPhoneStatus)(t))
                    }, setBindStatus: function (t) {
                        return e((0, x.setBindStatus)(t))
                    }, setPublishSuccessData: function (t, n) {
                        return e((0, x.setPublishSuccessData)(t, n))
                    }, setQrCodeModalData: function (t, n) {
                        return e((0, x.setQrCodeModalData)(t, n))
                    }, setPnAgreeModalData: function (t, n) {
                        return e((0, x.setPnAgreeModalData)(t, n))
                    }
                }
            }))(r = function (e) {
                function t() {
                    var e, n, o, a;
                    (0, c.default)(this, t);
                    for (var r = arguments.length, i = Array(r), s = 0; s < r; s++) i[s] = arguments[s];
                    return n = o = (0, A.default)(this, (e = t.__proto__ || (0, l.default)(t)).call.apply(e, [this].concat(i))), o.state = {initDone: !1}, o.onWxCancelClick = function () {
                        o.props.setBindWxStatus({status: !1})
                    }, o.onModalCancelClick = function () {
                        o.props.setBindStatus({status: !1})
                    }, o.onPhoneModalConfirmBtnClick = function () {
                        arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                        o.onPhoneModalCancelClick()
                    }, o.onPhoneModalCancelClick = function () {
                        o.props.setBindPhoneStatus(!0)
                    }, o.onQrcodeModalCancelClick = function () {
                        o.props.setQrCodeModalData(!1)
                    }, o.onPNAgreeModalConcelBtnClick = function () {
                        o.props.setPnAgreeModalData(!1, {})
                    }, a = n, (0, A.default)(o, a)
                }

                return (0, h.default)(t, e), (0, d.default)(t, [{
                    key: "componentWillMount", value: function () {
                        this.props.getUser()
                    }
                }, {
                    key: "componentDidMount", value: function () {
                        this.loadLocales(), this.setBodyClass()
                    }
                }, {
                    key: "componentDidUpdate", value: function (e) {
                        var t = this.props, n = t.readMode, o = t.fontType;
                        n === e.readMode && o === e.fontType || this.setBodyClass()
                    }
                }, {
                    key: "componentDidCatch", value: function (e, t) {
                        window.Raven && window.Raven.captureException(e, {extra: t})
                    }
                }, {
                    key: "loadLocales", value: function () {
                        var e = this;
                        _.default.init({currentLocale: this.props.locale, locales: Y}).then(function () {
                            e.setState({initDone: !0})
                        })
                    }
                }, {
                    key: "setBodyClass", value: function () {
                        var e = this.props, t = e.readMode, n = e.fontType, o = z[n];
                        document.body.className = "reader-" + t + "-mode " + I.default["reader-" + o + "-font"]
                    }
                }, {
                    key: "render", value: function () {
                        var e = !this.props.bindPhoneStatus, t = !this.props.bindStatus,
                            n = (this.props.bindWx, this.props.publishSuccessModalData.toJS()),
                            o = this.props.qrCodeModalData.toJS(), a = this.props.pnAgreeModalData.toJS();
                        return this.state.initDone ? m.default.createElement(g.Fragment, null, m.default.createElement(b.HashRouter, null, m.default.createElement(F.default, null)), m.default.createElement(g.Fragment, null, e && m.default.createElement(P.default, {
                            visible: e,
                            onModalCancelClick: this.onPhoneModalCancelClick,
                            onModalConfirmBtnClick: this.onPhoneModalConfirmBtnClick
                        }), t && m.default.createElement(j.default, {
                            visible: t,
                            onModalCancelClick: this.onModalCancelClick,
                            onModalConfirmBtnClick: this.onModalCancelClick
                        }), n.show && m.default.createElement(G.default, {data: n.data}), o.show && m.default.createElement(H.default, {
                            visible: o.show,
                            link: o.data.link,
                            onModalCancel: this.onQrcodeModalCancelClick
                        }), m.default.createElement(B.default, {
                            visible: a.show,
                            onModalCancelBtnClick: this.onPNAgreeModalConcelBtnClick
                        }))) : null
                    }
                }]), t
            }(g.Component)) || r;
        t.default = W
    }, qiO7: function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0}), t.getNoteHistoryContentsState = t.getNoteHistoryState = void 0, t.default = function () {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : a.default.fromJS(i),
                t = arguments[1];
            switch (t.type) {
                case r.NoteHistory.NOTE_HISTORY_INIT:
                    return e = e.setIn(["status"], r.NoteHistory.NOTE_HISTORY_INIT), e = e.setIn(["list"], a.default.fromJS([])), e = e.setIn(["contents", "status"], r.NoteHistory.NOTE_HISTORY_CONTENT_INIT), e = e.setIn(["contents", "entities"], a.default.fromJS({})), e = e.setIn(["restore", "status"], r.NoteHistory.NOTE_HISTORY_RESTORE_INIT);
                case r.NoteHistory.GET_NOTE_HISTORY_LIST:
                    t.noteId;
                    return e = e.setIn(["status"], r.NoteHistory.GET_NOTE_HISTORY_LIST);
                case r.NoteHistory.GET_NOTE_HISTORY_LIST_SUCCESS:
                    var n = t.data;
                    return window.itemdatas = n, e = e.setIn(["list"], a.default.fromJS(n.sort(function (e, t) {
                        return t.updated_at - e.updated_at
                    }))), e = e.setIn(["status"], r.NoteHistory.GET_NOTE_HISTORY_LIST_SUCCESS);
                case r.NoteHistory.GET_NOTE_HISTORY_LIST_FAIL:
                    return e = e.setIn(["status"], r.NoteHistory.GET_NOTE_HISTORY_LIST_FAIL);
                case r.NoteHistory.GET_NOTE_HISTORY_CONTENT:
                    t.noteId;
                    return e = e.setIn(["contents", "status"], r.NoteHistory.GET_NOTE_HISTORY_CONTENT);
                case r.NoteHistory.GET_NOTE_HISTORY_CONTENT_SUCCESS:
                    var o = t.data, l = t.historyId;
                    return e = e.setIn(["contents", "entities", l.toString()], a.default.fromJS(o)), e = e.setIn(["contents", "status"], r.NoteHistory.GET_NOTE_HISTORY_CONTENT_SUCCESS);
                case r.NoteHistory.GET_NOTE_HISTORY_CONTENT_FAIL:
                    return e = e.setIn(["contents", "status"], r.NoteHistory.GET_NOTE_HISTORY_CONTENT_FAIL);
                case r.NoteHistory.RESTORE_NOTE_HISTORY_CONTENT:
                    return e = e.setIn(["restore", "status"], r.NoteHistory.RESTORE_NOTE_HISTORY_CONTENT);
                case r.NoteHistory.RESTORE_NOTE_HISTORY_CONTENT_SUCCESS:
                    return e = e.setIn(["restore", "status"], r.NoteHistory.RESTORE_NOTE_HISTORY_CONTENT_SUCCESS);
                case r.NoteHistory.RESTORE_NOTE_HISTORY_CONTENT_FAIL:
                    return e = e.setIn(["restore", "status"], r.NoteHistory.RESTORE_NOTE_HISTORY_CONTENT_FAIL);
                default:
                    return e
            }
        };
        var o = n("BYKG"), a = function (e) {
            return e && e.__esModule ? e : {default: e}
        }(o), r = n("4HHy"), i = {
            list: [],
            status: r.NoteHistory.NOTE_HISTORY_INIT,
            contents: {status: r.NoteHistory.NOTE_HISTORY_CONTENT_INIT, entities: {}},
            restore: {status: r.NoteHistory.NOTE_HISTORY_RESTORE_INIT}
        };
        t.getNoteHistoryState = function (e) {
            return e.NoteHistory
        }, t.getNoteHistoryContentsState = function (e) {
            return e.NoteHistory.get("contents")
        }
    }, "r/Fa": function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0}), t.default = {
            LEFT: 37,
            UP: 38,
            RIGHT: 39,
            DOWN: 40,
            TAB: 9,
            CAP: 20,
            SHIFT: 16,
            CTRL: 17,
            ALT: 18,
            COMMAND: 91,
            WIN: 92,
            BACKSPACE: 8,
            DELETE: 46,
            SPACE: 32,
            ENTER: 13,
            ESC: 27,
            PAGE_UP: 33,
            PAGE_DOWN: 34
        }
    }, s3e1: function (e, t, n) {
        t = e.exports = n("FZ+f")(!1), t.push([e.i, "._1m7Fq ._2A7wF{position:relative;width:100%;margin-bottom:20px;font-size:15px}._1m7Fq ._2A7wF input{border:1px solid #c8c8c8;display:block;width:100%;height:50px;line-height:50px;background-color:hsla(0,0%,71%,.1);padding:5px 10px;-webkit-box-sizing:border-box;box-sizing:border-box}body.reader-night-mode ._1m7Fq ._2A7wF input{border-color:#2e2e2e}._1m7Fq ._3gYdB{margin:0}._1m7Fq ._3gYdB input{border-radius:4px 4px 0 0;padding-left:120px}._1m7Fq ._3gYdB ._24MAM{position:absolute;left:0}._1m7Fq ._3gYdB ._24MAM ._2P4hw{position:absolute;width:110px;left:0;top:0;line-height:50px;border-right:1px solid #c8c8c8;text-align:center;cursor:pointer}body.reader-night-mode ._1m7Fq ._3gYdB ._24MAM ._2P4hw{border-color:#2e2e2e}._1m7Fq ._3gYdB ._24MAM ._2P4hw ._3brsZ{margin:16px 10px 0 0;float:right}._1m7Fq ._3gYdB ._24MAM ._2P4hw ._1DAKn{float:left;margin:10px 0 0 10px}._1m7Fq ._3gYdB ._24MAM .V_psv{position:absolute;top:50px;width:388px;left:0;padding-top:5px;font-size:14px;border-radius:0 0 4px 4px;max-height:300px;overflow-y:auto;background:#fff;z-index:3}._1m7Fq ._3gYdB ._24MAM .V_psv ._3borq{background-color:#efefef;color:#4a4a4a;height:28px;line-height:28px;padding-left:20px;font-size:12px}._1m7Fq ._3gYdB ._24MAM .V_psv li span{margin-right:20px;display:inline-block;width:65px}._1m7Fq .UIpaL input{padding:5px 110px 5px 35px;border-top:0;border-radius:0 0 4px 4px}._1m7Fq .UIpaL i{position:absolute;margin:18px 0 0 10px}._1m7Fq .UIpaL a{position:absolute;top:7px;right:7px;width:100px;height:36px;font-size:13px;text-align:center;color:#fff;background-color:#3194d0;border-radius:20px;line-height:36px}._1m7Fq .UIpaL a._2da27{opacity:.7;pointer-events:none}._1m7Fq ._2lEtB{width:100%;padding:9px 18px;font-size:18px;text-align:center;border:none;border-radius:25px;color:#fff;background:#3194d0;cursor:pointer}", ""]), t.locals = {
            form: "_1m7Fq",
            "input-prepend": "_2A7wF",
            "phone-input-prepend": "_3gYdB",
            "country-dd": "_24MAM",
            "phone-icon-wrap": "_2P4hw",
            "arrow-icon": "_3brsZ",
            "mobile-icon": "_1DAKn",
            menu: "V_psv",
            divider: "_3borq",
            "captcha-input-prepend": "UIpaL",
            disable: "_2da27",
            "confirm-btn": "_2lEtB"
        }
    }, sAuu: function (e, t, n) {
        "use strict";

        function o(e) {
            return e && e.__esModule ? e : {default: e}
        }

        function a(e, t, n) {
            function o() {
                y.default.unmountComponentAtNode(a) && a.parentNode && a.parentNode.removeChild(a)
            }

            var a = document.createElement("div");
            document.body.appendChild(a);
            var r = (0, s.default)({
                    title: e,
                    isMiddle: !0,
                    showMask: !0,
                    maskClosable: !0,
                    width: 312,
                    okText: "确认",
                    cancelText: "取消",
                    onOk: function () {
                    },
                    onCancel: function () {
                    },
                    modalClassName: "",
                    confirmBodyClassName: "",
                    confirmBodyStyle: {}
                }, n, {showFooter: !1, closable: !1, content: t, destroy: o}),
                i = y.default.render(T.default.createElement(P, r), a);
            return i.showModal(), {destroy: o, instance: i, target: a}
        }

        Object.defineProperty(t, "__esModule", {value: !0});
        var r, i, l = n("Dd8w"), s = o(l), c = n("bOdI"), u = o(c), d = n("Zx67"), f = o(d), A = n("Zrlr"), p = o(A),
            h = n("wxAW"), g = o(h), m = n("zwoO"), b = o(m), v = n("Pf15"), E = o(v), _ = n("gGqR"), C = o(_);
        t.default = a;
        var N = n("GiK3"), T = o(N), w = n("O27J"), y = o(w), I = n("KSGD"), x = o(I), k = n("HW6M"), S = o(k),
            M = n("cl+9"), O = o(M), F = n("Xpbu"), D = o(F), B = n("UsL9"), L = o(B), P = (i = r = function (e) {
                function t(e) {
                    (0, p.default)(this, t);
                    var n = (0, b.default)(this, (t.__proto__ || (0, f.default)(t)).call(this, e));
                    return n.showModal = function () {
                        n.setState(function (e) {
                            return e.visible ? null : {visible: !0}
                        })
                    }, n.hideModal = function () {
                        n.setState({visible: !1})
                    }, n.handleOk = function (e) {
                        n.hideModal();
                        var t = n.props, o = t.onOk, a = t.content;
                        if ((0, C.default)(o)) {
                            o((n.vInput.value || "").trim(), a)
                        }
                    }, n.handleCancel = function (e) {
                        n.hideModal();
                        var t = n.props.onCancel;
                        (0, C.default)(t) && t(e)
                    }, n.getButtonText = function () {
                        var e = n.props, t = e.okText, o = e.cancelText;
                        return {ok: t || O.default.get("modal.confirm"), cancel: o || O.default.get("modal.cancel")}
                    }, n.state = {visible: !1}, n
                }

                return (0, E.default)(t, e), (0, g.default)(t, [{
                    key: "componentWillUnmount", value: function () {
                        this.props.destroy()
                    }
                }, {
                    key: "render", value: function () {
                        var e, t = this, n = this.props, o = n.content, a = n.modalClassName, r = n.confirmBodyClassName,
                            i = n.confirmBodyStyle, l = n.destroy, c = this.getButtonText(),
                            d = (0, S.default)(a, (e = {}, (0, u.default)(e, "" + L.default.confirm, !0), (0, u.default)(e, "" + L.default.prompt, !0), e)),
                            f = (0, S.default)(r, (0, u.default)({}, "" + L.default["prompt-body"], !0)),
                            A = T.default.createElement("div", {
                                className: f,
                                style: i
                            }, T.default.createElement("input", {
                                type: "text", ref: function (e) {
                                    t.vInput = e
                                }, defaultValue: o, className: L.default.vInput
                            })),
                            p = T.default.createElement("div", {className: L.default["confirm-footer"]}, T.default.createElement(D.default.Button, {onClick: this.handleCancel}, c.cancel), T.default.createElement(D.default.Button, {
                                onClick: this.handleOk,
                                type: "primary"
                            }, c.ok));
                        return T.default.createElement(D.default, (0, s.default)({}, this.props, {
                            modalClassName: d,
                            visible: this.state.visible,
                            onOk: function () {
                            },
                            onCancel: this.handleCancel,
                            afterClose: l
                        }), T.default.createElement("div", {className: L.default["confirm-wrapper"]}, A, p))
                    }
                }]), t
            }(N.Component), r.displayName = "Modal.Prompt", r.propTypes = {
                content: x.default.oneOfType([x.default.string, x.default.node]),
                modalClassName: x.default.string,
                confirmBodyClassName: x.default.string,
                confirmBodyStyle: x.default.object,
                destroy: x.default.func
            }, i)
    }, tVgH: function (e, t, n) {
        var o = n("mIQu");
        "string" == typeof o && (o = [[e.i, o, ""]]);
        var a = {hmr: !0};
        a.transform = void 0, a.insertInto = void 0;
        n("MTIv")(o, a);
        o.locals && (e.exports = o.locals)
    }, uOmc: function (e, t, n) {
        var o = n("3vUK");
        "string" == typeof o && (o = [[e.i, o, ""]]);
        var a = {hmr: !0};
        a.transform = void 0, a.insertInto = void 0;
        n("MTIv")(o, a);
        o.locals && (e.exports = o.locals)
    }, vw9M: function (e, t, n) {
        "use strict";

        function o(e) {
            return e && e.__esModule ? e : {default: e}
        }

        Object.defineProperty(t, "__esModule", {value: !0}), t.default = void 0;
        var a, r, i, l, s = n("Zx67"), c = o(s), u = n("Zrlr"), d = o(u), f = n("wxAW"), A = o(f), p = n("zwoO"),
            h = o(p), g = n("Pf15"), m = o(g), b = n("Dd8w"), v = o(b), E = n("+6Bu"), _ = o(E), C = n("GiK3"),
            N = o(C), T = n("o/zv"), w = n("F8kA"), y = n("2Jz7"), I = o(y), x = n("oFuF"), k = n("m3yF"),
            S = (0, I.default)(function () {
                return Promise.all([n.e(4), n.e(0)]).then(n.bind(null, "/sEk"))
            }), M = (0, I.default)(function () {
                return Promise.all([n.e(0), n.e(5)]).then(n.bind(null, "7Gmt"))
            }), O = (0, I.default)(function () {
                return Promise.all([n.e(0), n.e(6)]).then(n.bind(null, "JtiA"))
            }), F = (0, I.default)(function () {
                return n.e(0).then(n.bind(null, "t/fx"))
            }), D = (0, I.default)(function () {
                return Promise.all([n.e(3), n.e(0)]).then(n.bind(null, "RCBd"))
            }), B = (0, I.default)(function () {
                return Promise.all([n.e(0), n.e(2)]).then(n.bind(null, "+qiR"))
            }), L = (0, I.default)(function () {
                return Promise.all([n.e(0), n.e(2)]).then(n.bind(null, "d6jq"))
            }), P = (0, I.default)(function () {
                return Promise.all([n.e(0), n.e(1)]).then(n.bind(null, "QXtu"))
            }), R = (0, I.default)(function () {
                return Promise.all([n.e(0), n.e(1)]).then(n.bind(null, "OFS3"))
            }), G = function (e) {
                var t = e.component, n = (0, _.default)(e, ["component"]);
                return N.default.createElement(w.Route, (0, v.default)({}, n, {
                    render: function (e) {
                        return (0, k.isPC)() ? N.default.createElement(t, e) : N.default.createElement(w.Redirect, {to: "/forbidden"})
                    }
                }))
            }, U = (0, w.withRouter)((i = r = function (e) {
                function t(e) {
                    (0, d.default)(this, t);
                    var n = (0, h.default)(this, (t.__proto__ || (0, c.default)(t)).call(this, e));
                    return l.call(n), n.state = {}, n
                }

                return (0, m.default)(t, e), (0, A.default)(t, [{
                    key: "componentDidMount", value: function () {
                        this.trackPage(this.props)
                    }
                }, {
                    key: "componentWillReceiveProps", value: function (e) {
                        e.location !== this.props.location && this.trackPage(e)
                    }
                }, {
                    key: "render", value: function () {
                        return N.default.createElement(w.Switch, null, N.default.createElement(G, {
                            exact: !0,
                            path: "/",
                            component: S
                        }), N.default.createElement(G, {
                            exact: !0,
                            path: "/notebooks/:nbId",
                            component: S
                        }), N.default.createElement(G, {
                            exact: !0,
                            path: "/notebooks/:nbId/notes/:noteId",
                            component: S
                        }), N.default.createElement(G, {
                            path: "/recycle/:noteId",
                            component: O
                        }), N.default.createElement(G, {
                            path: "/recycle",
                            component: O
                        }), N.default.createElement(G, {
                            path: "/notebooks/:nbId/notes/:noteId/history/:historyId",
                            component: M
                        }), N.default.createElement(G, {
                            path: "/notebooks/:nbId/notes/:noteId/history",
                            component: M
                        }), N.default.createElement(G, {
                            exact: !0,
                            path: "/notebooks/:nbId/notes/:noteId/writing",
                            component: F
                        }), N.default.createElement(G, {
                            exact: !0,
                            path: "/notebooks/:nbId/notes/:noteId/preview",
                            component: D
                        }), N.default.createElement(G, {
                            exact: !0,
                            path: "/notebooks/:nbId/notes/:noteId/pnsetting",
                            component: P
                        }), N.default.createElement(G, {
                            exact: !0,
                            path: "/notebooks/:nbId/notes/:noteId/pssetting",
                            component: R
                        }), !(0, k.isPC)() && N.default.createElement(w.Route, {
                            path: "/forbidden",
                            component: B
                        }), N.default.createElement(G, {component: L}))
                    }
                }]), t
            }(C.Component), l = function () {
                this.trackPage = function (e) {
                    
                }
            }, a = i)) || a;
        t.default = U
    }, w0tY: function (e, t, n) {
        "use strict";

        function o(e) {
            var t = {}, n = [];
            return e.forEach(function (e) {
                var o = e.id;
                n.push(o), t[o] = e
            }), {entities: t, seq: n}
        }

        Object.defineProperty(t, "__esModule", {value: !0}), t.default = o
    }, wyFM: function (e, t, n) {
        var o = n("bByz");
        "string" == typeof o && (o = [[e.i, o, ""]]);
        var a = {hmr: !0};
        a.transform = void 0, a.insertInto = void 0;
        n("MTIv")(o, a);
        o.locals && (e.exports = o.locals)
    }, z69G: function (e, t, n) {
        "use strict";

        function o(e) {
            return e && e.__esModule ? e : {default: e}
        }

        Object.defineProperty(t, "__esModule", {value: !0}), t.default = void 0;
        var a, r, i = n("Dd8w"), l = o(i), s = n("+6Bu"), c = o(s), u = n("Zx67"), d = o(u), f = n("Zrlr"), A = o(f),
            p = n("wxAW"), h = o(p), g = n("zwoO"), m = o(g), b = n("Pf15"), v = o(b), E = n("GiK3"), _ = o(E),
            C = n("KSGD"), N = o(C), T = n("HW6M"), w = o(T);
        n("uOmc");
        var y = (r = a = function (e) {
            function t() {
                return (0, A.default)(this, t), (0, m.default)(this, (t.__proto__ || (0, d.default)(t)).apply(this, arguments))
            }

            return (0, v.default)(t, e), (0, h.default)(t, [{
                key: "render", value: function () {
                    var e = this.props, t = e.name, n = (e.size, e.fixedWidth, e.spin, e.pulse, e.rotate, e.className),
                        o = (0, c.default)(e, ["name", "size", "fixedWidth", "spin", "pulse", "rotate", "className"]),
                        a = (0, w.default)("iconfont", "ic-" + t, n);
                    return _.default.createElement("i", (0, l.default)({}, o, {className: a}))
                }
            }]), t
        }(E.PureComponent), a.propTypes = {
            name: N.default.string.isRequired,
            size: N.default.string,
            fixedWidth: N.default.bool,
            spin: N.default.bool,
            pulse: N.default.bool,
            rotate: N.default.number
        }, r);
        t.default = y
    }
}, ["lVK7"]);