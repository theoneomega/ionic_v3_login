import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-qr-code',
  templateUrl: 'qr-code.html',
})
export class QrCodePage {
  public imageCode;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    console.log("construllendo el controlador");
    this.imageCode = navParams.get("firstPassed");
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad QrCodePage');
  }

}
