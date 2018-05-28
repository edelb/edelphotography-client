import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';
import { PortfolioEntity } from '../../entities/PortfolioEntity';
import { ImageService } from '../../services/image.service';

@Component({
  selector: 'app-portfolio-view',
  templateUrl: './portfolio-view.component.html',
  styleUrls: ['./portfolio-view.component.css']
})
export class PortfolioViewComponent implements OnInit {

  private portfolio: PortfolioEntity;

  constructor(private imageService: ImageService, private router: Router) { }

  ngOnInit() {
    this.portfolio = this.imageService.getPortfolio();
    this.imageService.scrollTop();
  }

  private goBack() {
    this.router.navigateByUrl('portfolio');
  }

}
