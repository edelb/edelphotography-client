import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    $(document).ready(function() {
      const body = $('html, nav');
      const hamburger = $('nav button');
      const winWidth = 991;
      const changeBars = 'change-bars';

      // add click event to hamburger menu
      hamburger.click(function() {
        if (window.innerWidth < winWidth) {
          $( this ).toggleClass(changeBars);
        }
      });

      // add click event to close menu when clicking on a link
      $('.navbar .nav-item').each(function() {
        if (($( this ).hasClass('login') || $( this ).hasClass('logout'))) {
          $( this ).click(function() {
            if ($('.navbar-toggler').hasClass(changeBars) && window.innerWidth < winWidth) {
              hamburger.click();
            }
          });
        } else {
          $( this ).click(function() {
            if ($('.navbar-toggler').hasClass(changeBars) && window.innerWidth < winWidth) {
              body.animate({scrollTop: 0}, 500, 'swing');
              hamburger.click();
            } else {  // screen bigger than winWidth
              body.animate({scrollTop: 0}, 500, 'swing');
            }
          });
        }
      });

      // add click event to close menu when clicking the main icon
      $('.navbar-brand').click(function() {
        body.animate({scrollTop: 0}, 500, 'swing');
        if ($('.navbar-toggler').hasClass(changeBars) && window.innerWidth < winWidth) {
          hamburger.click();
        }
      });

      // close hamburger menu if clicked outside of menu
      $('#main-container').click(function(e) {
        if (e.pageY && e.pageY > $('nav').outerHeight()) {
          if ($('.navbar-toggler').hasClass(changeBars) && window.innerWidth < winWidth) {
            hamburger.click();
          }
        }
      });
    });
  }

}
