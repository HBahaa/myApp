import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {HomePage} from '../home/home';
import { AuthServiceProvider } from '../../providers/auth-service/auth-service';
import { Storage } from '@ionic/storage';
import * as $ from 'jquery';
import { AlertController, LoadingController } from 'ionic-angular';

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
  loader:any;
  devices:any;

  constructor(public alertCtrl: AlertController, public navCtrl: NavController,
              public authService: AuthServiceProvider, public storage: Storage,
              public loadingCtrl: LoadingController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  showAlert() {
    let alert = this.alertCtrl.create({
      title: 'Error',
      subTitle: 'Check your connection andmake sure that UserName and Password are correct, Please Try Again!',
      buttons: ['OK']
    });
    alert.present();
  }

  login(){
    this.presentLoading();
    var storage = this.storage;
    var navCtrl = this.navCtrl;
    var devices = this.devices;
    var my = this;

    this.token =  window.btoa(this.username+':'+this.password);

    function myFilter(objs){
      return objs.filter((obj)=>{
        return obj['c8y_SupportedMeasurements'];
      }).map((obj)=>{
        return (({ id, name, c8y_SupportedMeasurements }) => ({ id, name, c8y_SupportedMeasurements }))(obj)
      })
    }

    var settings = {
      "async": true,
      "crossDomain": true,
      // "url": "http://mw3demo.cumulocity.com/inventory/managedObjects?owner=ahmed.essam@mw3.com.eg",
      "url": `http://mw3demo.cumulocity.com/inventory/managedObjects?owner=${this.username}`,
      "method": "GET",
      "headers": {
        // "authorization":"Basic YWhtZWQuZXNzYW1AbXczLmNvbS5lZzpTYW1sZWUxMiFA",
        "authorization": `Basic ${this.token}`,
        "cache-control": "no-cache",
        "postman-token": "18e9de96-efcd-b4f4-646e-e0b3d99d8cf8",
        'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
        "Access-Control-Allow-Headers": "Origin, X-Requested-With, Content-Type, Accept, Key",
      }
    }


    $.ajax(settings).done(function (response) {

      storage.set("userData", {'username': my.username, "password": my.password, "token": my.token});

      var objs = response.managedObjects;
      var devices = myFilter(objs);

      storage.set('devices', devices).then(()=>{
        console.log("from set devices", devices)
      });
      navCtrl.push(HomePage);
      my.loader.dismiss();

    }).fail(function(error){
      navCtrl.push(LoginPage);
      my.loader.dismiss();
      my.username = "";
      my.password = "";
      my.showAlert();
    })
  }

  presentLoading() {
    this.loader = this.loadingCtrl.create({
      content: "Please Wait..."
    });
    this.loader.present();
  }
}
