import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HomeComponent} from './home/home.component';
import {LargeImageComponent} from './large-image/large-image.component';
import {ProductListComponent} from './product-list/product-list.component';
import {ProductComponent} from './product/product.component';
import { HeaderComponent } from './header/header.component';
import { LogoComponent } from './logo/logo.component';
import { ShopComponent } from './shop/shop.component';
import { LargeImageShopComponent } from './large-image-shop/large-image-shop.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LargeImageComponent,
    ProductListComponent,
    ProductComponent,
    HeaderComponent,
    LogoComponent,
    ShopComponent,
    LargeImageShopComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
