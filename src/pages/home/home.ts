import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { GoCom } from "../../lib/gocom/gocom";
import { HomeService } from '../../service/HomeService';

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {
  item = {
    isEval: 1,  //是否评价
    createTime: '',
    owner: {
      activityGroup: "",  //活动小组
      avatar: "",  //头像
      identifier: "",
      specialCommittee: "",
      subsector: "",
      userId: "",
      userName: ""
    }
  };

  constructor(public navCtrl: NavController, public navParams: NavParams, private homeService: HomeService) {
    this.getData();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HomePage');
  }

  toInfo(){
    this.navCtrl.push('DutyInfoPage',this.item);
  }

  //关闭应用
  closeWindows() {
    let gocom: GoCom = new GoCom();
    gocom.closeWindow();
  }

  //获取详情数据
  getData(){
    let obj = {
      user_token: localStorage.token
    };
    this.homeService.getOpinionInfo(obj).then(res => {
      console.log(res);
      this.item = res.data;
    })
  }

}
