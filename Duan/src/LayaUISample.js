var Game = (function () {
	(function () {
		//初始化引擎
		Config.isAlpha = true;
		Laya.init(696, 408, Laya.WebGL);
		Laya.stage.bgColor = "#000000";

		//画布垂直居中对齐
		Laya.stage.alignH = Laya.Stage.ALIGN_CENTER;
		Laya.stage.alignV = Laya.Stage.ALIGN_MIDDLE;
		// //设置横竖屏
		Laya.stage.screenMode = Laya.Stage.SCREEN_HORIZONTAL;
		//画布水平居中对齐
		// Laya.stage.alignH = 'left';
		//画布垂直居中对齐
		// Laya.stage.alignV = 'top';
		//设置适配模式
		Laya.stage.scaleMode = Laya.Stage.SCALE_SHOWALL;
		//设置横竖屏
		// Laya.stage.screenMode = Laya.Stage.SCREEN_NONE;
		//显示帧频信息
		// Laya.Stat.show(0, 0, 100, 100);
		this.arr = [
			{ url: "res/atlas/BeiJing28.json", type: Laya.Loader.ATLAS },
			{ url: "res/atlas/Boat.json", type: Laya.Loader.ATLAS },
			{ url: "res/atlas/Car.json", type: Laya.Loader.ATLAS },
			{ url: "res/atlas/chip.json", type: Laya.Loader.ATLAS },
			{ url: "res/atlas/ChongQingShiShiCai.json", type: Laya.Loader.ATLAS },
			{ url: "res/atlas/creditbet.json", type: Laya.Loader.ATLAS },
			{ url: "res/atlas/Happy10.json", type: Laya.Loader.ATLAS },
			{ url: "res/atlas/quickbet.json", type: Laya.Loader.ATLAS },
			{ url: "res/atlas/racingui.json", type: Laya.Loader.ATLAS },
			{ url: "res/atlas/Template.json", type: Laya.Loader.ATLAS },
			{ url: "res/atlas/Swf/marksix/image.json", type: Laya.Loader.ATLAS },
			{ url: "res/atlas/LiuHeCai.json", type: Laya.Loader.ATLAS },
			{ url: "res/atlas/NumMove.json", type: Laya.Loader.ATLAS },
			{ url: "res/atlas/font.json", type: Laya.Loader.ATLAS },
			{ url: "res/atlas/Main.json", type: Laya.Loader.ATLAS },
		]

		Laya.loader.load(this.arr, Laya.Handler.create(this, onLoaded));
	})();





	function onLoaded() {
		//主游戏
		GameMain = new BeiJingCarView();
		Laya.stage.addChild(GameMain);
	}

	// return this;
})();
