import { Component } from '@angular/core';
import { NavController, NavParams, AlertController, LoadingController  } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import * as $ from 'jquery';
import { HomePage } from '../home/home';
import { DeviceDataPage } from '../device-data/device-data';
import {DataServiceProvider} from '../../providers/data-service/data-service';

@Component({
  selector: 'page-item-data',
  templateUrl: 'item-data.html',
})
export class ItemDataPage {
  type:any;
  id:any;
  itemName:any;
  token:any;
  loader:any;
  flag:any;

  constructor(
              public navCtrl: NavController, public navParams: NavParams,
              public storage: Storage,public loadingCtrl: LoadingController,
              public alertCtrl: AlertController, public dataService: DataServiceProvider
            ) {
    this.id = this.navParams.get('param1');
    this.type = this.navParams.get('param2');
  }

  AddNewItem(){
    this.dataService.presentLoading();

    this.storage.get('userData').then((data)=>{
      this.token = data.token;
      console.log("this.token this.token= ", this.token )
      this.dataService.getDataService(this.id, this.type, this.token, this.itemName).then((flag)=>{
        if(flag == true){
          this.navCtrl.push(HomePage)
        }else{
          this.navCtrl.push(DeviceDataPage)
        }
      });

    });

  }




}
