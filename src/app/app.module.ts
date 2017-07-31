import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';



import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { LoginPage } from '../pages/login/login';
import { DevicesPage } from '../pages/devices/devices';
import { DeviceDataPage } from '../pages/device-data/device-data';
import { ItemDataPage } from '../pages/item-data/item-data';

@NgModule({
  declarations: [
    MyApp,
    LoginPage,
    HomePage,
    DevicesPage,
    DeviceDataPage,
    ItemDataPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    LoginPage,
    HomePage,
    DevicesPage,
    DeviceDataPage,
    ItemDataPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
