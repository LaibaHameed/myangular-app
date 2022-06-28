import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { DashBoradComponent } from './dash-borad/dash-borad.component';
import { ProductsComponent } from './products/products.component';
import { ViewCartComponent } from './view-cart/view-cart.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { LoginComponent } from './login/login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
@NgModule({ // @decolartor ngModule extra information provide krta ha.... ye meta data ha
  declarations: [ //wo jo hm ny kod components banany hain wo yaha aye gy
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    ProfileComponent,
    AboutUsComponent,
    ContactUsComponent,
    DashBoradComponent,
    ProductsComponent,
    ViewCartComponent,
    SignUpComponent,
    LoginComponent
  ],
  imports: [  // yaha wo jo angular walo ny phly sy banye howy hain
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot( 
      { maxOpened:1,
      autoDismiss:true,}
    ),
  ],
  providers: [], // ye animations wgyra k liye hota hai
  bootstrap: [AppComponent]   // yaha jb wo ye line read kare ga toh app.components py jye ga
})
export class AppModule { }

