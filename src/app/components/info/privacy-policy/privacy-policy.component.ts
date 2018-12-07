import { Component, OnInit } from '@angular/core';

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
    website: 'http://18.220.214.160:8080',
    websiteContact : 'http://18.220.214.160:8080/contact',
    websiteTerms: 'http://18.220.214.160:8080/terms'
  };

  constructor() { }

  ngOnInit() {
  }

}
