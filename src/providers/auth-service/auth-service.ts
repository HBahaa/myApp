import { Injectable } from '@angular/core';
// import { Http, Headers } from '@angular/http';
import { Storage } from '@ionic/storage';
import 'rxjs/add/operator/map';

@Injectable()
export class AuthServiceProvider {
  url:any;
  response:any;
  username: any;
  password: any;
  token:any;
  devices:any;

  constructor(public storage: Storage) {
    console.log('Hello AuthServiceProvider Provider');
    // this.authFN();
  }

  checkToken(name, token)
  {
    return new Promise((resolve)=>{
      if(name == undefined && token == undefined)
      {
        resolve(false);
      }
      else{
        resolve(true);
      }
    })
  }
}
