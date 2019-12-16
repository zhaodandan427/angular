import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController} from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-opinion-chairman',
  templateUrl: 'opinion-chairman.html',
})
export class OpinionChairmanPage {
  title = localStorage.title;
  underline = '____';
  check = '';

  constructor(public navCtrl: NavController, public navParams: NavParams,public alertCtrl: AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad OpinionChairmanPage');
  }

  //评价
  toEdit(){
    let alert = this.alertCtrl.create();
    alert.setTitle('主席会议审议意见');

    alert.addInput({
      type: 'radio',
      label: '优秀',
      value: '优秀',
      checked: true
    });
    alert.addInput({
      type: 'radio',
      label: '称职',
      value: '称职',
    });
    alert.addInput({
      type: 'radio',
      label: '努力达标',
      value: '努力达标',
    });

    alert.addButton('取消');
    alert.addButton({
      text: '确定',
      handler: data => {
        console.log(data);
        this.check = ' '+data+' ';
        this.underline = '';
      }
    });
    alert.present();
  }

  //确认
  toList(){
    this.navCtrl.pop();
  }

}
