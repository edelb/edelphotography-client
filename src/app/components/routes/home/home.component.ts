import { Component, OnInit } from '@angular/core';
import { ImageService } from '../../../services/image.service';
import { FlickrService } from '../../../services/flickr.service';
import { PhotosetEntity } from '../../../entities/PhotosetEntity';
import { SizeEntity } from '../../../entities/SizeEntity';
import * as $ from 'jquery';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  photoset: PhotosetEntity;

  constructor(private imageService: ImageService, private flickrService: FlickrService, private titleService: Title) { }

  ngOnInit() {
    this.titleService.setTitle('Home');
    this.loadImages();
    $('#home section').click(function() {
      const body = $('html, nav');
      body.animate({scrollTop: 0}, 500, 'swing'); // animate scrollTop
    });
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
    this.flickrService.getImagesFromAlbum('portfolio-nacira')
    .subscribe(imagesResp => {
      if (imagesResp) {
        this.imageService.homePhotoset = imagesResp;

        // generate sizes for each photo - calls API to get size of each photo
        const photos = this.imageService.homePhotoset.photos;
        for (let i = 0; i < photos.length; i++) {
          this.imageService.homePhotoset.photos[i].sizes = this.flickrService.generateSizes(photos[i]);
          // this.flickrService.getSizesOfImage(photos[i].id)
          // .subscribe(sizesResp => {
          //   this.imageService.homePhotoset.photos[i].sizes = sizesResp;
          // },
          // photosErr => {
          //   console.log(photosErr);
          // });
        }
      }
      this.photoset = this.imageService.homePhotoset;
    },

    imagesErr => {
      console.log(imagesErr);
    });
  }

}
