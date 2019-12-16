import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Platform, LoadingController } from 'ionic-angular';
import { DragulaService } from 'ng2-dragula';
import { Subscription } from 'rxjs';
import { HomeService } from '../../service/HomeService';
import { GoCom } from "../../lib/gocom/gocom";

@IonicPage()
@Component({
  selector: 'page-workpanel',
  templateUrl: 'workpanel.html',
})
export class WorkpanelPage {
  private addItems = [];
  private apps = [];
  private loading: any;
  subs = new Subscription();
  client = '';
  constructor(public navCtrl: NavController, public navParams: NavParams,
    private dragulaService: DragulaService, private homeService: HomeService,
    platform: Platform, public loadingCtrl: LoadingController) {
    if (platform.is('ios')) {
      this.client = 'ios';
    } else if (platform.is('android')) {
      this.client = 'android';
    } else {
      this.client = 'pc';
    }
    console.log(this.client);
    let lt = this;
    (window as any).global = window;
    let dark = this.dragulaService.createGroup("VAMPIRES", {
      revertOnSpill: true,
      copy: (el, source) => {
        return source.id === 'left';
      },
    });

    //拖动变化后
    dark.drake.on('drop', function (e) {
      lt.postData();
    })

    this.login();


  }


  ionViewDidLoad() {
    // console.log('ionViewDidLoad WorkpanelPage');
  }

  //应用排序
  postData() {
    this.homeService.sortApps(this.addItems).then(res => {
      this.getAllApps();
    })
  }

  //token校验
  login() {
    let obj = {
      token: localStorage.token
    };
    this.homeService.login(obj).then(res => {
      this.getAllApps();
    })
  }

  //获取所有应用
  getAllApps() {
    this.loading = this.loadingCtrl.create({
      content: '请稍等...'
    });
    this.loading.present();
    let obj = {
    };
    this.homeService.getAllApps(obj).then(res => {
      let ts = this;
      let myApps = function () {
        for (var i = 0; i < res.myApps.length; i++) {
          res.myApps[i].ishow = true;
          if (ts.client == 'android') {
            if (res.myApps[i].android == '' || res.myApps[i].android == null) {
              res.myApps.splice(i, 1);
              myApps();
              return;
            }
          } else if (ts.client == 'ios') {
            if (res.myApps[i].ios == '' || res.myApps[i].ios == null) {
              res.myApps.splice(i, 1);
              myApps();
              return;
            }
          } else {
            if (res.myApps[i].web == '' || res.myApps[i].web == null) {
              res.myApps.splice(i, 1);
              myApps();
              return;
            }
          }
        }
      }
      myApps();
      let apps = function () {
        for (var i = 0; i < res.apps.length; i++) {
          for (var j = 0; j < res.apps[i].apps.length; j++) {
            res.apps[i].apps[j].ishow = true;
            if (ts.client == 'android') {
              if (res.apps[i].apps[j].android == '' || res.apps[i].apps[j].android == null) {
                res.apps[i].apps.splice(j, 1);
                apps();
                return;
              }
            } else if (ts.client == 'ios') {
              if (res.apps[i].apps[j].ios == '' || res.apps[i].apps[j].ios == null) {
                res.apps[i].apps.splice(j, 1);
                apps();
                return;
              }
            } else {
              if (res.apps[i].apps[j].web == '' || res.apps[i].apps[j].web == null) {
                res.apps[i].apps.splice(j, 1);
                apps();
                return;
              }
            }
          }
        }
      }
      apps();
      this.apps = res.apps;
      this.addItems = res.myApps;
      setTimeout(() => {
        this.loading.dismiss();
      }, 600);
    })
  }

  //添加应用
  addApp(item) {
    let obj = [];
    obj.push(item);
    this.homeService.addApps(obj).then(res => {
      this.getAllApps();
    })
  }

  //删除应用
  deleteApp(item) {
    let obj = [];
    obj.push(item);
    this.homeService.deleteApps(obj).then(res => {
      this.getAllApps();
    })
  }

  //关闭应用
  closeWindows() {
    let gocom: GoCom = new GoCom();
    gocom.closeWindow();
  }


}
