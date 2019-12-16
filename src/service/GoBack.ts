/**
 * Created by lichun on 2018/6/20.
 */
import { Injectable } from '@angular/core';
import { IonicPage, NavController, NavParams,ActionSheetController,AlertController,ViewController,App } from 'ionic-angular';
import {GoCom} from "../lib/gocom/gocom";

const __prefix = 'GO_COM_ORG_';

@Injectable()
export class GoBackService {

  setActiveGOBACK() {
    // let gocom:GoCom = new GoCom();
    // gocom.closeWindow();
    let hre = location.href.split('#/')[1];
    if(hre == 'workpanel'){
      let gocom:GoCom = new GoCom();
      gocom.closeWindow();
    }else{
      window.history.go(-1);
    }
  }

}

var imBACK:GoBackService = new GoBackService();
window['imBACK'] = imBACK; //这步不能少
