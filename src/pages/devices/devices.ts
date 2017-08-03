import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { DeviceDataPage } from '../device-data/device-data';
import { Storage } from '@ionic/storage';
import { Http, Headers } from '@angular/http';
import * as $ from 'jquery';


@Component({
  selector: 'page-devices',
  templateUrl: 'devices.html',
})
export class DevicesPage {

  devices:any;  param1:any;

  icons:any = {"mobile": "phone-portrait", "Electricity Sensor": "ios-bulb-outline", "Light Sensor":"md-bulb", "Distance Sensor":"md-compass"};

  constructor(public http: Http, public navCtrl: NavController, public storage: Storage, public navParams: NavParams) {

    // this.devices = ["Distance Sensor", "Electricity Sensor", "Light Sensor"]
    this.storage.get('devices').then((data) => {
      this.devices = data;
      console.log("devices from get",this.devices)
    });
    // this.devices = this.navParams.get('param1');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  deviceDate(device){
    this.navCtrl.push(DeviceDataPage,{param1: device});
  }

}
