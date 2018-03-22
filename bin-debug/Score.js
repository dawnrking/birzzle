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
var Score = (function (_super) {
    __extends(Score, _super);
    function Score() {
        var _this = _super.call(this) || this;
        _this.draw();
        return _this;
    }
    Score.prototype.draw = function () {
        var scorebg = Data.createBitmapByName("score_bar_png");
        this.addChild(scorebg);
        var zone = Data.createBitmapByName("number_score_json.one");
        zone.anchorOffsetX = 15;
        this.addChild(zone);
    };
    return Score;
}(egret.Sprite));
__reflect(Score.prototype, "Score");
//# sourceMappingURL=Score.js.map