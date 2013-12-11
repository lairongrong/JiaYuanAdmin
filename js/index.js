define("home/index.js", [ "common/lib/highcharts.js", "common/wx/Cgi.js" ], function(e, t, n) {
try {
"use strict";
var r = template.render, i = e("common/lib/highcharts.js"), s = e("common/wx/Cgi.js"), o = wx.cgiData;
(function() {
var e = "hasNotice";
seajs.use("common/lib/store.js", function(t) {
if (!!t.get(e)) return;
s.get({
mask: !1,
url: wx.url("/cgi-bin/sysnotify?f=json&begin=0&count=5")
}, function(n) {
if (n.BaseResp.Ret == 0 && n.Count) {
var r = [], i = n.List, s = n.Count, o = function(e, t) {
var n = {
1: "你的群发",
2: "你的开发者申请",
3: "你的头像更改",
4: "你的昵称修改",
5: "你的功能介绍更改",
6: "你的信息登记",
7: "你的信息登记",
8: "你的信息登记",
9: "你的信息登记",
10: "你的信息登记",
11: "你的自定义菜单申请",
12: "你的商户功能权限申请",
14: "微信支付",
15: "微信支付",
16: "微信支付",
22: "商户功能初审",
23: "模板消息申请",
24: "商品购买测试链接",
26: "修改商户功能设置"
}, r = "";
return t == 3 ? r = "已经通过审核" : t == 2 && (r = "审核不通过"), typeof n[e] != "undefined" ? n[e] + r : "";
};
for (var u = 0; u < s; ++u) {
var a = i[u];
r.push({
text: a.NotifyMsgType == 1 ? o(a.CheckType, a.CheckStatus) : a.Title,
url: wx.url("/cgi-bin/frame?t=notification/index_frame&selectid=" + a.Id)
});
}
seajs.use("common/wx/noticeBox", function(n) {
new n({
container: "#accountArea",
list: r
}), $("#accountArea .btn_inbox_closed").click(function() {
t.set(e, 1), $("#accountArea").unbind("mouseover").removeClass("on").find(".account_message_box").remove();
});
});
}
});
});
})();
} catch (u) {
wx.jslog({
src: "home/index.js"
}, u);
}
});