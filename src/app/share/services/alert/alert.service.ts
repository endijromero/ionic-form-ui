import { Injectable } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { ConfirmOpts } from './alert-types';

@Injectable({
  providedIn: 'root'
})

export class AlertService {

  alert;
  confirm;

  constructor(private alertCtrl: AlertController) { }

  async basicAlert(header: string, message: string, buttons: any, cssClass?: string) {
    this.alert = await this.alertCtrl.create({ header, message, buttons, cssClass });
    this.alert.present();
  }

  async errorAlert(message: string, title?: string, callback?: any) {
    this.alert = await this.alertCtrl.create({
      header: title ? title : 'Error',
      message,
      cssClass: '',
      buttons: [{
        text: 'Aceptar',
        handler: () => {
          if (callback) {
            callback();
          }
        }
      }],
    });
    this.alert.present();
  }

  async errorAlertbutton(message: string, title?: string, buttons?: any, callback?: any) {
    this.alert = await this.alertCtrl.create({
      header: title ? title : 'Error',
      message,
      cssClass: '',
      buttons: [{
        text: buttons[0],
        handler: () => {
          if (callback) {
            callback();
          }
        }
      }],
    });
    this.alert.present();
  }

  async basicConfirm(header: string, message: string, buttons: any, cssClass?: string) {
    let resquest: any;
    this.alertCtrl.create({
      header,
      cssClass,
      message,
      buttons: [{
        text: buttons[0],
        handler: (data: any) => {
          resquest = data;
        }
      }, {
        text: buttons[1],
        handler: (data: any) => {
          resquest = data;
        }
      }]
    }).then((res) => {
      res.present();
    });
    return resquest;
  }

  async confirmAlert(confirmOpts: ConfirmOpts) {
    const alert = await this.alertCtrl.create({
      header: confirmOpts.header,
      message: confirmOpts.message,
      buttons: [{
        text: confirmOpts.cancelText,
        role: 'cancel',
        cssClass: 'secondary',
        handler: () => {
          if (confirmOpts.cancelCB) {
            confirmOpts.cancelCB();
          }
        }
      }, {
        text: confirmOpts.successText,
        handler: () => {
          if (confirmOpts.successCB) {
            confirmOpts.successCB();
          }
        }
      }]
    });

    await alert.present();
  }
}
