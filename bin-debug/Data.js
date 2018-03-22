var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var Data = (function () {
    function Data() {
    }
    Data.getStageWidth = function () {
        return egret.MainContext.instance.stage.stageWidth;
    };
    Data.getStageHight = function () {
        return egret.MainContext.instance.stage.stageHeight;
    };
    /**
* 根据name关键字创建一个Bitmap对象。name属性请参考resources/resource.json配置文件的内容。
* Create a Bitmap object according to name keyword.As for the property of name please refer to the configuration file of resources/resource.json.
*/
    Data.createBitmapByName = function (name) {
        var result = new egret.Bitmap();
        var texture = RES.getRes(name);
        result.texture = texture;
        return result;
    };
    return Data;
}());
__reflect(Data.prototype, "Data");
//# sourceMappingURL=Data.js.map