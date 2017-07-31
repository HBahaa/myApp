import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ItemDataPage } from '../item-data/item-data';

@Component({
  selector: 'page-device-data',
  templateUrl: 'device-data.html',
})
export class DeviceDataPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DeviceDataPage');
  }

  selectedItem(){
    this.navCtrl.push(ItemDataPage);
  }

}
