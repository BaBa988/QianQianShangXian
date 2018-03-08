var CLASS$=Laya.class;
var STATICATTR$=Laya.static;
var View=laya.ui.View;
var Dialog=laya.ui.Dialog;
var BeiJingCarViewUI=(function(_super){
		function BeiJingCarViewUI(){
			
		    this.BoxBeiJIng=null;
		    this.QiPaoXian=null;
		    this.ZhongDianXian=null;
		    this.BoxCar=null;
		    this.QianSanMing=null;
		    this.GuangJunCar=null;
		    this.YaJunCar=null;
		    this.JiJunCar=null;
		    this.GJS=null;
		    this.GJG=null;
		    this.JJS=null;
		    this.JJG=null;
		    this.YJS=null;
		    this.YJG=null;
		    this.QianShiMing=null;
		    this.aaaa=null;
		    this.BoxPaiMing=null;
		    this.BtnShengYin=null;
		    this.LongHu1=null;
		    this.LongHu2=null;
		    this.LongHu3=null;
		    this.LongHu4=null;
		    this.LongHu5=null;
		    this.DanShuang=null;
		    this.He=null;
		    this.DaXiao=null;
		    this.QingHao=null;
		    this.RiQi=null;
		    this.Colse=null;

			BeiJingCarViewUI.__super.call(this);
		}

		CLASS$(BeiJingCarViewUI,'ui.BeiJingCarViewUI',_super);
		var __proto__=BeiJingCarViewUI.prototype;
		__proto__.createChildren=function(){
		    			View.regComponent("Text",laya.display.Text);

			laya.ui.Component.prototype.createChildren.call(this);
			this.createView(BeiJingCarViewUI.uiView);

		}

		BeiJingCarViewUI.uiView={"type":"View","props":{"width":696,"mouseThrough":true,"height":408},"child":[{"type":"Box","props":{"y":22,"x":0,"var":"BoxBeiJIng"},"child":[{"type":"Image","props":{"y":0,"x":0,"width":750,"skin":"Car/track.jpg","height":352}},{"type":"Image","props":{"y":0,"x":-696,"width":750,"skin":"Car/track.jpg","height":352}}]},{"type":"Image","props":{"y":23,"x":510,"var":"QiPaoXian","skin":"Car/trackLine.png.png"}},{"type":"Image","props":{"y":458,"x":140,"visible":false,"var":"ZhongDianXian","skin":"Car/trackLine.png.png","scaleY":-1,"scaleX":-1}},{"type":"Box","props":{"y":103,"x":545,"var":"BoxCar"},"child":[{"type":"Image","props":{"y":0,"x":54,"width":78,"skin":"Car/1.png.png","height":22}},{"type":"Image","props":{"y":27,"x":48,"width":78,"skin":"Car/2.png.png","height":22}},{"type":"Image","props":{"y":53,"x":42,"skin":"Car/3.png.png"}},{"type":"Image","props":{"y":78,"x":36,"skin":"Car/4.png.png"}},{"type":"Image","props":{"y":104,"x":30,"skin":"Car/5.png.png"}},{"type":"Image","props":{"y":128,"x":24,"skin":"Car/6.png.png"}},{"type":"Image","props":{"y":154,"x":18,"skin":"Car/7.png.png"}},{"type":"Image","props":{"y":178,"x":12,"skin":"Car/8.png.png"}},{"type":"Image","props":{"y":205,"x":6,"skin":"Car/9.png.png"}},{"type":"Image","props":{"y":231,"x":0,"skin":"Car/10.png.png"}}]},{"type":"Image","props":{"y":0,"x":0,"width":696,"visible":false,"var":"QianSanMing","skin":"Car/result.jpg","height":373},"child":[{"type":"Image","props":{"y":187,"x":214,"var":"GuangJunCar","skin":"Car/car10.png.png"}},{"type":"Image","props":{"y":183,"x":13,"width":212,"var":"YaJunCar","skin":"Car/car10.png.png","height":101}},{"type":"Image","props":{"y":183,"x":473,"width":212,"var":"JiJunCar","skin":"Car/car10.png.png","height":101}},{"type":"Image","props":{"y":138,"x":542,"skin":"Car/NO3.png.png"}},{"type":"Image","props":{"y":138,"x":82,"skin":"Car/NO2.png.png"}},{"type":"Image","props":{"y":107,"x":240,"skin":"Car/NO1.png.png"}},{"type":"Image","props":{"y":281,"x":303,"var":"GJS","skin":"Car/num0.png.png"}},{"type":"Image","props":{"y":281,"x":345,"var":"GJG","skin":"Car/num2.png.png"}},{"type":"Image","props":{"y":281,"x":533,"var":"JJS","skin":"Car/num0.png.png"}},{"type":"Image","props":{"y":281,"x":575,"var":"JJG","skin":"Car/num2.png.png"}},{"type":"Image","props":{"y":281,"x":73,"var":"YJS","skin":"Car/num0.png.png"}},{"type":"Image","props":{"y":281,"x":115,"var":"YJG","skin":"Car/num2.png.png"}}]},{"type":"Image","props":{"y":0,"x":0,"width":696,"visible":false,"var":"QianShiMing","skin":"Car/boatingTopten.jpg","height":364},"child":[{"type":"Image","props":{"y":104,"x":701,"width":78,"skin":"Car/1.png.png","height":22}},{"type":"Image","props":{"y":104,"x":788,"width":78,"skin":"Car/1.png.png","height":22}},{"type":"Image","props":{"y":160,"x":701,"width":78,"skin":"Car/1.png.png","height":22}},{"type":"Image","props":{"y":160,"x":788,"width":78,"skin":"Car/1.png.png","height":22}},{"type":"Image","props":{"y":217,"x":701,"width":78,"skin":"Car/1.png.png","height":22}},{"type":"Image","props":{"y":217,"x":788,"width":78,"skin":"Car/1.png.png","height":22}},{"type":"Image","props":{"y":271,"x":701,"width":78,"skin":"Car/1.png.png","height":22}},{"type":"Image","props":{"y":271,"x":788,"width":78,"skin":"Car/1.png.png","height":22}},{"type":"Image","props":{"y":326,"x":701,"width":78,"skin":"Car/1.png.png","height":22}},{"type":"Image","props":{"y":326,"x":788,"width":78,"skin":"Car/1.png.png","height":22}}]},{"type":"Image","props":{"y":0,"x":0,"width":697,"var":"aaaa","skin":"Template/top.png.png","height":48},"child":[{"type":"Image","props":{"y":10,"x":1,"skin":"Car/rankIcon.png.png"}},{"type":"Box","props":{"y":5,"x":49,"var":"BoxPaiMing"},"child":[{"type":"Image","props":{"skin":"Car/rankNum1.png.png"}},{"type":"Image","props":{"x":37,"skin":"Car/rankNum10.png.png"}},{"type":"Image","props":{"x":74,"skin":"Car/rankNum2.png.png"}},{"type":"Image","props":{"x":111,"skin":"Car/rankNum3.png.png"}},{"type":"Image","props":{"y":0,"x":148,"skin":"Car/rankNum6.png.png"}},{"type":"Image","props":{"y":0,"x":185,"skin":"Car/rankNum5.png.png"}},{"type":"Image","props":{"y":0,"x":222,"skin":"Car/rankNum8.png.png"}},{"type":"Image","props":{"x":258,"skin":"Car/rankNum4.png.png"}},{"type":"Image","props":{"x":294,"skin":"Car/rankNum7.png.png"}},{"type":"Image","props":{"x":330,"skin":"Car/rankNum9.png.png"}}]}]},{"type":"Button","props":{"y":3,"x":618,"var":"BtnShengYin","stateNum":2,"skin":"Template/Button_sound.png"}},{"type":"Image","props":{"y":362,"x":443,"skin":"Car/td.png.png"},"child":[{"type":"Text","props":{"y":25,"x":3,"width":48,"var":"LongHu1","text":"虎","height":15,"fontSize":18,"color":"#f9a426","align":"center"}},{"type":"Text","props":{"y":25,"x":50,"width":48,"var":"LongHu2","text":"虎","height":15,"fontSize":18,"color":"#f9a426","align":"center"}},{"type":"Text","props":{"y":25,"x":100,"width":48,"var":"LongHu3","text":"虎","height":15,"fontSize":18,"color":"#f9a426","align":"center"}},{"type":"Text","props":{"y":25,"x":150,"width":48,"var":"LongHu4","text":"虎","height":15,"fontSize":18,"color":"#f9a426","align":"center"}},{"type":"Text","props":{"y":25,"x":200,"width":48,"var":"LongHu5","text":"虎","height":15,"fontSize":18,"color":"#f9a426","align":"center"}}]},{"type":"Image","props":{"y":362,"x":257,"skin":"Car/result.png.png"},"child":[{"type":"Text","props":{"y":25,"x":122,"width":58,"var":"DanShuang","text":"双","height":15,"fontSize":18,"color":"#f9a426","align":"center"}},{"type":"Text","props":{"y":25,"x":4,"width":58,"var":"He","text":19,"height":15,"fontSize":18,"color":"#f9a426","align":"center"}},{"type":"Text","props":{"y":25,"x":62,"width":58,"var":"DaXiao","text":"大","height":15,"fontSize":18,"color":"#f9a426","align":"center"}}]},{"type":"Image","props":{"y":362,"x":6,"skin":"Car/issue.png.png"},"child":[{"type":"Text","props":{"y":25,"x":151,"width":98,"var":"QingHao","text":659024,"height":15,"fontSize":18,"color":"#f9a426","align":"center"}},{"type":"Text","props":{"y":25,"x":31,"width":98,"var":"RiQi","text":"2017-01-01","height":15,"fontSize":18,"color":"#f9a426","align":"left"}}]},{"type":"Button","props":{"y":319,"x":623,"width":73,"visible":false,"var":"Colse","stateNum":2,"skin":"Car/Button_bs.png.png","labelSize":26,"labelPadding":"0","labelColors":"#ffffff,#ffffff,#ffffff","labelBold":true,"label":"关闭","height":44}}]};
		return BeiJingCarViewUI;
	})(View);