import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {ShopComponent} from "./shop/shop.component";
import {AboutComponent} from "./about/about.component";
import { ContactComponent } from './contact/contact.component';

const routes: Routes = [
  { path : 'home-component', component: HomeComponent},
  { path : 'shop-component', component: ShopComponent},
  { path : 'about-component', component : AboutComponent},
  { path : 'contact-component', component : ContactComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
