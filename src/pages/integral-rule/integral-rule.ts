import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the IntegralRulePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-integral-rule',
  templateUrl: 'integral-rule.html',
})
export class IntegralRulePage {
  items: any = [];
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.items =
      [
        { title: '参加全会：', content: '参与签到一次全会会议，奖励' },
        { title: '会议活动：', content: '参与一次会议、活动，奖励' },
        { title: ' 委员圈：', content: '发表一次委员圈，多次发表每日奖励一次,奖励' },
        { title: '提案和社情民意信息：', content: '提案、社情民意信息，奖励' },
        { title: '平台专题活动话题讨论：', content: '按次奖励' },
        { title: '学习资料有效阅读：', content: '同一篇每日奖励一次，奖励' },
        { title: '活动相册', content: '1.点赞,上传照片等操作每日奖励一次，奖励', content2: '2.评论相册按评论次数给分，每日不设上限。' },
        { title: '奖励履职：', content: '委员获得一次奖励履职，奖励' },
        { title: '委员生日：', content: '委员生日，每年一次系统自动发放，奖励' },
        { title: '初始积分', content: '委员初始积分，系统自动发放，奖励' },
        { title: '每日登录：', content: '每日登录系统，每天只奖励一次，奖励' }
      ]


  }
  ionViewDidLoad() {//加载完成的钩子函数
    console.log('ionViewDidLoad IntegralRulePage');
  }
}
