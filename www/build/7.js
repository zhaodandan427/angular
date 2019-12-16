webpackJsonp([7],{

/***/ 292:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OpinionBatchPageModule", function() { return OpinionBatchPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__opinion_batch__ = __webpack_require__(427);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var OpinionBatchPageModule = /** @class */ (function () {
    function OpinionBatchPageModule() {
    }
    OpinionBatchPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__opinion_batch__["a" /* OpinionBatchPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__opinion_batch__["a" /* OpinionBatchPage */]),
            ],
        })
    ], OpinionBatchPageModule);
    return OpinionBatchPageModule;
}());

//# sourceMappingURL=opinion-batch.module.js.map

/***/ }),

/***/ 427:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OpinionBatchPage; });
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




var OpinionBatchPage = /** @class */ (function () {
    function OpinionBatchPage(navCtrl, navParams, homeService, toastService, alertCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.homeService = homeService;
        this.toastService = toastService;
        this.alertCtrl = alertCtrl;
        this.title = localStorage.title;
        this.checks = [];
        this.items = [];
        this.isflag = true;
        this.isAll = false; //是否全选
    }
    OpinionBatchPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad OpinionBatchPage');
    };
    OpinionBatchPage.prototype.ionViewCanEnter = function () {
        this.getList();
        this.checks = [];
    };
    //获取列表数据
    OpinionBatchPage.prototype.getList = function () {
        var _this = this;
        var obj = {
            user_token: localStorage.token,
            page: 1,
            size: 9999,
            session: 10,
            year: '2019',
            type: 1 //考评类型,1 专委会意见 2 界别意见 3 活动小组意见 4 主席会议审议意见
        };
        this.homeService.getMemberList(obj).then(function (res) {
            console.log(res);
            _this.items = res.data.info;
        });
    };
    //人员选择
    OpinionBatchPage.prototype.checkChange = function (item) {
        // let flag = 0;
        // for (let i = 0; i < this.checks.length; i++) {
        //   if (item.member.userId == this.checks[i].member.userId) {
        //     this.checks.splice(i, 1);
        //     flag = 1;
        //   }
        // }
        // if (flag == 0) {
        //   // item.check = true
        //   this.checks.push(item);
        // }
    };
    //全选
    OpinionBatchPage.prototype.checkAll = function () {
        // this.checks = [];
        if (this.isAll == true) {
            // for(let i=0;i<this.items.length;i++){
            //   this.checks.push(this.items[i]);
            // }
            for (var i = 0; i < this.items.length; i++) {
                this.items[i].check = true;
            }
        }
        else {
            for (var i = 0; i < this.items.length; i++) {
                this.items[i].check = false;
            }
        }
    };
    //批量审批
    OpinionBatchPage.prototype.batchClick = function () {
        this.checks = [];
        for (var i = 0; i < this.items.length; i++) {
            if (this.items[i].check == true) {
                this.checks.push(this.items[i]);
            }
        }
        if (this.checks.length == 0) {
            this.toastService.presentToast('请选择人员', 'bottom');
        }
        else {
            this.navCtrl.push('OpinionEvaluatePage', { type: 'batch', checks: this.checks });
        }
    };
    OpinionBatchPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-opinion-batch',template:/*ion-inline-start:"E:\me\dutyevaluation_app\appmodule\src\main\resources\webapps\mobile\src\pages\opinion-batch\opinion-batch.html"*/'<ion-header>\n\n  <ion-navbar>\n    <ion-title>{{title}}</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n\n    <ion-list style="margin: -1px 0 20px">\n        <ion-item style="border-bottom: 0.55px solid #EDEDED;">\n            <ion-checkbox (ionChange)="checkAll()" [(ngModel)]="isAll"></ion-checkbox>\n            <ion-avatar item-start>\n                <div style="float:left;width:150px;margin-left:10px">\n                    <h2 style="margin-top:8px">全选</h2>\n                </div>\n            </ion-avatar>\n        </ion-item>\n    </ion-list>\n\n    <ion-list>\n        <div *ngIf="items.length==0" style="color:#999999;text-align:center;margin-top:150px">\n            <img src="./assets/imgs/null.png" style="width:150px;height:150px" alt="">\n            <p>暂无内容</p>\n        </div>\n        <ion-item *ngFor="let item of items" style="border-bottom: 0.55px solid #EDEDED;">\n            <ion-checkbox (ionChange)="checkChange(item)" [(ngModel)]="item.check"></ion-checkbox>\n            <ion-avatar item-start>\n                <img style="border-radius: 5px;float:left" onerror="this.onerror=null;src=\'./assets/imgs/user.png\'" src="{{item.avatar}}">\n                <div style="float:left;width:150px;margin-left:10px">\n                    <h2>{{item.userName}}</h2>\n                    <p *ngIf="item.grade == 0">考评结果： 未评价</p>\n                    <p *ngIf="item.grade == 1">考评结果： 优秀</p>\n                    <p *ngIf="item.grade == 2">考评结果： 称职</p>\n                    <p *ngIf="item.grade == 3">考评结果： 努力达标</p>\n                </div>\n            </ion-avatar>\n            <!-- <button ion-button outline item-end (click)="toEdit(item)">编辑</button> -->\n        </ion-item>\n    </ion-list>\n\n</ion-content>\n<ion-footer>\n    <ion-toolbar>\n      <ion-grid>\n        <ion-row style="text-align:center">\n          <ion-col col-12>\n            <button ion-button round (click)="batchClick()" small style="width:100%">确认</button>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n    </ion-toolbar>\n  </ion-footer>'/*ion-inline-end:"E:\me\dutyevaluation_app\appmodule\src\main\resources\webapps\mobile\src\pages\opinion-batch\opinion-batch.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__service_HomeService__["a" /* HomeService */], __WEBPACK_IMPORTED_MODULE_3__service_toast_service__["a" /* ToastService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], OpinionBatchPage);
    return OpinionBatchPage;
}());

//# sourceMappingURL=opinion-batch.js.map

/***/ })

});
//# sourceMappingURL=7.js.map