var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = this && this.__extends || function __extends(t, e) { 
 function r() { 
 this.constructor = t;
}
for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i]);
r.prototype = e.prototype, t.prototype = new r();
};
var ContentBg = (function (_super) {
    __extends(ContentBg, _super);
    function ContentBg() {
        var _this = _super.call(this) || this;
        _this.draw();
        return _this;
    }
    ContentBg.prototype.draw = function () {
        var bgContent = Data.createBitmapByName("b3_png");
        this.addChild(bgContent);
        bgContent.width = 0.81 * Data.getStageWidth();
        bgContent.height = 0.85 * bgContent.height;
        this.bgHight = bgContent.height;
        this.bgWidth = bgContent.width;
    };
    return ContentBg;
}(egret.Sprite));
__reflect(ContentBg.prototype, "ContentBg");
//# sourceMappingURL=ContentBg.js.map