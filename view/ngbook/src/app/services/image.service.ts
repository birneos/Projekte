import { Injectable } from '@angular/core';
import {Image} from '../models/image';
import { Http, Response,Headers, RequestOptions } from '@angular/http';

import 'rxjs/Rx';
import {Observable} from 'rxjs/Rx';
import { AuthHttp } from "angular2-jwt";

@Injectable()
export class ImageService {


  // images: Image[] = [
  //   new Image('1', 'First image', 'First image description', 'https://angularbooks.com/img/angular4/img1.jpg', 'https://angularbooks.com/img/angular4/img1-l.jpg'),
  //   new Image('2', 'Second image', 'Second image description', 'https://angularbooks.com/img/angular4/img2.jpg', 'https://angularbooks.com/img/angular4/img2-l.jpg'),
  //   new Image('3', 'Third image', 'Third image description', 'https://angularbooks.com/img/angular4/img3.jpg', 'https://angularbooks.com/img/angular4/img3-l.jpg'),
  //   new Image('4', 'Fourth image', 'Fourth image description', 'https://angularbooks.com/img/angular4/img4.jpg', 'https://angularbooks.com/img/angular4/img4-l.jpg'),
  //   new Image('5', 'Fifth image', 'Fifth image description', 'https://angularbooks.com/img/angular4/img5.jpg', 'https://angularbooks.com/img/angular4/img5-l.jpg'),
  //   new Image('6', 'Sixth image', 'Sixth image description', 'https://angularbooks.com/img/angular4/img6.jpg', 'https://angularbooks.com/img/angular4/img6-l.jpg'),
  //   new Image('7', 'Seventh image', 'Seventh image description', 'https://angularbooks.com/img/angular4/img7.jpg', 'https://angularbooks.com/img/angular4/img7-l.jpg'),
  //   new Image('8', 'Eighth image', 'Eighth image description', 'https://angularbooks.com/img/angular4/img8.jpg', 'https://angularbooks.com/img/angular4/img8-l.jpg'),
  // ];

  constructor(private http:Http, private authHttp: AuthHttp) {


  }

  getImages(): Observable<Image[]> {
   // return this.images;

    return this.authHttp.get('http://localhost:8000/api/v1/images')
      .map((response: Response) => response.json());

  }

  getImage(id:String):Observable<Image[]>{

    return this.authHttp.get('http://localhost:8000/api/v1/images/' + id)
       .map((response: Response) => response.json());
  }



  addImage(image: Object): Observable<Image[]>{



    return this.authHttp.post('http://localhost:8000/api/v1/images', image)
      .map((response: Response) => response.json())
      .catch((error:any) => Observable.throw(error.json().error || {message:"Server Error"} ));

  }

  updateImage(image: Object): Observable<Image[]> {

    const apiUrl = 'http://localhost:8000/api/v1/images';
    const url = `${apiUrl}/${image["id"]}`;
    return this.authHttp.put(url, image)
    .map((response: Response) => response.json())
    .catch((error:any) => Observable.throw(error.json().error || {message:"Server Error"}));
}

deleteImage(id:String): Observable<Image[]>  {

  let apiUrl = 'http://localhost:8000/api/v1/images';
  let url = `${apiUrl}/${id}`;
  return this.authHttp.delete(url)
    .map((response: Response) => response.json())
    .catch((error:any) => Observable.throw(error.json().error || {message:"Server Error"}));

}


}
