import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
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

  //2nd step: 10
  DataFromMyService: any = [];

  publicId: any;
  FilteredArray: any = [];

  CartQuantity:Number = 0;
  ProductQuantity:any;

  constructor(
    // 2nd step:8 import MessengerService through dependency injection
    private _MessengerService: MessengerService,
    private _DataService: FirstDataService,
      //3nd step: 5
    private _NonVolatileService: NonVolatiledService,
    // toster
    private _toastr: ToastrService,
  ) { }

  ngOnInit(): void {
    // 2nd step:9 
    this._MessengerService.GetMessageWithData().subscribe(
      (DataComingFromMyService: any) => {
        this.Data = DataComingFromMyService;
      }
    );

    this.GetDataFromMyService(); 
  }

  // new method
    //2nd step: 11
  GetDataFromMyService() {
      //2nd step: 12
    this.DataFromMyService = this._DataService.GetData();

    // 3rd step 6
    if (this.Data === undefined) {

      const localStorageID = this._NonVolatileService.getDataFromLocalStorage();
      this.FilteredArray = this.DataFromMyService.filter((Result: any) => { return (Result._id === localStorageID) });
      return

    }
      //2nd step: 13
    this.FilteredArray = this.DataFromMyService.filter((Result: any) => { return (Result._id === this.Data) });
console.log(this.FilteredArray);

  }

  AddQuantity(){

  }

  SubQuantity(){

  }

}
