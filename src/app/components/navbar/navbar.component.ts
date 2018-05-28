import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  @ViewChild('hamburger') hamburger: ElementRef;

  constructor() { }

  ngOnInit() {
  }

  /**
   * Click event on hamburger menu.
   */
  private clickHamburger() {
    if (window.innerWidth < 576) {
      this.hamburger.nativeElement.click();
    }
  }

}
