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
var Birld = (function (_super) {
    __extends(Birld, _super);
    function Birld() {
        var _this = _super.call(this) || this;
        _this._index = 0;
        _this.birdGroup = ['blue_bird_normal_png', 'green_bird_normal_png', 'pink_bird_normal_png', 'purple_bird_normal_png', 'red_bird_normal_png', 'white_bird_normal_png', 'yellow_bird_normal_png',];
        _this.birdPostionX = 0;
        _this.birdPostionY = 0;
        _this.CreateBirld();
        return _this;
    }
    Birld.prototype.draw = function (name) {
        var bird = Data.createBitmapByName(name);
        bird.width = 0.75 * bird.width;
        bird.height = 0.75 * bird.height;
        this.birdHight = bird.height;
        this.birdWidth = bird.width;
        bird.touchEnabled = true;
        this.addChild(bird);
    };
    Birld.prototype.CreateBirld = function () {
        this.draw(this.birdGroup[this._index]);
    };
    Object.defineProperty(Birld.prototype, "birdIndex", {
        get: function () {
            return this._index;
        },
        set: function (val) {
            if (val != 0) {
                this._index = val;
                this.CreateBirld();
            }
        },
        enumerable: true,
        configurable: true
    });
    Birld.prototype.setPositionX = function (val) {
        this.birdPostionX = val;
    };
    Birld.prototype.setPositionY = function (val) {
        this.birdPostionY = val;
    };
    return Birld;
}(egret.Sprite));
__reflect(Birld.prototype, "Birld");
//# sourceMappingURL=Birld.js.map