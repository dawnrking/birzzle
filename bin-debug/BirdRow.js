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
var BirdRow = (function (_super) {
    __extends(BirdRow, _super);
    function BirdRow() {
        var _this = _super.call(this) || this;
        _this.CreateBirdGroup();
        return _this;
    }
    BirdRow.prototype.CreateBirdGroup = function () {
        this._bird = new Birld();
        this._bg = new ContentBg();
        this._row = Math.ceil(this._bg.bgHight / this._bird.birdHight);
        this._birdGroupAll = [];
        for (var i = 0; i <= this._row; i++) {
            var groupBird = new GroupBird();
            groupBird.y = 0.75 * groupBird.height * i;
            this.addChild(groupBird);
            groupBird.setPostionY(i);
            groupBird.addEventListener(egret.TouchEvent.TOUCH_TAP, this.changeIndex, this);
            this._birdGroupAll.push(groupBird);
        }
    };
    BirdRow.prototype.changeIndex = function (evt) {
        console.log(evt.target.parent.birdPostionX, evt.target.parent.birdPostionY);
    };
    return BirdRow;
}(egret.Sprite));
__reflect(BirdRow.prototype, "BirdRow");
//# sourceMappingURL=BirdRow.js.map