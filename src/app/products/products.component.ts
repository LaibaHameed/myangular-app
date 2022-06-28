import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FirstDataService } from '../shared/folder/first-data.service';
import { MessengerService } from '../shared/folder/messenger.service';
import { NonVolatiledService } from '../shared/folder/non-volatiled.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})

export class ProductsComponent implements OnInit {

  // 5: khali array bani or is ki type any is liye rkhi k array mai images string or numbers aye gy
  MyDataArray: any = [];

  constructor(
    // 4:Dependency injection k through file ko access kia
    private _DataService: FirstDataService,
    // import router which is from angular/core 
    private _Router: Router,
    private _MesssengerService: MessengerService,
      //3nd step: 3
    private _NonVolatileService: NonVolatiledService
  ) { }



  ngOnInit(): void {
    // 7: phir is function ko call kr lia
    this.GetDataFromMyComponent();
  }

  // 6: ik function banaya or is mai MyDataArray mai Service file ka jo GetData() fun rkha data acess krny k liye
  GetDataFromMyComponent() {
    this.MyDataArray = this._DataService.GetData();
    // console.log(this.MyDataArray);
  }


  GoToViewProduct(Id: any) {
    // arugment zaroor dena ha with type
    // console.log(Id);
      //3nd step: 4
    this._NonVolatileService.setDataFromLocalStorage(Id);
    this._MesssengerService.SendMessageWithData(Id);
    // 2sry page mai jain gy 
    this._Router.navigate(['view-cart'])
  }

}
