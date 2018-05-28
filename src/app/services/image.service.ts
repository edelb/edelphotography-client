import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { ImageEntity } from '../entities/ImageEntity';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/retry';
import 'rxjs/add/operator/map';
import { PortfolioEntity } from '../entities/PortfolioEntity';

@Injectable()
export class ImageService {

  public static serverActive = false;
  private portfolios = new Array<PortfolioEntity>();
  private portfolio: PortfolioEntity = null;

  constructor(private http: HttpClient) {
    this.loadPortfolios();
  }

  /**
   * Scroll to the top of the page
   */
  public scrollTop() {
    const view = document.getElementById('menu-bar');
    view.scrollIntoView();
  }

  /**
   * Load portfolio information to array.
   */
  private loadPortfolios() {
    const nacira = new PortfolioEntity();
    nacira.id = 1; nacira.path = 'portfolio-nacira'; nacira.files = 10;
    nacira.title = 'Nacira and Rolando'; nacira.event = 'Engagement';
    this.portfolios.push(nacira);

    const lory = new PortfolioEntity();
    lory.id = 2; lory.path = 'portfolio-lory'; lory.files = 8;
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
  public getPortfolios(): Array<PortfolioEntity> {
    return this.portfolios;
  }

  /**
   * Return current portfolio.
   */
  public getPortfolio(): PortfolioEntity {
    return this.portfolio;
  }

  /**
   * Sets current portfolio.
   * @param p Portfolio Entity
   */
  public setPortfolio(p: PortfolioEntity) {
    this.portfolio = p;
  }

  /**
   * Returns an Observable of ImageEntity Array based on a given path.
   * @param path Path of images to retrieve (i.e. portfolio-day1)
   */
  public loadImagesFromServer(path: string): Observable<Array<ImageEntity>> {
    return this.http.get<Array<ImageEntity>>('http://localhost:8080/images/' + path);
  }

  /**
   * Returns an array of ImageEntity based on the given path and number of files.
   * @param path Portfolio path
   * @param numberOfFiles Number of photos in that path
   */
  public loadImagesFromAssets(path: string, numberOfFiles: number): Array<ImageEntity> {
    const images = new Array<ImageEntity>();

    path = path.replace(new RegExp('-', 'g'), '/');

    for (let i = 0; i < numberOfFiles; i++) {
      const image = new ImageEntity();
      image.gallery = path;
      image.id = `${image.gallery}${0}`;
      image.name = `Photo ${i + 1}`;
      image.size = 0;
      image.url = `../../../assets/${path}/${i + 1}.jpg`;
      images.push(image);
    }

    return images;
  }

  /**
   * Check server status every second.
   */
  public checkServerStatus() {
    let checkServer$: Observable<Array<ImageEntity>>;
    checkServer$ = this.loadImagesFromServer('p');
    checkServer$.subscribe(resp => {
      ImageService.serverActive = true;
    },

    err => {
      ImageService.serverActive = false;
    });

      /*
      const sessionChecker = setInterval(() => {
      let checkServer$: Observable<Array<ImageEntity>>;
      checkServer$ = this.loadImagesFromServer('p');
      checkServer$.subscribe(resp => {
        ImageService.serverActive = true;
      },

      err => {
        ImageService.serverActive = false;
      });
      console.log('server: ' + ImageService.serverActive);
    }, 1000);
    */
  }

}
