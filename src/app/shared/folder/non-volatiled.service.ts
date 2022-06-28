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
}
