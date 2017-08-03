import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {HomePage} from '../home/home';
import { AuthServiceProvider } from '../../providers/auth-service/auth-service';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
  providers: [AuthServiceProvider]
})
export class LoginPage {
  username:string;
  password:string;
  res:any;
  token:any;
  param1:any;
  devices:any;

  constructor(public navCtrl: NavController, public authService: AuthServiceProvider, public storage: Storage) {


    this.storage.set('devices', this.devices);

    // this.storage.get('userData').then((data) => {
    //   this.param1 = data.username;
    // });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  login(){
    // this.storage.remove('email');
    // this.token =  window.btoa(this.username+':'+this.password);
    // this.storage.set("userData", {'username': this.username, "password": this.password, "token": this.token});

    this.navCtrl.push(HomePage);
  }



}
