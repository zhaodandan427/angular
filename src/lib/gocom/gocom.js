if(navigator.userAgent.match(/QtWebEngine/i)) {
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
