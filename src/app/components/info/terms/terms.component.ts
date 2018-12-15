import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-terms',
  templateUrl: './terms.component.html',
  styleUrls: ['./terms.component.css']
})
export class TermsComponent implements OnInit {

  constructor(private titleService: Title) { }

  terms = {
    name: 'Edel Photography',
    email: 'EdelDevSolutions@gmail.com',
    emailLink: 'mailto:EdelDevSolutions@gmail.com',
    website: 'https://edelphotography.com',
    websiteContact : 'https://edelphotography.com/contact',
    websiteTerms: 'https://edelphotography.com/terms'
  };

  ngOnInit() {
    this.titleService.setTitle('Terms and Conditions');
  }

}
