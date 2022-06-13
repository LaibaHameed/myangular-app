import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NonVolatiledService {

  constructor() { }

  setDataFromLocalStorage(Id:any){
    localStorage.setItem('product-id', JSON.stringify(Id));
  }

  getDataFromLocalStorage(){
    return JSON.parse(localStorage.getItem('product-id') || '{}');
  }
}
