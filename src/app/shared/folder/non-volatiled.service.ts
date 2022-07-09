import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NonVolatiledService {

  constructor() { }


  //3nd step: 1 
  setDataFromLocalStorage(Id: any) {
    localStorage.setItem('product-id', JSON.stringify(Id));

    // The setItem() method of the Storage interface, when passed a key name and value, will add that key to the given Storage object, or update that key's value if it already exists
    //* syntax        setItem(keyName, keyValue)
    // keyName ->   A string containing the name of the key you want to create/update.
    // keyValue ->    A string containing the value you want to give the key you are creating/updating.
    //? https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify
  }

  //3nd step: 2
  getDataFromLocalStorage() {
    return JSON.parse(localStorage.getItem('product-id') || '{}');
    //* The getItem() method of the Storage interface, when passed a key name, will return that key's value, or null if the key does not exist, in the given Storage object.    syntax  -> getItem(keyName) ->
   // keyName ->   A string containing the name of the key you want to retrieve the value of.
  }

  //
  AddProdcutToLocalStorage(Data: any) {
    localStorage.setItem('user-cart', JSON.stringify(Data));
  }

  GetProdcutToLocalStorage() {
    return JSON.parse(localStorage.getItem('user-cart') || '{}');
  }

  SetUserMiscellaneousInformation(Quantity: any) {
    localStorage.setItem('user-total-quantity', JSON.stringify(Quantity));
  }

  GetUserMiscellaneousInformation(_Quantity: any) {
    return JSON.parse(localStorage.getItem('user-total-quantity') || '{}');
  }
}