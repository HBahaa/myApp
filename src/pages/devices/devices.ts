import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { DeviceDataPage } from '../device-data/device-data';

@Component({
  selector: 'page-devices',
  templateUrl: 'devices.html',
})
export class DevicesPage {

  

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DevicesPage');
  }

  deviceDate(){
    this.navCtrl.push(DeviceDataPage);
  }

}
