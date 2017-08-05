import { Component } from '@angular/core';
import { NavController, ViewController , NavParams, reorderArray} from 'ionic-angular';
import { Storage } from '@ionic/storage';
import {DataServiceProvider} from '../../providers/data-service/data-service';
import { DevicesPage } from '../devices/devices';
import { Http } from '@angular/http';
import * as $ from 'jquery';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  items:any[];
  flag: any = false;
  devices:any;
  username:string;
  token:string;
  icons:any = {"c8y_TemperatureMeasurement": "ios-thermometer", "c8y_LightMeasurement":"md-bulb", "c8y_AccelerationMeasurement":"md-compass"};
  colors:any = {"c8y_TemperatureMeasurement":"black","c8y_LightMeasurement":["green","green"], "c8y_AccelerationMeasurement":["green","green"]}

    constructor(public navCtrl: NavController,public navParams: NavParams,
              private viewCtrl: ViewController,public storage: Storage,
              public dataService : DataServiceProvider, public http: Http
            ) {
            this.diplayItems();
            this.doRefresh(0);
            }

  diplayItems(){
    this.storage.get('devicesMeasurements').then((data)=>{
      if(data != null){
        this.items = data;
      }
    })
  }

  doRefresh(refresher){
      this.storage.get('devicesMeasurements').then((data) => {
        this.items = data;
        if(refresher != 0)
           refresher.complete();
      });
  };

  reorderItems(indexes){
    this.items = reorderArray(this.items, indexes);
    this.storage.set("devicesMeasurements", this.items);
  };


  ionViewWillEnter() {
      this.viewCtrl.showBackButton(false);
      this.diplayItems()
  }

  removeItem(index){
    console.log("index=", index)
    if(index > -1){
        console.log("index > -1")
      this.items.splice(index, 1);
      this.storage.set("devicesMeasurements", this.items)
    }

    // for(let i = 0; i < this.items.length; i++) {
    //
    //   if(this.items[i] == item){
    //     console.log("equalllllllllllllll")
    //     this.items.splice(i, 1);
    //     this.storage.set("devicesMeasurements", this.items);
    //   }
    //
    // }

  }

  showDevices(){
    this.navCtrl.push(DevicesPage);
  }

}
