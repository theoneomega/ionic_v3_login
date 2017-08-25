import {Component, ViewChild} from '@angular/core';
import {Nav, Platform} from 'ionic-angular';
import {StatusBar} from '@ionic-native/status-bar';
import {SplashScreen} from '@ionic-native/splash-screen';

import {HomePage} from '../pages/home/home';
import {WelcomePage} from '../pages/welcome/welcome';
import {QrCodePage} from '../pages/qr-code/qr-code'
import {ListPage} from '../pages/list/list';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = WelcomePage;

  pages: Array<{title: string, component: any}>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {
    this.initializeApp();
    // used for an example of ngFor and navigation
    this.pages = [
      {title: 'Inicio', component: HomePage},
      {title: 'Codigos', component: QrCodePage},
      {title: 'Lista', component: ListPage}
    ];
    if (localStorage.getItem('userData') !== null &&
      (JSON.parse(localStorage.getItem('userData')).data.expiration * 1000 > new Date().getTime() )) {
      this.rootPage = HomePage;
      // this.nav.setRoot(HomePage);
    }
  }


  initializeApp() {
    this.platform.ready().then(() => {
      var notificationOpenedCallback = function (jsonData) {
        console.log('notificationOpenedCallback: ' + JSON.stringify(jsonData.notification.payload.additionalData.code));
        // this.nav.setRoot(QrCodePage, {code: JSON.stringify(jsonData.notification.payload.additionalData.code)});
        this.nav.setRoot(QrCodePage);
        //this.navCtrl.push(Page);
      };

      try {
        // window["plugins"].OneSignal.setLogLevel({logLevel: 4, visualLevel: 4});
        window["plugins"].OneSignal
          .startInit("ee403e08-f8bf-4237-a30d-fa0cf5c8a0e2", "377981112672")
          .handleNotificationOpened(notificationOpenedCallback)
          .endInit();
        // var notificationOpenedCallback =
      } catch (error) {
        console.log(error);
      }
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();


    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}
