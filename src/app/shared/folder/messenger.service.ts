import { Injectable } from '@angular/core';
// 2nd step:2
import { ReplaySubject } from 'rxjs';
// sb sy phly issy import kia rxjs angular mai in build ha

@Injectable({
  providedIn: 'root'
})
export class MessengerService {
  //* ik varibale banya or os ko subject ka name sir ny issi liye dia kiu k os py kam ho rha ha
  //* ye ReplaySubject ik component sy dosre component ko data transfer krta ha, is mai hm ny (1) is liye dia k wo ik hi object return kare
//  _Sunject ki jaga apni mrzi sy name rkh skty hain
// 2nd step:3
  _Subject = new ReplaySubject(1);
  // ReplaySubject rxjs ki class ha ye 

  constructor() { }
//* payLoad ki jaga koi b name chal jye ga
//  MessageAndData/SendMessageWithData ki jaga apni mrzi sy name rkh skty hain
// 2nd step:4
  SendMessageWithData(PayLoad:Boolean){
    // replay class k sath sirf boolean type hi lgy gi
    // 2nd step:5
    this._Subject.next(PayLoad);
  }

//  GetMessageWithData ki jaga apni mrzi sy name rkh skty hain
// 2nd step:6
  GetMessageWithData(){
    // 2nd step:7
    return this._Subject.asObservable();
  }
}

