webpackJsonp([5],{

/***/ 294:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OpinionEntrustPageModule", function() { return OpinionEntrustPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__opinion_entrust__ = __webpack_require__(714);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var OpinionEntrustPageModule = /** @class */ (function () {
    function OpinionEntrustPageModule() {
    }
    OpinionEntrustPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__opinion_entrust__["a" /* OpinionEntrustPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__opinion_entrust__["a" /* OpinionEntrustPage */]),
            ],
        })
    ], OpinionEntrustPageModule);
    return OpinionEntrustPageModule;
}());

//# sourceMappingURL=opinion-entrust.module.js.map

/***/ }),

/***/ 714:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OpinionEntrustPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__service_HomeService__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__service_toast_service__ = __webpack_require__(108);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var OpinionEntrustPage = /** @class */ (function () {
    function OpinionEntrustPage(navCtrl, navParams, homeService, toastService) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.homeService = homeService;
        this.toastService = toastService;
        this.title = localStorage.title;
        this.items = [];
        this.choose = '';
        var obj = {
            user_token: localStorage.token,
        };
        //获取委托人列表
        this.homeService.getAssigneelist(obj).then(function (res) {
            console.log(res);
            _this.items = res.data.info;
        });
    }
    OpinionEntrustPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad OpinionEntrustPage');
    };
    //确认
    OpinionEntrustPage.prototype.entrust = function () {
        var _this = this;
        if (this.choose == '') {
            this.toastService.presentToast('请选择委托人', 'bottom');
        }
        else {
            var obj = {
                user_token: localStorage.token,
                reviewerId: this.choose
            };
            this.homeService.entrust(obj).then(function (res) {
                console.log(res);
                if (res.code == 0) {
                    _this.toastService.presentToast('委托成功', 'bottom');
                    _this.navCtrl.pop();
                }
            });
        }
    };
    OpinionEntrustPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-opinion-entrust',template:/*ion-inline-start:"E:\me\dutyevaluation_app\appmodule\src\main\resources\webapps\mobile\src\pages\opinion-entrust\opinion-entrust.html"*/'<ion-header>\n\n  <ion-navbar>\n    <ion-title>{{title}}</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n  <ion-list radio-group [(ngModel)]="choose">\n    <ion-item *ngFor="let item of items">\n      <ion-radio value="{{item.userId}}" item-start mode="md"></ion-radio>\n      <ion-avatar item-start>\n        <img style="border-radius: 5px;float:left" onerror="this.onerror=null;src=\'./assets/imgs/user.png\'" src="{{item.avatar}}">\n      </ion-avatar>\n      <ion-label>{{item.userName}}</ion-label>\n    </ion-item>\n  </ion-list>\n\n</ion-content>\n<ion-footer>\n  <ion-toolbar>\n    <ion-grid>\n      <ion-row style="text-align:center">\n        <ion-col col-12>\n          <button ion-button round (click)="entrust()" small style="width:100%">确认</button>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </ion-toolbar>\n</ion-footer>'/*ion-inline-end:"E:\me\dutyevaluation_app\appmodule\src\main\resources\webapps\mobile\src\pages\opinion-entrust\opinion-entrust.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__service_HomeService__["a" /* HomeService */],
            __WEBPACK_IMPORTED_MODULE_3__service_toast_service__["a" /* ToastService */]])
    ], OpinionEntrustPage);
    return OpinionEntrustPage;
}());

//# sourceMappingURL=opinion-entrust.js.map

/***/ })

});
//# sourceMappingURL=5.js.map