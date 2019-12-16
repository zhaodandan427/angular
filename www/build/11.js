webpackJsonp([11],{

/***/ 283:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DutyInfoPageModule", function() { return DutyInfoPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__duty_info__ = __webpack_require__(418);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var DutyInfoPageModule = /** @class */ (function () {
    function DutyInfoPageModule() {
    }
    DutyInfoPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__duty_info__["a" /* DutyInfoPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__duty_info__["a" /* DutyInfoPage */]),
            ],
        })
    ], DutyInfoPageModule);
    return DutyInfoPageModule;
}());

//# sourceMappingURL=duty-info.module.js.map

/***/ }),

/***/ 418:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DutyInfoPage; });
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



/**
 * Generated class for the DutyInfoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var DutyInfoPage = /** @class */ (function () {
    function DutyInfoPage(navCtrl, navParams, modalCtrl, alertCtrl, homeService) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.modalCtrl = modalCtrl;
        this.alertCtrl = alertCtrl;
        this.homeService = homeService;
        this.tabs = '1';
        this.param = {}; //页面传参
        this.records = []; //成绩列表
        this.record = ''; //成绩_填写项
        this.awards = []; //奖励列表
        this.award = ''; //奖励_填写项
        this.tel = '';
        this.isEval = 0; //是否已评审  0未评审  1已评审
        this.param = this.navParams.data; //接收参数
        this.record = this.param.othersInfo.section[this.param.othersInfo.section.length - 1].key;
        this.award = this.param.awardInfo.section[this.param.awardInfo.section.length - 1].key;
        this.isEval = this.param.isEval;
        this.tel = this.param.telNumber;
        if (this.param.othersInfo.section.length > 1) {
            this.param.othersInfo.section.pop();
            this.records = this.param.othersInfo.section;
            console.log(this.records);
        }
        if (this.param.awardInfo.section.length > 1) {
            this.param.awardInfo.section.pop();
            this.awards = this.param.awardInfo.section;
            console.log(this.records);
        }
        console.log(this.param);
    }
    DutyInfoPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad DutyInfoPage');
    };
    //卡片详情
    DutyInfoPage.prototype.openModal = function (flag, title) {
        var modal = this.modalCtrl.create('DutyContentPage', { list: flag, title: title });
        modal.present();
    };
    //历史评价
    DutyInfoPage.prototype.toHistory = function () {
        this.navCtrl.push('DutyHistoryPage');
    };
    //联系我们
    DutyInfoPage.prototype.telUs = function () {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: '如有疑问可联系我们',
            subTitle: this.tel,
            buttons: [
                {
                    text: '拨打电话',
                    handler: function (data) {
                        window.location.href = 'tel:' + _this.tel;
                    }
                }
            ]
        });
        alert.present();
    };
    //确认提交
    DutyInfoPage.prototype.confirmPost = function () {
        var _this = this;
        var alert;
        var obj = {};
        switch (this.tabs) {
            case "1":
                alert = this.alertCtrl.create({
                    title: '<img class="alert-icon" src="./assets/imgs/ok.png">',
                    subTitle: '【基础履职】部分已经提交，主席会议、常委会会议、秘书长会议组成人员请继续确认【职务履职】部分，其他委员请继续确认【其它履职】部分。',
                    buttons: [
                        {
                            text: '下一步',
                            handler: function (data) {
                                obj = {
                                    user_token: localStorage.token,
                                    dutyData: '',
                                    dutyType: 1 //考评类型,1 专委会意见 2 界别意见 3 活动小组意见 4 主席会议审议意见
                                };
                                _this.confirmDuty(obj, 1);
                            }
                        }
                    ]
                });
                break;
            case "2":
                alert = this.alertCtrl.create({
                    title: '<img class="alert-icon" src="./assets/imgs/ok.png">',
                    subTitle: '【职务履职】部分已经提交，请您继续确认【其他履职】部分',
                    buttons: [
                        {
                            text: '下一步',
                            handler: function (data) {
                                obj = {
                                    user_token: localStorage.token,
                                    dutyData: '',
                                    dutyType: 2 //考评类型,1 专委会意见 2 界别意见 3 活动小组意见 4 主席会议审议意见
                                };
                                _this.confirmDuty(obj, 2);
                            }
                        }
                    ]
                });
                break;
            case "3":
                alert = this.alertCtrl.create({
                    title: '<img class="alert-icon" src="./assets/imgs/ok.png">',
                    subTitle: '【其他履职】部分已经提交，请您继续确认【奖励信息】部分',
                    buttons: [
                        {
                            text: '下一步',
                            handler: function (data) {
                                obj = {
                                    user_token: localStorage.token,
                                    dutyData: _this.record,
                                    dutyType: 3 //考评类型,1 专委会意见 2 界别意见 3 活动小组意见 4 主席会议审议意见
                                };
                                _this.confirmDuty(obj, 3);
                            }
                        }
                    ]
                });
                break;
            case "4":
                alert = this.alertCtrl.create({
                    title: '<img class="alert-icon" src="./assets/imgs/ok.png">',
                    subTitle: '您本年度的委员述职工作已完成，<br>感谢您的支持！ <br>感谢您在' + this.param.year + '年度的辛勤履职！ <br>以上履职结果,将纳入您的履职档案。',
                    buttons: [
                        {
                            text: '完成',
                            handler: function (data) {
                                obj = {
                                    user_token: localStorage.token,
                                    dutyData: _this.award,
                                    dutyType: 4 //考评类型,1 专委会意见 2 界别意见 3 活动小组意见 4 主席会议审议意见
                                };
                                _this.confirmDuty(obj, 4);
                            }
                        }
                    ]
                });
                break;
            default:
                break;
        }
        alert.present();
    };
    //履职确认请求
    DutyInfoPage.prototype.confirmDuty = function (obj, flag) {
        var _this = this;
        this.homeService.commitinfo(obj).then(function (res) {
            console.log(res);
            switch (flag) {
                case 1:
                    _this.param.basicInfo.isConfirm = 1;
                    _this.tabs = '2';
                    break;
                case 2:
                    _this.param.positionInfo.isConfirm = 1;
                    _this.tabs = '3';
                    break;
                case 3:
                    _this.param.othersInfo.isConfirm = 1;
                    _this.tabs = '4';
                    break;
                case 4:
                    // this.isEval = 1;
                    _this.param.awardInfo.isConfirm = 1;
                    break;
                default:
                    break;
            }
        });
    };
    DutyInfoPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-duty-info',template:/*ion-inline-start:"E:\me\dutyevaluation_app\appmodule\src\main\resources\webapps\mobile\src\pages\duty-info\duty-info.html"*/'<ion-header>\n\n  <ion-navbar>\n    <ion-title>委员履职评价</ion-title>\n    <ion-buttons end>\n      <button ion-button clear (click)="toHistory()" style="font-size:13px">历史履职评价</button>\n    </ion-buttons>\n  </ion-navbar>\n  <ion-toolbar mode="md" color="bai" style="background-color:#ffffff">\n    <ion-segment [(ngModel)]="tabs" mode="md">\n      <ion-segment-button value="1" isActive="true">\n        基础履职\n      </ion-segment-button>\n      <ion-segment-button value="2" [disabled]="param.basicInfo.isConfirm==0">\n        职务履职\n      </ion-segment-button>\n      <ion-segment-button value="3" [disabled]="param.positionInfo.isConfirm==0">\n        其他履职\n      </ion-segment-button>\n      <ion-segment-button value="4" [disabled]="param.othersInfo.isConfirm==0">\n        奖励信息\n      </ion-segment-button>\n      <ion-segment-button value="5" *ngIf="isEval==1">\n        审议意见\n      </ion-segment-button>\n    </ion-segment>\n  </ion-toolbar>\n</ion-header>\n\n\n<ion-content style="background-color:#f5f6f8">\n  <div [ngSwitch]="tabs">\n    <div *ngSwitchCase="\'1\'">\n      <ion-card (click)="openModal(param.basicInfo.section[0].detail,\'出席政协全会情况\')">\n\n        <ion-card-header class="card-head">\n          出席政协全会情况\n          <ion-icon name="ios-arrow-forward" style="float: right"></ion-icon>\n        </ion-card-header>\n\n        <ion-card-content no-padding>\n          <ion-grid class="under-div">\n            <ion-row>\n              <ion-col col-6>\n                <ion-row>\n                  <ion-col col-2>\n                    <div  [ngClass]="{\'checked\': param.basicInfo.section[0].info[0]==0}"></div>\n                    <div  [ngClass]="{\'check\': param.basicInfo.section[0].info[0]!=0}"></div>\n                  </ion-col>\n                  <ion-col col-10 no-padding style="font-size:14px">\n                    全程出席\n                  </ion-col>\n                </ion-row>\n              </ion-col>\n              <ion-col col-6>\n                <ion-row>\n                  <ion-col col-2>\n                      <div  [ngClass]="{\'checked\': param.basicInfo.section[0].info[0]==1}"></div>\n                      <div  [ngClass]="{\'check\': param.basicInfo.section[0].info[0]!=1}"></div>\n                  </ion-col>\n                  <ion-col col-10 no-padding style="font-size:14px">\n                    部分环节出席\n                  </ion-col>\n                </ion-row>\n              </ion-col>\n              <ion-col col-6>\n                <ion-row>\n                  <ion-col col-2>\n                      <div  [ngClass]="{\'checked\': param.basicInfo.section[0].info[0]==2}"></div>\n                      <div  [ngClass]="{\'check\': param.basicInfo.section[0].info[0]!=2}"></div>\n                  </ion-col>\n                  <ion-col col-10 no-padding style="font-size:14px">\n                    未出席\n                  </ion-col>\n                </ion-row>\n              </ion-col>\n            </ion-row>\n          </ion-grid>\n        </ion-card-content>\n\n      </ion-card>\n\n      <ion-card (click)="openModal(param.basicInfo.section[1].detail,\'参加学习培训情况\')">\n\n        <ion-card-header class="card-head">\n          参加学习培训情况\n          <ion-icon name="ios-arrow-forward" style="float: right"></ion-icon>\n        </ion-card-header>\n\n        <ion-card-content no-padding>\n          <ion-grid class="under-div">\n            <ion-row>\n              <ion-col col-6>\n                学习报告会\n                <span>{{param.basicInfo.section[1].info[0]}}</span> 次\n              </ion-col>\n              <ion-col col-6>\n                委员沙龙\n                <span>{{param.basicInfo.section[1].info[1]}}</span> 次\n              </ion-col>\n              <ion-col col-6>\n                委员讲坛\n                <span>{{param.basicInfo.section[1].info[2]}}</span> 次\n              </ion-col>\n              <ion-col col-6>\n                委员讲堂\n                <span>{{param.basicInfo.section[1].info[3]}}</span> 次\n              </ion-col>\n              <ion-col col-6>\n                在线学习\n                <span>{{param.basicInfo.section[1].info[4]}}</span> 次\n              </ion-col>\n              <ion-col col-6>\n                其他\n                <span>{{param.basicInfo.section[1].info[5]}}</span> 次\n              </ion-col>\n            </ion-row>\n          </ion-grid>\n        </ion-card-content>\n\n      </ion-card>\n\n      <ion-card (click)="openModal(param.basicInfo.section[2].detail,\'提交提案情况\')">\n\n        <ion-card-header class="card-head">\n          提交提案情况\n          <ion-icon name="ios-arrow-forward" style="float: right"></ion-icon>\n        </ion-card-header>\n\n        <ion-card-content no-padding>\n          <ion-grid class="under-div">\n            <ion-row>\n              <ion-col col-6>\n                第一提案人\n                <span>{{param.basicInfo.section[2].info[0]}}</span> 件\n              </ion-col>\n              <ion-col col-6 style="border-left:1px solid #9D9FA2">\n                附议\n                <span>{{param.basicInfo.section[2].info[1]}}</span> 件\n              </ion-col>\n              <ion-col col-6>\n                优秀提案\n                <span>{{param.basicInfo.section[2].info[2]}}</span> 件\n              </ion-col>\n              <ion-col col-6 style="border-left:1px solid #9D9FA2">\n                优秀提案\n                <span>{{param.basicInfo.section[2].info[3]}}</span> 件\n              </ion-col>\n            </ion-row>\n          </ion-grid>\n        </ion-card-content>\n\n      </ion-card>\n\n      <ion-card (click)="openModal(param.basicInfo.section[3].detail,\'社情民意信息采用情况\')">\n\n        <ion-card-header class="card-head">\n          社情民意信息采用情况\n          <ion-icon name="ios-arrow-forward" style="float: right"></ion-icon>\n        </ion-card-header>\n\n        <ion-card-content no-padding>\n          <ion-grid class="under-div">\n            <ion-row>\n              <ion-col col-6 style="margin-top:-5px">\n                <ion-row>\n                  <ion-col col-12>\n                    国家级采用\n                    <span>{{param.basicInfo.section[3].info[0]}}</span> 件\n                  </ion-col>\n                  <ion-col col-12>\n                    市级采用\n                    <span>{{param.basicInfo.section[3].info[1]}}</span> 件\n                  </ion-col>\n                  <ion-col col-12>\n                    区级采用\n                    <span>{{param.basicInfo.section[3].info[3]}}</span> 件\n                  </ion-col>\n                </ion-row>\n              </ion-col>\n              <ion-col col-6 style="margin-top:35px">\n                附议\n                <span>{{param.basicInfo.section[3].info[2]}}</span> 件\n              </ion-col>\n            </ion-row>\n          </ion-grid>\n        </ion-card-content>\n\n      </ion-card>\n\n      <ion-card (click)="openModal(param.basicInfo.section[4].detail,\'参加专委会活动情况\')">\n        <ion-card-header class="card-head">\n          参加专委会活动情况\n          <ion-icon name="ios-arrow-forward" style="float: right"></ion-icon>\n        </ion-card-header>\n        <ion-card-content no-padding>\n          <ion-grid class="under-div">\n            <ion-row>\n              <ion-col col-12>\n                参加活动共计\n                <span>{{param.basicInfo.section[4].info[0]}}</span> 次\n              </ion-col>\n            </ion-row>\n          </ion-grid>\n        </ion-card-content>\n      </ion-card>\n\n      <ion-card (click)="openModal(param.basicInfo.section[5].detail,\'参加界别活动情况\')">\n        <ion-card-header class="card-head">\n          参加界别活动情况\n          <ion-icon name="ios-arrow-forward" style="float: right"></ion-icon>\n        </ion-card-header>\n        <ion-card-content no-padding>\n          <ion-grid class="under-div">\n            <ion-row>\n              <ion-col col-12>\n                参加活动共计\n                <span>{{param.basicInfo.section[5].info[0]}}</span> 次\n              </ion-col>\n            </ion-row>\n          </ion-grid>\n        </ion-card-content>\n      </ion-card>\n\n      <ion-card (click)="openModal(param.basicInfo.section[6].detail,\'参加活动小组情况\')">\n        <ion-card-header class="card-head">\n          参加活动小组情况\n          <ion-icon name="ios-arrow-forward" style="float: right"></ion-icon>\n        </ion-card-header>\n        <ion-card-content no-padding>\n          <ion-grid class="under-div">\n            <ion-row>\n              <ion-col col-12>\n                参加活动共计\n                <span>{{param.basicInfo.section[6].info[0]}}</span> 次\n              </ion-col>\n            </ion-row>\n          </ion-grid>\n        </ion-card-content>\n      </ion-card>\n    </div>\n    <div *ngSwitchCase="\'2\'">\n      <!-- <div *ngIf="0==0" style="color:#999999;text-align:center;margin-top:100px">\n          <img src="./assets/imgs/null.png" style="width:150px;height:150px" alt="">\n          <p style="padding: 0 40px">主席会议、常委会会议、秘书长会议组成人员确认此部分内容，其他委员进入下一项确认。 </p>\n      </div> -->\n      <div *ngIf="param.positionInfo.section.length==0" style="color:#999999;text-align:center;margin-top:150px">\n        <img src="./assets/imgs/null.png" style="width:150px;height:150px" alt="">\n        <p>暂无内容</p>\n      </div>\n      <ion-card *ngIf="param.positionInfo.section.length>0" (click)="openModal(param.positionInfo.section[0].detail,\'出席主席会议情况\')">\n        <ion-card-header class="card-head">\n          出席主席会议情况\n          <ion-icon name="ios-arrow-forward" style="float: right"></ion-icon>\n        </ion-card-header>\n        <ion-card-content no-padding>\n          <ion-grid class="under-div">\n            <ion-row>\n              <ion-col col-6>\n                出席\n                <span>{{param.positionInfo.section[0].info[0]}}</span> 次\n              </ion-col>\n              <ion-col col-6 style="border-left:1px solid #9D9FA2">\n                列席\n                <span>{{param.positionInfo.section[0].info[1]}}</span> 次\n              </ion-col>\n              <ion-col col-6>\n                发言\n                <span>{{param.positionInfo.section[0].info[2]}}</span> 次\n              </ion-col>\n              <ion-col col-6 style="border-left:1px solid #9D9FA2">\n                发言\n                <span>{{param.positionInfo.section[0].info[3]}}</span> 次\n              </ion-col>\n            </ion-row>\n          </ion-grid>\n        </ion-card-content>\n      </ion-card>\n      <ion-card *ngIf="param.positionInfo.section.length>0" (click)="openModal(param.positionInfo.section[1].detail,\'出席常委会议情况\')">\n        <ion-card-header class="card-head">\n          出席常委会议情况\n          <ion-icon name="ios-arrow-forward" style="float: right"></ion-icon>\n        </ion-card-header>\n        <ion-card-content no-padding>\n          <ion-grid class="under-div">\n            <ion-row>\n              <ion-col col-6>\n                出席\n                <span>{{param.positionInfo.section[1].info[0]}}</span> 次\n              </ion-col>\n              <ion-col col-6 style="border-left:1px solid #9D9FA2">\n                列席\n                <span>{{param.positionInfo.section[1].info[1]}}</span> 次\n              </ion-col>\n              <ion-col col-6>\n                发言\n                <span>{{param.positionInfo.section[1].info[2]}}</span> 次\n              </ion-col>\n              <ion-col col-6 style="border-left:1px solid #9D9FA2">\n                发言\n                <span>{{param.positionInfo.section[1].info[3]}}</span> 次\n              </ion-col>\n            </ion-row>\n          </ion-grid>\n        </ion-card-content>\n      </ion-card>\n      <ion-card *ngIf="param.positionInfo.section.length>0" (click)="openModal(param.positionInfo.section[2].detail,\'出席秘书长会议情况\')">\n        <ion-card-header class="card-head">\n          出席秘书长会议情况\n          <ion-icon name="ios-arrow-forward" style="float: right"></ion-icon>\n        </ion-card-header>\n        <ion-card-content no-padding>\n          <ion-grid class="under-div">\n            <ion-row>\n              <ion-col col-6>\n                出席\n                <span>{{param.positionInfo.section[2].info[0]}}</span> 次\n              </ion-col>\n              <ion-col col-6 style="border-left:1px solid #9D9FA2">\n                列席\n                <span>{{param.positionInfo.section[2].info[1]}}</span> 次\n              </ion-col>\n              <ion-col col-6>\n                发言\n                <span>{{param.positionInfo.section[2].info[2]}}</span> 次\n              </ion-col>\n              <ion-col col-6 style="border-left:1px solid #9D9FA2">\n                发言\n                <span>{{param.positionInfo.section[2].info[3]}}</span> 次\n              </ion-col>\n            </ion-row>\n          </ion-grid>\n        </ion-card-content>\n      </ion-card>\n      <ion-grid *ngIf="param.positionInfo.section.length>0" class="under-div">\n        <ion-row>\n          <ion-col col-1>\n            <img src="./assets/imgs/lingdang.png" style="width:20px">\n          </ion-col>\n          <ion-col col-11 class="other-remand">\n            主席会议、常委会会议、秘书长会议组成人员 确认此部分内容，其他委员进入下一项确认。\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n    </div>\n    <div *ngSwitchCase="\'3\'">\n      <div class="other-remand">\n\n        基础履职及职务履职外的履职情况(如承担调研、文史资料、议政发言、特约监 督、委员讲坛/委员沙龙/委员讲座主讲嘉宾等，以及以委员身份取 得的成绩、做出的贡献等)，如有补充，请在此填写:\n        <p style="margin:0" *ngFor="let item of records">{{item.key}}</p>\n      </div>\n      <div class="other-input">\n        <ion-textarea autoresize="100" placeholder="如有补充，请在此填写:" rows="10" [(ngModel)]="record"></ion-textarea>\n      </div>\n    </div>\n    <div *ngSwitchCase="\'4\'">\n      <div class="other-remand">\n\n        填写本年度您及您所带领的团队获得市级以上的各类奖励:\n        <p style="margin:0" *ngFor="let item of awards">{{item.key}}</p>\n      </div>\n      <div class="other-input">\n        <ion-textarea autoresize="100" placeholder="如有补充，请在此填写:" rows="10" [(ngModel)]="award"></ion-textarea>\n      </div>\n    </div>\n    <div *ngSwitchCase="\'5\'">\n      <ion-card>\n        <ion-card-header class="card-head">\n          专门委员会意见\n        </ion-card-header>\n        <h6 class="answer-title">考评等级为：</h6>\n        <ion-card-content no-padding>\n\n          <ion-grid class="under-div">\n            <ion-row>\n              <ion-col col-1>\n\n              </ion-col>\n              <ion-col col-3>\n                <ion-row>\n                  <ion-col col-3>\n                    <div  [ngClass]="{\'checked\': param.evaluationInfo.section[0].grade==1}"></div>\n                    <div  [ngClass]="{\'check\': param.evaluationInfo.section[0].grade!=1}"></div>\n                  </ion-col>\n                  <ion-col col-9 no-padding style="font-size:13px">\n                    优秀\n                  </ion-col>\n                </ion-row>\n              </ion-col>\n              <ion-col col-3>\n                <ion-row>\n                  <ion-col col-3>\n                    <div  [ngClass]="{\'checked\': param.evaluationInfo.section[0].grade==2}"></div>\n                    <div  [ngClass]="{\'check\': param.evaluationInfo.section[0].grade!=2}"></div>\n                  </ion-col>\n                  <ion-col col-9 no-padding style="font-size:13px">\n                    称职\n                  </ion-col>\n                </ion-row>\n              </ion-col>\n              <ion-col col-4>\n                <ion-row>\n                  <ion-col col-3>\n                    <div  [ngClass]="{\'checked\': param.evaluationInfo.section[0].grade==3}"></div>\n                    <div  [ngClass]="{\'check\': param.evaluationInfo.section[0].grade!=3}"></div>\n                  </ion-col>\n                  <ion-col col-9 no-padding style="font-size:13px">\n                    努力达标\n                  </ion-col>\n                </ion-row>\n              </ion-col>\n            </ion-row>\n            <ion-row>\n              <ion-col col-5 style="padding-left:15px">\n                专委会主任签字：\n              </ion-col>\n              <ion-col col-7>\n                <img src="{{param.evaluationInfo.section[0].signatureUrl}}" style="width:150px">\n              </ion-col>\n            </ion-row>\n            <ion-row>\n              <ion-col col-12 class="answer-date">\n                {{param.evaluationInfo.section[0].reviewTime}}\n              </ion-col>\n            </ion-row>\n          </ion-grid>\n        </ion-card-content>\n      </ion-card>\n\n      <ion-card>\n        <ion-card-header class="card-head">\n          界别意见\n        </ion-card-header>\n        <h6 class="answer-title">考评等级为：</h6>\n        <ion-card-content no-padding>\n\n          <ion-grid class="under-div">\n            <ion-row>\n              <ion-col col-1>\n\n              </ion-col>\n              <ion-col col-3>\n                <ion-row>\n                  <ion-col col-3>\n                    <div  [ngClass]="{\'checked\': param.evaluationInfo.section[1].grade==1}"></div>\n                    <div  [ngClass]="{\'check\': param.evaluationInfo.section[1].grade!=1}"></div>\n                  </ion-col>\n                  <ion-col col-9 no-padding style="font-size:13px">\n                    优秀\n                  </ion-col>\n                </ion-row>\n              </ion-col>\n              <ion-col col-3>\n                <ion-row>\n                  <ion-col col-3>\n                    <div  [ngClass]="{\'checked\': param.evaluationInfo.section[1].grade==2}"></div>\n                    <div  [ngClass]="{\'check\': param.evaluationInfo.section[1].grade!=2}"></div>\n                  </ion-col>\n                  <ion-col col-9 no-padding style="font-size:13px">\n                    称职\n                  </ion-col>\n                </ion-row>\n              </ion-col>\n              <ion-col col-4>\n                <ion-row>\n                  <ion-col col-3>\n                    <div  [ngClass]="{\'checked\': param.evaluationInfo.section[1].grade==3}"></div>\n                    <div  [ngClass]="{\'check\': param.evaluationInfo.section[1].grade!=3}"></div>\n                  </ion-col>\n                  <ion-col col-9 no-padding style="font-size:13px">\n                    努力达标\n                  </ion-col>\n                </ion-row>\n              </ion-col>\n            </ion-row>\n            <ion-row>\n              <ion-col col-5 style="padding-left:15px">\n                召集人签字：\n              </ion-col>\n              <ion-col col-7>\n                <img src="{{param.evaluationInfo.section[1].signatureUrl}}" style="width:150px">\n              </ion-col>\n            </ion-row>\n            <ion-row>\n              <ion-col col-12 class="answer-date">\n                {{param.evaluationInfo.section[1].reviewTime}}\n              </ion-col>\n            </ion-row>\n          </ion-grid>\n        </ion-card-content>\n      </ion-card>\n\n      <ion-card>\n        <ion-card-header class="card-head">\n          活动小组意见\n        </ion-card-header>\n        <h6 class="answer-title">考评等级为：</h6>\n        <ion-card-content no-padding>\n\n          <ion-grid class="under-div">\n            <ion-row>\n              <ion-col col-1>\n\n              </ion-col>\n              <ion-col col-3>\n                <ion-row>\n                  <ion-col col-3>\n                    <div  [ngClass]="{\'checked\': param.evaluationInfo.section[2].grade==1}"></div>\n                    <div  [ngClass]="{\'check\': param.evaluationInfo.section[2].grade!=1}"></div>\n                  </ion-col>\n                  <ion-col col-9 no-padding style="font-size:13px">\n                    优秀\n                  </ion-col>\n                </ion-row>\n              </ion-col>\n              <ion-col col-3>\n                <ion-row>\n                  <ion-col col-3>\n                    <div  [ngClass]="{\'checked\': param.evaluationInfo.section[2].grade==2}"></div>\n                    <div  [ngClass]="{\'check\': param.evaluationInfo.section[2].grade!=2}"></div>\n                  </ion-col>\n                  <ion-col col-9 no-padding style="font-size:13px">\n                    称职\n                  </ion-col>\n                </ion-row>\n              </ion-col>\n              <ion-col col-4>\n                <ion-row>\n                  <ion-col col-3>\n                    <div  [ngClass]="{\'checked\': param.evaluationInfo.section[2].grade==3}"></div>\n                    <div  [ngClass]="{\'check\': param.evaluationInfo.section[2].grade!=3}"></div>\n                  </ion-col>\n                  <ion-col col-9 no-padding style="font-size:13px">\n                    努力达标\n                  </ion-col>\n                </ion-row>\n              </ion-col>\n            </ion-row>\n            <ion-row>\n              <ion-col col-5 style="padding-left:15px">\n                组长签字：\n              </ion-col>\n              <ion-col col-7>\n                <img src="{{param.evaluationInfo.section[2].signatureUrl}}" style="width:150px">\n              </ion-col>\n            </ion-row>\n            <ion-row>\n              <ion-col col-12 class="answer-date">\n                {{param.evaluationInfo.section[2].reviewTime}}\n              </ion-col>\n            </ion-row>\n          </ion-grid>\n        </ion-card-content>\n      </ion-card>\n\n      <ion-card>\n        <ion-card-header class="card-head">\n          主席会议审议意见\n        </ion-card-header>\n        <ion-card-content no-padding>\n\n          <ion-grid class="under-div">\n            <ion-row>\n              <ion-col col-12 class="answer-msg">\n\n                根据个人总结和述职情况，综合专门委员会，界别及地区政协委员活动小组建议， 经{{param.chairmanSession}}届区政协第{{param.conference}}次主席会议研究，您的{{param.chairmanYear}}年度履职评定为\n                <span style="color:#000" *ngIf="param.evaluationInfo.section[3].grade==1"> 优秀 </span>\n                <span style="color:#000" *ngIf="param.evaluationInfo.section[3].grade==2"> 称职 </span>\n                <span style="color:#000" *ngIf="param.evaluationInfo.section[3].grade==3"> 努力达标 </span>等次。\n\n              </ion-col>\n            </ion-row>\n            <ion-row>\n              <ion-col col-5 style="padding-left:15px">\n\n              </ion-col>\n              <ion-col col-7>\n                <img src="{{param.evaluationInfo.section[3].signatureUrl}}" style="width:150px">\n              </ion-col>\n            </ion-row>\n            <ion-row>\n              <ion-col col-12 class="answer-date">\n                {{param.evaluationInfo.section[3].reviewTime}}\n              </ion-col>\n            </ion-row>\n          </ion-grid>\n        </ion-card-content>\n      </ion-card>\n    </div>\n  </div>\n\n</ion-content>\n\n<ion-footer *ngIf="param.awardInfo.isConfirm==0">\n  <ion-toolbar>\n    <ion-grid>\n      <ion-row style="text-align:center">\n        <ion-col col-6>\n          <button ion-button round (click)="telUs()" small outline style="width:100%"> 联系我们</button>\n        </ion-col>\n        <ion-col col-6>\n          <button ion-button round (click)="confirmPost()" small full> 确认提交</button>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </ion-toolbar>\n</ion-footer>'/*ion-inline-end:"E:\me\dutyevaluation_app\appmodule\src\main\resources\webapps\mobile\src\pages\duty-info\duty-info.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* ModalController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_2__service_HomeService__["a" /* HomeService */]])
    ], DutyInfoPage);
    return DutyInfoPage;
}());

//# sourceMappingURL=duty-info.js.map

/***/ })

});
//# sourceMappingURL=11.js.map