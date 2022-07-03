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

  //
  ShowCart: Boolean = false;
  FinalUserCartArray: any = [];
  CartArray: any = [];
  NewCartArray:any =[];
  SelectedQuantity=0;

  ShowBox:Boolean = false;
  LocalStorageCartArray:any = [];
  LocalStorageSpecificArray:any = [];

  constructor(
    // 2nd step:8 import MessengerService through dependency injection
    private _MessengerService: MessengerService,
    private _DataService: FirstDataService,
      //3nd step: 5
    private _NonVolatileService: NonVolatiledService,
    // toster
    private _ToastrService: ToastrService,
  ) { }

  ngOnInit(): void {
    // 2nd step:9 
    this._MessengerService.GetMessageWithData().subscribe(
      (DataComingFromMyService: any) => {
        this.Data = DataComingFromMyService;
      }
    );

    this.GetDataFromMyService(); 
    this.LocalStorageCartArray = this._NonVolatileService.GetProdcutToLocalStorage();
    if(Object.entries(this.LocalStorageCartArray).length !== 0){
      this.ShowBox = true;
    }
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
      this.ProductQuantity = this.FilteredArray[0].qty;
      return

    }
      //2nd step: 13
    this.FilteredArray = this.DataFromMyService.filter((Result: any) => { return (Result._id === this.Data) });
    this.ProductQuantity = this.FilteredArray[0].qty;
    console.log(this.FilteredArray);

  }


  AddQuantity(){
      this.ShowBox = true;
      let CartObjectPlus = this._NonVolatileService.GetProdcutToLocalStorage();
      //Agar Quantity Increase Kar Jae New Quanityt To Khatam Kar do Yeh Fucntion
      if (this.SelectedQuantity >= this.ProductQuantity) {
        this._ToastrService.error('Quantiyy cannot Exceed that Original Quanityt');
        return
  }
//2:
  if(Object.entries(CartObjectPlus).length === 0){ 
    this.CartArray.push(this.FilteredArray[0]);
    this._NonVolatileService.AddProdcutToLocalStorage(this.CartArray);
    this.LocalStorageCartArray = this._NonVolatileService.GetProdcutToLocalStorage();
    return
  }
  //3:
  if(Object.entries(CartObjectPlus).length !== 0 && this.Data !== undefined){
    this.NewCartArray.push(this.FilteredArray[0]); 
    CartObjectPlus.forEach((element:any) => {
      this.NewCartArray.push(element);
    });
    this._NonVolatileService.AddProdcutToLocalStorage(this.NewCartArray);
    this.Data = undefined;
    this.LocalStorageCartArray = this._NonVolatileService.GetProdcutToLocalStorage();
    return
  }
// 4:
CartObjectPlus.map((element:any) => { 
  if(this.FilteredArray[0]._id === element._id){ 
    element.NewQuantity++;
    this.SelectedQuantity++; 
  }
 });
 this._NonVolatileService.AddProdcutToLocalStorage(CartObjectPlus);
 this._NonVolatileService.SetUserMiscellaneousInformation(this.CartQuantity);
 this.LocalStorageCartArray = this._NonVolatileService.GetProdcutToLocalStorage();

}

  SubQuantity(){

      let CartObjectPlus = this._NonVolatileService.GetProdcutToLocalStorage();
      if (this.SelectedQuantity <= 0) {
        return
      }
  
      CartObjectPlus.map((element:any) => {
        if(this.FilteredArray[0]._id === element._id){
          element.NewQuantity--;
          this.SelectedQuantity--;
        }
       });
       this._NonVolatileService.AddProdcutToLocalStorage(CartObjectPlus);
       this._NonVolatileService.SetUserMiscellaneousInformation(this.CartQuantity);
    }
  
  }

