import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NonVolatiledService {

  constructor() { }


    //3nd step: 1 
  setDataFromLocalStorage(Id:any){
    localStorage.setItem('product-id', JSON.stringify(Id));
  }

    //3nd step: 2
  getDataFromLocalStorage(){
    return JSON.parse(localStorage.getItem('product-id') || '{}');
  }

  //
  AddProdcutToLocalStorage(Data:any){
    localStorage.setItem('user-cart',JSON.stringify(Data));
  }

  GetProdcutToLocalStorage(){
    return JSON.parse(localStorage.getItem('user-cart') || '{}');
  }

  SetUserMiscellaneousInformation(Quantity:any){
    localStorage.setItem('user-total-quantity',JSON.stringify(Quantity));
  }

  GetUserMiscellaneousInformation(Quantity:any){
    return JSON.parse(localStorage.getItem('user-total-quantity') || '{}');
  }
}