import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Storage } from '@ionic/storage';
import 'rxjs/add/operator/map';

@Injectable()
export class DataServiceProvider {
  devices:any;

  constructor(public http: Http, public storage: Storage) {
    console.log('Hello DataServiceProvider Provider');
  }

  checkData(){
    this.storage.get('devices').then((data) => {
      this.devices = data;
      if(this.devices == ''){



      }
      else{
        return this.devices;
      }
    });
  }


}
