import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import { AuthService } from '../../services/auth.service';
import { ImageService } from '../../services/image.service';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  profile: any;
  winWidth = 991;

  constructor(public auth: AuthService, private imageService: ImageService) { }

  ngOnInit() {
    this.setProfile();
    this.closeHamburgerLink(this.winWidth);
    this.closeHamburgerOutside(this.winWidth);
    $('.nav-dropdown .nav-link').attr('onContextMenu', 'return false');
  }

  setProfile() {
    this.auth.userProfile$.subscribe(data => {
      if (data) {
        this.profile = data;
      }
    });
  }

  /**
   * Toggle hamburger menu with animation.
   */
  clickHamburger() {
    $('.menu-container').toggleClass('change-bars');
    $('#navbar-content').slideToggle(300);
  }

  /**
   * Close menu if open. Scroll to top with animation.
   */
  clickHamburgerScroll() {
    if ($('.menu-container').hasClass('change-bars') && window.innerWidth < this.winWidth) {
      this.clickHamburger();
    }
    $('html, nav').animate({scrollTop: 0}, 500, 'swing');
  }

  /**
   * // Close menu when clicking on a link.
   * @param windowWidth max-width of window that shows hamburger menu
   */
  closeHamburgerLink(windowWidth) {
    windowWidth = this.winWidth;
    $('.navbar .nav-item').each(function() {
      if (($( this ).hasClass('login') || $( this ).hasClass('logout'))) {  // login/logout links
        $( this ).click(function() {
          if ($('.menu-container').hasClass('change-bars') && window.innerWidth < windowWidth) {
            $('.menu-container').toggleClass('change-bars');
            $('#navbar-content').slideToggle(300);
            $('html, nav').animate({scrollTop: 0}, 500, 'swing');
          }
        });
      } else {  // rest of the links not login/logout
        $( this ).click(function() {
          if ($('.menu-container').hasClass('change-bars') && window.innerWidth < windowWidth) {
            $('.menu-container').toggleClass('change-bars');
            $('#navbar-content').slideToggle(300);
            $('html, nav').animate({scrollTop: 0}, 500, 'swing');
          } else {  // screen bigger than winWidth
            // $('#navbar-content').slideToggle(300);
            $('html, nav').animate({scrollTop: 0}, 500, 'swing');
          }
        });
      }
    });
  }

  /**
   * Close hamburger menu if clicked outside of menu.
   * @param windowWidth max-width of window that shows hamburger menu
   */
  closeHamburgerOutside(windowWidth) {
    windowWidth = this.winWidth;
    $('#main-container').click(function(e) {
      if (e.pageY && e.pageY > $('nav').outerHeight()) {
        if ($('.menu-container').hasClass('change-bars') && window.innerWidth < windowWidth) {
          // clickHamburger()
          $('.menu-container').toggleClass('change-bars');
          $('#navbar-content').slideToggle(300);
        }
      }
    });
  }

}
