import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';
import { PortfolioEntity } from '../../entities/PortfolioEntity';
import { ImageService } from '../../services/image.service';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-portfolio-view',
  templateUrl: './portfolio-view.component.html',
  styleUrls: ['./portfolio-view.component.css']
})
export class PortfolioViewComponent implements OnInit {

  portfolio: PortfolioEntity;

  constructor(private imageService: ImageService, private router: Router, private titleService: Title) { }

  ngOnInit() {
    this.portfolio = this.imageService.getPortfolio();
    if (!this.portfolio) {
      this.goBack();
    }
    this.titleService.setTitle('Portfolio - ' + this.portfolio.title);
  }

  goBack() {
    this.router.navigateByUrl('portfolio');
  }

}
