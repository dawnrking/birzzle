var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var Game = (function () {
    function Game(root) {
        this._root = root;
        this.setBg();
        this.CreateTimer();
        this.startGame();
        this.CreateContent();
        this.CreateScore();
    }
    Game.prototype.setBg = function () {
        var stageW = Data.getStageWidth();
        var stageH = Data.getStageHight();
        var sky = Data.createBitmapByName("bg1_png");
        this._root.addChild(sky);
        sky.width = stageW;
        sky.height = stageH;
        var bgmain = Data.createBitmapByName("b5_png");
        this._root.addChild(bgmain);
        bgmain.width = stageW;
        bgmain.height = 0.85 * bgmain.height;
        bgmain.y = stageH - bgmain.height;
        var bgfooter = Data.createBitmapByName("b2_png");
        this._root.addChild(bgfooter);
        bgfooter.width = stageW;
        bgfooter.height = 0.80 * bgfooter.height;
        bgfooter.y = stageH - bgfooter.height;
        var seticon = Data.createBitmapByName("btn_setting_png");
        this._root.addChild(seticon);
        seticon.x = 20;
        seticon.y = 20;
    };
    Game.prototype.CreateTimer = function () {
        this.Timer = new Timer();
        this.Timer.addEventListener("gameOver", this.gameOver, this);
        this.Timer.x = 0.1 * Data.getStageWidth();
        this.Timer.y = 0.317 * Data.getStageHight();
        this._root.addChild(this.Timer);
    };
    Game.prototype.gameOver = function () {
        console.log('gameOver');
    };
    Game.prototype.startGame = function () {
        this.Timer.start();
    };
    Game.prototype.CreateContent = function () {
        this.Content = new Content();
        this.Content.x = 0.095 * Data.getStageWidth();
        this.Content.y = 0.385 * Data.getStageHight();
        this._root.addChild(this.Content);
    };
    Game.prototype.CreateScore = function () {
        this.Score = new Score();
        this._root.addChild(this.Score);
        this.Score.x = Data.getStageWidth() - this.Score.width - 20;
        this.Score.y = 20;
    };
    return Game;
}());
__reflect(Game.prototype, "Game");
//# sourceMappingURL=Game.js.map