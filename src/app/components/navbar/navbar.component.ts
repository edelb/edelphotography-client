import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import * as $ from 'jquery';
import * as OverlayScrollbars from 'overlayscrollbars';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  @ViewChild('hamburger') hamburger: ElementRef;

  constructor() { }

  ngOnInit() {
    this.overlayScrollbars();
  }

  /**
   * Click event to close hamburger menu.
   */
  clickHamburgerLink() {
    if (window.innerWidth < 991) {
      this.hamburger.nativeElement.click();
    }
  }

  /**
   * Click event to toggle hamburger animation.
   */
  toggleHamburgerMenu() {
    this.hamburger.nativeElement.classList.toggle('change');
  }

  /**
   * Replaces the scrollbar with OverlayScrollbars.
   */
  overlayScrollbars() {
    $(function() {
      // The first argument are the elements to which the plugin shall be initialized
      // The second argument has to be at least a empty object or a object with your desired options
      OverlayScrollbars(document.body, { });

      // For specific elements - div needs to have specific height
      // OverlayScrollbars(document.getElementById('content'), { className : "os-theme-light", scrollbars: {autoHide: "leave"} });
    });
  }

}
