import { Component, OnInit } from '@angular/core';
import { FirstDataService } from '../shared/folder/first-data.service';
import { MessengerService } from '../shared/folder/messenger.service';
import { NonVolatiledService } from '../shared/folder/non-volatiled.service';

@Component({
  selector: 'app-view-cart',
  templateUrl: './view-cart.component.html',
  styleUrls: ['./view-cart.component.css']
})
export class ViewCartComponent implements OnInit {

  //? Data ka name apni mrzi sy rkh skty hain
  Data: any;

  
  DataFromMyService: any = [];

  publicId: any;
  FilteredArray: any = [];

  CartQuantity:Number = 0;
  ProductQuantity:any;

  constructor(
    private _MessengerService: MessengerService,
    private _DataService: FirstDataService,
    private _NonVolatileService: NonVolatiledService
  ) { }

  ngOnInit(): void {
    this._MessengerService.GetMessageWithData().subscribe(
      (DataComungFromMyService: any) => {
        this.Data = DataComungFromMyService;
      }
    );

    // console.log(this.Data);
    this.GetDataFromMyService(); 
  }

  // new method
  GetDataFromMyService() {

    this.DataFromMyService = this._DataService.GetData();

    if (this.Data === undefined) {

      const Id = this._NonVolatileService.getDataFromLocalStorage();
      this.FilteredArray = this.DataFromMyService.filter((Result: any) => { return (Result._id === Id) });
      return

    }

    this.FilteredArray = this.DataFromMyService.filter((Result: any) => { return (Result._id === this.Data) });

  }

  AddQuantity(){

  }

  SubQuantity(){

  }

}
