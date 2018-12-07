import { Component, OnInit } from '@angular/core';
import { ImageEntity } from '../../../entities/ImageEntity';
import { ImageService } from '../../../services/image.service';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-restorations',
  templateUrl: './restorations.component.html',
  styleUrls: ['./restorations.component.css']
})
export class RestorationsComponent implements OnInit {

  images: Array<ImageEntity> = null;
  path = 'restorations';
  files = 11;

  constructor(private imageService: ImageService, private titleService: Title) { }

  ngOnInit() {
    this.titleService.setTitle('Restorations');
    this.images = this.imageService.loadImagesFromAssets(this.path, this.files);
  }

  disableContextMenu() {
    this.imageService.disableContextMenu('fancybox-container');
  }

}
