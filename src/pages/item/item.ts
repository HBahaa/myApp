import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-item',
  templateUrl: 'item.html',
})
export class ItemPage {
  btnName:any = "edit";
  items:any[] = ['apple', 'google', 'intel'];
  flag: any = false;

  constructor(public navCtrl: NavController) {
  }


  reorderItems(indexes){
   let element = this.items[indexes.from];
   this.items.splice(indexes.from, 1);
   this.items.splice(indexes.to, 0, element);
  };
  actionBtn(){
   if(this.btnName == 'edit')
   {
     this.btnName = 'Done';
     this.flag    = true;
   }
   else
   {
     this.btnName = 'edit';
     this.flag    = false;
   }
  };

}
