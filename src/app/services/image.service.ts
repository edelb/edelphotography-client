import { Injectable } from '@angular/core';
import { ImageEntity } from '../entities/ImageEntity';
import { HttpClient } from '@angular/common/http';
import { PortfolioEntity } from '../entities/PortfolioEntity';
import * as OverlayScrollbars from 'overlayscrollbars';
import { PhotosetEntity } from '../entities/PhotosetEntity';

@Injectable()
export class ImageService {

  portfolios = new Array<PortfolioEntity>();
  portfolio: PortfolioEntity = null;
  homePhotoset: PhotosetEntity = null;

  constructor(private http: HttpClient) {
    this.loadPortfolios();
  }

  /**
   * Scroll to the top of the page
   */
  scrollTop() {
    $(function() {
      const scrollbar = OverlayScrollbars(document.body, {  });
      scrollbar.scroll(0, 500, [ 'easeOutElastic' ]);
    });
  }

  /**
   * Load portfolio information to array.
   */
  loadPortfolios() {
    const nacira = new PortfolioEntity();
    nacira.id = 1; nacira.path = 'portfolio-nacira'; nacira.files = 10;
    nacira.title = 'Nacira and Rolando'; nacira.event = 'Engagement';
    this.portfolios.push(nacira);

    const lory = new PortfolioEntity();
    lory.id = 2; lory.path = 'portfolio-lory'; lory.files = 12;
    lory.title = 'Lorianne'; lory.event = 'Beach Day';
    this.portfolios.push(lory);

    const wendy = new PortfolioEntity();
    wendy.id = 3; wendy.path = 'portfolio-wendy'; wendy.files = 8;
    wendy.title = 'Wendy and Yiovanny'; wendy.event = 'Engagement';
    this.portfolios.push(wendy);
  }

  /**
   * Returns an array of Portfolio Entities.
   */
  getPortfolios(): Array<PortfolioEntity> {
    return this.portfolios;
  }

  /**
   * Return current portfolio.
   */
  getPortfolio(): PortfolioEntity {
    return this.portfolio;
  }

  /**
   * Sets current portfolio.
   * @param p Portfolio Entity
   */
  setPortfolio(p: PortfolioEntity) {
    this.portfolio = p;
  }

  /**
   * Disables context menu on fancybox lightbox images.
   * @param name Class name or identifier
   */
  disableContextMenu(name) {
    setTimeout( () => {
      const fancybox = document.getElementsByClassName(name);
      for (let i = 0; i < fancybox.length; i++) {
        fancybox[i].setAttribute('onContextMenu', 'return false');
      }
    }, 100 );
  }

  /**
   * Returns an array of ImageEntity based on the given path and number of files.
   * @param path Portfolio path
   * @param files Number of photos in that path
   */
  loadImagesFromAssets(path: string, files: number): Array<ImageEntity> {
    const images = new Array<ImageEntity>();

    path = path.replace(new RegExp('-', 'g'), '/');

    for (let i = 0; i < files; i++) {
      const image = new ImageEntity();
      image.gallery = path;
      image.id = `${image.gallery}-${i + 1}`;
      image.name = `Photo ${i + 1}`;
      image.size = 0;
      image.url = `../../../assets/${path}/${i + 1}.jpg`;
      images.push(image);
    }

    return images;
  }

}
