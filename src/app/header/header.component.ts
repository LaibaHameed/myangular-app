import { Component, OnInit } from '@angular/core'; // library calls hain ye ... tak component ko cheezy provide k jain or sae sy chal pare

@Component({ // ye decorator hain
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit { // is ka mtlb ha k jb ye load ho header component toh initialization py ye sara code implement kr do   // ye sari logics hain ... ik tarha ka object hota ha jis mai keypair values hoti hain .... keypair values k sath functions hoty hain

  CartIncrement:any = 0;

  constructor() { } // phela function ha construtor
    
 // ngOnChanges(): void {}  // 2sra function ngOnChanges jo kod banana parhta ha

  ngOnInit(): void {  // 3sra function
  }

}

