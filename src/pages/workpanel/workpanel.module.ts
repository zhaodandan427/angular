import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { WorkpanelPage } from './workpanel';
import { DragulaModule } from 'ng2-dragula';

@NgModule({
  declarations: [
    WorkpanelPage,
  ],
  imports: [
    IonicPageModule.forChild(WorkpanelPage),
    DragulaModule.forRoot()
  ],
})
export class WorkpanelPageModule {}
