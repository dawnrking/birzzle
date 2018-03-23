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
var GroupBird = (function (_super) {
    __extends(GroupBird, _super);
    function GroupBird() {
        var _this = _super.call(this) || this;
        _this.Y = 0;
        _this.CreateGroupBird();
        _this.draw();
        return _this;
    }
    GroupBird.prototype.CreateGroupBird = function () {
        this._bird = new Birld();
        this._bg = new ContentBg();
        this._col = Math.ceil(this._bg.bgWidth / this._bird.birdWidth);
        this.BirdGroup = [];
        this.BirdGroupIndex = [];
        for (var i = 0; i <= this._col; i++) {
            var bird = new Birld();
            bird.x = 0.75 * bird.width * i;
            this.BirdGroup.push(bird);
            var birdIndex = Math.round(Math.random() * 6);
            this.BirdGroupIndex.push(birdIndex);
        }
    };
    GroupBird.prototype.draw = function () {
        for (var i = 0; i < this.BirdGroup.length; i++) {
            var bird = this.BirdGroup[i];
            bird.birdIndex = this.BirdGroupIndex[i];
            bird.setPositionX(i);
            bird.setPositionY(this.Y);
            this.addChild(bird);
        }
    };
    GroupBird.prototype.setPostionY = function (val) {
        this.Y = val;
        this.draw();
    };
    return GroupBird;
}(egret.Sprite));
__reflect(GroupBird.prototype, "GroupBird");
//# sourceMappingURL=GroupBird.js.map