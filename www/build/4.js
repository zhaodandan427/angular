webpackJsonp([4],{

/***/ 288:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OpinionEvaluatePageModule", function() { return OpinionEvaluatePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__opinion_evaluate__ = __webpack_require__(423);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var OpinionEvaluatePageModule = /** @class */ (function () {
    function OpinionEvaluatePageModule() {
    }
    OpinionEvaluatePageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__opinion_evaluate__["a" /* OpinionEvaluatePage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__opinion_evaluate__["a" /* OpinionEvaluatePage */]),
            ],
        })
    ], OpinionEvaluatePageModule);
    return OpinionEvaluatePageModule;
}());

//# sourceMappingURL=opinion-evaluate.module.js.map

/***/ }),

/***/ 423:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OpinionEvaluatePage; });
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




var OpinionEvaluatePage = /** @class */ (function () {
    function OpinionEvaluatePage(navCtrl, navParams, homeService, toastService) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.homeService = homeService;
        this.toastService = toastService;
        this.title = localStorage.title;
        this.sign = localStorage.sign;
        this.params = '';
        this.grade = 0;
        this.userIds = [];
        //页面传参
        if (this.navParams.data.type == 'edit') {
            this.params = this.navParams.data;
            this.grade = this.params.grade;
        }
        else {
            this.params = this.navParams.data.checks[0];
            this.grade = 0;
        }
        console.log(this.params);
    }
    OpinionEvaluatePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad OpinionEvaluatePage');
    };
    //确认
    OpinionEvaluatePage.prototype.evaluate = function () {
        var _this = this;
        if (this.params.type == 'edit') {
            this.userIds.push(this.params.id);
        }
        else {
            for (var i = 0; i < this.navParams.data.checks.length; i++) {
                this.userIds.push(this.navParams.data.checks[i].id);
            }
        }
        var obj = {
            user_token: localStorage.token,
            evalType: "1",
            grade: this.grade,
            ids: this.userIds,
        };
        this.homeService.evaluate(obj).then(function (res) {
            console.log(res);
            if (res.code == 0) {
                _this.toastService.presentToast('考评数据已提交', 'bottom');
                if (_this.navParams.data.type == "edit") {
                    _this.navCtrl.pop();
                }
                else {
                    window.history.go(-2);
                    _this.navCtrl.popTo(_this.navCtrl.getByIndex(1));
                }
            }
        });
    };
    OpinionEvaluatePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-opinion-evaluate',template:/*ion-inline-start:"E:\me\dutyevaluation_app\appmodule\src\main\resources\webapps\mobile\src\pages\opinion-evaluate\opinion-evaluate.html"*/'<ion-header>\n\n  <ion-navbar>\n    <ion-title>{{title}}</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n\n  <ion-card>\n      <ion-card-header class="card-head">\n        考评等级为：\n      </ion-card-header>\n      <!-- <h6 class="answer-title">考评等级为：</h6> -->\n      <ion-card-content no-padding>\n\n        <ion-grid class="under-div">\n          <ion-row radio-group [(ngModel)]="grade">\n            <ion-col col-12 style="padding-left:30px">\n              <ion-row>\n                <ion-radio value="1" mode="md"></ion-radio>\n                <ion-col col-9 no-padding style="font-size:13px">\n                    &nbsp; 优秀\n                  </ion-col>\n              </ion-row>\n            </ion-col>\n            <ion-col col-12 style="padding-left:30px">\n              <ion-row>\n                <ion-radio value="2" mode="md"></ion-radio>\n                <ion-col col-9 no-padding style="font-size:13px">\n                    &nbsp; 称职\n                  </ion-col>\n              </ion-row>\n            </ion-col>\n            <ion-col col-12 style="padding-left:30px">\n              <ion-row>\n                <ion-radio value="3" mode="md" item-end></ion-radio>\n                <ion-col col-9 no-padding style="font-size:13px">\n                    &nbsp; 努力达标\n                </ion-col>\n              </ion-row>\n            </ion-col>\n          </ion-row>\n          <ion-row style="margin-top:30px">\n            <ion-col col-5 style="padding-left:15px">\n              {{sign}}\n            </ion-col>\n            <ion-col col-7>\n              <img src="{{params.signatureUrl}}" style="width:150px">\n            </ion-col>\n          </ion-row>\n          <ion-row>\n            <ion-col col-12 class="answer-date">\n              {{params.reviewTime}}\n            </ion-col>\n          </ion-row>\n        </ion-grid>\n      </ion-card-content>\n    </ion-card>\n\n</ion-content>\n<ion-footer>\n  <ion-toolbar>\n    <ion-grid>\n      <ion-row style="text-align:center">\n        <ion-col col-12>\n          <button ion-button round (click)="evaluate()" small style="width:100%">确认</button>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </ion-toolbar>\n</ion-footer>'/*ion-inline-end:"E:\me\dutyevaluation_app\appmodule\src\main\resources\webapps\mobile\src\pages\opinion-evaluate\opinion-evaluate.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__service_HomeService__["a" /* HomeService */], __WEBPACK_IMPORTED_MODULE_3__service_toast_service__["a" /* ToastService */]])
    ], OpinionEvaluatePage);
    return OpinionEvaluatePage;
}());

//# sourceMappingURL=opinion-evaluate.js.map

/***/ })

});
//# sourceMappingURL=4.js.map