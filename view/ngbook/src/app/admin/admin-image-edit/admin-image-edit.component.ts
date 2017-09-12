import {Image} from '../../models/image';

import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { ImageService } from '../../services/image.service';



@Component({
  selector: 'app-admin-image-edit',
  templateUrl: './admin-image-edit.component.html',
  styleUrls: ['./admin-image-edit.component.css']
})
export class AdminImageEditComponent implements OnInit, OnDestroy {

  id:any;
  params:any;
  status: any;
  message: any;

  //image Model for Two-Way Binding if image Model is changing that reflect to view
  image = new Image('id', 'title', 'description', 'thumbnail', 'imageLink');


  constructor(private activatedRoute: ActivatedRoute, private imageService: ImageService) { }

  ngOnInit() {

    //Basically, when using activatedRoute, parameters are wrapped in an Observable. We subscribe to that Observable using:
    //When the route changes, we will know immediately. We can grab the value (which is the id) using params['id'], and assign it to our id variable:

     this.params = this.activatedRoute.params.subscribe( params => this.id = params['id']);

     this.imageService.getImage(this.id).subscribe(
        data_images => {

          this.image.description = data_images['description'];
          this.image.title = data_images['title'];
          this.image.imageLink = data_images['imageLink'];
          this.image.thumbnail = data_images['thumbnail'];
          this.image.id = data_images['id'];
          console.log(data_images);
        },
        error =>  console.log(<any>error));

  }

 //Additionally, to prevent memory leaks, we should unsubscribe the params when our component is destroyed.
  ngOnDestroy() {
  this.params.unsubscribe();
}


updateImage(image) {
  this.imageService.updateImage(image)
    .subscribe(
      image  => {
        console.log(image);
        this.status = "success";
        this.message = image['message'];
      },
      error =>  {

        console.log(<any>error);
        this.status = "error";
        this.message = error['message'];
      });
}


}
