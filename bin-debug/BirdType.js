var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var BirdType = (function () {
    function BirdType() {
    }
    BirdType._type = function (val) {
        switch (val) {
            case 0:
                return "bule";
            case 1:
                return "green";
            case 2:
                return "pink";
            case 3:
                return "purple";
            case 4:
                return "red";
            case 5:
                return "white";
            case 6:
                return "yellow";
        }
    };
    ;
    return BirdType;
}());
__reflect(BirdType.prototype, "BirdType");
//# sourceMappingURL=BirdType.js.map