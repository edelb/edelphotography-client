import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  year = new Date().getFullYear();

  constructor() { }

  ngOnInit() {
    $('footer a').click(function() {
      $('html, nav').animate({scrollTop: 0}, 500, 'swing');
    });
  }

}
