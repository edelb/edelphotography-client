import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-privacy-policy',
  templateUrl: './privacy-policy.component.html',
  styleUrls: ['./privacy-policy.component.css']
})
export class PrivacyPolicyComponent implements OnInit {

  policy = {
    name: 'Edel Photography',
    email: 'EdelDevSolutions@gmail.com',
    emailLink: 'mailto:EdelDevSolutions@gmail.com',
    website: 'https://edelphotography.com',
    websiteContact : 'https://edelphotography.com/contact',
    websiteTerms: 'https://edelphotography.com/terms'
  };

  constructor(private titleService: Title) { }

  ngOnInit() {
    this.titleService.setTitle('Privacy Policy');
  }

}
