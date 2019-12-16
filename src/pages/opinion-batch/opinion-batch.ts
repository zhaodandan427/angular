import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { HomeService } from '../../service/HomeService';
import { ToastService } from '../../service/toast.service';

@IonicPage()
@Component({
  selector: 'page-opinion-batch',
  templateUrl: 'opinion-batch.html',
})
export class OpinionBatchPage {
  title = localStorage.title;
  private checks: any = [];
  items = [];
  isflag = true;
  isAll = false;  //是否全选

  constructor(public navCtrl: NavController, public navParams: NavParams,
    private homeService: HomeService, private toastService: ToastService,
    public alertCtrl: AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad OpinionBatchPage');
  }

  ionViewCanEnter() {
    this.getList();
    this.checks = [];
  }

   //获取列表数据
   getList() {
    let obj = {
      user_token: localStorage.token,
      page: 1,
      size: 9999,
      session: 10, //届次
      year: '2019',//年度
      type: 1 //考评类型,1 专委会意见 2 界别意见 3 活动小组意见 4 主席会议审议意见
    };
    this.homeService.getMemberList(obj).then(res => {
      console.log(res);
      this.items = res.data.info;
    })
  }

  //人员选择
  checkChange(item) {
    // let flag = 0;
    // for (let i = 0; i < this.checks.length; i++) {
    //   if (item.member.userId == this.checks[i].member.userId) {
    //     this.checks.splice(i, 1);
    //     flag = 1;
    //   }
    // }
    // if (flag == 0) {
    //   // item.check = true
    //   this.checks.push(item);
    // }
  }

  //全选
  checkAll() {
    // this.checks = [];
    if (this.isAll == true) {
      // for(let i=0;i<this.items.length;i++){
      //   this.checks.push(this.items[i]);
      // }
      for (let i = 0; i < this.items.length; i++) {
        this.items[i].check = true;
      }
    } else {
      for (let i = 0; i < this.items.length; i++) {
        this.items[i].check = false;
      }
    }
  }

    //批量审批
    batchClick() {
      this.checks = [];
      for(let i=0;i<this.items.length;i++){
        if(this.items[i].check==true){
          this.checks.push(this.items[i])
        }
      }
      if(this.checks.length == 0){
        this.toastService.presentToast('请选择人员','bottom');
      }else{
        this.navCtrl.push('OpinionEvaluatePage', {type:'batch',checks:this.checks});
      }
    }

}
