webpackJsonp([8],{

/***/ 286:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyPointsPageModule", function() { return MyPointsPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__my_points__ = __webpack_require__(421);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var MyPointsPageModule = /** @class */ (function () {
    function MyPointsPageModule() {
    }
    MyPointsPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__my_points__["a" /* MyPointsPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__my_points__["a" /* MyPointsPage */]),
            ],
        })
    ], MyPointsPageModule);
    return MyPointsPageModule;
}());

//# sourceMappingURL=my-points.module.js.map

/***/ }),

/***/ 421:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyPointsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__lib_gocom_gocom__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__lib_gocom_gocom___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__lib_gocom_gocom__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the MyPointsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var MyPointsPage = /** @class */ (function () {
    function MyPointsPage(navCtrl, navParams, alertCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.alertCtrl = alertCtrl;
        this.item = {};
        this.item = {
            score: '2378',
            data: [
                { name: '委员履职纪念册', requirintegral: 100, yinchuan: 20, convertible: 23 },
                { name: '手机支架', requirintegral: 3300, yinchuan: 39, convertible: 0 },
                { name: 'iphone11', requirintegral: 1000, yinchuan: 10, convertible: 15 },
                { name: 'iphone5', requirintegral: 400, yinchuan: 13, convertible: 0 }
            ],
            detailList: [
                { name: '每日登录', time: '2019-12-01', score: 30 },
                { name: '初始积分', time: '2019-12-02', score: 100 },
                { name: '委员生日', time: '2019-12-03', score: 400 },
                { name: '奖励履职', time: '2019-12-01', score: 600 },
                { name: '学习资料有效阅读', time: '2019-12-04', score: 800 },
                { name: '平台专题活动话题讨论', time: '2019-12-05', score: 1000 },
                { name: '委员圈', time: '2019-12-06', score: 300 },
                { name: '会议活动', time: '2019-12-07', score: 32 },
                { name: '参加全会', time: '2019-12-08', score: 26 }
            ]
        };
        this.item.score = this.item.score.replace(/(\d{1,3})(?=(\d{3})+(?:$|\.))/g, '$1,');
    }
    MyPointsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad MyPointsPage');
    };
    //关闭应用
    MyPointsPage.prototype.closeWindows = function () {
        var gocom = new __WEBPACK_IMPORTED_MODULE_2__lib_gocom_gocom__["GoCom"]();
        gocom.closeWindow();
    };
    //积分规则页面跳转
    MyPointsPage.prototype.integralRule = function () {
        this.navCtrl.push('IntegralRulePage');
    };
    //积分排行页面跳转
    MyPointsPage.prototype.pointsRange = function () {
        this.navCtrl.push('PointsRangePage');
    };
    //查看积分记录
    MyPointsPage.prototype.viewRecord = function () {
        this.navCtrl.push("ViewRecordPage");
    };
    //立即兑换
    MyPointsPage.prototype.integral = function (item) {
        var alert = this.alertCtrl.create({
            subTitle: '您与2019-12-01 已兑换过还礼品是否还需要兑换？',
            buttons: [
                {
                    text: '兑换',
                    handler: function () {
                    }
                },
                {
                    text: '取消',
                    handler: function () {
                        console.log('Agree clicked');
                    }
                }
            ]
        });
        alert.present();
    };
    //上拉加载更多
    MyPointsPage.prototype.doInfinite = function (infiniteScroll) {
        var _this = this;
        setTimeout(function () {
            for (var i = 0; i < 1; i++) {
                (_a = _this.item.detailList).push.apply(_a, _this.item.detailList);
            }
            infiniteScroll.complete();
            var _a;
        }, 500);
    };
    MyPointsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-my-points',template:/*ion-inline-start:"E:\me\dutyevaluation_app\appmodule\src\main\resources\webapps\mobile\src\pages\my-points\my-points.html"*/'<ion-header>\n  <ion-navbar color="headerColor">\n    <ion-buttons start>\n      <button ion-button clear class="btncolor" (click)="closeWindows()">\n        <ion-icon name="arrow-back" class="arrow-back"></ion-icon>\n      </button>\n    </ion-buttons>\n    <ion-title>我的积分</ion-title>\n    <span class="points-rules" (click)="integralRule()">积分规则</span>\n  </ion-navbar>\n  <!-- <ion-icon ios="ios-arrow-back" md="md-arrow-back"></ion-icon> -->\n</ion-header>\n\n\n<ion-content>\n  <!-- 当前积分 -->\n\n  <div class="current-score">\n    <span>{{item.score}}</span><br />\n    <span>当前积分</span>\n    <span class="points-range" (click)="pointsRange()">积分排行</span>\n  </div>\n\n  <!-- 积分兑换 -->\n  <div class="integral-exchange">\n    <div>\n      <span class="score-exchange">积分兑换</span>\n      <span class="view-record" (click)="viewRecord()">查看积分记录</span>\n    </div>\n    <ion-list>\n      <ion-item *ngFor="let items of item.data;let key=index">\n        <ion-thumbnail item-start>\n          <img src="../../assets/imgs/moren.png">\n        </ion-thumbnail>\n        <h2>{{items.name}}</h2>\n        <p>所需积分: <span>{{items.requirintegral}}</span></p>\n        <p>已兑换<span>{{items.yinchuan}}</span>份</p>\n        <p>可兑换<span>{{items.convertible}}</span>份</p>\n        <button ion-button item-end (click)="integral(items)">立即兑换</button>\n      </ion-item>\n    </ion-list>\n  </div>\n\n  <!-- 登录积分兑换详情 -->\n  <div class="integral-details">\n    <span class="integral-title">积分兑换</span>\n    <ion-grid *ngFor="let items of this.item.detailList;">\n      <ion-row>\n        <ion-col col-5>\n          {{items.name}}\n        </ion-col>\n        <ion-col col-4>\n          {{items.time}}\n        </ion-col>\n        <ion-col col-3>\n          <i>+</i>{{items.score}}\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n\n    <!-- 加载分页 -->\n    <ion-infinite-scroll (ionInfinite)="doInfinite($event)">\n      <ion-infinite-scroll-content></ion-infinite-scroll-content>\n    </ion-infinite-scroll>\n  </div>\n\n</ion-content>'/*ion-inline-end:"E:\me\dutyevaluation_app\appmodule\src\main\resources\webapps\mobile\src\pages\my-points\my-points.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], MyPointsPage);
    return MyPointsPage;
}());

//# sourceMappingURL=my-points.js.map

/***/ })

});
//# sourceMappingURL=8.js.map