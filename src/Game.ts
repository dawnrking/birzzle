class Game {
	private _root:egret.DisplayObjectContainer;
	public constructor(root:egret.DisplayObjectContainer) {
		this._root = root;
		this.setBg();
        this.CreateTimer();
        this.startGame();
        this.CreateContent();
        this.CreateScore();
	}
	private setBg() {
		let stageW = Data.getStageWidth();
        let stageH = Data.getStageHight();
		
		let sky = Data.createBitmapByName("bg1_png");
        this._root.addChild(sky);
        sky.width = stageW;
        sky.height = stageH;


        let bgmain = Data.createBitmapByName("b5_png");
        this._root.addChild(bgmain);
        bgmain.width = stageW;
        bgmain.height = 0.85*bgmain.height;
        bgmain.y = stageH - bgmain.height;
        
        let bgfooter = Data.createBitmapByName("b2_png");
        this._root.addChild(bgfooter);
        bgfooter.width = stageW;
        bgfooter.height = 0.80*bgfooter.height ;
        bgfooter.y = stageH - bgfooter.height;


        let seticon = Data.createBitmapByName("btn_setting_png");
        this._root.addChild(seticon);
        seticon.x = 20;
        seticon.y = 20;
		
	}

    private Timer:Timer;
    private CreateTimer () {
        this.Timer = new Timer();
        this.Timer.addEventListener("gameOver",this.gameOver,this);
        this.Timer.x = 0.1*Data.getStageWidth();
        this.Timer.y = 0.317*Data.getStageHight();
        this._root.addChild(this.Timer)
    }
    
    private gameOver() {
        console.log('gameOver');
    }

    private startGame() {
        this.Timer.start()
    }
    
    private Content:Content;
    private CreateContent () {
    this.Content = new Content();
    this.Content.x = 0.095*Data.getStageWidth();
    this.Content.y = 0.385*Data.getStageHight();
    this._root.addChild(this.Content)
    }


    private Score:Score;
    private CreateScore () {
        this.Score = new Score();
        this._root.addChild(this.Score);
        this.Score.x = Data.getStageWidth() - this.Score.width-20;
        this.Score.y = 20;
    }
}