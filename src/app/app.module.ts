import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HomeComponent} from './home/home.component';
import {LargeImageComponent} from './large-image/large-image.component';
import {ProductListComponent} from './product-list/product-list.component';
import {ProductComponent} from './product/product.component';
import {HeaderComponent} from './header/header.component';
import {LogoComponent} from './logo/logo.component';
import {ShopComponent} from './shop/shop.component';
import {LargeImageShopComponent} from './large-image-shop/large-image-shop.component';
import {AboutComponent} from './about/about.component';
import {LargeImageAboutComponent} from './large-image-about/large-image-about.component';
import {AboutUsComponent} from './about-us/about-us.component';
import { ViAboutComponent } from './vi-about/vi-about.component';
import { NewsLetterComponent } from './news-letter/news-letter.component';
import { FooterComponent } from './footer/footer.component';
import { ListComponent } from './list/list.component';
import { ContactComponent } from './contact/contact.component';
import { LargeImageContactComponent } from './large-image-contact/large-image-contact.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { FromDetailsComponent } from './from-details/from-details.component';

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
    AboutComponent,
    LargeImageAboutComponent,
    AboutUsComponent,
    ViAboutComponent,
    NewsLetterComponent,
    FooterComponent,
    ListComponent,
    ContactComponent,
    LargeImageContactComponent,
    ContactUsComponent,
    FromDetailsComponent,
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
