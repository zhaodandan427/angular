webpackJsonp([9],{

/***/ 287:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IntegralRulePageModule", function() { return IntegralRulePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__integral_rule__ = __webpack_require__(422);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var IntegralRulePageModule = /** @class */ (function () {
    function IntegralRulePageModule() {
    }
    IntegralRulePageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__integral_rule__["a" /* IntegralRulePage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__integral_rule__["a" /* IntegralRulePage */]),
            ],
        })
    ], IntegralRulePageModule);
    return IntegralRulePageModule;
}());

//# sourceMappingURL=integral-rule.module.js.map

/***/ }),

/***/ 422:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IntegralRulePage; });
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
 * Generated class for the IntegralRulePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var IntegralRulePage = /** @class */ (function () {
    function IntegralRulePage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.items = [];
        this.items =
            [
                { title: '参加全会：', content: '参与签到一次全会会议，奖励' },
                { title: '会议活动：', content: '参与一次会议、活动，奖励' },
                { title: ' 委员圈：', content: '发表一次委员圈，多次发表每日奖励一次,奖励' },
                { title: '提案和社情民意信息：', content: '提案、社情民意信息，奖励' },
                { title: '平台专题活动话题讨论：', content: '按次奖励' },
                { title: '学习资料有效阅读：', content: '同一篇每日奖励一次，奖励' },
                { title: '活动相册', content: '1.点赞,上传照片等操作每日奖励一次，奖励', content2: '2.评论相册按评论次数给分，每日不设上限。' },
                { title: '奖励履职：', content: '委员获得一次奖励履职，奖励' },
                { title: '委员生日：', content: '委员生日，每年一次系统自动发放，奖励' },
                { title: '初始积分', content: '委员初始积分，系统自动发放，奖励' },
                { title: '每日登录：', content: '每日登录系统，每天只奖励一次，奖励' }
            ];
    }
    IntegralRulePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad IntegralRulePage');
    };
    IntegralRulePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-integral-rule',template:/*ion-inline-start:"E:\me\dutyevaluation_app\appmodule\src\main\resources\webapps\mobile\src\pages\integral-rule\integral-rule.html"*/'<!--\n  积分规则页面\n-->\n\n<ion-header>\n  <ion-navbar color="headerColor">\n    <ion-title>积分规则</ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content padding>\n  <h2>海淀政协委员积分兑换规则说明</h2>\n  <div class="rules-content">\n    <div *ngFor="let item of this.items">\n      <p style=\'color:#414042\'>{{item.title}}</p>\n      <p style=\'color:#808285\'>{{item.content}}<span>10</span>份。</p>\n      <p style=\'color:#808285\'>{{item.content2}}<span></span></p>\n    </div>\n  </div>\n\n</ion-content>'/*ion-inline-end:"E:\me\dutyevaluation_app\appmodule\src\main\resources\webapps\mobile\src\pages\integral-rule\integral-rule.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
    ], IntegralRulePage);
    return IntegralRulePage;
}());

//# sourceMappingURL=integral-rule.js.map

/***/ })

});
//# sourceMappingURL=9.js.map