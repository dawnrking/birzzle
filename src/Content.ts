class Content extends egret.Sprite{
	public constructor() {
		super();
		this.draw();
	}
	private draw () {
		let bgContent = new ContentBg();
        this.addChild(bgContent);
		
		let bird:BirdRow = new BirdRow();
		this.addChild(bird);
	}

}