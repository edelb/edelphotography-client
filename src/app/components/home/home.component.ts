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
  photoset_tmp: PhotosetEntity;

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
    this.photoset_tmp = this.photoset;
  }

  /**
   * Request server to retrieve images.
   */
  requestImages() {
    this.flickrService.getImagesFromAlbum('portfolio-nacira')
    .subscribe(resp => {
      this.imageService.homePhotoset = resp[0];
      this.photoset = this.imageService.homePhotoset;
    },

    err => {
      console.log(err);
    });
  }

}
