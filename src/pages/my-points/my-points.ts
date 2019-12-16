import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { GoCom } from "../../lib/gocom/gocom";

/**
 * Generated class for the MyPointsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-my-points',
  templateUrl: 'my-points.html',
})
export class MyPointsPage {
  item: any = {};

  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController) {
    this.item = {
      score: 2378,//当前积分,
      data: [
        { name: '委员履职纪念册', requirintegral: 100, yinchuan: 20, convertible: 23 },
        { name: '手机支架', requirintegral: 3300, yinchuan: 39, convertible: 0 },
        { name: 'iphone11', requirintegral: 1000, yinchuan: 10, convertible: 15 },
        { name: 'iphone5', requirintegral: 400, yinchuan: 13, convertible: 0 }
      ],
      detailList: [
        { name: '每日登录', time: '2019-12-01', score: 30 },
        { name: '初始积分', time: '2019-12-02', score: 100 },
        { name: '委员生日', time: '2019-12-03', score: 400 },
        { name: '奖励履职', time: '2019-12-01', score: 600 },
        { name: '学习资料有效阅读', time: '2019-12-04', score: 800 },
        { name: '平台专题活动话题讨论', time: '2019-12-05', score: 1000 },
        { name: '委员圈', time: '2019-12-06', score: 300 },
        { name: '会议活动', time: '2019-12-07', score: 32 },
        { name: '参加全会', time: '2019-12-08', score: 26 }
      ]
    };
    this.item.score = this.thousandMark(this.item.score)
    //所需积分千分符转换
    this.item.data.map((list: { requirintegral: string; }, i: any) => {
      list.requirintegral = this.thousandMark(list.requirintegral)
    })
  }
  //千分符函数
  thousandMark(val: string) {
    return (val + '').replace(/(\d{1,3})(?=(\d{3})+(?:$|\.))/g, '$1,');
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad MyPointsPage');
  }
  //关闭应用
  closeWindows() {
    let gocom: GoCom = new GoCom();
    gocom.closeWindow();
  }
  //积分规则页面跳转
  integralRule() {
    this.navCtrl.push('IntegralRulePage')
  }
  //积分排行页面跳转
  pointsRange() {
    this.navCtrl.push('PointsRangePage')
  }
  //查看积分记录页面跳转
  viewRecord() {
    this.navCtrl.push("ViewRecordPage")
  }
  //立即兑换
  integral(item: any) {
    const alert = this.alertCtrl.create({
      subTitle: '您与2019-12-01 已兑换过还礼品是否还需要兑换？',
      buttons: [
        {
          text: '兑换',
          handler: () => {

          }
        },
        {
          text: '取消',
          handler: () => {
            console.log('Agree clicked');
          }
        }
      ]
    });
    alert.present();
  }
  //上拉加载更多
  doInfinite(infiniteScroll: { complete: () => void; }) {

    setTimeout(() => {
      for (let i = 0; i < 1; i++) {
        this.item.detailList.push(...this.item.detailList);
      }
      infiniteScroll.complete();
    }, 500);
  }
}
