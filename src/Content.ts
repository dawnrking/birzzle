class Content extends egret.Sprite{
	public constructor() {
		super();
		this.draw();
	}

	private draw () {
		let bgcontent = Data.createBitmapByName("b3_png");
        this.addChild(bgcontent);
		bgcontent.width =0.81*Data.getStageWidth();
        bgcontent.height =0.85*bgcontent.height;
		
	}
}