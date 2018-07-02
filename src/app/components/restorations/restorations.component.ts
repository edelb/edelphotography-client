import { Component, OnInit } from '@angular/core';
import { ImageEntity } from '../../entities/ImageEntity';
import { ImageService } from '../../services/image.service';

@Component({
  selector: 'app-restorations',
  templateUrl: './restorations.component.html',
  styleUrls: ['./restorations.component.css']
})
export class RestorationsComponent implements OnInit {

  private images: Array<ImageEntity> = null;
  private path = 'restorations';
  private files = 11;

  constructor(private imageService: ImageService) { }

  ngOnInit() {
    this.imageService.scrollTop();
    this.images = this.imageService.loadImagesFromAssets(this.path, this.files);
  }

  private disableContextMenu() {
    this.imageService.disableContextMenu('fancybox-container');
  }

}
