import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the SaveitemProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class SaveitemProvider {

  item: any = '';

  constructor(public http: HttpClient) {
    console.log('Hello SaveitemProvider Provider');
  }

  setItem(item){
    this.item = item;
  }

  getItem(){
    return this.item;
  }

  clearItem(){
    this.item = '';
  }

}
