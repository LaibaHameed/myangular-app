import { Component, OnInit } from '@angular/core';
import { FirstDataService } from '../shared/folder/first-data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  Data:any = [];
  NewData:any = [];

  constructor( 
    // yaha dependency injection k through pori service/class call ki :26
    private MyService:FirstDataService
  ) {
    
   }

  ngOnInit(): void {
    // jb home component chaly yani ng on initiliza ho toh ye function cahla dy
    this.GetAllUsers();
  }

  GetAllUsers(){
    // or yaha isko ik variable mai dy dia 
    // jb mai ny this.MyService. lgya toh wo bataye ga k tmhri class mai ik Property(UserObject) pari hoi ha or ik method(ProvideUserData)  hm ny kaha k method call kr do ... toh wo hmy UserObject return kr rha ha :31

    // let Data = this.MyService.ProvideUserData();

    // ab ye function ban toh gaya... lekin tiger nahi howa kiu k tiger(impliment) karny k liye btn cjaiye hota ha .... or hm ny is ko console krwa daiya : 22
    // console.log(Data);
    
    
  }
  
}
