webpackJsonp([6],{

/***/ 290:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OpinionChairmanPageModule", function() { return OpinionChairmanPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__opinion_chairman__ = __webpack_require__(425);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var OpinionChairmanPageModule = /** @class */ (function () {
    function OpinionChairmanPageModule() {
    }
    OpinionChairmanPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__opinion_chairman__["a" /* OpinionChairmanPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__opinion_chairman__["a" /* OpinionChairmanPage */]),
            ],
        })
    ], OpinionChairmanPageModule);
    return OpinionChairmanPageModule;
}());

//# sourceMappingURL=opinion-chairman.module.js.map

/***/ }),

/***/ 425:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OpinionChairmanPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(40);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var OpinionChairmanPage = /** @class */ (function () {
    function OpinionChairmanPage(navCtrl, navParams, alertCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.alertCtrl = alertCtrl;
        this.title = localStorage.title;
        this.underline = '____';
        this.check = '';
    }
    OpinionChairmanPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad OpinionChairmanPage');
    };
    //评价
    OpinionChairmanPage.prototype.toEdit = function () {
        var _this = this;
        var alert = this.alertCtrl.create();
        alert.setTitle('主席会议审议意见');
        alert.addInput({
            type: 'radio',
            label: '优秀',
            value: '优秀',
            checked: true
        });
        alert.addInput({
            type: 'radio',
            label: '称职',
            value: '称职',
        });
        alert.addInput({
            type: 'radio',
            label: '努力达标',
            value: '努力达标',
        });
        alert.addButton('取消');
        alert.addButton({
            text: '确定',
            handler: function (data) {
                console.log(data);
                _this.check = ' ' + data + ' ';
                _this.underline = '';
            }
        });
        alert.present();
    };
    //确认
    OpinionChairmanPage.prototype.toList = function () {
        this.navCtrl.pop();
    };
    OpinionChairmanPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-opinion-chairman',template:/*ion-inline-start:"E:\me\dutyevaluation_app\appmodule\src\main\resources\webapps\mobile\src\pages\opinion-chairman\opinion-chairman.html"*/'<ion-header>\n\n  <ion-navbar>\n    <ion-title>{{title}}</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n\n    <ion-card>\n        <ion-card-header class="card-head">\n          主席会议审议意见\n        </ion-card-header>\n        <ion-card-content no-padding>\n\n          <ion-grid class="under-div">\n            <ion-row>\n              <ion-col col-12 class="answer-msg">\n\n                根据个人总结和述职情况，综合专门委员会，界别及地区政协委员活动小组建议， 经<span> 十 </span>届区政协第<span> 十三 </span>次主席会议研究，您的2019年度履职评定为\n                <u  (click)="toEdit()">{{underline}}</u><span (click)="toEdit()">{{check}}</span>等次。\n\n              </ion-col>\n            </ion-row>\n            <ion-row>\n              <ion-col col-5 style="padding-left:15px">\n\n              </ion-col>\n              <ion-col col-7>\n                <img src="./assets/imgs/qianzi.jpg" style="width:150px">\n              </ion-col>\n            </ion-row>\n            <ion-row>\n              <ion-col col-12 class="answer-date">\n                2019年10月11日\n              </ion-col>\n            </ion-row>\n          </ion-grid>\n        </ion-card-content>\n      </ion-card>\n\n</ion-content>\n\n<ion-footer>\n    <ion-toolbar>\n      <ion-grid>\n        <ion-row style="text-align:center">\n          <ion-col col-12>\n            <button ion-button round (click)="toList()" small style="width:100%">确认</button>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n    </ion-toolbar>\n  </ion-footer>\n'/*ion-inline-end:"E:\me\dutyevaluation_app\appmodule\src\main\resources\webapps\mobile\src\pages\opinion-chairman\opinion-chairman.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], OpinionChairmanPage);
    return OpinionChairmanPage;
}());

//# sourceMappingURL=opinion-chairman.js.map

/***/ })

});
//# sourceMappingURL=6.js.map