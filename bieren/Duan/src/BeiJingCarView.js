var index = 0;
var indexs = 0;
var ID = '';
var Car = '';
var BeiJingCarView = (function (original) {
    Laya.class(Class, 'view.BeiJingCarView', original);

    function Class(fn) {
        Class.super(this);
        // 开始跑动到开奖的时间
        this.ShiJian = 0;
        this.PaiMingArr = ["Car/rankNum1.png.png", "Car/rankNum2.png.png", "Car/rankNum3.png.png", "Car/rankNum4.png.png", "Car/rankNum5.png.png", "Car/rankNum6.png.png", "Car/rankNum7.png.png", "Car/rankNum8.png.png", "Car/rankNum9.png.png", "Car/rankNum10.png.png"];
        this.QianSanMingArr = ["Car/car1.png.png", "Car/car2.png.png", "Car/car3.png.png", "Car/car4.png.png", "Car/car5.png.png", "Car/car6.png.png", "Car/car7.png.png", "Car/car8.png.png", "Car/car9.png.png", "Car/car10.png.png",];
        this.QianShiMingArr = ["Car/1.png.png", "Car/2.png.png", "Car/3.png.png", "Car/4.png.png", "Car/5.png.png", "Car/6.png.png", "Car/7.png.png", "Car/8.png.png", "Car/9.png.png", "Car/10.png.png",];
        this.QianSanMingCheHaoArr = ["Car/num0.png.png", "Car/num1.png.png", "Car/num2.png.png", "Car/num3.png.png", "Car/num4.png.png", "Car/num5.png.png", "Car/num6.png.png", "Car/num7.png.png", "Car/num8.png.png", "Car/num9.png.png",];
        this.aaa = [1, 9, 5, 4, 8, 6, 7, 10, 2, 3];
        // this.NumArr = [5, 2, 3, 4, 1, 6, 10, 8, 9, 7]; 
        // this.NumArr = [];// 存排名的数组
        this.CarArr = []; // 存车的前后位置的数组


        this.BtnShengYin.toggle = true;
        this.BtnShengYin.on(Laya.Event.CLICK, this, function () {
            if (this.BtnShengYin.selected == true) {
                Laya.SoundManager.playMusic("audio/cars/bg.mp3", 0);
            } else {
                Laya.SoundManager.stopMusic("audio/cars/bg.mp3", 0);
            }
        });




        this.aaaa.on(Laya.Event.CLICK, this, function () {
            this.YunDong();
            Laya.timer.frameLoop(1, this, this.ChangJingYunDong);
        });

        this.Http();




    }

    var _proto = Class.prototype;

    _proto.Http = function () {
        Http = new HttpRequestExtension();
        Http.init();
        
    }



    _proto.ShangYiJuJieGuo = function (NumArr, QiHao, XJQiHao, XiaQiKaiJiang) {
        console.log(NumArr, Key, XJQiHao, XiaQiKaiJiang);
        this.QingHao.text = QiHao;
        this.XiaQiKaiJiang.text = XJQiHao;
        this.KaiJiangShiJian.text = XiaQiKaiJiang;
        for (var i = 0; i < this.BoxPaiMing._childs.length; i++) {
            this.BoxPaiMing._childs[i].skin = this.PaiMingArr[NumArr[i] - 1];
        }
        this.ShangJuKaiJiang(NumArr, QiHao, XJQiHao);
    }

    _proto.CarYunDong = function () {
        for (var i = 0; i < this.BoxCar._childs.length; i++) {
            var Car = this.BoxCar._childs[i];
            Car.x -= 1;

        }
        // 到位置之后清除定时器
        if (this.BoxCar._childs[9].x <= -10) {
            Laya.timer.clear(this, this.CarYunDong);
            // 车开始做追逐动画
            this.ZhuiZhuDongHua();

            Laya.timer.loop(1000, this, this.JiShiKaiShi);
        }
    }

    _proto.ChangJingYunDong = function () {
        // 场景跑动
        for (var i = 0; i < 2; i++) {
            this.BoxBeiJIng._childs[i].x += 15;
            if (this.BoxBeiJIng._childs[i].x >= 696) {
                this.BoxBeiJIng._childs[i].x = -696;
            }
        }
    }

    _proto.YunDong = function () {
        this.QiPaoXian.visible = false;
        // this.UITimeNum.visible = false;
        // 车的原始速度
        for (var i = 0; i < this.BoxCar._childs.length; i++) {
            var Car = this.BoxCar._childs[i];
            // Car.x = Car.x + (i * 20);
            Car.x -= 2;
            Car.Fire = new Laya.Animation();
            Car.Fire.loadAnimation("Fire.ani");
            Car.Fire.play(0, true, "Fire");
            Car.Fire.x = 68;
            Car.addChild(Car.Fire);
        }
        Laya.timer.frameLoop(1, this, this.CarYunDong);
    }

    _proto.ZhuiZhuDongHua = function () {
        for (var i = 0; i < this.BoxCar._childs.length; i++) {
            var Car = this.BoxCar._childs[i];
            Car.xxx = 50 + Math.random() * 400;
            Car.Time = parseInt(Math.random() * 8 + 4) * 800;
            Car.index = 0;
            Car.indexs = 0;
            var Car
            // var index = 0;
            var _this = this;
            Laya.Tween.to(Car, { x: -Car.xxx, update: new Laya.Handler(this, this.updateColor, [Car]) }, Car.Time, null, Laya.Handler.create(Car, function () { // 往前走
                Car.index++;
                if (Car.index == 10) {
                    _this.ZhuiZhuDongHua();
                }
            }), i * 1);
        }
        // console.log(this.CarArr);
    }
    _proto.updateColor = function (Car) {
        this.CarArr.length = 0;
        var CarSuoYinArr = [];
        // 尾焰的显示隐藏
        if (Car.Time >= 4000 && Car.xxx <= 200) {
            Car.Fire.visible = false;
        } else {
            Car.Fire.visible = true;
        }
        // 名次排序
        for (var i = 0; i < this.BoxCar._childs.length; i++) {
            var Cars = this.BoxCar._childs[i];
            CarSuoYinArr.push(-Cars.x);
            this.CarArr.push(-Cars.x);
            this.CarArr.sort(function (a, b) {
                return b - a;
            });
        }
        for (var i = 0; i < this.BoxPaiMing._childs.length; i++) {
            for (var j = 0; j < this.BoxCar._childs.length; j++) {
                // 遍历数组和车的位置,得出名次是谁的
                if (CarSuoYinArr[i] == this.CarArr[j]) {
                    this.BoxPaiMing._childs[j].skin = this.PaiMingArr[i];
                }
            }
        }
    }


    _proto.ChangJIngPaoDong = function () {
        for (var i = 0; i < 2; i++) {
            this.BoxBeiJIng._childs[i].x += 15;
            if (this.BoxBeiJIng._childs[i].x >= 696) {
                this.BoxBeiJIng._childs[i].x = -696;
            }
        }
    }


    _proto.JiShiKaiShi = function () {
        this.ShiJian++;
        if (this.ShiJian == 20) { // 按照后台返回结果排序车的位置
            var CheZuiHouWeiZhi = [];
            for (var i = 0; i < this.BoxCar._childs.length; i++) {
                var Car = this.BoxCar._childs[i];
                Car.WeiZhi = 150 + Math.random() * 300;
                CheZuiHouWeiZhi.push(parseInt(Car.WeiZhi.toFixed(2)));

            }
            CheZuiHouWeiZhi.sort(function (a, b) {
                return b - a;
            });
            for (var i = 0; i < this.BoxCar._childs.length; i++) {
                var Car = this.BoxCar._childs[this.aaa[i] - 1];
                Laya.Tween.clearAll(Car);
                Car.xxx = -CheZuiHouWeiZhi[i] + (20 * i);
                console.log(Car.xxx);
                var _this = this;
                // this.aaa = [3, 9, 8, 6, 7, 5, 1, 4, 2, 10];
                Laya.Tween.to(Car, { x: (Car.xxx), update: new Laya.Handler(this, this.updateColor, [Car]) }, 5000, null, Laya.Handler.create(Car, function () {
                    Laya.timer.clear(_this, _this.ChangJingYunDong);
                    _this.ShiJian = 0;
                    Laya.timer.clear(_this, _this.JiShiKaiShi);
                    // 终点显示出来
                    _this.ZhongDianXian.visible = true;
                    Laya.timer.once(1000, _this, function () {
                        Laya.timer.frameLoop(1, _this, _this.ChongXian);
                    });
                }));
            }
        }
    }

    _proto.ChongXian = function () {
        var index = 0
        for (var i = 0; i < this.BoxCar._childs.length; i++) {
            var Car = this.BoxCar._childs[i];
            Car.x -= 9;
        }
        if (this.BoxCar._childs[this.aaa[9] - 1].x <= -696) {
            Laya.timer.clear(this, this.ChongXian);
            // 前三名领奖
            Laya.timer.once(500, this, function () {
                this.QianSanMing.visible = true;
                for (var i = 0; i < 3; i++) {
                    this.QianSanMing._childs[i].skin = this.QianSanMingArr[this.aaa[i] - 1];
                }
                var one = this.aaa[0];
                var two = this.aaa[1];
                var three = this.aaa[2];
                // console.log(one.toString());
                if (one.toString().length == 1) {
                    this.GJS.skin = "Car/num0.png.png";
                    this.GJG.skin = this.QianSanMingCheHaoArr[this.aaa[0]];
                } else {
                    this.GJS.skin = "Car/num1.png.png";
                    this.GJG.skin = "Car/num0.png.png";
                }
                if (two.toString().length == 1) {
                    this.YJS.skin = "Car/num0.png.png";
                    this.YJG.skin = this.QianSanMingCheHaoArr[this.aaa[1]];
                } else {
                    this.YJS.skin = "Car/num1.png.png";
                    this.YJG.skin = "Car/num0.png.png";
                }
                if (three.toString().length == 1) {
                    this.JJS.skin = "Car/num0.png.png";
                    this.JJG.skin = this.QianSanMingCheHaoArr[this.aaa[2]];
                } else {
                    this.JJS.skin = "Car/num1.png.png";
                    this.JJG.skin = "Car/num0.png.png";
                }

                Laya.timer.once(1500, this, function () {
                    this.QianSanMing.visible = false;
                    this.QianShiMing.visible = true;
                    for (var i = 0; i < this.QianShiMing._childs.length; i++) {
                        this.QianShiMing._childs[i].skin = this.QianShiMingArr[this.aaa[i] - 1];
                        var Car = this.QianShiMing._childs[i];
                        if (i == 0 || i == 2 || i == 4 || i == 6 || i == 8) {
                            Car.xx = 241;
                        } else {
                            Car.xx = 508;
                        }
                        Laya.Tween.to(Car, { x: Car.xx }, 300, null, Laya.Handler.create(this, function () {
                            index++;
                            if (index == 10) {
                                Laya.timer.once(1000, this, this.CarFuWei);
                            }
                        }), i * 300);
                    }
                });
            });
        }
    }

    _proto.CarFuWei = function () {
        this.QianShiMing.visible = false;
        this.ZhongDianXian.visible = false;
        this.QiPaoXian.visible = true;
        // this.UITimeNum.visible = true;
        for (var i = 0; i < this.BoxCar._childs.length; i++) {
            var Car = this.BoxCar._childs[i];
            var Cars = this.QianShiMing._childs[i];
            if (i == 0 || i == 2 || i == 4 || i == 6 || i == 8) {
                Cars.x = 701;
            } else {
                Cars.x = 788;
            }
            Car.x = 54 - (6 * i);
            Car.Fire.visible = false;
        }
    }

    _proto.ShangJuKaiJiang = function (NumArr, QiHao, Textt) {
        var d = new Date();
        var Yue;
        var Ri;
        var aa = (d.getMonth() + 1).toString();
        var bb = (d.getDate()).toString();
        if (aa.length == 1) {
            Yue = "0" + aa;
        } else {
            Yue = aa;
        }
        if (bb.length == 1) {
            Ri = "0" + bb;
        } else {
            Ri = bb;
        }
        var str = d.getFullYear() + "-" + Yue + "-" + Ri;
        this.XiaQiKaiJiang.text = Textt;
        this.RiQi.text = str;
        this.QingHao.text = QiHao;
        var index = NumArr[0] + NumArr[1];
        this.He.text = parseInt(index);
        // 大小
        if (index <= 11) {
            this.DaXiao.text = "小";
        } else if (index >= 12) {
            this.DaXiao.text = "大 ";
        }
        // 单双
        if (index % 2 == 0) {
            this.DanShuang.text = "双";
        } else {
            this.DanShuang.text = "单";
        }
        // 龙虎
        if (NumArr[0] > NumArr[9]) {
            this.LongHu1.text = "龙";
        } else {
            this.LongHu1.text = "虎";
        }
        if (NumArr[1] > NumArr[8]) {
            this.LongHu2.text = "龙";
        } else {
            this.LongHu2.text = "虎";
        }
        if (NumArr[2] > NumArr[7]) {
            this.LongHu3.text = "龙";
        } else {
            this.LongHu3.text = "虎";
        }
        if (NumArr[3] > NumArr[6]) {
            this.LongHu4.text = "龙";
        } else {
            this.LongHu4.text = "虎";
        }
        if (NumArr[4] > NumArr[5]) {
            this.LongHu5.text = "龙";
        } else {
            this.LongHu5.text = "虎";
        }
    }





    return Class;
})(BeiJingCarViewUI);

function Trim(str) {
    return str.replace(/(^\s*)|(\s*$)/g, "");
}