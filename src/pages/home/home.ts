import { Component } from '@angular/core';
import { NavController, ViewController, reorderArray} from 'ionic-angular';
import { DevicesPage } from '../devices/devices';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  btnName:any = "edit";
  items:any[] = ['apple', 'google', 'intel'];
  flag: any = false;

  constructor(public navCtrl: NavController, private viewCtrl: ViewController) {
  }


  reorderItems(indexes){
    this.items = reorderArray(this.items, indexes)
  //  let element = this.items[indexes.from];
  //  this.items.splice(indexes.from, 1);
  //  this.items.splice(indexes.to, 0, element);
  };
  // actionBtn(){
  //  if(this.btnName == 'edit')
  //  {
  //    this.btnName = 'Done';
  //    this.flag    = true;
  //  }
  //  else
  //  {
  //    this.btnName = 'edit';
  //    this.flag    = false;
  //  }
  // };

  ionViewWillEnter() {
      this.viewCtrl.showBackButton(false);
  }

  showDevices(){
    this.navCtrl.push(DevicesPage);
  }

}
