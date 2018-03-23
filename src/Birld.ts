class Birld extends egret.Sprite{
	public constructor() {
		super();
		this.CreateBirld();
	}
	
	public birdHight:number;
	public birdWidth:number;
	private draw(name) {
		let bird = Data.createBitmapByName(name);
		bird.width = 0.75*bird.width;
		bird.height = 0.75*bird.height;
		this.birdHight = bird.height;
		this.birdWidth = bird.width;
		bird.touchEnabled = true;
		this.addChild(bird);
	}
	private _index:number=0;
	private birdGroup:Array<string> = ['blue_bird_normal_png','green_bird_normal_png','pink_bird_normal_png','purple_bird_normal_png','red_bird_normal_png','white_bird_normal_png','yellow_bird_normal_png',];
	private CreateBirld () {
		this.draw(this.birdGroup[this._index]);
	}

	public get birdIndex():number {
		return this._index;
	}

	public set birdIndex(val:number) {
		if (val !=0) {
			this._index = val;
			this.CreateBirld();
		}
	}

	public birdPostionX:number = 0;
	public birdPostionY:number = 0;

	public setPositionX(val:number) {
		this.birdPostionX = val;
	}
	
	public setPositionY(val:number) {
		this.birdPostionY = val;
	}
}