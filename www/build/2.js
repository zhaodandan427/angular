webpackJsonp([2],{

/***/ 295:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PointsRangePageModule", function() { return PointsRangePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__points_range__ = __webpack_require__(715);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var PointsRangePageModule = /** @class */ (function () {
    function PointsRangePageModule() {
    }
    PointsRangePageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__points_range__["a" /* PointsRangePage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__points_range__["a" /* PointsRangePage */]),
            ],
        })
    ], PointsRangePageModule);
    return PointsRangePageModule;
}());

//# sourceMappingURL=points-range.module.js.map

/***/ }),

/***/ 715:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PointsRangePage; });
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
 * Generated class for the PointsRangePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var PointsRangePage = /** @class */ (function () {
    function PointsRangePage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.item = {};
        this.item = {
            data: [
                { name: '张委员', 'number': 10220, "rankingNumber": 1000 },
                { name: '张委员', 'number': 10220, "rankingNumber": 1000 },
                { name: '张委员', 'number': 10220, "rankingNumber": 1000 },
                { name: '张委员', 'number': 10220, "rankingNumber": 1000 },
                { name: '张委员', 'number': 10220, "rankingNumber": 1000 },
                { name: '张委员', 'number': 10220, "rankingNumber": 1000 }
            ]
        };
    }
    PointsRangePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad PointsRahngePage');
    };
    PointsRangePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-points-range',template:/*ion-inline-start:"E:\me\dutyevaluation_app\appmodule\src\main\resources\webapps\mobile\src\pages\points-range\points-range.html"*/'<!--\n  积分排行\n-->\n<ion-header>\n  <ion-navbar color="headerColor">\n    <ion-title>积分排行</ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content>\n  <ul class="integral-ranking">\n    <li *ngFor="let items of item.data;let key=index">\n      <p>\n        <span>{{key+1}}</span>\n        <span>{{items.name}} ({{items.number}})</span>\n      </p>\n      <span>{{items.rankingNumber}}</span>\n    </li>\n  </ul>\n</ion-content>'/*ion-inline-end:"E:\me\dutyevaluation_app\appmodule\src\main\resources\webapps\mobile\src\pages\points-range\points-range.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
    ], PointsRangePage);
    return PointsRangePage;
}());

//# sourceMappingURL=points-range.js.map

/***/ })

});
//# sourceMappingURL=2.js.map