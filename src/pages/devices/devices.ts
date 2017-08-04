import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { DeviceDataPage } from '../device-data/device-data';
import { Storage } from '@ionic/storage';


@Component({
  selector: 'page-devices',
  templateUrl: 'devices.html',
})
export class DevicesPage {

  devices:any;

  constructor(public navCtrl: NavController, public storage: Storage, public navParams: NavParams) {
    this.storage.get('devices').then((data) => {
      this.devices = data;
    });
  }

  deviceDate(device){
    this.navCtrl.push(DeviceDataPage,{'param1': device});
  }

}
