/**
 * For image size URLs: https://www.flickr.com/services/api/misc.urls.html
 *
 *    https://farm{farm-id}.staticflickr.com/{server-id}/{id}_{secret}.jpg
 *      or
 *    https://farm{farm-id}.staticflickr.com/{server-id}/{id}_{secret}_[mstzb].jpg
 *      or
 *    https://farm{farm-id}.staticflickr.com/{server-id}/{id}_{o-secret}_o.(jpg|gif|png)
 *
 *    The letter suffixes are as follows:
        s	small square 75x75
        q	large square 150x150
        t	thumbnail, 100 on longest side
        m	small, 240 on longest side
        n	small, 320 on longest side
        -	medium, 500 on longest side
        z	medium 640, 640 on longest side
        c	medium 800, 800 on longest side†
        b	large, 1024 on longest side*
        h	large 1600, 1600 on longest side†
        k	large 2048, 2048 on longest side†
        o	original image, either a jpg, gif or png, depending on source format
 */

import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ImageEntity } from '../entities/ImageEntity';
import { HttpClient } from '@angular/common/http';
import { PortfolioEntity } from '../entities/PortfolioEntity';
import { endpoints } from '../../environments/environment';
import * as OverlayScrollbars from 'overlayscrollbars';
import { SizeEntity } from '../entities/SizeEntity';
import { PhotoEntity } from '../entities/PhotoEntity';

@Injectable()
export class ImageService {

  static serverActive = false;
  portfolios = new Array<PortfolioEntity>();
  portfolio: PortfolioEntity = null;

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
   * Returns an Observable of ImageEntity Array based on a given path.
   * @param album Album of images to retrieve (i.e. portfolio-day1)
   */
  loadImagesFromFlickrAlbum(album: string): Observable<Array<PhotoEntity>> {
    return this.http.get<Array<PhotoEntity>>(endpoints.flickr + 'images/album/' + album);
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

  generateSizes(photo: PhotoEntity): SizeEntity {
    const size = new SizeEntity();

    return size;
  }

  /**
   * Check server status every second.
   */
  checkServerStatus() {
    /*
    let checkServer$: Observable<Array<ImageEntity>>;
    checkServer$ = this.loadImagesFromFlickrAlbum('p');
    checkServer$.subscribe(resp => {
      ImageService.serverActive = true;
    },

    err => {
      ImageService.serverActive = false;
    });
    */

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
