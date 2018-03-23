class GroupBird extends egret.Sprite{
	public constructor() {
		super();
		this.CreateGroupBird();
		this.draw();
	}
	
	private _bird:Birld;
	private _bg:ContentBg;
	private BirdGroup:Array<Birld>;
	private BirdGroupIndex:Array<number>;
	private _col:number;
	private CreateGroupBird () {
		this._bird = new Birld();	
		this._bg = new ContentBg();	
		this._col = Math.ceil(this._bg.bgWidth/this._bird.birdWidth);
		this.BirdGroup = [];
		this.BirdGroupIndex = [];
		for(let i = 0;i<=this._col;i++){
			let bird:Birld = new Birld();
			bird.x = 0.75*bird.width*i;
			this.BirdGroup.push(bird);
			let birdIndex = Math.round(Math.random()*6);
			this.BirdGroupIndex.push(birdIndex);
		}
			
	}
	
	private Y:number = 0;
	private draw () {
		for(let i = 0;i<this.BirdGroup.length;i++){
			let bird = this.BirdGroup[i];
			bird.birdIndex = this.BirdGroupIndex[i];
			bird.setPositionX(i);
			bird.setPositionY(this.Y);
			this.addChild(bird);
		}
	}
	
	public setPostionY (val:number){
		this.Y = val;
		this.draw();
	}

}