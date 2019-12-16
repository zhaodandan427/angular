webpackJsonp([1],{

/***/ 291:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewRecordPageModule", function() { return ViewRecordPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__view_record__ = __webpack_require__(426);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ViewRecordPageModule = /** @class */ (function () {
    function ViewRecordPageModule() {
    }
    ViewRecordPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__view_record__["a" /* ViewRecordPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__view_record__["a" /* ViewRecordPage */]),
            ],
        })
    ], ViewRecordPageModule);
    return ViewRecordPageModule;
}());

//# sourceMappingURL=view-record.module.js.map

/***/ }),

/***/ 426:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ViewRecordPage; });
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


/**
 * Generated class for the ViewRecordPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ViewRecordPage = /** @class */ (function () {
    function ViewRecordPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.items = [];
        this.items = [
            { name: '履职统计名册', 'integral': 20, time: '2019-12-12', status: '待发放' },
            { name: 'iphone6', 'integral': 30, time: '2019-12-12', status: '已发放' },
            { name: 'iphone8', 'integral': 57, time: '2019-12-12', status: '待发放' },
            { name: 'iphone11', 'integral': 66, time: '2019-12-12', status: '已发放' }
        ];
    }
    ViewRecordPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ViewRecordPage');
    };
    ViewRecordPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-view-record',template:/*ion-inline-start:"E:\me\dutyevaluation_app\appmodule\src\main\resources\webapps\mobile\src\pages\view-record\view-record.html"*/'<!--\n 兑换记录\n-->\n<ion-header>\n  <ion-navbar color="headerColor">\n    <ion-title>兑换记录</ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content>\n  <ion-list>\n    <ion-item *ngFor="let item of this.items" style=\'padding-top: 20px;\'>\n      <ion-thumbnail item-start>\n        <img src="../../assets/imgs/moren.png">\n      </ion-thumbnail>\n      <h2>{{item.name}}</h2>\n      <p>所需积分: <span>{{item.integral}}</span></p>\n      <p class="status">\n        <span>{{item.time}}</span>\n        <span>{{item.status}}</span>\n      </p>\n    </ion-item>\n\n  </ion-list>\n</ion-content>'/*ion-inline-end:"E:\me\dutyevaluation_app\appmodule\src\main\resources\webapps\mobile\src\pages\view-record\view-record.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
    ], ViewRecordPage);
    return ViewRecordPage;
}());

//# sourceMappingURL=view-record.js.map

/***/ })

});
//# sourceMappingURL=1.js.map