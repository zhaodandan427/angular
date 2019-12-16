import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController, Platform, ModalController, AlertController } from 'ionic-angular';
import { HomeService } from '../../service/HomeService';

/**
 * Generated class for the DutyInfoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-duty-info',
  templateUrl: 'duty-info.html',
})
export class DutyInfoPage {
  tabs = '1';
  param: any = {}; //页面传参
  records = []; //成绩列表
  record = ''; //成绩_填写项
  awards = []; //奖励列表
  award = ''; //奖励_填写项
  tel = '';
  isEval = 0; //是否已评审  0未评审  1已评审

  constructor(public navCtrl: NavController, public navParams: NavParams,
    public modalCtrl: ModalController, public alertCtrl: AlertController,
    private homeService: HomeService) {
    this.param = this.navParams.data;//接收参数
    this.record = this.param.othersInfo.section[this.param.othersInfo.section.length - 1].key;
    this.award = this.param.awardInfo.section[this.param.awardInfo.section.length - 1].key;
    this.isEval = this.param.isEval;
    this.tel = this.param.telNumber;
    if (this.param.othersInfo.section.length > 1) {
      this.param.othersInfo.section.pop();
      this.records = this.param.othersInfo.section;
      console.log(this.records);
    }
    if (this.param.awardInfo.section.length > 1) {
      this.param.awardInfo.section.pop();
      this.awards = this.param.awardInfo.section;
      console.log(this.records);
    }

    console.log(this.param);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DutyInfoPage');
  }

  //卡片详情
  openModal(flag, title) {
    let modal = this.modalCtrl.create('DutyContentPage', { list: flag, title: title });
    modal.present();
  }

  //历史评价
  toHistory() {
    this.navCtrl.push('DutyHistoryPage');
  }

  //联系我们
  telUs() {
    const alert = this.alertCtrl.create({
      title: '如有疑问可联系我们',
      subTitle: this.tel,
      buttons: [
        {
          text: '拨打电话',
          handler: data => {
            window.location.href = 'tel:' + this.tel;
          }
        }
      ]
    });
    alert.present();
  }

  //确认提交
  confirmPost() {
    let alert: any;
    let obj = {};
    switch (this.tabs) {
      case "1":
        alert = this.alertCtrl.create({
          title: '<img class="alert-icon" src="./assets/imgs/ok.png">',
          subTitle: '【基础履职】部分已经提交，主席会议、常委会会议、秘书长会议组成人员请继续确认【职务履职】部分，其他委员请继续确认【其它履职】部分。',
          buttons: [
            {
              text: '下一步',
              handler: data => {
                obj = {
                  user_token: localStorage.token,
                  dutyData: '',
                  dutyType: 1 //考评类型,1 专委会意见 2 界别意见 3 活动小组意见 4 主席会议审议意见
                };
                this.confirmDuty(obj, 1);
              }
            }
          ]
        });
        break;
      case "2":
        alert = this.alertCtrl.create({
          title: '<img class="alert-icon" src="./assets/imgs/ok.png">',
          subTitle: '【职务履职】部分已经提交，请您继续确认【其他履职】部分',
          buttons: [
            {
              text: '下一步',
              handler: data => {
                obj = {
                  user_token: localStorage.token,
                  dutyData: '',
                  dutyType: 2 //考评类型,1 专委会意见 2 界别意见 3 活动小组意见 4 主席会议审议意见
                };
                this.confirmDuty(obj, 2);
              }
            }
          ]
        });
        break;
      case "3":
        alert = this.alertCtrl.create({
          title: '<img class="alert-icon" src="./assets/imgs/ok.png">',
          subTitle: '【其他履职】部分已经提交，请您继续确认【奖励信息】部分',
          buttons: [
            {
              text: '下一步',
              handler: data => {
                obj = {
                  user_token: localStorage.token,
                  dutyData: this.record,
                  dutyType: 3 //考评类型,1 专委会意见 2 界别意见 3 活动小组意见 4 主席会议审议意见
                };
                this.confirmDuty(obj, 3);
              }
            }
          ]
        });
        break;
      case "4":
        alert = this.alertCtrl.create({
          title: '<img class="alert-icon" src="./assets/imgs/ok.png">',
          subTitle: '您本年度的委员述职工作已完成，<br>感谢您的支持！ <br>感谢您在' + this.param.year + '年度的辛勤履职！ <br>以上履职结果,将纳入您的履职档案。',
          buttons: [
            {
              text: '完成',
              handler: data => {
                obj = {
                  user_token: localStorage.token,
                  dutyData: this.award,
                  dutyType: 4 //考评类型,1 专委会意见 2 界别意见 3 活动小组意见 4 主席会议审议意见
                };
                this.confirmDuty(obj, 4);
              }
            }
          ]
        });
        break;

      default:
        break;
    }

    alert.present();
  }

  //履职确认请求
  confirmDuty(obj, flag) {
    this.homeService.commitinfo(obj).then(res => {
      console.log(res);
      switch (flag) {
        case 1:
          this.param.basicInfo.isConfirm = 1;
          this.tabs = '2';
          break;
        case 2:
          this.param.positionInfo.isConfirm = 1;
          this.tabs = '3';
          break;
        case 3:
          this.param.othersInfo.isConfirm = 1;
          this.tabs = '4';
          break;
        case 4:
          // this.isEval = 1;
          this.param.awardInfo.isConfirm = 1;
          break;
        default:
          break;
      }
    })
  }

}