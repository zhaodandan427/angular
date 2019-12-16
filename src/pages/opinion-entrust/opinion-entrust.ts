import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HomeService } from '../../service/HomeService';
import { ToastService } from '../../service/toast.service';

@IonicPage()
@Component({
  selector: 'page-opinion-entrust',
  templateUrl: 'opinion-entrust.html',
})
export class OpinionEntrustPage {
  title = localStorage.title;
  items: any = []
  choose: any = '';
  constructor(public navCtrl: NavController, public navParams: NavParams,private homeService: HomeService,
    private toastService: ToastService) {
    let obj = {
      user_token: localStorage.token,
    };
    //获取委托人列表
    this.homeService.getAssigneelist(obj).then(res => {
      console.log(res);
      this.items = res.data.info;
    })
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad OpinionEntrustPage');
  }

  //确认
  entrust(){
    if(this.choose == ''){
      this.toastService.presentToast('请选择委托人','bottom');
    }else{
      let obj = {
        user_token: localStorage.token,
        reviewerId: this.choose
      };
      this.homeService.entrust(obj).then(res => {
        console.log(res);
        if(res.code == 0){
          this.toastService.presentToast('委托成功', 'bottom');
          this.navCtrl.pop();
        }
      })
    }
  }

}
