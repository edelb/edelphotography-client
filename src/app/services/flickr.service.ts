/**
 * For image size URLs: https://www.flickr.com/services/api/misc.urls.html
 *
 *    https://farm{farm-id}.staticflickr.com/{server-id}/{id}_{secret}.jpg
 *      or
 *    https://farm{farm-id}.staticflickr.com/{server-id}/{id}_{secret}_[mstzb].jpg
 *      or
 *    https://farm{farm-id}.staticflickr.com/{server-id}/{id}_{o-secret}_o.(jpg|gif|png)
 *
 *    The letter suffixes are as follows:
        s	small square 75x75
        q	large square 150x150
        t	thumbnail, 100 on longest side
        m	small, 240 on longest side
        n	small, 320 on longest side
        -	medium, 500 on longest side
        z	medium 640, 640 on longest side
        c	medium 800, 800 on longest side†
        b	large, 1024 on longest side*
        h	large 1600, 1600 on longest side†
        k	large 2048, 2048 on longest side†
        o	original image, either a jpg, gif or png, depending on source format
 */


import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { endpoints } from '../../environments/environment';
import { PhotosetEntity } from '../entities/PhotosetEntity';
import { PhotoEntity } from '../entities/PhotoEntity';
import { SizeEntity } from '../entities/SizeEntity';

@Injectable()
export class FlickrService {

    static serverActive = false;

    constructor (private http: HttpClient) { }

    /**
     * Returns an Observable of PhotosetEntity based on a given path.
     * @param album Album of images to retrieve (i.e. portfolio-day1)
     */
    getImagesFromAlbum(album: string): Observable<PhotosetEntity> {
        return this.http.get<PhotosetEntity>(endpoints.flickr + `images/album/${album}`);
    }

    /**
     * Returns an Observable of ImageEntity Array based on a given path.
     * @param album Album of images to retrieve (i.e. portfolio-day1)
     */
    getImageFromAlbumByIdOrTitle(albumIdOrTitle: string, photoIdOrTitle: string): Observable<PhotoEntity> {
        return this.http.get<PhotoEntity>(endpoints.flickr + `images/album/${albumIdOrTitle}/photos/${photoIdOrTitle}`);
    }

    generateSizes(photo: PhotoEntity): SizeEntity {
    const size = new SizeEntity();

        return size;
    }

    /**
     * Check server status every second.
     */
    checkServerStatus() {
    /*
    let checkServer$: Observable<Array<ImageEntity>>;
    checkServer$ = this.loadImagesFromFlickrAlbum('p');
    checkServer$.subscribe(resp => {
        ImageService.serverActive = true;
    },

    err => {
        ImageService.serverActive = false;
    });
    */

        /*
        const sessionChecker = setInterval(() => {
        let checkServer$: Observable<Array<ImageEntity>>;
        checkServer$ = this.loadImagesFromServer('p');
        checkServer$.subscribe(resp => {
        ImageService.serverActive = true;
        },

        err => {
        ImageService.serverActive = false;
        });
        console.log('server: ' + ImageService.serverActive);
    }, 1000);
    */
    }

}
