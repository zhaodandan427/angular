import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { OpinionListPage } from './opinion-list';

@NgModule({
  declarations: [
    OpinionListPage,
  ],
  imports: [
    IonicPageModule.forChild(OpinionListPage),
  ],
})
export class OpinionListPageModule {}
