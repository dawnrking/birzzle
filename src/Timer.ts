class Timer extends egret.Sprite{
	
	public constructor() {
		super();
		this.draw();
		this.CreateTimer();
	}

	private txt:egret.TextField;
	private progressbar;
	private _width:number = 0.78*Data.getStageWidth();
	private draw () {
		this.progressbar = Data.createBitmapByName("progressbar_png");
		this.progressbar.width = 0;
		this.progressbar.y = 10;
        this.addChild(this.progressbar);

		let timebar = Data.createBitmapByName("timer_png");
        this.addChild(timebar);
		timebar.width = 0.9*timebar.width;
		timebar.height = 0.9*timebar.height;
		timebar.x = this._width - timebar.width*2/3;

		this.txt = new egret.TextField;
		this.txt.width = Data.getStageWidth();
		this.txt.text = "1:00";
		this.txt.textColor = 0xffffff;
		this.txt.y = 22;
		this.txt.x = this._width - 50;
		this.addChild(this.txt);
	}

	private times:egret.Timer;
	private _num:number = 60;
	private CreateTimer() {
		this.times = new egret.Timer(1000,this._num);
		this.times.addEventListener(egret.TimerEvent.TIMER,this.startTime,this);
		this.times.addEventListener(egret.TimerEvent.TIMER_COMPLETE,this.comTime,this);
	}

	private TimeVal:number = 60;
	private partpro:number = this._width/60;
	private startTime() {
		this.TimeVal--;
		this.progressbar.width+=this.partpro;
		if(this.TimeVal == 60){
			this.txt.text = "1:00";
		}else if(this.TimeVal<10){
			this.txt.text = "0:0"+this.TimeVal;
		}else {
			this.txt.text = "0:"+this.TimeVal;
		}
	}

	private comTime() {
		this.txt.text = "0:00";
		this.dispatchEventWith('gameOver');
	}

	public start() {
		this.txt.text = "1:00";
		this.times.reset();
		this.times.start();
	}

	public stop () {
		this.times.stop();
	}
	
}