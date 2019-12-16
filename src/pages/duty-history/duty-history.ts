import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HomeService } from '../../service/HomeService';

@IonicPage()
@Component({
  selector: 'page-duty-history',
  templateUrl: 'duty-history.html',
})
export class DutyHistoryPage {
  items = [];

  constructor(public navCtrl: NavController, public navParams: NavParams, private homeService: HomeService) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DutyHistoryPage');
  }

  ionViewCanEnter(){
    this.getList();

  }

  //获取列表数据
  getList(){
    let obj = {
      user_token: localStorage.token,
      page: 1,
      size: 9999
    };
    this.homeService.getOpinionList(obj).then(res => {
      console.log(res);
      this.items = res.data.info;
    })
  }

  //下载pdf 
  downloadPdf(item){
    // window.open(item.attachment);
    window.location.href = item.attachment;
    // location.href = item.attachment;
  }

}
