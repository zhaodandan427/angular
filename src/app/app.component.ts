import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
// import { StatusBar } from '@ionic-native/type-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { GoCom } from '../lib/gocom/gocom';

import { GlobalService } from '../service/global-service';
import { HomeService } from '../service/HomeService';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any;
  private _request:string;

  constructor(platform: Platform,
              // statusBar: StatusBar,
              splashScreen: SplashScreen,
              private gs:GlobalService,
              private homeService:HomeService) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      // statusBar.styleDefault();
      splashScreen.hide();

      this._request = this.GetQueryString('type');

      //截取参数
      this.gs.set('signType',this._request,true);
      console.log('key',this._request);
      localStorage.platform = 'others';
      if(location.href.split('?')[1]) {
          localStorage.token = this.GetQueryString('token');
          // 如果是移动端则自动调用最大化
          if(platform.is('ios') || platform.is('android')){
            localStorage.platform = 'mobile';
            let gocom:GoCom = new GoCom();
            gocom.maxWindow("isMaxWindow");
          }
      }
    });
  }

  GetQueryString(name)
  {
    let reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
    if(window.location.hash.indexOf("?") < 0){
            return null;
    }
    let r = window.location.hash.split("?")[1].match(reg); 　　
    if (r != null) return decodeURIComponent(r[2]); 
　　    return null; 
  }
}

