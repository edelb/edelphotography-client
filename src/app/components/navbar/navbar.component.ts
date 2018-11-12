import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  @ViewChild('hamburger') hamburger: ElementRef;

  constructor() { }

  ngOnInit() {
    $(document).ready(function() {
      const body = $('html, nav');
      // add click event to close menu when clicking on a link
      $('.navbar-collapse li').click(function() {
        body.animate({scrollTop: 0}, 500, 'swing'); // animate scrollTop
        if ($('.navbar-collapse').hasClass('show')) {
          $('.navbar-toggler').click();
          $('#hamburger').toggleClass('change');
        }
      });

      // add click event to close menu when clicking the main icon
      $('.navbar-brand').click(function() {
        body.animate({scrollTop: 0}, 500, 'swing'); // animate scrollTop
        if ($('.navbar-collapse').hasClass('show')) {
          $('.navbar-toggler').click();
          $('#hamburger').toggleClass('change');
        }
      });

      // close hamburger menu if clicked outside of menu
      $(document).click(function(e) {
        if ($('.navbar-collapse').hasClass('show')) {
          if (e.pageY > $('nav').outerHeight()) {
            $('.navbar-toggler').click();
            $('#hamburger').toggleClass('change');
          }
        }
      });

      // add click event to hamburger menu
      $('#hamburger').click(function() {
        $(this).toggleClass('change');
      });
    });
  }

}
