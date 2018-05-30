import { Component, OnInit } from '@angular/core';
import { ImageEntity } from '../../entities/ImageEntity';
import { ImageService } from '../../services/image.service';

@Component({
  selector: 'app-montages',
  templateUrl: './montages.component.html',
  styleUrls: ['./montages.component.css']
})
export class MontagesComponent implements OnInit {

  private images: Array<ImageEntity>;
  private path = 'montages';
  private numberOfFiles = 8;

  constructor(private imageService: ImageService) { }

  ngOnInit() {
    this.imageService.scrollTop();
    this.images = this.imageService.loadImagesFromAssets(this.path, this.numberOfFiles);
  }

  private disableContextMenu() {
    this.imageService.disableContextMenu('fancybox-container');
  }

}
