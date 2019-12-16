webpackJsonp([10],{

/***/ 284:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageModule", function() { return HomePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home__ = __webpack_require__(419);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var HomePageModule = /** @class */ (function () {
    function HomePageModule() {
    }
    HomePageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__home__["a" /* HomePage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__home__["a" /* HomePage */]),
            ],
        })
    ], HomePageModule);
    return HomePageModule;
}());

//# sourceMappingURL=home.module.js.map

/***/ }),

/***/ 419:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__lib_gocom_gocom__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__lib_gocom_gocom___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__lib_gocom_gocom__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__service_HomeService__ = __webpack_require__(105);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var HomePage = /** @class */ (function () {
    function HomePage(navCtrl, navParams, homeService) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.homeService = homeService;
        this.item = {
            isEval: 1,
            createTime: '',
            owner: {
                activityGroup: "",
                avatar: "",
                identifier: "",
                specialCommittee: "",
                subsector: "",
                userId: "",
                userName: ""
            }
        };
        this.getData();
    }
    HomePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad HomePage');
    };
    HomePage.prototype.toInfo = function () {
        this.navCtrl.push('DutyInfoPage', this.item);
    };
    //关闭应用
    HomePage.prototype.closeWindows = function () {
        var gocom = new __WEBPACK_IMPORTED_MODULE_2__lib_gocom_gocom__["GoCom"]();
        gocom.closeWindow();
    };
    //获取详情数据
    HomePage.prototype.getData = function () {
        var _this = this;
        var obj = {
            user_token: localStorage.token
        };
        this.homeService.getOpinionInfo(obj).then(function (res) {
            console.log(res);
            _this.item = res.data;
        });
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"E:\me\dutyevaluation_app\appmodule\src\main\resources\webapps\mobile\src\pages\home\home.html"*/'<ion-header>\n\n  <ion-navbar>\n    <ion-buttons start>\n      <!-- <ion-icon name="arrow-back" style="color:#48A7F3;font-size: 3rem"></ion-icon> -->\n      <button ion-button clear class="btncolor" (click)="closeWindows()">\n        <ion-icon name="arrow-back" style="color:#48A7F3;font-size: 3rem"></ion-icon>\n        <!--<img src="./assets/imgs/back_n@2x.png" style="width: 12px">-->\n      </button>\n    </ion-buttons>\n    <ion-title>委员履职评价</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content style="text-align:center">\n  <h4 style="margin-top:50px">政协北京市海淀区第\n    <span> {{item.session}}</span>届委员会</h4>\n  <h4>\n    <span> {{item.year}} </span>年度委员履职记录</h4>\n  <h6 *ngIf="item.isTrial == 1">（试行）</h6>\n\n  <ion-grid class="under-div">\n    <div style="padding-left:15%">\n      <ion-row class="item">\n        <ion-col col-5 class="label">\n          委员姓名\n        </ion-col>\n        <ion-col col-1> :</ion-col>\n        <ion-col col-6 class="value">\n          {{item.owner.userName}}\n        </ion-col>\n      </ion-row>\n      <ion-row class="item">\n        <ion-col col-5 class="label">\n          委员号\n        </ion-col>\n        <ion-col col-1> :</ion-col>\n        <ion-col col-6 class="value">\n          {{item.owner.identifier}}\n        </ion-col>\n      </ion-row>\n      <ion-row class="item">\n        <ion-col col-5 class="label">\n          专门委员会\n        </ion-col>\n        <ion-col col-1> :</ion-col>\n        <ion-col col-6 class="value">\n          {{item.owner.specialCommittee}}\n        </ion-col>\n      </ion-row>\n      <ion-row class="item">\n        <ion-col col-5 class="label">\n          界别\n        </ion-col>\n        <ion-col col-1> :</ion-col>\n        <ion-col col-6 class="value">\n          {{item.owner.subsector}}\n        </ion-col>\n      </ion-row>\n      <ion-row class="item">\n        <ion-col col-5 class="label" style="font-size:12px">\n          地区政协委员会小组\n        </ion-col>\n        <ion-col col-1> :</ion-col>\n        <ion-col col-6 class="value">\n          {{item.owner.activityGroup}}\n        </ion-col>\n      </ion-row>\n      <ion-row class="item">\n        <ion-col col-5 class="label">\n          填报日期\n        </ion-col>\n        <ion-col col-1> :</ion-col>\n        <ion-col col-6 class="value">\n          {{item.createTime}}\n        </ion-col>\n      </ion-row>\n      <!-- <div class="item">\n        <span class="label">委员号</span>：\n        <span class="value">11</span>\n      </div>\n      <div class="item">\n        <span class="label">专门委员会</span>：\n        <span class="value">1232dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd1</span>\n      </div>\n      <div class="item">\n        <span class="label">界别</span>：\n        <span class="value">11</span>\n      </div>\n      <div class="item">\n        <span class="label" style="font-size:11px">地区政协委员会小组</span>：\n        <span class="value">11</span>\n      </div>\n      <div class="item">\n        <span class="label">填报日期</span>：\n        <span class="value">11</span>\n      </div> -->\n    </div>\n    <!-- <ion-row style="text-align:center">\n        <ion-col col-1>\n            \n        </ion-col>\n      <ion-col col-5>\n        <img src="./assets/imgs/label.png" style="width:120px">\n      </ion-col>\n      <ion-col col-6 class="inputs">\n        <h6><span>{{item.owner.userName}}</span></h6>\n        <h6><span>{{item.owner.identifier}}</span></h6>\n        <h6><span>{{item.owner.specialCommittee}}</span></h6>\n        <h6><span>{{item.owner.subsector}}</span></h6>\n        <h6><span>{{item.owner.activityGroup}}</span></h6>\n        <h6><span>{{item.createTime}}</span></h6>\n      </ion-col>\n    </ion-row> -->\n\n    <ion-col col-12 class="btndiv">\n      <button ion-button round (click)="toInfo()">\n        <dd style="margin:0">点击查看</dd>\n      </button>\n    </ion-col>\n  </ion-grid>\n</ion-content>'/*ion-inline-end:"E:\me\dutyevaluation_app\appmodule\src\main\resources\webapps\mobile\src\pages\home\home.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_3__service_HomeService__["a" /* HomeService */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ })

});
//# sourceMappingURL=10.js.map