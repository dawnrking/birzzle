class ContentBg extends egret.Sprite{
	public constructor() {
		super();
		this.draw();
	}

	public bgHight:number;
	public bgWidth:number;

	private draw () {
		let bgContent = Data.createBitmapByName("b3_png");
        this.addChild(bgContent);
		bgContent.width =0.81*Data.getStageWidth();
        bgContent.height =0.85*bgContent.height;
		this.bgHight = bgContent.height;
		this.bgWidth = bgContent.width;
	}
}