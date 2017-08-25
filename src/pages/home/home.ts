import {Component} from '@angular/core';
import {NavController, ViewController, App} from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, public app: App, private viewCtrl: ViewController) {
  }

  ionViewWillEnter() {
    this.viewCtrl.showBackButton(false);
  }

  logout() {
    //remover Api tokens
    localStorage.removeItem('userData');
    const root = this.app.getRootNav();
    root.popToRoot();
  }

}
