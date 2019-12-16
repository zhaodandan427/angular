/**
 * Created by lichun on 2017/12/19.
 */
import { Injectable } from "@angular/core";
import { HttpService } from "./HttpService";
import { APP_SERVER_URL, APP_DEPART_URL } from '../providers/Constants';
@Injectable()
export class HomeService {
  constructor(private httpService: HttpService) {

  }
  //获取企业信息
  appCompanyInfo(_obj) {
    _obj.randomNum = Math.random();
    return this.httpService.get(APP_DEPART_URL + '/interconnect/batchcompany', _obj);
  }

  //token校验
  login(_obj) {
    _obj.randomNum = Math.random();
    return this.httpService.post2(APP_DEPART_URL + '/ext/api/login?token=' + _obj.token, _obj);
  }

  // //获取常用应用
  // getApps(_obj) {
  //   _obj.randomNum = Math.random();
  //   return this.httpService.get2(APP_DEPART_URL + '/ext/liteapps/all', _obj);
  // }
  //获取所有应用
  getAllApps(_obj) {
    _obj.randomNum = Math.random();
    return this.httpService.get2(APP_DEPART_URL + '/ext/liteapps/all', _obj);
  }
  //添加应用应用
  addApps(_obj) {
    _obj.randomNum = Math.random();
    return this.httpService.post2(APP_DEPART_URL + '/ext/liteapps?type=0', _obj);
  }
  //删除应用应用
  deleteApps(_obj) {
    _obj.randomNum = Math.random();
    return this.httpService.post2(APP_DEPART_URL + '/ext/liteapps?type=1', _obj);
  }
  //排序应用
  sortApps(_obj) {
    _obj.randomNum = Math.random();
    return this.httpService.post2(APP_DEPART_URL + '/ext/liteapps/order', _obj);
  }

  //履职历史列表
  getOpinionList(_obj) {
    _obj.randomNum = Math.random();
    return this.httpService.get2(APP_DEPART_URL + '/apis/dutyeval/list', _obj);
  }

  //履职详情
  getOpinionInfo(_obj) {
    _obj.randomNum = Math.random();
    return this.httpService.get2(APP_DEPART_URL + '/apis/dutyeval/detail', _obj);
  }

  //获取待评价委员列表
  getMemberList(_obj) {
    _obj.randomNum = Math.random();
    return this.httpService.get2(APP_DEPART_URL + '/apis/dutyeval/memberlist', _obj);
  }

  //评价委员（单人、多人）
  evaluate(_obj) {
    _obj.randomNum = Math.random();
    return this.httpService.post2(APP_DEPART_URL + '/apis/dutyeval/evaluation?user_token=' + _obj.user_token, _obj);
  }

  //获取委托人员列表
  getAssigneelist(_obj) {
    _obj.randomNum = Math.random();
    return this.httpService.get2(APP_DEPART_URL + '/apis/dutyeval/assigneelist', _obj);
  }

  //委托评审
  entrust(_obj) {
    _obj.randomNum = Math.random();
    return this.httpService.post2(APP_DEPART_URL + '/apis/dutyeval/authorize?user_token=' + _obj.user_token, _obj);
  }

  //评审确认
  confirm(_obj) {
    _obj.randomNum = Math.random();
    return this.httpService.post2(APP_DEPART_URL + '/apis/dutyeval/confirm?user_token=' + _obj.user_token, _obj);
  }

  //履职确认
  commitinfo(_obj) {
    _obj.randomNum = Math.random();
    return this.httpService.post2(APP_DEPART_URL + '/apis/dutyeval/commitinfo?user_token=' + _obj.user_token, _obj);
  }

}
