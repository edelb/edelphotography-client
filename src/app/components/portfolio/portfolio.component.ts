import { Component, OnInit, ViewChild } from '@angular/core';
import { PortfolioEntity } from '../../entities/PortfolioEntity';
import { Router, ActivatedRoute } from '@angular/router';
import { ImageService } from '../../services/image.service';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit {

  private previous = false;

  private portfolios = new Array<PortfolioEntity>();
  private portfolio = new PortfolioEntity();

  constructor
  (
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private imageService: ImageService
  ) {
    this.portfolios = this.imageService.getPortfolios();
  }

  ngOnInit() {
  }

  public previousClick() {
    this.previous = false;
  }

  /**
   * Loads pictures based on portfolio number
   * @param num Portfolio number
   */
  private pictureClick(num: number) {
    for (let i = 1; i <= this.portfolios.length; i++) {
      if (num === i) {
        this.portfolio = this.imageService.getPortfolios()[i - 1];
        this.imageService.setPortfolio(this.portfolio);
        this.router.navigateByUrl(`portfolio/view`);
      }
    }
    this.previous = true;
  }

}
