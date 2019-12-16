import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PointsRangePage } from './points-range';

@NgModule({
  declarations: [
    PointsRangePage,
  ],
  imports: [
    IonicPageModule.forChild(PointsRangePage),
  ],
})
export class PointsRangePageModule {}
