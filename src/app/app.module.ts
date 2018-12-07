import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { appRoutes } from '../routes';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

// routes
import { HomeComponent } from './components/routes/home/home.component';
import { PortfolioComponent } from './components/routes/portfolio/portfolio.component';
import { MontagesComponent } from './components/routes/montages/montages.component';
import { RestorationsComponent } from './components/routes/restorations/restorations.component';
import { ContactComponent } from './components/routes/contact/contact.component';
import { PortfolioViewComponent } from './components/portfolio-view/portfolio-view.component';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { ImageGalleryComponent } from './components/image-gallery/image-gallery.component';
import { LoginComponent } from './components/login/login.component';
import { ImageService } from './services/image.service';
import { UserService } from './services/user.service';
import { FlickrService } from './services/flickr.service';
import { AuthService } from './services/auth.service';
import { CallbackComponent } from './components/callback/callback.component';
import { EllipsisComponent } from './components/loaders/ellipsis/ellipsis.component';
import { PrivacyPolicyComponent } from './components/info/privacy-policy/privacy-policy.component';
import { TermsComponent } from './components/info/terms/terms.component';

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
    PortfolioViewComponent,
    LoginComponent,
    CallbackComponent,
    EllipsisComponent,
    PrivacyPolicyComponent,
    TermsComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    FormsModule,
    HttpClientModule
  ],
  providers: [
    ImageService,
    FlickrService,
    UserService,
    AuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
