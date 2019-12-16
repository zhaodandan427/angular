import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the PointsRangePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-points-range',
  templateUrl: 'points-range.html',
})
export class PointsRangePage {
  item: any = {}
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.item = {
      data: [
        { name: '张委员', 'number': 10220, "rankingNumber": 1000 },
        { name: '张委员', 'number': 10220, "rankingNumber": 1000 },
        { name: '张委员', 'number': 10220, "rankingNumber": 1000 },
        { name: '张委员', 'number': 10220, "rankingNumber": 1000 },
        { name: '张委员', 'number': 10220, "rankingNumber": 1000 },
        { name: '张委员', 'number': 10220, "rankingNumber": 1000 }
      ]
    };
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PointsRahngePage');
  }

}
