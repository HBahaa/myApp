import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Storage } from '@ionic/storage';
import { LoginPage } from '../pages/login/login';
import { HomePage } from '../pages/home/home';
import { AuthServiceProvider } from '../providers/auth-service/auth-service';
import { LoadingController } from 'ionic-angular';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any;
  isLoggedIn:boolean;
  loader:any;
  username:any;
  token:any;

  constructor(public storage: Storage,public loadingCtrl: LoadingController,
              platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen,
             public authService: AuthServiceProvider) {

              //  this.storage.remove("userData");
              //  this.storage.remove("devices");
              //  this.storage.remove("devicesMeasurements");
    this.presentLoading();
    this.loadingPage();
  }

  loadingPage(){
    this.storage.ready().then(()=>{

      this.storage.get("userData").then((data)=>{
        if(data != null){
          this.username = data.username;
          this.token = data.token;
          this.authService.checkToken(this.username, this.token).then((isLoggedIn)=>{
            if(isLoggedIn){

              this.rootPage = HomePage;
            }
            else{
              this.rootPage = LoginPage;
            }
            this.loader.dismiss();
          });
        }else if(data == null){
          this.loader.dismiss();
          this.rootPage = LoginPage;
        }

      })


    })

  }

  presentLoading() {
    this.loader = this.loadingCtrl.create({
      content: "Authenticating..."
    });
    this.loader.present();
  }
}
