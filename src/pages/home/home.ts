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
  btnName:any = "edit";
  items:any[] = ['apple', 'google', 'intel'];
  flag: any = false;
  devices:any;


  constructor(public navCtrl: NavController,public navParams: NavParams,
              private viewCtrl: ViewController,public storage: Storage,
              public dataService : DataServiceProvider, public http: Http) {

    // this.doRefresh(0);

  }

  doRefresh(refresher){
      this.storage.get('devices').then((data) => {
        this.items = data;

        if(refresher != 0)
           refresher.complete();
      });
  };

  reorderItems(indexes){
    this.items = reorderArray(this.items, indexes);
    // this.storage.set('devices', this.items);
    // this.doRefresh(0);
  //  let element = this.items[indexes.from];
  //  this.items.splice(indexes.from, 1);
  //  this.items.splice(indexes.to, 0, element);
  };


  ionViewWillEnter() {
      this.viewCtrl.showBackButton(false);
  }

  getData(){

    var storage = this.storage;
    var navCtrl = this.navCtrl;
    var devices = this.devices;


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
      "url": "http://mw3demo.cumulocity.com/inventory/managedObjects?owner=ahmed.essam%40mw3.com.eg",
      "method": "GET",
      "headers": {
        "authorization": "Basic YWhtZWQuZXNzYW1AbXczLmNvbS5lZzpTYW1sZWUxMiFA",
        "cache-control": "no-cache",
        "postman-token": "18e9de96-efcd-b4f4-646e-e0b3d99d8cf8",
      }
    }


    $.ajax(settings).done(function (response) {
      var objs = response.managedObjects;
      var newObjs = myFilter(objs);
      var devices = newObjs;
      console.log("newObjs",newObjs);
      storage.set('devices', devices);
      navCtrl.push(DevicesPage);
    });

  }

  showDevices(){
    this.getData()
  }

}
