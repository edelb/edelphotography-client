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

    /**
     * Returns an Observable of boolean based on a given path.
     * @param authName name of authorization (i.e. edel-read)
     */
    authorize(authName: string): Observable<boolean> {
        return this.http.post<boolean>(endpoints.flickr + `auth/${authName}`, { });
    }

    /**
     * Returns an Observable of SizeEntity based on a given path.
     * @param photoId ID of photo
     */
    getSizesOfImage(photoId: string): Observable<Array<SizeEntity>> {
        return this.http.get<Array<SizeEntity>>(endpoints.flickr + `image/sizes/${photoId}`);
    }

    /**
     * Returns Array of SizeEntity with all sizes of a photo.
     * @param photo PhotoEntity
     */
    generateSizes(photo: PhotoEntity): Array<SizeEntity> {
        const sizes = new Array<SizeEntity>();

        // small square (_s)
        const square = new SizeEntity();
        square.label = 'Square';
        square.width = 75;
        square.height = 75;
        square.source = `https://farm${photo.farm}.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}_s.jpg`;
        square.url = ``;
        square.media = 'photo';

        // large square  150(_q)
        const squareLarge = new SizeEntity();
        squareLarge.label = 'Square Large';
        squareLarge.width = 150;
        squareLarge.height = 150;
        squareLarge.source = `https://farm${photo.farm}.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}_q.jpg`;
        square.url = ``;
        square.media = 'photo';

        // thumbnail (_t)
        const thumbnail = new SizeEntity();
        thumbnail.label = 'Thumbnail';
        thumbnail.width = 0;
        thumbnail.height = 0;
        thumbnail.source = `https://farm${photo.farm}.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}_t.jpg`;
        square.url = ``;
        square.media = 'photo';

        // small 240 (_m)
        const small = new SizeEntity();
        small.label = 'Small';
        thumbnail.width = 0;
        thumbnail.height = 0;
        small.source = `https://farm${photo.farm}.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}_m.jpg`;
        square.url = ``;
        square.media = 'photo';

        // small square (_n)
        const small320 = new SizeEntity();
        small320.label = 'Small 320';
        thumbnail.width = 0;
        thumbnail.height = 0;
        small320.source = `https://farm${photo.farm}.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}_n.jpg`;
        square.url = ``;
        square.media = 'photo';

        // medium ()
        const medium = new SizeEntity();
        medium.label = 'Medium';
        thumbnail.width = 0;
        thumbnail.height = 0;
        medium.source = `https://farm${photo.farm}.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}.jpg`;
        square.url = ``;
        square.media = 'photo';

        // medium 640 (_z)
        const medium640 = new SizeEntity();
        medium640.label = 'Medium 640';
        thumbnail.width = 0;
        thumbnail.height = 0;
        medium640.source = `https://farm${photo.farm}.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}_z.jpg`;
        square.url = ``;
        square.media = 'photo';

        // medium 800 (_c)
        const medium800 = new SizeEntity();
        medium800.label = 'Medium 800';
        thumbnail.width = 0;
        thumbnail.height = 0;
        medium800.source = `https://farm${photo.farm}.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}_c.jpg`;
        square.url = ``;
        square.media = 'photo';

        // large 1024 (_b)
        const large = new SizeEntity();
        large.label = 'Large';
        thumbnail.width = 0;
        thumbnail.height = 0;
        large.source = `https://farm${photo.farm}.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}_b.jpg`;
        square.url = ``;
        square.media = 'photo';

        // large 1600 (_h)
        const large1600 = new SizeEntity();
        large1600.label = 'Large 1600';
        thumbnail.width = 0;
        thumbnail.height = 0;
        large1600.source = `https://farm${photo.farm}.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}_h.jpg`;
        square.url = ``;
        square.media = 'photo';

        // large 2048 (_k)
        const large2048 = new SizeEntity();
        large2048.label = 'Large 2048';
        thumbnail.width = 0;
        thumbnail.height = 0;
        large2048.source = `https://farm${photo.farm}.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}_k.jpg`;
        square.url = ``;
        square.media = 'photo';

        // original (_o)
        const original = new SizeEntity();
        original.label = 'Origial';
        thumbnail.width = 0;
        thumbnail.height = 0;
        original.source = `https://farm${photo.farm}.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}_o.jpg`;
        square.url = ``;
        square.media = 'photo';

        const arr = [
            square, squareLarge, thumbnail, small, small320, medium,
            medium640, medium800, large, large1600, large2048, original
        ];

        for (let i = 0; i < arr.length; i++) {
            sizes.push(arr[i]);
        }

        return sizes;
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
