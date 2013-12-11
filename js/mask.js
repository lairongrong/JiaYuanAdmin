define("common/qq/mask.js", [ "common/lib/spin.js" ], function(e, t, n) {
try {
"use strict", e("common/lib/spin.js");
var r = 0, i = '<div class="mask"></div>';
function s(e) {
if (this.mask) this.mask.show(); else {
var t = "body";
e && !!e.parent && (t = $(e.parent)), this.mask = $(i).appendTo(t), this.mask.id = "wxMask_" + ++r;
}
if (e) {
if (e.spin === !1) return this;
this.mask.spin(e.spin || "flower");
}
return this;
}
s.prototype = {
show: function() {
this.mask.show();
},
hide: function() {
this.mask.hide();
},
remove: function() {
this.mask.remove();
}
}, t.show = function(e) {
return new s(e);
}, t.hide = function() {
$(".mask").hide();
}, t.remove = function() {
$(".mask").remove();
};
} catch (o) {
wx.jslog({
src: "common/qq/mask.js"
}, o);
}
});