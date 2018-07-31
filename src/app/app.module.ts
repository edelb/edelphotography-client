import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { appRoutes } from '../routes';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { PortfolioComponent } from './components/portfolio/portfolio.component';
import { ContactComponent } from './components/contact/contact.component';
import { HomeComponent } from './components/home/home.component';
import { FooterComponent } from './components/footer/footer.component';
import { ImageGalleryComponent } from './components/image-gallery/image-gallery.component';
import { MontagesComponent } from './components/montages/montages.component';
import { RestorationsComponent } from './components/restorations/restorations.component';
import { PortfolioViewComponent } from './components/portfolio-view/portfolio-view.component';

import { ImageService } from './services/image.service';
import { UserService } from './services/user.service';
import { FlickrService } from './services/flickr.service';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    PortfolioComponent,
    ContactComponent,
    HomeComponent,
    FooterComponent,
    ImageGalleryComponent,
    MontagesComponent,
    RestorationsComponent,
    PortfolioViewComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes, { useHash: true }),
    FormsModule,
    HttpClientModule
  ],
  providers: [
    ImageService,
    FlickrService,
    UserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
