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
var Content = (function (_super) {
    __extends(Content, _super);
    function Content() {
        var _this = _super.call(this) || this;
        _this.draw();
        return _this;
    }
    Content.prototype.draw = function () {
        var bgContent = new ContentBg();
        this.addChild(bgContent);
        var bird = new BirdRow();
        this.addChild(bird);
    };
    return Content;
}(egret.Sprite));
__reflect(Content.prototype, "Content");
//# sourceMappingURL=Content.js.map