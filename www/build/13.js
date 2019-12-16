webpackJsonp([13],{

/***/ 282:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DutyContentPageModule", function() { return DutyContentPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__duty_content__ = __webpack_require__(417);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var DutyContentPageModule = /** @class */ (function () {
    function DutyContentPageModule() {
    }
    DutyContentPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__duty_content__["a" /* DutyContentPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__duty_content__["a" /* DutyContentPage */]),
            ],
        })
    ], DutyContentPageModule);
    return DutyContentPageModule;
}());

//# sourceMappingURL=duty-content.module.js.map

/***/ }),

/***/ 417:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DutyContentPage; });
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
 * Generated class for the DutyContentPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var DutyContentPage = /** @class */ (function () {
    function DutyContentPage(navCtrl, navParams, viewCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.type = '';
        this.title = "";
        this.items = [];
        this.items = this.navParams.data.list;
        this.title = this.navParams.data.title;
        console.log(this.navParams.data);
    }
    DutyContentPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad DutyContentPage');
    };
    DutyContentPage.prototype.dismiss = function () {
        this.viewCtrl.dismiss();
    };
    DutyContentPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-duty-content',template:/*ion-inline-start:"E:\me\dutyevaluation_app\appmodule\src\main\resources\webapps\mobile\src\pages\duty-content\duty-content.html"*/'<ion-header>\n\n  <ion-navbar>\n    <ion-title>{{title}}</ion-title>\n    <ion-buttons start>\n      <button ion-button (click)="dismiss()">\n        <span ion-text color="primary" showWhen="ios">关闭</span>\n        <ion-icon name="md-close" showWhen="android,windows"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n  <ion-list>\n    <div *ngIf="items.length==0" style="color:#999999;text-align:center;margin-top:150px">\n      <img src="./assets/imgs/null.png" style="width:150px;height:150px" alt="">\n      <p>暂无内容</p>\n    </div>\n    <ion-item *ngFor="let item of items">\n      <h2 class="title">{{item.content}}</h2>\n      <p>{{item.datetime}}</p>\n      <span class="labels" *ngFor="let lab of item.label">{{lab.key}}</span>\n    </ion-item>\n  </ion-list>\n</ion-content>'/*ion-inline-end:"E:\me\dutyevaluation_app\appmodule\src\main\resources\webapps\mobile\src\pages\duty-content\duty-content.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ViewController */]])
    ], DutyContentPage);
    return DutyContentPage;
}());

//# sourceMappingURL=duty-content.js.map

/***/ })

});
//# sourceMappingURL=13.js.map