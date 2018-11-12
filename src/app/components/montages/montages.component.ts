import { Component, OnInit } from '@angular/core';
import { ImageEntity } from '../../entities/ImageEntity';
import { ImageService } from '../../services/image.service';

@Component({
  selector: 'app-montages',
  templateUrl: './montages.component.html',
  styleUrls: ['./montages.component.css']
})
export class MontagesComponent implements OnInit {

  images: Array<ImageEntity>;
  path = 'montages';
  files = 8;

  constructor(private imageService: ImageService) { }

  ngOnInit() {
    this.images = this.imageService.loadImagesFromAssets(this.path, this.files);
  }

  disableContextMenu() {
    this.imageService.disableContextMenu('fancybox-container');
  }

}
