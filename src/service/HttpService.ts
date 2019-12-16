import {Injectable} from "@angular/core";
import { HttpClient,HttpHeaders} from "@angular/common/http";
import { LoadingController } from 'ionic-angular';
import "rxjs/add/operator/map";
import * as _ from 'lodash';

import { ToastService } from './toast.service';


@Injectable()
export class HttpService {

  private isNet:boolean = false;
  private isToken:boolean = false;
  private loading: any;

  constructor(public http: HttpClient,
              private toastService:ToastService,
              public loadingCtrl: LoadingController) {


  }

  public get(url: string, paramObj: any) {
    this.loading = this.loadingCtrl.create({
      content: '请稍等...'
    });
    paramObj.token = localStorage.token;
    this.loading.present();
    return this.http.get(url + this.toQueryString(paramObj))
      .toPromise()
      .then(res => this.handleSuccess(res))
      .catch(error => this.handleError(error));
  }

  public get2(url: string, paramObj: any) {
    paramObj.token = localStorage.token;
    return this.http.get(url + this.toQueryString(paramObj))
      .toPromise()
      .then(res => this.handleSuccess(res))
      .catch(error => this.handleError(error));
  }



  public post(url: string, paramObj: any) {
    this.loading = this.loadingCtrl.create({
      content: '请稍等...'
    });
  
    this.loading.present();
    paramObj.token = localStorage.token;
    return this.http.post(url,paramObj)
      .toPromise()
      .then(res => this.handleSuccess(res))
      .catch(error => this.handleError(error));
  }

  public post2(url: string, paramObj: any) {
    paramObj.token = localStorage.token;
    return this.http.post(url,paramObj,)
      .toPromise()
      .then(res => this.handleSuccess(res))
      .catch(error => this.handleError(error));
  }


  public delete(url: string, paramObj: any) {
      this.loading = this.loadingCtrl.create({
          content: '请稍等...'
      });
      this.loading.present();
      paramObj.token = localStorage.token;
      return this.http.delete(url,{params:paramObj} )
          .toPromise()
          .then(res => this.handleSuccess(res))
          .catch(error => this.handleError(error));
  }

  public delete2(url: string, paramObj: any) {
    paramObj.token = localStorage.token;
    return this.http.delete(url,{params:paramObj} )
        .toPromise()
        .then(res => this.handleSuccess(res))
        .catch(error => this.handleError(error));
}


  public put(url: string, paramObj: any) {
      this.loading = this.loadingCtrl.create({
          content: '请稍等...'
      });
      this.loading.present();
      paramObj.token = localStorage.token;
      return this.http.put(url, paramObj)
          .toPromise()
          .then(res => this.handleSuccess(res))
          .catch(error => this.handleError(error));
  }

  public put2(url: string, paramObj: any) {
    paramObj.token = localStorage.token;
    return this.http.put(url, paramObj)
        .toPromise()
        .then(res => this.handleSuccess(res))
        .catch(error => this.handleError(error));
}

  private handleSuccess(result) {
    if(this.loading){
      this.loading.dismiss();
    }
    if(result.code == 0){
    }else{
      this.toastService.presentToast(result.msg,'bottom');
    }
    return result;
  }

  private handleError(error: Response | any) {
    if(this.loading){
      this.loading.dismiss();
    }
    let msg = '请求失败';
    if (error.status == 0) {
      msg = '请求地址错误';
    }
    if (error.status == 400) {
      msg = '请求无效';
      console.log('请检查参数类型是否匹配');
    }
    if (error.status == 404) {
      msg = '请求资源不存在';
      console.error(msg+'，请检查路径是否正确');

    }
    switch (error.status){
      case 0:
      case 400:
      case 405:
      case 404:
      case 500:
        if(!this.isNet){
          this.toastService.presentToast('网络不给力，请退出重试','bottom');
          this.isNet = true;
        }

        setTimeout(() => {
          this.isNet = false;
        }, 3000);

        break;
    }
    console.log(error);
    return {success: false, msg: msg};
  }

  /**
   * @param obj　参数对象
   * @return {string}　参数字符串
   * @example
   *  声明: var obj= {'name':'小军',age:23};
   *  调用: toQueryString(obj);
   *  返回: "?name=%E5%B0%8F%E5%86%9B&age=23"
   */
  private toQueryString(obj) {
    let ret = [];
    for (let key in obj) {
      key = encodeURIComponent(key);
      let values = obj[key];
      if (values && values.constructor == Array) {//数组
        let queryValues = [];
        for (let i = 0, len = values.length, value; i < len; i++) {
          value = values[i];
          queryValues.push(this.toQueryPair(key, value));
        }
        ret = ret.concat(queryValues);
      } else { //字符串
        ret.push(this.toQueryPair(key, values));
      }
    }
    return '?' + ret.join('&');
  }

  /**
   *
   * @param obj
   * @return {string}
   *  声明: var obj= {'name':'小军',age:23};
   *  调用: toQueryString(obj);
   *  返回: "name=%E5%B0%8F%E5%86%9B&age=23"
   */
/*  private toBodyString(obj) {
    let ret = [];
    for (let key in obj) {
      key = encodeURIComponent(key);
      let values = obj[key];
      if (values && values.constructor == Array) {//数组
        let queryValues = [];
        for (let i = 0, len = values.length, value; i < len; i++) {
          value = values[i];
          queryValues.push(this.toQueryPair(key, value));
        }
        ret = ret.concat(queryValues);
      } else { //字符串
        ret.push(this.toQueryPair(key, values));
      }
    }
    return ret.join('&');
  }*/


  private toQueryPair(key, value) {
    if (typeof value == 'undefined') {
      return key;
    }
    return key + '=' + encodeURIComponent(value === null ? '' : String(value));
  }

  public PostRequest(objs,apiurl): Promise<any> {
    return new Promise((resolve, reject) => {
      const formData: FormData = new FormData();
      const xhr = new XMLHttpRequest();
      xhr.open('POST', localStorage.url + '/'+apiurl, true);
      for (const key in objs) {
        if (objs[key]) {
          formData.append(key, objs[key]);
        }
      }
      xhr.setRequestHeader('Accept', 'application/json');
      xhr.onreadystatechange = () => {
        if (xhr.readyState === 4) {
          const data = xhr.response;
          if (xhr.status === 200) {
            resolve(data);
          } else {
            reject(data)
          }
        }
      };
      xhr.send(formData);
    });
  }




}
