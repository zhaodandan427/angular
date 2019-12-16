import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { HomeService } from '../../service/HomeService';
import { GoCom } from "../../lib/gocom/gocom";
import { ToastService } from '../../service/toast.service';

@IonicPage()
@Component({
  selector: 'page-opinion-list',
  templateUrl: 'opinion-list.html',
})
export class OpinionListPage {

  title = "";
  private checks: any = [];
  items = [];
  isflag = true;
  isAll = false;  //是否全选
  role: any = {};

  constructor(public navCtrl: NavController, public navParams: NavParams,
    private homeService: HomeService, private toastService: ToastService,
    public alertCtrl: AlertController) {

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad OpinionListPage');
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
      this.role = res.user.roleMap;
      switch (this.role.evalType) {//考评类型,1 专委会意见 2 界别意见 3 活动小组意见 4 主席会议审议意见
        case "1":
          localStorage.title = '专委会意见';
          localStorage.sign = '主任签字：';
          break;
        case "2":
          localStorage.title = '界别意见';
          localStorage.sign = '召集人签字：';
          break;
        case "3":
          localStorage.title = '活动小组意见';
          localStorage.sign = '组长签字：';
          break;
        case "4":
          localStorage.title = '主席会议审议意见';
          localStorage.sign = '主席签字：';
          break;
        default:
          break;
      }
      this.title = localStorage.title;
    })
  }

  //人员选择
  checkChange(item) {
    let flag = 0;
    for (let i = 0; i < this.checks.length; i++) {
      if (item.member.userId == this.checks[i].member.userId) {
        this.checks.splice(i, 1);
        flag = 1;
      }
    }
    if (flag == 0) {
      // item.check = true
      this.checks.push(item);
    }
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

  //委托审批
  entrust() {
    console.log('委托审批');
    this.navCtrl.push('OpinionEntrustPage');
  }

  //编辑
  toEdit(item) {
    console.log(item);
    item.type = 'edit';
    this.navCtrl.push('OpinionEvaluatePage', item);
  }

  //批量审批
  batchClick() {
    console.log(this.checks);
    this.navCtrl.push('OpinionBatchPage');
    // if(this.checks.length == 0){
    //   this.toastService.presentToast('请选择人员','bottom');
    // }else{
    //   this.navCtrl.push('OpinionEvaluatePage', {type:'batch',checks:this.checks});
    // }
  }

  //考评确认
  confirmClick() {
    let obj = {
      user_token: localStorage.token,
      reviewerId: ''
    };
    const alert = this.alertCtrl.create({
      title: '<img class="alert-icon" src="./assets/imgs/ok.png">',
      subTitle: '考评确认后将不可再更改',
      buttons: [
        {
          text: '取消',
          handler: data => {

          }
        }, {
          text: '确认',
          handler: data => {
            this.homeService.confirm(obj).then(res => {
              console.log(res);
              if (res.code == 0) {
                this.toastService.presentToast('考评确认成功', 'bottom');
                this.getList();
              }
            })
          }
        }
      ]
    });
    alert.present();

  }

  //关闭应用
  closeWindows() {
    let gocom: GoCom = new GoCom();
    gocom.closeWindow();
  }

}
