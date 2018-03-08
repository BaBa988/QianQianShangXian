var HttpRequestExtension = (function (_super) {
    function HttpRequestExtension() {
        HttpRequestExtension.__super.call(this);
        this.xhr = new Laya.HttpRequest();
        this.xhr.http.timeout = 10000; //设置超时时间；
    }
    Laya.class(HttpRequestExtension, 'HttpRequestExtension', _super);
    var __proto = HttpRequestExtension.prototype;

    __proto.init = function () { 
        this.xhr.send("/PeiZhi.json", "", "get", "json");
        this.xhr.once(Laya.Event.COMPLETE, this, this.completeHandler); 
    }

    __proto.completeHandler = function (obj) {
        console.log(obj.JieGuo);
        GameMainCar.ShuJu(obj);
        // obj.QiHao
    }

    

    return HttpRequestExtension;
})(Laya.HttpRequest)