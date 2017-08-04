import { Component } from '@angular/core';
import { NavController, NavParams, AlertController, LoadingController  } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import * as $ from 'jquery';
import { HomePage } from '../home/home';
@Component({
  selector: 'page-item-data',
  templateUrl: 'item-data.html',
})
export class ItemDataPage {
  item:any;
  id:any;
  itemName:any;
  token:any;
  loader:any;

  constructor(public navCtrl: NavController, public navParams: NavParams,
              public storage: Storage,public loadingCtrl: LoadingController,
              public alertCtrl: AlertController) {
    this.id = this.navParams.get('param1');
    this.item = this.navParams.get('param2');
  }

  AddNewItem(){
    this.presentLoading();

    this.storage.get('userData').then((data)=>{
      this.token = data.token;
      console.log("this.token this.token= ", this.token )
    });

    let elem = this.item;
    let itemName = this.itemName;
    let id = this.id;
    let my = this;
    let value;
    let unit;

    var settings = {
      "async": true,
      "crossDomain": true,
      "url": `http://mw3demo.cumulocity.com/measurement/measurements?source=${this.id}&type=${this.item}`,
      "method": "GET",
      "headers": {
        "authorization": "Basic YWhtZWQuZXNzYW1AbXczLmNvbS5lZzpTYW1sZWUxMiFA",
        "cache-control": "no-cache",
      }
    }


    $.ajax(settings).done(function (response) {
      console.log("response", response)
      let l = response.measurements.length
      var obj = response.measurements[l-1];

      // if(obj.length > 1){
        if(elem == "c8y_TemperatureMeasurement"){
          value = obj[elem]["T"]["value"];
          unit = obj[elem]["T"]["unit"];
        }else if(elem == "c8y_LightMeasurement"){
          value = obj[elem]["e"]["value"];
          unit = obj[elem]["e"]["unit"];
        }else if(elem == "c8y_AccelerationMeasurement"){
          value = obj[elem]["acceleration"]["value"];
          unit = obj[elem]["acceleration"]["unit"];
        }

        var newItem = {
          "deviceID":id,
          "name":itemName,
          "item":elem,
          "value":value,
          "unit":unit
        }

        my.storage.get('devicesMeasurements').then((data)=>{
          if(data == null){
            var arr = [newItem]
            my.storage.set('devicesMeasurements', arr);
          }else{
            data.push(newItem);
            my.storage.set("devicesMeasurements", data)
          }
        })
        my.loader.dismiss();
        my.navCtrl.push(HomePage);


      // }
      // else{
      //   my.showAlert()
      //   my.navCtrl.pop(ItemDataPage);
      // }


    }).fail((error)=>{
      console.log("error", error)
    });

  }
  presentLoading() {
    this.loader = this.loadingCtrl.create({
      content: "Please Wait..."
    });
    this.loader.present();
  }
  showAlert() {
    let alert = this.alertCtrl.create({
      title: 'Error',
      subTitle: 'No measurements to be added!',
      buttons: ['OK']
    });
    alert.present();
  }
}
