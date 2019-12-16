import { Injectable } from "@angular/core";
import { ToastController } from 'ionic-angular';
@Injectable()
export class ToastService {
  constructor(private toastCtrl: ToastController) {}

  presentToast(_text:string,positionString: string) {
    let toast = this.toastCtrl.create({
      message: _text,
      duration: 3000,
      showCloseButton: true,
      closeButtonText: '关闭',
      position: positionString
    });

    toast.onDidDismiss(() => {
      console.log('关闭弹出');
    });

    toast.present();
  }
}
