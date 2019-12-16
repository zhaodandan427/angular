import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
// import { StatusBar } from '@ionic-native/type-bar';

import { GlobalService } from '../service/global-service';
import { HttpClientModule } from '@angular/common/http';
import { HttpService } from '../service/HttpService';
import { HomeService } from '../service/HomeService';
import { ToastService } from '../service/toast.service';

import { MyApp } from './app.component';
// import { DepartmentListPage } from '../pages/department-list/department-list';
import { SaveitemProvider } from '../providers/saveitem/saveitem';
import { GoBackService } from '../service/GoBack';

@NgModule({
  declarations: [
    MyApp,
    // DepartmentListPage
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp, {
        backButtonText: ' ',
        iconMode: 'ios',
        mode:'ios',
        modalEnter: 'modal-slide-in',
        modalLeave: 'modal-slide-out',
        tabsPlacement: 'bottom',
        pageTransition: 'ios-transition'
      }
    )
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    // DepartmentListPage
  ],
  providers: [
    // StatusBar,
    SplashScreen,
    GlobalService,
    HttpService,
    HomeService,
    ToastService,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    SaveitemProvider,
    GoBackService,
  ]
})
export class AppModule {}
