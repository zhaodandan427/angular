import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HomeService } from '../../service/HomeService';
import { ToastService } from '../../service/toast.service';

@IonicPage()
@Component({
  selector: 'page-opinion-evaluate',
  templateUrl: 'opinion-evaluate.html',
})
export class OpinionEvaluatePage {
  title = localStorage.title;
  sign = localStorage.sign;
  params:any = '';
  grade = 0;
  userIds = [];

  constructor(public navCtrl: NavController, public navParams: NavParams, 
    private homeService: HomeService, private toastService: ToastService) {
      //页面传参
    if(this.navParams.data.type == 'edit'){
      this.params = this.navParams.data;
      this.grade = this.params.grade;
    }else{
      this.params = this.navParams.data.checks[0];
      this.grade = 0;
    }
    
    console.log(this.params);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad OpinionEvaluatePage');
  }

  //确认
  evaluate(){
    if(this.params.type == 'edit'){
      this.userIds.push(this.params.id);
    }else{
      for(let i=0;i<this.navParams.data.checks.length;i++){
        this.userIds.push(this.navParams.data.checks[i].id)
      }
    }
    let obj = {
      user_token: localStorage.token,
      evalType: "1",
      grade: this.grade,
      ids: this.userIds,
    };
    this.homeService.evaluate(obj).then(res => {
      console.log(res);
      if(res.code == 0){
        this.toastService.presentToast('考评数据已提交', 'bottom');
        if(this.navParams.data.type == "edit"){
          this.navCtrl.pop();
        }else{
          window.history.go(-2);
          this.navCtrl.popTo(this.navCtrl.getByIndex(1));
        }
        
      }
    })
  }

}
