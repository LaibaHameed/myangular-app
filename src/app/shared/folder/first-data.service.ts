import { Injectable } from '@angular/core';
//1: yaha phly file import krni ha 
import User from '../JSONData/User.json' 

@Injectable({
  providedIn: 'root'
})
export class FirstDataService {
   //2: User.json ki file sy jo sara data aye ga wo DummyData mai store ho gya h
   DummyData = User
// is ki jaga ye ho ga
// ? DummyData = "www.ecomerece.heroku.com/getData"


  constructor() { }


  // Products
  // 3: ik GetData ka function banaya jo DummyData ko return kr rha ha
//  jb b data ko access krna ho ga toh is object ko call karin gy GetData()
  GetData(){
    return this.DummyData;
  }
  
  // is GetData function k 2 maqsad hain
  // Data component ko return krna
  // Data backend ko return krna

}
