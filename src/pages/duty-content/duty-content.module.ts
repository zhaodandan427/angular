import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DutyContentPage } from './duty-content';

@NgModule({
  declarations: [
    DutyContentPage,
  ],
  imports: [
    IonicPageModule.forChild(DutyContentPage),
  ],
})
export class DutyContentPageModule {}
