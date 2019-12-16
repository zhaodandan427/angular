import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ColdObservable } from 'rxjs/testing/ColdObservable';

/**
 * Generated class for the ViewRecordPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-view-record',
  templateUrl: 'view-record.html',
})
export class ViewRecordPage {
  items = [];
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.items = [
      { name: '履职统计名册', 'integral': 20, time: '2019-12-12', status: '待发放' },
      { name: 'iphone6', 'integral': 30, time: '2019-12-12', status: '已发放' },
      { name: 'iphone8', 'integral': 57, time: '2019-12-12', status: '待发放' },
      { name: 'iphone11', 'integral': 66, time: '2019-12-12', status: '已发放' }
    ]
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ViewRecordPage');
  }

}
