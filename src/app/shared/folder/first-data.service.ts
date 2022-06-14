import { Injectable } from '@angular/core';
// yaha phly file import krni ha 
import User from '../JSONData/User.json' 

@Injectable({
  providedIn: 'root'
})
export class FirstDataService {
   // Dumy Data banya ha ... lekin ye data backend sy aye ga :29

  // Products code

   DummyData = User
// is ki jaga ye ho ga
// ? DummyData = "www.ecomerece.heroku.com/getData"


  constructor() { }


  // Products
//  jb b data ko access krna hi ga toh is object ko call karin gy GetData()
  GetData(){
    return this.DummyData;
  }
  
  // is GetData function k 2 maqsad hain
  // Data component ko return krna
  // Data backend ko return krna

}
