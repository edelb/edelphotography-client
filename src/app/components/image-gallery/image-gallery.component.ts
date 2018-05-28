import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { ImageEntity } from '../../entities/ImageEntity';
import { ImageService } from '../../services/image.service';
import { PortfolioEntity } from '../../entities/PortfolioEntity';

@Component({
  selector: 'app-image-gallery',
  templateUrl: './image-gallery.component.html',
  styleUrls: ['./image-gallery.component.css']
})
export class ImageGalleryComponent implements OnInit {

  private images: Array<ImageEntity>;

  @Input() private portfolio: PortfolioEntity;

  constructor(private imageService: ImageService) { }

  ngOnInit() {
    if (this.portfolio) {
      this.subscribeHome();
    }
  }

  /**
   * Disables context menu on fancybox lightbox images.
   */
  private disableContextMenu() {
    setTimeout( () => {
      const fancybox = document.getElementsByClassName('fancybox-container');
      for (let i = 0; i < fancybox.length; i++) {
        fancybox[i].setAttribute('onContextMenu', 'return false');
      }
    }, 100 );
  }

  /**
   * Subscribes to observable and display images based on given path.
   * @param path Directory where images are stored
   */
  private subscribeHome() {
    // Load images initially
    this.images = this.portfolio.images;

    // If server is Active, load images from server.
    // this.images$ = this.imageService.loadImagesFromServer(path);
    // this.images$.subscribe(resp => {
    //   this.images = resp;
    //   ImageService.serverActive = true;
    // },

    // err => {
    //   // this.images = this.imageService.loadImagesFromAssets(path, this.numberOfFiles);
    //   ImageService.serverActive = false;
    // });
  }

}
