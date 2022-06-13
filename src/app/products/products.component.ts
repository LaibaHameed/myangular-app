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

  MyDataArray:any = [];

  constructor(
    private _DataService:FirstDataService,
    private _Router:Router,
    private _MesssengerService:MessengerService,
    private _NonVolatileService:NonVolatiledService
  ) { }

  ngOnInit(): void {
    this.GetDataFromMyComponent();
  }

  GetDataFromMyComponent(){
    
    this.MyDataArray = this._DataService.GetData();
    
    // console.log(this.MyDataArray);

  }

  GoToViewProduct(Id:any){
    // console.log(Id);
    this._NonVolatileService.setDataFromLocalStorage(Id);
    this._MesssengerService.SendMessageWithData(Id);    
    this._Router.navigate(['view-cart'])  
  }

}
