import { Component, OnInit } from '@angular/core';
import { ImageService } from '../../services/image.service';
import { FlickrService } from '../../services/flickr.service';
import { PhotosetEntity } from '../../entities/PhotosetEntity';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  photoset: PhotosetEntity;

  constructor(private imageService: ImageService, private flickrService: FlickrService) { }

  ngOnInit() {
    this.imageService.scrollTop();
    this.loadImages();
  }

  /**
   * Load images and set photoset.
   */
  loadImages() {
    // If photoset is not null, load previous photoset and request to update photoset.
    // Else, request to get photoset for the first time.
    if (this.imageService.homePhotoset) {
      this.photoset = this.imageService.homePhotoset;
      this.requestImages();
    } else {
      this.requestImages();
    }
  }

  /**
   * Request server to retrieve images.
   */
  requestImages() {
    // Authorize edel-read. If true, request images.
    this.flickrService.authorize('edel-read').subscribe(authorized => {

      // Request images if true
      if (authorized) {
        this.flickrService.getImagesFromAlbum('portfolio-nacira')
        .subscribe(resp => {
          this.imageService.homePhotoset = resp[0];

          // generate sizes for each photo
          const photos = this.imageService.homePhotoset.photos;
          for (let i = 0; i < photos.length; i++) {
            photos[i].sizes = this.flickrService.generateSizes(photos[i]);
          }

          this.photoset = this.imageService.homePhotoset;
          console.log(this.photoset);
        },

        imagesErr => {
          console.log(imagesErr);
        });
      }
    },

    authErr => {
      console.log(authErr);
    });
  }

}
