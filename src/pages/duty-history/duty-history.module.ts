import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DutyHistoryPage } from './duty-history';

@NgModule({
  declarations: [
    DutyHistoryPage,
  ],
  imports: [
    IonicPageModule.forChild(DutyHistoryPage),
  ],
})
export class DutyHistoryPageModule {}
