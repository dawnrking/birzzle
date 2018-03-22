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
var Timer = (function (_super) {
    __extends(Timer, _super);
    function Timer() {
        var _this = _super.call(this) || this;
        _this._width = 0.78 * Data.getStageWidth();
        _this._num = 60;
        _this.TimeVal = 60;
        _this.partpro = _this._width / 60;
        _this.draw();
        _this.CreateTimer();
        return _this;
    }
    Timer.prototype.draw = function () {
        this.progressbar = Data.createBitmapByName("progressbar_png");
        this.progressbar.width = 0;
        this.progressbar.y = 10;
        this.addChild(this.progressbar);
        var timebar = Data.createBitmapByName("timer_png");
        this.addChild(timebar);
        timebar.width = 0.9 * timebar.width;
        timebar.height = 0.9 * timebar.height;
        timebar.x = this._width - timebar.width * 2 / 3;
        this.txt = new egret.TextField;
        this.txt.width = Data.getStageWidth();
        this.txt.text = "1:00";
        this.txt.textColor = 0xffffff;
        this.txt.y = 22;
        this.txt.x = this._width - 50;
        this.addChild(this.txt);
    };
    Timer.prototype.CreateTimer = function () {
        this.times = new egret.Timer(1000, this._num);
        this.times.addEventListener(egret.TimerEvent.TIMER, this.startTime, this);
        this.times.addEventListener(egret.TimerEvent.TIMER_COMPLETE, this.comTime, this);
    };
    Timer.prototype.startTime = function () {
        this.TimeVal--;
        this.progressbar.width += this.partpro;
        if (this.TimeVal == 60) {
            this.txt.text = "1:00";
        }
        else if (this.TimeVal < 10) {
            this.txt.text = "0:0" + this.TimeVal;
        }
        else {
            this.txt.text = "0:" + this.TimeVal;
        }
    };
    Timer.prototype.comTime = function () {
        this.txt.text = "0:00";
        this.dispatchEventWith('gameOver');
    };
    Timer.prototype.start = function () {
        this.txt.text = "1:00";
        this.times.reset();
        this.times.start();
    };
    Timer.prototype.stop = function () {
        this.times.stop();
    };
    return Timer;
}(egret.Sprite));
__reflect(Timer.prototype, "Timer");
//# sourceMappingURL=Timer.js.map