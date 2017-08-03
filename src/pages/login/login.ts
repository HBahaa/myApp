import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {HomePage} from '../home/home';
import { AuthServiceProvider } from '../../providers/auth-service/auth-service';
import { Storage } from '@ionic/storage';
import * as $ from 'jquery';
import { AlertController } from 'ionic-angular';


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

  constructor(public alertCtrl: AlertController, public navCtrl: NavController, public authService: AuthServiceProvider, public storage: Storage) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  showAlert() {
    let alert = this.alertCtrl.create({
      title: 'Error',
      subTitle: 'UserName or Password is not correct, Please Try Again!',
      buttons: ['OK']
    });
    alert.present();
  }

  login(){
    var navCtrl = this.navCtrl;
    var heba = this;

    this.storage.remove('email');
    this.token =  window.btoa(this.username+':'+this.password);
    this.storage.set("userData", {'username': this.username, "password": this.password, "token": this.token});

    var settings = {
      "async": true,
      "crossDomain": true,
      "url": `http://mw3demo.cumulocity.com/inventory/managedObjects?owner=${this.username}`,
      "method": "GET",
      "headers": {
        "authorization": `Basic ${this.token}`,
        "cache-control": "no-cache",
        "postman-token": "18e9de96-efcd-b4f4-646e-e0b3d99d8cf8",
      }
    }


    $.ajax(settings).done(function (response) {
      navCtrl.push(HomePage);
    }).fail(function(error){
      // this.navCtrl.push(LoginPage);
      heba.username = "";
      heba.password = "";
      heba.showAlert();
    })
  }


}
