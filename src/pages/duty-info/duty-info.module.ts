import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DutyInfoPage } from './duty-info';

@NgModule({
  declarations: [
    DutyInfoPage,
  ],
  imports: [
    IonicPageModule.forChild(DutyInfoPage),
  ],
})
export class DutyInfoPageModule {}
