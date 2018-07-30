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

  previous = false;

  portfolios = new Array<PortfolioEntity>();
  portfolio = new PortfolioEntity();

  constructor
  (
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private imageService: ImageService
  ) {
    this.portfolios = this.imageService.getPortfolios();
  }

  ngOnInit() {
    this.imageService.scrollTop();
  }

  previousClick() {
    this.previous = false;
  }

  /**
   * Loads pictures based on portfolio number
   * @param num Portfolio number
   */
  pictureClick(num: number) {
    for (let i = 1; i <= this.portfolios.length; i++) {
      if (num === i) {

        // Set portfolio data
        this.portfolio = this.imageService.getPortfolios()[i - 1];

        // Set portfolio array of images
        this.portfolio.images = this.imageService.loadImagesFromAssets(this.portfolio.path, this.portfolio.files);

        // Set current portfolio and navigate to view component
        this.imageService.setPortfolio(this.portfolio);
        this.router.navigateByUrl(`portfolio/view`);
      }
    }
    this.previous = true;
  }

}
