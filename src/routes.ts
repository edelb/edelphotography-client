import { Routes } from '@angular/router';
import { HomeComponent } from './app/components/routes/home/home.component';
import { PortfolioComponent } from './app/components/routes/portfolio/portfolio.component';
import { ContactComponent } from './app/components/routes/contact/contact.component';
import { MontagesComponent } from './app/components/routes/montages/montages.component';
import { RestorationsComponent } from './app/components/routes/restorations/restorations.component';
import { PortfolioViewComponent } from './app/components/portfolio-view/portfolio-view.component';
import { PrivacyPolicyComponent } from './app/components/info/privacy-policy/privacy-policy.component';
import { TermsComponent } from './app/components/info/terms/terms.component';

export const appRoutes: Routes = [

  // routes go here.
  {
    path: '',
    component: HomeComponent
  },

  {
    path: 'portfolio',
    component: PortfolioComponent
  },

  {
    path: 'montages',
    component: MontagesComponent
  },

  {
    path: 'restorations',
    component: RestorationsComponent
  },

  {
      path: 'contact',
      component: ContactComponent
  },

  {
    path: 'portfolio/view',
    component: PortfolioViewComponent
  },

  {
    path: 'privacy-policy',
    component: PrivacyPolicyComponent
  },

  {
    path: 'terms',
    component: TermsComponent
  },

  {
    path: '**',
    pathMatch: 'full',
    redirectTo: '/'
}
];
