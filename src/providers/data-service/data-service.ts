import { AlertController, LoadingController  } from 'ionic-angular';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Storage } from '@ionic/storage';
import 'rxjs/add/operator/map';
import * as $ from 'jquery';



@Injectable()
export class DataServiceProvider {
  devices:any;
  loader:any;

  constructor(public http: Http, public storage: Storage,
  public loadingCtrl: LoadingController, public alertCtrl: AlertController) {
    console.log('Hello DataServiceProvider Provider');
  }

  getDataService(id, type, token, userMeasurementName, currentPage=1){
    let my = this;
    let value;
    let unit

    var settings = {
      "async": true,
      "crossDomain": true,
      "url": "http://mw3demo.cumulocity.com/measurement/measurements?source="+id+"&type="+type+"&currentPage="+currentPage,
      "method": "GET",
      "headers": {
        "authorization": "Basic "+token,
        "cache-control": "no-cache",
      }
    }


    $.ajax(settings).done(function (response) {
      console.log("response", response)

      if(response.statistics.totalPages == null){

        if(response.measurements.length > 1){
          let l = response.measurements.length
          var obj = response.measurements[l-1];
          if(type == "c8y_TemperatureMeasurement"){
            value = obj[type]["T"]["value"];
            unit = obj[type]["T"]["unit"];
          }else if(type == "c8y_LightMeasurement"){
            value = obj[type]["e"]["value"];
            unit = obj[type]["e"]["unit"];
          }else if(type == "c8y_AccelerationMeasurement"){
            value = obj[type]["acceleration"]["value"];
            unit = obj[type]["acceleration"]["unit"];
          }

          var newItem = {
            "deviceID":id,
            "name":userMeasurementName,
            "item":type,
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
          // my.navCtrl.push(HomePage);
        }
        else{
          my.loader.dismiss();
          my.showAlert("No measurements to be added!")
          // my.navCtrl.push(DevicesPage);
        }


      }else{

        let current = response.statistics.totalPages;

        my.getDataService(id, type, token, userMeasurementName, currentPage=current)

      }

    }).fail((error)=>{
      console.log("error", error)
      my.loader.dismiss();
      my.showAlert("Error while saving data!")
    });

  }


  presentLoading() {
    this.loader = this.loadingCtrl.create({
      content: "Please Wait..."
    });
    this.loader.present();
  }
  showAlert(title) {
    let alert = this.alertCtrl.create({
      title: 'Error',
      subTitle: title,
      buttons: ['OK']
    });
    alert.present();
  }
}
