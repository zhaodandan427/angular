webpackJsonp([3],{

/***/ 289:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OpinionListPageModule", function() { return OpinionListPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__opinion_list__ = __webpack_require__(424);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var OpinionListPageModule = /** @class */ (function () {
    function OpinionListPageModule() {
    }
    OpinionListPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__opinion_list__["a" /* OpinionListPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__opinion_list__["a" /* OpinionListPage */]),
            ],
        })
    ], OpinionListPageModule);
    return OpinionListPageModule;
}());

//# sourceMappingURL=opinion-list.module.js.map

/***/ }),

/***/ 424:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OpinionListPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__service_HomeService__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__lib_gocom_gocom__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__lib_gocom_gocom___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__lib_gocom_gocom__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__service_toast_service__ = __webpack_require__(108);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var OpinionListPage = /** @class */ (function () {
    function OpinionListPage(navCtrl, navParams, homeService, toastService, alertCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.homeService = homeService;
        this.toastService = toastService;
        this.alertCtrl = alertCtrl;
        this.title = "";
        this.checks = [];
        this.items = [];
        this.isflag = true;
        this.isAll = false; //是否全选
        this.role = {};
    }
    OpinionListPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad OpinionListPage');
    };
    OpinionListPage.prototype.ionViewCanEnter = function () {
        this.getList();
        this.checks = [];
    };
    //获取列表数据
    OpinionListPage.prototype.getList = function () {
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
            _this.role = res.user.roleMap;
            switch (_this.role.evalType) {
                case "1":
                    localStorage.title = '专委会意见';
                    localStorage.sign = '主任签字：';
                    break;
                case "2":
                    localStorage.title = '界别意见';
                    localStorage.sign = '召集人签字：';
                    break;
                case "3":
                    localStorage.title = '活动小组意见';
                    localStorage.sign = '组长签字：';
                    break;
                case "4":
                    localStorage.title = '主席会议审议意见';
                    localStorage.sign = '主席签字：';
                    break;
                default:
                    break;
            }
            _this.title = localStorage.title;
        });
    };
    //人员选择
    OpinionListPage.prototype.checkChange = function (item) {
        var flag = 0;
        for (var i = 0; i < this.checks.length; i++) {
            if (item.member.userId == this.checks[i].member.userId) {
                this.checks.splice(i, 1);
                flag = 1;
            }
        }
        if (flag == 0) {
            // item.check = true
            this.checks.push(item);
        }
    };
    //全选
    OpinionListPage.prototype.checkAll = function () {
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
    //委托审批
    OpinionListPage.prototype.entrust = function () {
        console.log('委托审批');
        this.navCtrl.push('OpinionEntrustPage');
    };
    //编辑
    OpinionListPage.prototype.toEdit = function (item) {
        console.log(item);
        item.type = 'edit';
        this.navCtrl.push('OpinionEvaluatePage', item);
    };
    //批量审批
    OpinionListPage.prototype.batchClick = function () {
        console.log(this.checks);
        this.navCtrl.push('OpinionBatchPage');
        // if(this.checks.length == 0){
        //   this.toastService.presentToast('请选择人员','bottom');
        // }else{
        //   this.navCtrl.push('OpinionEvaluatePage', {type:'batch',checks:this.checks});
        // }
    };
    //考评确认
    OpinionListPage.prototype.confirmClick = function () {
        var _this = this;
        var obj = {
            user_token: localStorage.token,
            reviewerId: ''
        };
        var alert = this.alertCtrl.create({
            title: '<img class="alert-icon" src="./assets/imgs/ok.png">',
            subTitle: '考评确认后将不可再更改',
            buttons: [
                {
                    text: '取消',
                    handler: function (data) {
                    }
                }, {
                    text: '确认',
                    handler: function (data) {
                        _this.homeService.confirm(obj).then(function (res) {
                            console.log(res);
                            if (res.code == 0) {
                                _this.toastService.presentToast('考评确认成功', 'bottom');
                                _this.getList();
                            }
                        });
                    }
                }
            ]
        });
        alert.present();
    };
    //关闭应用
    OpinionListPage.prototype.closeWindows = function () {
        var gocom = new __WEBPACK_IMPORTED_MODULE_3__lib_gocom_gocom__["GoCom"]();
        gocom.closeWindow();
    };
    OpinionListPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-opinion-list',template:/*ion-inline-start:"E:\me\dutyevaluation_app\appmodule\src\main\resources\webapps\mobile\src\pages\opinion-list\opinion-list.html"*/'<ion-header>\n\n    <ion-navbar>\n        <ion-buttons start>\n            <button ion-button clear class="btncolor" (click)="closeWindows()">\n                <ion-icon name="arrow-back" style="color:#48A7F3;font-size: 3rem"></ion-icon>\n            </button>\n        </ion-buttons>\n        <ion-title>{{title}}</ion-title>\n        <ion-buttons end *ngIf="role.canConfirm==1">\n            <button ion-button clear (click)="batchClick()" style="font-size:13px">批量审批</button>\n        </ion-buttons>\n    </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n\n    <ion-list style="padding-bottom: 60px">\n        <div *ngIf="items.length==0" style="color:#999999;text-align:center;margin-top:150px">\n            <img src="./assets/imgs/null.png" style="width:150px;height:150px" alt="">\n            <p>暂无内容</p>\n        </div>\n        <ion-item *ngFor="let item of items" style="border-bottom: 0.55px solid #EDEDED;">\n            <ion-avatar item-start>\n                <img style="border-radius: 5px;float:left" onerror="this.onerror=null;src=\'./assets/imgs/user.png\'" src="{{item.avatar}}">\n                <div style="float:left;width:150px;margin-left:10px">\n                    <h2>{{item.userName}}</h2>\n                    <p *ngIf="item.grade == 0">考评结果： 未评价</p>\n                    <p *ngIf="item.grade == 1">考评结果： 优秀</p>\n                    <p *ngIf="item.grade == 2">考评结果： 称职</p>\n                    <p *ngIf="item.grade == 3">考评结果： 努力达标</p>\n                </div>\n            </ion-avatar>\n            <button ion-button outline item-end (click)="toEdit(item)" *ngIf="role.canConfirm==1">编辑</button>\n        </ion-item>\n    </ion-list>\n\n</ion-content>\n<ion-footer *ngIf="role.canConfirm==1">\n    <ion-toolbar>\n        <ion-grid>\n            <ion-row style="text-align:center">\n                <ion-col col-6>\n                    <button ion-button round (click)="entrust()" small outline style="width:100%">委托审批</button>\n                </ion-col>\n                <ion-col col-6>\n                    <button ion-button round (click)="confirmClick()" small full>考评确认</button>\n                </ion-col>\n            </ion-row>\n        </ion-grid>\n    </ion-toolbar>\n</ion-footer>'/*ion-inline-end:"E:\me\dutyevaluation_app\appmodule\src\main\resources\webapps\mobile\src\pages\opinion-list\opinion-list.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__service_HomeService__["a" /* HomeService */], __WEBPACK_IMPORTED_MODULE_4__service_toast_service__["a" /* ToastService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], OpinionListPage);
    return OpinionListPage;
}());

//# sourceMappingURL=opinion-list.js.map

/***/ })

});
//# sourceMappingURL=3.js.map