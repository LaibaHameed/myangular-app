import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { DashBoradComponent } from './dash-borad/dash-borad.component';
import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/products.component';
import { ProfileComponent } from './profile/profile.component';
import { ViewCartComponent } from './view-cart/view-cart.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'home', component: HomeComponent},
  {path: 'profile', component: ProfileComponent},
  {path: 'about-us', component: AboutUsComponent},
  {path: 'contact-us', component: ContactUsComponent},
  {path: 'dash-borad', component: DashBoradComponent},
  {path: 'products', component: ProductsComponent},
  {path: 'view-cart', component: ViewCartComponent}




]; //routes ki array mai ap ne bana ha ik object or oski 2 keys hon gi 1-path, 2-component 

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
