webpackJsonp([12],{

/***/ 285:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DutyHistoryPageModule", function() { return DutyHistoryPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__duty_history__ = __webpack_require__(420);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var DutyHistoryPageModule = /** @class */ (function () {
    function DutyHistoryPageModule() {
    }
    DutyHistoryPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__duty_history__["a" /* DutyHistoryPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__duty_history__["a" /* DutyHistoryPage */]),
            ],
        })
    ], DutyHistoryPageModule);
    return DutyHistoryPageModule;
}());

//# sourceMappingURL=duty-history.module.js.map

/***/ }),

/***/ 420:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DutyHistoryPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__service_HomeService__ = __webpack_require__(105);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var DutyHistoryPage = /** @class */ (function () {
    function DutyHistoryPage(navCtrl, navParams, homeService) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.homeService = homeService;
        this.items = [];
    }
    DutyHistoryPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad DutyHistoryPage');
    };
    DutyHistoryPage.prototype.ionViewCanEnter = function () {
        this.getList();
    };
    //获取列表数据
    DutyHistoryPage.prototype.getList = function () {
        var _this = this;
        var obj = {
            user_token: localStorage.token,
            page: 1,
            size: 9999
        };
        this.homeService.getOpinionList(obj).then(function (res) {
            console.log(res);
            _this.items = res.data.info;
        });
    };
    //下载pdf 
    DutyHistoryPage.prototype.downloadPdf = function (item) {
        // window.open(item.attachment);
        window.location.href = item.attachment;
        // location.href = item.attachment;
    };
    DutyHistoryPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-duty-history',template:/*ion-inline-start:"E:\me\dutyevaluation_app\appmodule\src\main\resources\webapps\mobile\src\pages\duty-history\duty-history.html"*/'<ion-header>\n\n  <ion-navbar>\n    <ion-title>历史履职评价</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n    <ion-list>\n        <div *ngIf="items.length==0" style="color:#999999;text-align:center;margin-top:150px">\n            <img src="./assets/imgs/null.png" style="width:150px;height:150px" alt="">\n            <p>暂无内容</p>\n        </div>\n        <ion-item *ngFor="let item of items" (click)="downloadPdf(item)">\n          <h5 class="title">{{item.sheetTitle}}</h5>\n        </ion-item>\n      </ion-list>\n\n</ion-content>\n'/*ion-inline-end:"E:\me\dutyevaluation_app\appmodule\src\main\resources\webapps\mobile\src\pages\duty-history\duty-history.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__service_HomeService__["a" /* HomeService */]])
    ], DutyHistoryPage);
    return DutyHistoryPage;
}());

//# sourceMappingURL=duty-history.js.map

/***/ })

});
//# sourceMappingURL=12.js.map