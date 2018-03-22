class Score extends egret.Sprite{
	public constructor() {
		super();
		this.draw();
	}

	private draw () {
		let scorebg = Data.createBitmapByName("score_bar_png");
        this.addChild(scorebg);

		let zone = Data.createBitmapByName("number_score_json.one");
		this.addChild(zone);
	}
}