import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Storage } from '@ionic/storage';
import 'rxjs/add/operator/map';

@Injectable()
export class AuthServiceProvider {
  url:any;
  response:any;

devices:any;

  constructor(public http: Http,public storage: Storage) {
    console.log('Hello AuthServiceProvider Provider');
  }

  authFN()
  {
    var headers = new Headers();
   headers.append("authorization", "Basic YWhtZWQuZXNzYW1AbXczLmNvbS5lZzpTYW1sZWUxMiFA");
   headers.append("cache-control", "no-cache");
   headers.append("postman-token", "c660d227-14ed-534d-5ad9-3b140d0172fa");

   this.http.get('http://mw3demo.cumulocity.com/inventory/managedObjects?owner=ahmed.essam%40mw3.com.eg', {headers:headers}).map(res => res.json()).subscribe(data => {
       this.devices = data;
   });
  }


}
