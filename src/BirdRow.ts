class BirdRow extends egret.Sprite {
	public constructor() {
		super();
		this.CreateBirdGroup();
	}

	private _row:number;
	private _bird:Birld;
	private _bg:ContentBg;
	private _birdGroupAll:Array<GroupBird>;
	private CreateBirdGroup() {
		this._bird = new Birld();	
		this._bg = new ContentBg();	
		this._row = Math.ceil(this._bg.bgHight/this._bird.birdHight);
		this._birdGroupAll = [];
		for (let i = 0;i<=this._row;i++) {
			let groupBird = new GroupBird();
			groupBird.y = 0.75*groupBird.height*i;
			this.addChild(groupBird);
			groupBird.setPostionY(i);
			groupBird.addEventListener(egret.TouchEvent.TOUCH_TAP,this.changeIndex,this)
			this._birdGroupAll.push(groupBird);
		}
		
	}

	private changeIndex (evt:egret.TouchEvent) {
		console.log(evt.target.parent.birdPostionX,evt.target.parent.birdPostionY);
	}

}