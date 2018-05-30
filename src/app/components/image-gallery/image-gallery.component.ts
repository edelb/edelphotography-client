import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { ImageEntity } from '../../entities/ImageEntity';
import { ImageService } from '../../services/image.service';
import { PortfolioEntity } from '../../entities/PortfolioEntity';
import { UserEntity } from '../../entities/UserEntity';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-image-gallery',
  templateUrl: './image-gallery.component.html',
  styleUrls: ['./image-gallery.component.css']
})
export class ImageGalleryComponent implements OnInit {

  private user: UserEntity;
  private images: Array<ImageEntity>;

  @Input() private portfolio: PortfolioEntity;

  constructor(private imageService: ImageService, private userService: UserService) { }

  ngOnInit() {
    this.user = this.userService.getUser();
    if (this.portfolio) {
      this.subscribeHome();
    }
  }

  /**
   * Disables context menu on fancybox lightbox images.
   */
  private disableContextMenu() {
    this.imageService.disableContextMenu();
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

  /**
   * Returns true if user liked the picture.
   * @param id ID of image entity
   */
  private liked(id: string): boolean {
    for (let i = 0; i < this.user.images.length; i++) {
      if (id === this.user.images[i]) {
        return true;
      }
    }
    return false;
  }

  /**
   * Performs like operations. Adds picture to images array of current user.
   * @param id ID of image entity
   */
  private like(id: string) {
    let liked = false;

    // Find image ID, if it exists, remove it
    for (let i = 0; i < this.user.images.length; i++) {
      if (id === this.user.images[i]) {
        liked = true;
        const index = this.user.images.indexOf(id);
        this.user.images.splice(index, 1);
        break;
      }
    }

    // If image ID does not exist, add it
    if (!liked) {
      this.user.images.push(id);
    }
  }

}
