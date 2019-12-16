import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MyPointsPage } from './my-points';

@NgModule({
  declarations: [
    MyPointsPage,
  ],
  imports: [
    IonicPageModule.forChild(MyPointsPage),
  ],
})
export class MyPointsPageModule {}
