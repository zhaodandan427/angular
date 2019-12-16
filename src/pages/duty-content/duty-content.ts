import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';

/**
 * Generated class for the DutyContentPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-duty-content',
  templateUrl: 'duty-content.html',
})
export class DutyContentPage {
  type = '';
  title = "";
  items: any = [];

  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController) {
    this.items = this.navParams.data.list;
    this.title = this.navParams.data.title;
    console.log(this.navParams.data);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DutyContentPage');
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }

}
