webpackJsonp([14],{

/***/ 105:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__HttpService__ = __webpack_require__(158);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_Constants__ = __webpack_require__(254);
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
 * Created by lichun on 2017/12/19.
 */



var HomeService = /** @class */ (function () {
    function HomeService(httpService) {
        this.httpService = httpService;
    }
    //获取企业信息
    HomeService.prototype.appCompanyInfo = function (_obj) {
        _obj.randomNum = Math.random();
        return this.httpService.get(__WEBPACK_IMPORTED_MODULE_2__providers_Constants__["a" /* APP_DEPART_URL */] + '/interconnect/batchcompany', _obj);
    };
    //token校验
    HomeService.prototype.login = function (_obj) {
        _obj.randomNum = Math.random();
        return this.httpService.post2(__WEBPACK_IMPORTED_MODULE_2__providers_Constants__["a" /* APP_DEPART_URL */] + '/ext/api/login?token=' + _obj.token, _obj);
    };
    // //获取常用应用
    // getApps(_obj) {
    //   _obj.randomNum = Math.random();
    //   return this.httpService.get2(APP_DEPART_URL + '/ext/liteapps/all', _obj);
    // }
    //获取所有应用
    HomeService.prototype.getAllApps = function (_obj) {
        _obj.randomNum = Math.random();
        return this.httpService.get2(__WEBPACK_IMPORTED_MODULE_2__providers_Constants__["a" /* APP_DEPART_URL */] + '/ext/liteapps/all', _obj);
    };
    //添加应用应用
    HomeService.prototype.addApps = function (_obj) {
        _obj.randomNum = Math.random();
        return this.httpService.post2(__WEBPACK_IMPORTED_MODULE_2__providers_Constants__["a" /* APP_DEPART_URL */] + '/ext/liteapps?type=0', _obj);
    };
    //删除应用应用
    HomeService.prototype.deleteApps = function (_obj) {
        _obj.randomNum = Math.random();
        return this.httpService.post2(__WEBPACK_IMPORTED_MODULE_2__providers_Constants__["a" /* APP_DEPART_URL */] + '/ext/liteapps?type=1', _obj);
    };
    //排序应用
    HomeService.prototype.sortApps = function (_obj) {
        _obj.randomNum = Math.random();
        return this.httpService.post2(__WEBPACK_IMPORTED_MODULE_2__providers_Constants__["a" /* APP_DEPART_URL */] + '/ext/liteapps/order', _obj);
    };
    //履职历史列表
    HomeService.prototype.getOpinionList = function (_obj) {
        _obj.randomNum = Math.random();
        return this.httpService.get2(__WEBPACK_IMPORTED_MODULE_2__providers_Constants__["a" /* APP_DEPART_URL */] + '/apis/dutyeval/list', _obj);
    };
    //履职详情
    HomeService.prototype.getOpinionInfo = function (_obj) {
        _obj.randomNum = Math.random();
        return this.httpService.get2(__WEBPACK_IMPORTED_MODULE_2__providers_Constants__["a" /* APP_DEPART_URL */] + '/apis/dutyeval/detail', _obj);
    };
    //获取待评价委员列表
    HomeService.prototype.getMemberList = function (_obj) {
        _obj.randomNum = Math.random();
        return this.httpService.get2(__WEBPACK_IMPORTED_MODULE_2__providers_Constants__["a" /* APP_DEPART_URL */] + '/apis/dutyeval/memberlist', _obj);
    };
    //评价委员（单人、多人）
    HomeService.prototype.evaluate = function (_obj) {
        _obj.randomNum = Math.random();
        return this.httpService.post2(__WEBPACK_IMPORTED_MODULE_2__providers_Constants__["a" /* APP_DEPART_URL */] + '/apis/dutyeval/evaluation?user_token=' + _obj.user_token, _obj);
    };
    //获取委托人员列表
    HomeService.prototype.getAssigneelist = function (_obj) {
        _obj.randomNum = Math.random();
        return this.httpService.get2(__WEBPACK_IMPORTED_MODULE_2__providers_Constants__["a" /* APP_DEPART_URL */] + '/apis/dutyeval/assigneelist', _obj);
    };
    //委托评审
    HomeService.prototype.entrust = function (_obj) {
        _obj.randomNum = Math.random();
        return this.httpService.post2(__WEBPACK_IMPORTED_MODULE_2__providers_Constants__["a" /* APP_DEPART_URL */] + '/apis/dutyeval/authorize?user_token=' + _obj.user_token, _obj);
    };
    //评审确认
    HomeService.prototype.confirm = function (_obj) {
        _obj.randomNum = Math.random();
        return this.httpService.post2(__WEBPACK_IMPORTED_MODULE_2__providers_Constants__["a" /* APP_DEPART_URL */] + '/apis/dutyeval/confirm?user_token=' + _obj.user_token, _obj);
    };
    //履职确认
    HomeService.prototype.commitinfo = function (_obj) {
        _obj.randomNum = Math.random();
        return this.httpService.post2(__WEBPACK_IMPORTED_MODULE_2__providers_Constants__["a" /* APP_DEPART_URL */] + '/apis/dutyeval/commitinfo?user_token=' + _obj.user_token, _obj);
    };
    HomeService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__HttpService__["a" /* HttpService */]])
    ], HomeService);
    return HomeService;
}());

//# sourceMappingURL=HomeService.js.map

/***/ }),

/***/ 108:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ToastService; });
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


var ToastService = /** @class */ (function () {
    function ToastService(toastCtrl) {
        this.toastCtrl = toastCtrl;
    }
    ToastService.prototype.presentToast = function (_text, positionString) {
        var toast = this.toastCtrl.create({
            message: _text,
            duration: 3000,
            showCloseButton: true,
            closeButtonText: '关闭',
            position: positionString
        });
        toast.onDidDismiss(function () {
            console.log('关闭弹出');
        });
        toast.present();
    };
    ToastService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ToastController */]])
    ], ToastService);
    return ToastService;
}());

//# sourceMappingURL=toast.service.js.map

/***/ }),

/***/ 109:
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {if(navigator.userAgent.match(/QtWebEngine/i)) {
  document.write("<script src=\"qrc:///qtwebchannel/qwebchannel.js\"><\/script>");
}
;(function(qtwebdoc) {
  'use strict';
  window.onload = function() {
    if(typeof QWebChannel === 'function') {
      window.channel = new QWebChannel(qt.webChannelTransport,function(channel){
        window.qtCmdHandler = channel.objects.qtCmdHandler;
      });
    }
  };
})(this);

"use strict";
exports.__esModule = true;
var GoCom = (function () {
  function GoCom() {
  }
  
  var GoCom_JS_VERSION = '1.1.0';
  var GoCom_CMD_SCHEME = 'GoComCmd';
  var b64chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/';
  var b64tab = function(bin) {
    var t = {};
    for (var i = 0, l = bin.length; i < l; i++) t[bin.charAt(i)] = i;
    return t;
  }(b64chars);
  var fromCharCode = String.fromCharCode;
  // encoder stuff
  var cb_utob = function(c) {
    if (c.length < 2) {
      var cc = c.charCodeAt(0);
      return cc < 0x80 ? c  : cc < 0x800 ? (fromCharCode(0xc0 | (cc >>> 6))
      + fromCharCode(0x80 | (cc & 0x3f)))  : (fromCharCode(0xe0 | ((cc >>> 12) & 0x0f))
      + fromCharCode(0x80 | ((cc >>>  6) & 0x3f))
      + fromCharCode(0x80 | ( cc & 0x3f)));
    } else {
      var cc = 0x10000
        + (c.charCodeAt(0) - 0xD800) * 0x400
        + (c.charCodeAt(1) - 0xDC00);
      return (fromCharCode(0xf0 | ((cc >>> 18) & 0x07))
      + fromCharCode(0x80 | ((cc >>> 12) & 0x3f))
      + fromCharCode(0x80 | ((cc >>>  6) & 0x3f))
      + fromCharCode(0x80 | ( cc         & 0x3f)));
    }
  };
  var re_utob = /[\uD800-\uDBFF][\uDC00-\uDFFFF]|[^\x00-\x7F]/g;
  var utob = function(u) {
    return u.replace(re_utob, cb_utob);
  };
  var cb_encode = function(ccc) {
    var padlen = [0, 2, 1][ccc.length % 3],
      ord = ccc.charCodeAt(0) << 16
        | ((ccc.length > 1 ? ccc.charCodeAt(1) : 0) << 8)
        | ((ccc.length > 2 ? ccc.charCodeAt(2) : 0)),
      chars = [
        b64chars.charAt( ord >>> 18),
        b64chars.charAt((ord >>> 12) & 63),
        padlen >= 2 ? '=' : b64chars.charAt((ord >>> 6) & 63),
        padlen >= 1 ? '=' : b64chars.charAt(ord & 63)
      ];
    return chars.join('');
  };
  var btoa = global.btoa ? function(b) {
    return global.btoa(b);
  } : function(b) {
    return b.replace(/[\s\S]{1,3}/g, cb_encode);
  };
  var _encode = function (u) { return btoa(utob(u)) }  ;
  var encode = function(u, urisafe) {
    return !urisafe  ? _encode(u)
      : _encode(u).replace(/[+\/]/g, function(m0) {
        return m0 == '+' ? '-' : '_';
      }).replace(/=/g, '');
  };
  var encodeURI = function(u) { return encode(u, true) };
  global.Base64 = {
    VERSION: GoCom_JS_VERSION,
    btoa: btoa,
    toBase64: encode,
    utob: utob,
    encode: encode,
    encodeURI: encodeURI
  };
  
  var xhr;
  
  
  
  GoCom.prototype.maxWindow = function(successCallback) {
    runCmd('maxWindow',null,successCallback,null);
  };
  
  
  GoCom.prototype.selectUser = function(preSelectedUsers,isMulti,successCallback,failureCallback) {
    
    var args = {
      selType:"2",
      selObjType:"3",
      fromContacts:"true",
      fromGroup:"false",
      fromLink:"true",
      fromRecent:"true",
      fromApp:"false",
      title:"添加联系人",
      selLimit:"500",
      selectedChange:"true",
      selectedUsers:"",
      selectedGrp:"",
      selectedApp:"",
      banUsers:""
    };
    
    args.selectedUsers = preSelectedUsers;
    args.selObjType="0"; //只选人
    
    if(isMulti){
      args.selType = "1";//多选
    }else{
      args.selType = "0";//单选
    }
    
    __selectUserEx(args,successCallback,failureCallback);
    
  };
  
  var __selectUserEx = function(param,successCallback,failureCallback) {
    //console.log('param=>',param)
    //var str = JSON.stringify(param);
    //alert(str);
    runCmd('selectUsers',param,successCallback,failureCallback);
    
  };
  
  GoCom.prototype.closeWindow = function() {
    runCmd('closeWindow');
  };
  
  GoCom.prototype.chatWithUser = function(args) {
   
    //var args = {userId:chatUserId};
    //alert(args.userId);
    runCmd('chatWithUser',args);
  };
  
  
  var runCmd = function(cmd,argData,successCallback,failureCallback){
    
    var jsonData = argData;
    if(!jsonData)
      jsonData = {'cmd':cmd};
    if(navigator.userAgent.match(/Android/i)) {
      var sCallback = 'null';
      if(successCallback) {
        //alert(typeof successCallback);
        if(typeof successCallback === 'function') {
          sCallback = successCallback.name;
          //alert(sCallback);
        } else {
          sCallback = successCallback;
        }
      }
      var fCallback = 'null';
      if(failureCallback) {
        if(typeof failureCallback === 'function') {
          fCallback = failureCallback.name;
        } else {
          fCallback = failureCallback;
        }
      }
      var value = 'gocom_exec###' + cmd + '###' + encode(JSON.stringify(jsonData)) + '###' + sCallback + '###' + fCallback;
      prompt('',value);
    } else if(navigator.userAgent.match(/iPhone/i)){
      xhr = xhr ? xhr : new XMLHttpRequest();
      xhr.open('HEAD', "/!gocom_cmd?" + (+new Date()), true);
      xhr.setRequestHeader('cmd',cmd);
      xhr.setRequestHeader('args',encode(JSON.stringify(jsonData)));
      if(successCallback){
        if(typeof successCallback === 'function') {
          xhr.setRequestHeader('success',successCallback.name);
        } else {
          xhr.setRequestHeader('success',successCallback);
        }
      }
      if(failureCallback) {
        if(typeof failureCallback === 'function') {
          xhr.setRequestHeader('fail',failureCallback.name);
        } else {
          xhr.setRequestHeader('fail',failureCallback);
        }
      }
      xhr.send(null);
    } else if(qtCmdHandler){
      sCallback = 'null';
      if(successCallback) {
        //alert(typeof successCallback);
        if(typeof successCallback === 'function') {
          sCallback = successCallback.name;
          //alert(sCallback);
        } else {
          sCallback = successCallback;
        }
      }
      fCallback = 'null';
      if(failureCallback) {
        if(typeof failureCallback === 'function') {
          fCallback = failureCallback.name;
        } else {
          fCallback = failureCallback;
        }
      }
      qtCmdHandler.runCommand(cmd,JSON.stringify(jsonData),sCallback,fCallback);
    }else if(navigator.userAgent.match(/QtWebEngine/i)){
      sCallback = 'null';
      if(successCallback) {
        //alert(typeof successCallback);
        if(typeof successCallback === 'function') {
          sCallback = successCallback.name;
          //alert(sCallback);
        } else {
          sCallback = successCallback;
        }
      }
      fCallback = 'null';
      if(failureCallback) {
        if(typeof failureCallback === 'function') {
          fCallback = failureCallback.name;
        } else {
          fCallback = failureCallback;
        }
      }
      if(typeof runQtWebCmd === 'function') {
        runQtWebCmd(cmd,jsonData,sCallback,fCallback);
      }
    }
  };
  
  var runQtWebCmd = function(cmd,data,s,f) {
    //start a qt web client
    if(typeof window.qtCmdHandler !== 'undefined') {
      qtCmdHandler.runCommand(cmd,data,s,f);
    }
  };
  
  return GoCom;
}());
exports.GoCom = GoCom;

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(53)))

/***/ }),

/***/ 117:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 117;

/***/ }),

/***/ 157:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/duty-content/duty-content.module": [
		282,
		13
	],
	"../pages/duty-history/duty-history.module": [
		285,
		12
	],
	"../pages/duty-info/duty-info.module": [
		283,
		11
	],
	"../pages/home/home.module": [
		284,
		10
	],
	"../pages/integral-rule/integral-rule.module": [
		287,
		9
	],
	"../pages/my-points/my-points.module": [
		286,
		8
	],
	"../pages/opinion-batch/opinion-batch.module": [
		292,
		7
	],
	"../pages/opinion-chairman/opinion-chairman.module": [
		290,
		6
	],
	"../pages/opinion-entrust/opinion-entrust.module": [
		294,
		5
	],
	"../pages/opinion-evaluate/opinion-evaluate.module": [
		288,
		4
	],
	"../pages/opinion-list/opinion-list.module": [
		289,
		3
	],
	"../pages/points-range/points-range.module": [
		295,
		2
	],
	"../pages/view-record/view-record.module": [
		291,
		1
	],
	"../pages/workpanel/workpanel.module": [
		293,
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 157;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 158:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HttpService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__(79);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(114);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__toast_service__ = __webpack_require__(108);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var HttpService = /** @class */ (function () {
    function HttpService(http, toastService, loadingCtrl) {
        this.http = http;
        this.toastService = toastService;
        this.loadingCtrl = loadingCtrl;
        this.isNet = false;
        this.isToken = false;
    }
    HttpService.prototype.get = function (url, paramObj) {
        var _this = this;
        this.loading = this.loadingCtrl.create({
            content: '请稍等...'
        });
        paramObj.token = localStorage.token;
        this.loading.present();
        return this.http.get(url + this.toQueryString(paramObj))
            .toPromise()
            .then(function (res) { return _this.handleSuccess(res); })
            .catch(function (error) { return _this.handleError(error); });
    };
    HttpService.prototype.get2 = function (url, paramObj) {
        var _this = this;
        paramObj.token = localStorage.token;
        return this.http.get(url + this.toQueryString(paramObj))
            .toPromise()
            .then(function (res) { return _this.handleSuccess(res); })
            .catch(function (error) { return _this.handleError(error); });
    };
    HttpService.prototype.post = function (url, paramObj) {
        var _this = this;
        this.loading = this.loadingCtrl.create({
            content: '请稍等...'
        });
        this.loading.present();
        paramObj.token = localStorage.token;
        return this.http.post(url, paramObj)
            .toPromise()
            .then(function (res) { return _this.handleSuccess(res); })
            .catch(function (error) { return _this.handleError(error); });
    };
    HttpService.prototype.post2 = function (url, paramObj) {
        var _this = this;
        paramObj.token = localStorage.token;
        return this.http.post(url, paramObj)
            .toPromise()
            .then(function (res) { return _this.handleSuccess(res); })
            .catch(function (error) { return _this.handleError(error); });
    };
    HttpService.prototype.delete = function (url, paramObj) {
        var _this = this;
        this.loading = this.loadingCtrl.create({
            content: '请稍等...'
        });
        this.loading.present();
        paramObj.token = localStorage.token;
        return this.http.delete(url, { params: paramObj })
            .toPromise()
            .then(function (res) { return _this.handleSuccess(res); })
            .catch(function (error) { return _this.handleError(error); });
    };
    HttpService.prototype.delete2 = function (url, paramObj) {
        var _this = this;
        paramObj.token = localStorage.token;
        return this.http.delete(url, { params: paramObj })
            .toPromise()
            .then(function (res) { return _this.handleSuccess(res); })
            .catch(function (error) { return _this.handleError(error); });
    };
    HttpService.prototype.put = function (url, paramObj) {
        var _this = this;
        this.loading = this.loadingCtrl.create({
            content: '请稍等...'
        });
        this.loading.present();
        paramObj.token = localStorage.token;
        return this.http.put(url, paramObj)
            .toPromise()
            .then(function (res) { return _this.handleSuccess(res); })
            .catch(function (error) { return _this.handleError(error); });
    };
    HttpService.prototype.put2 = function (url, paramObj) {
        var _this = this;
        paramObj.token = localStorage.token;
        return this.http.put(url, paramObj)
            .toPromise()
            .then(function (res) { return _this.handleSuccess(res); })
            .catch(function (error) { return _this.handleError(error); });
    };
    HttpService.prototype.handleSuccess = function (result) {
        if (this.loading) {
            this.loading.dismiss();
        }
        if (result.code == 0) {
        }
        else {
            this.toastService.presentToast(result.msg, 'bottom');
        }
        return result;
    };
    HttpService.prototype.handleError = function (error) {
        var _this = this;
        if (this.loading) {
            this.loading.dismiss();
        }
        var msg = '请求失败';
        if (error.status == 0) {
            msg = '请求地址错误';
        }
        if (error.status == 400) {
            msg = '请求无效';
            console.log('请检查参数类型是否匹配');
        }
        if (error.status == 404) {
            msg = '请求资源不存在';
            console.error(msg + '，请检查路径是否正确');
        }
        switch (error.status) {
            case 0:
            case 400:
            case 405:
            case 404:
            case 500:
                if (!this.isNet) {
                    this.toastService.presentToast('网络不给力，请退出重试', 'bottom');
                    this.isNet = true;
                }
                setTimeout(function () {
                    _this.isNet = false;
                }, 3000);
                break;
        }
        console.log(error);
        return { success: false, msg: msg };
    };
    /**
     * @param obj　参数对象
     * @return {string}　参数字符串
     * @example
     *  声明: var obj= {'name':'小军',age:23};
     *  调用: toQueryString(obj);
     *  返回: "?name=%E5%B0%8F%E5%86%9B&age=23"
     */
    HttpService.prototype.toQueryString = function (obj) {
        var ret = [];
        for (var key in obj) {
            key = encodeURIComponent(key);
            var values = obj[key];
            if (values && values.constructor == Array) {
                var queryValues = [];
                for (var i = 0, len = values.length, value = void 0; i < len; i++) {
                    value = values[i];
                    queryValues.push(this.toQueryPair(key, value));
                }
                ret = ret.concat(queryValues);
            }
            else {
                ret.push(this.toQueryPair(key, values));
            }
        }
        return '?' + ret.join('&');
    };
    /**
     *
     * @param obj
     * @return {string}
     *  声明: var obj= {'name':'小军',age:23};
     *  调用: toQueryString(obj);
     *  返回: "name=%E5%B0%8F%E5%86%9B&age=23"
     */
    /*  private toBodyString(obj) {
        let ret = [];
        for (let key in obj) {
          key = encodeURIComponent(key);
          let values = obj[key];
          if (values && values.constructor == Array) {//数组
            let queryValues = [];
            for (let i = 0, len = values.length, value; i < len; i++) {
              value = values[i];
              queryValues.push(this.toQueryPair(key, value));
            }
            ret = ret.concat(queryValues);
          } else { //字符串
            ret.push(this.toQueryPair(key, values));
          }
        }
        return ret.join('&');
      }*/
    HttpService.prototype.toQueryPair = function (key, value) {
        if (typeof value == 'undefined') {
            return key;
        }
        return key + '=' + encodeURIComponent(value === null ? '' : String(value));
    };
    HttpService.prototype.PostRequest = function (objs, apiurl) {
        return new Promise(function (resolve, reject) {
            var formData = new FormData();
            var xhr = new XMLHttpRequest();
            xhr.open('POST', localStorage.url + '/' + apiurl, true);
            for (var key in objs) {
                if (objs[key]) {
                    formData.append(key, objs[key]);
                }
            }
            xhr.setRequestHeader('Accept', 'application/json');
            xhr.onreadystatechange = function () {
                if (xhr.readyState === 4) {
                    var data = xhr.response;
                    if (xhr.status === 200) {
                        resolve(data);
                    }
                    else {
                        reject(data);
                    }
                }
            };
            xhr.send(formData);
        });
    };
    HttpService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_4__toast_service__["a" /* ToastService */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["f" /* LoadingController */]])
    ], HttpService);
    return HttpService;
}());

//# sourceMappingURL=HttpService.js.map

/***/ }),

/***/ 200:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GlobalService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__ = __webpack_require__(114);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var __prefix = 'GO_COM_CLOUD_';
var GlobalService = /** @class */ (function () {
    function GlobalService() {
    }
    GlobalService.prototype.get = function (attr) {
        // if (typeof this[attr] === 'undefined') return;
        var __value = this[attr];
        if (__value) {
            return __value;
        }
        __value = JSON.parse(window.localStorage.getItem(__prefix + attr));
        if (typeof __value === 'undefined') {
            return;
        }
        this[attr] = __value;
        return __value;
    };
    GlobalService.prototype.set = function (attr, val, isSaveLocation) {
        if (isSaveLocation === void 0) { isSaveLocation = false; }
        if (typeof val === 'undefined')
            return;
        this[attr] = val;
        if (!!isSaveLocation) {
            window.localStorage.setItem(__prefix + attr, JSON.stringify(val));
        }
        return this[attr];
    };
    GlobalService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])()
    ], GlobalService);
    return GlobalService;
}());

//# sourceMappingURL=global-service.js.map

/***/ }),

/***/ 229:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(230);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(234);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 234:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__service_global_service__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_common_http__ = __webpack_require__(79);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__service_HttpService__ = __webpack_require__(158);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__service_HomeService__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__service_toast_service__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__app_component__ = __webpack_require__(279);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__providers_saveitem_saveitem__ = __webpack_require__(280);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__service_GoBack__ = __webpack_require__(281);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




// import { StatusBar } from '@ionic-native/type-bar';






// import { DepartmentListPage } from '../pages/department-list/department-list';


var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_9__app_component__["a" /* MyApp */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_9__app_component__["a" /* MyApp */], {
                    backButtonText: ' ',
                    iconMode: 'ios',
                    mode: 'ios',
                    modalEnter: 'modal-slide-in',
                    modalLeave: 'modal-slide-out',
                    tabsPlacement: 'bottom',
                    pageTransition: 'ios-transition'
                }, {
                    links: [
                        { loadChildren: '../pages/duty-content/duty-content.module#DutyContentPageModule', name: 'DutyContentPage', segment: 'duty-content', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/duty-info/duty-info.module#DutyInfoPageModule', name: 'DutyInfoPage', segment: 'duty-info', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/home/home.module#HomePageModule', name: 'HomePage', segment: 'home', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/duty-history/duty-history.module#DutyHistoryPageModule', name: 'DutyHistoryPage', segment: 'duty-history', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/my-points/my-points.module#MyPointsPageModule', name: 'MyPointsPage', segment: 'my-points', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/integral-rule/integral-rule.module#IntegralRulePageModule', name: 'IntegralRulePage', segment: 'integral-rule', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/opinion-evaluate/opinion-evaluate.module#OpinionEvaluatePageModule', name: 'OpinionEvaluatePage', segment: 'opinion-evaluate', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/opinion-list/opinion-list.module#OpinionListPageModule', name: 'OpinionListPage', segment: 'opinion-list', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/opinion-chairman/opinion-chairman.module#OpinionChairmanPageModule', name: 'OpinionChairmanPage', segment: 'opinion-chairman', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/view-record/view-record.module#ViewRecordPageModule', name: 'ViewRecordPage', segment: 'view-record', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/opinion-batch/opinion-batch.module#OpinionBatchPageModule', name: 'OpinionBatchPage', segment: 'opinion-batch', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/workpanel/workpanel.module#WorkpanelPageModule', name: 'WorkpanelPage', segment: 'workpanel', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/opinion-entrust/opinion-entrust.module#OpinionEntrustPageModule', name: 'OpinionEntrustPage', segment: 'opinion-entrust', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/points-range/points-range.module#PointsRangePageModule', name: 'PointsRangePage', segment: 'points-range', priority: 'low', defaultHistory: [] }
                    ]
                })
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_9__app_component__["a" /* MyApp */],
            ],
            providers: [
                // StatusBar,
                __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
                __WEBPACK_IMPORTED_MODULE_4__service_global_service__["a" /* GlobalService */],
                __WEBPACK_IMPORTED_MODULE_6__service_HttpService__["a" /* HttpService */],
                __WEBPACK_IMPORTED_MODULE_7__service_HomeService__["a" /* HomeService */],
                __WEBPACK_IMPORTED_MODULE_8__service_toast_service__["a" /* ToastService */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_10__providers_saveitem_saveitem__["a" /* SaveitemProvider */],
                __WEBPACK_IMPORTED_MODULE_11__service_GoBack__["a" /* GoBackService */],
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 254:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export APP_SERVER_URL */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return APP_DEPART_URL; });
var APP_SERVER_URL = '';
var APP_DEPART_URL = 'http://172.20.95.115:9910/hdrest';
// export const APP_DEPART_URL = 'http://wlzx.bjhd.gov.cionn:9910/hdrest'; 
//# sourceMappingURL=Constants.js.map

/***/ }),

/***/ 279:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_splash_screen__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__lib_gocom_gocom__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__lib_gocom_gocom___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__lib_gocom_gocom__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__service_global_service__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__service_HomeService__ = __webpack_require__(105);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


// import { StatusBar } from '@ionic-native/type-bar';




var MyApp = /** @class */ (function () {
    function MyApp(platform, 
        // statusBar: StatusBar,
        splashScreen, gs, homeService) {
        var _this = this;
        this.gs = gs;
        this.homeService = homeService;
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            // statusBar.styleDefault();
            splashScreen.hide();
            _this._request = _this.GetQueryString('type');
            //截取参数
            _this.gs.set('signType', _this._request, true);
            console.log('key', _this._request);
            localStorage.platform = 'others';
            if (location.href.split('?')[1]) {
                localStorage.token = _this.GetQueryString('token');
                // 如果是移动端则自动调用最大化
                if (platform.is('ios') || platform.is('android')) {
                    localStorage.platform = 'mobile';
                    var gocom = new __WEBPACK_IMPORTED_MODULE_3__lib_gocom_gocom__["GoCom"]();
                    gocom.maxWindow("isMaxWindow");
                }
            }
        });
    }
    MyApp.prototype.GetQueryString = function (name) {
        var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
        if (window.location.hash.indexOf("?") < 0) {
            return null;
        }
        var r = window.location.hash.split("?")[1].match(reg);
        if (r != null)
            return decodeURIComponent(r[2]);
        return null;
    };
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"E:\me\dutyevaluation_app\appmodule\src\main\resources\webapps\mobile\src\app\app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"E:\me\dutyevaluation_app\appmodule\src\main\resources\webapps\mobile\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_splash_screen__["a" /* SplashScreen */],
            __WEBPACK_IMPORTED_MODULE_4__service_global_service__["a" /* GlobalService */],
            __WEBPACK_IMPORTED_MODULE_5__service_HomeService__["a" /* HomeService */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 280:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SaveitemProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(79);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/*
  Generated class for the SaveitemProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var SaveitemProvider = /** @class */ (function () {
    function SaveitemProvider(http) {
        this.http = http;
        this.item = '';
        console.log('Hello SaveitemProvider Provider');
    }
    SaveitemProvider.prototype.setItem = function (item) {
        this.item = item;
    };
    SaveitemProvider.prototype.getItem = function () {
        return this.item;
    };
    SaveitemProvider.prototype.clearItem = function () {
        this.item = '';
    };
    SaveitemProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */]])
    ], SaveitemProvider);
    return SaveitemProvider;
}());

//# sourceMappingURL=saveitem.js.map

/***/ }),

/***/ 281:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GoBackService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__lib_gocom_gocom__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__lib_gocom_gocom___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__lib_gocom_gocom__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
/**
 * Created by lichun on 2018/6/20.
 */


var __prefix = 'GO_COM_ORG_';
var GoBackService = /** @class */ (function () {
    function GoBackService() {
    }
    GoBackService.prototype.setActiveGOBACK = function () {
        // let gocom:GoCom = new GoCom();
        // gocom.closeWindow();
        var hre = location.href.split('#/')[1];
        if (hre == 'workpanel') {
            var gocom = new __WEBPACK_IMPORTED_MODULE_1__lib_gocom_gocom__["GoCom"]();
            gocom.closeWindow();
        }
        else {
            window.history.go(-1);
        }
    };
    GoBackService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])()
    ], GoBackService);
    return GoBackService;
}());

var imBACK = new GoBackService();
window['imBACK'] = imBACK; //这步不能少
//# sourceMappingURL=GoBack.js.map

/***/ })

},[229]);
//# sourceMappingURL=main.js.map