import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import { ImageService } from '../../services/image.service';
import { Observable } from 'rxjs';
import { PhotoEntity } from '../../entities/PhotoEntity';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

   images$: Observable<Array<PhotoEntity>>;
   images: Array<PhotoEntity>;

  constructor(private imageService: ImageService) { }

  ngOnInit() {
    this.imageService.scrollTop();
    this.images$ = this.imageService.loadImagesFromFlickrAlbum('portfolio-lory');
    this.images$.subscribe(resp => {
      this.images = resp;
      console.log(this.images);
    },

    err => {
      console.log(err);
    });
  }

}
