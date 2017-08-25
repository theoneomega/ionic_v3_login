import {Component} from '@angular/core';
import {NavController, NavParams} from 'ionic-angular';
import {LoginPage} from '../login/login';
import {HomePage} from '../home/home';

/**
 * Generated class for the WelcomePage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-welcome',
  templateUrl: 'welcome.html',
})
export class WelcomePage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    // if (localStorage.getItem('userData') !== null &&
    //   (JSON.parse(localStorage.getItem('userData')).data.expiration * 1000 > new Date().getTime() )) {
    //   this.navCtrl.setRoot(HomePage);
    // }

    console.log('ionViewDidLoad WelcomePage');
  }

  login() {
    this.navCtrl.push(LoginPage);
  }
}
