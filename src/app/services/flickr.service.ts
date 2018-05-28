/**
 * Flickr OAuth
 * https://www.flickr.com/services/api/auth.oauth.html
 * https://auth0.com/blog/angular-2-authentication/
 * https://medium.com/ravi-s-blog/flickr-oauth-api-java-example-a1e8fc5d1b47
 *
 * Examples:
 * flickr.photosets.getPhotos - Get the list of photos in a set.
 * https://api.flickr.com/services/rest/?method=flickr.photosets.getPhotos
 * Required: api_key, photoset_id, user_id
 *
 * flickr.photosets.getList - Returns the photosets belonging to the specified user.
 * https://api.flickr.com/services/rest/?method=flickr.photosets.getList
 * Required: api_key, user_id
 *
 * Flickr URLs - https://www.flickr.com/services/api/misc.urls.html
 * https://farm{farm-id}.staticflickr.com/{server-id}/{id}_{secret}.jpg
 *	or
 * https://farm{farm-id}.staticflickr.com/{server-id}/{id}_{secret}_[mstzb].jpg
 * 	or
 * https://farm{farm-id}.staticflickr.com/{server-id}/{id}_{o-secret}_o.(jpg|gif|png)
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
import { ImageEntity } from '../entities/ImageEntity';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';
import {JSO, Popup} from 'jso';

const signRequest = 'https://www.flickr.com/services/oauth/request_token' +
    '?oauth_nonce=89601180' +
    '&oauth_timestamp=1305583298' +
    '&oauth_consumer_key=c6ed576e83ccf77bd61be2519964b49c' +
    '&oauth_signature_method=HMAC-SHA1' +
    '&oauth_version=1.0' +
    '&oauth_callback=http%3A%2F%2Fwww.example.com';

@Injectable()
export class FlickrService {

  constructor(private http: HttpClient) { }

  public getPhotosFromAlbum(album: string): Observable<any> {
    let url = 'https://api.flickr.com/services/rest/?method=flickr.photosets.getPhotos';
    url += '&api_key=c6ed576e83ccf77bd61be2519964b49c';
    url += '&photoset_id=72157694424803161';
    url += '&user_id=79785631@N04';
    url += '&format=json';
    url += '&nojsoncallback=1';
    return this.http.get('url');
  }

  public getAlbums(): Observable<any> {
    let url = 'https://api.flickr.com/services/rest/?method=flickr.photosets.getList';
    url += '&api_key=a749acd556b317c50cad7bd4a2e41f36';
    url += '&user_id=79785631%40N04';
    url += '&format=json';
    url += '&nojsoncallback=1';
    url += '&auth_token=72157693067987972-e400fdce787359f1';
    url += '&api_sig=f023e4ae4964f72678bbde67e6f5fbd9';

    const config = new JSO({
      providerID: 'flickr',
      client_id: '79785631%40N04',
      redirect_uri: 'https://www.flickr.com/services/oauth/request_token',
      authorization: 'https://api.flickr.com/services/rest/?method=flickr.photosets.getList',
      scopes: {}
    });

    const OAuth = require('@zalando/oauth2-client-js');
    const flickr = new OAuth.Provider({
        id: '79785631%40N04',   // required
        authorization_url: 'https://www.flickr.com/services/oauth/request_token', // required
        oauth_timestamp: 1305583298,
        oauth_consumer_key: 'c6ed576e83ccf77bd61be2519964b49c',
        oauth_signature_method: 'HMAC-SHA1',
        oauth_version: 1.0,
        oauth_callback: 'http%3A%2F%2Fwww.flickr.com'
    });

    // Create a new request
    console.log(flickr);

    return this.http.get(url);
  }

  /**
   * Returns base URL as a string.
   * @param url string
   */
  public baseURL(url: string): string {
    let urlArr = url.split(new RegExp('[?]|&'));
    urlArr.sort();
    let newUrl = '';

    // encode array of string
    for (let i = 0; i < urlArr.length; i++) {
      if (i === 0) {  // encode first element. the --- is used to split later on
        urlArr[i] = 'GET&' + encodeURIComponent(urlArr[i]) + '&---';
      } else if (i === 1) {
        urlArr[i] = urlArr[i];
      } else {
        // urlArr[i] = encodeURIComponent(urlArr[i]) + '&';
        urlArr[i] = '&' + urlArr[i];
      }
      newUrl += urlArr[i];
    }

    // reuse urlArr to split into two between & ... &
    urlArr = newUrl.split('---');

    // encode second item of array
    // first item alread encoded in previous loop
    urlArr[1] = encodeURIComponent(urlArr[1]);

    newUrl = urlArr[0] + urlArr[1];

    return newUrl;
  }

}
