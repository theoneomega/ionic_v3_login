import {BrowserModule} from '@angular/platform-browser';
import {ErrorHandler, NgModule} from '@angular/core';
import {IonicApp, IonicErrorHandler, IonicModule} from 'ionic-angular';

import {MyApp} from './app.component';
import {HttpModule} from '@angular/http';
import {HomePage} from '../pages/home/home';
import {ListPage} from '../pages/list/list';
import {WelcomePage} from '../pages/welcome/welcome';
import {LoginPage} from '../pages/login/login';
import {QrCodePage} from '../pages/qr-code/qr-code'

import {StatusBar} from '@ionic-native/status-bar';
import {SplashScreen} from '@ionic-native/splash-screen';
import {AuthServiceProvider} from '../providers/auth-service/auth-service';
import {QrServiceProvider} from '../providers/qr-service/qr-service';


@NgModule({
  declarations: [
    MyApp,
    WelcomePage,
    HomePage,
    ListPage,
    LoginPage,
    QrCodePage
  ],
  imports: [
    BrowserModule, HttpModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    WelcomePage,
    HomePage,
    ListPage,
    LoginPage,
    QrCodePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AuthServiceProvider,
    QrServiceProvider
  ]
})
export class AppModule {
}
