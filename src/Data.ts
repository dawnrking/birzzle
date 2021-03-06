class Data {
	public constructor() {
	}

	public static getStageWidth():number {
		return egret.MainContext.instance.stage.stageWidth;
	}

	public static getStageHight():number {
		return egret.MainContext.instance.stage.stageHeight;
	}
		    	    /**
     * 根据name关键字创建一个Bitmap对象。name属性请参考resources/resource.json配置文件的内容。
     * Create a Bitmap object according to name keyword.As for the property of name please refer to the configuration file of resources/resource.json.
     */
    public static createBitmapByName(name: string) {
        let result = new egret.Bitmap();
        let texture: egret.Texture = RES.getRes(name);
        result.texture = texture;
        return result;
    }

    public static num:number = 0;

    public static postion:Array<number> = [0,0];
}