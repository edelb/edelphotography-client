import { Routes } from '@angular/router';
import { HomeComponent } from './app/components/home/home.component';
import { PortfolioComponent } from './app/components/portfolio/portfolio.component';
import { ContactComponent } from './app/components/contact/contact.component';
import { MontagesComponent } from './app/components/montages/montages.component';
import { RestorationsComponent } from './app/components/restorations/restorations.component';
import { PortfolioViewComponent } from './app/components/portfolio-view/portfolio-view.component';

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
  }
];
