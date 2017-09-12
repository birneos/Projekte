import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ImageService } from '../../services/image.service';

@Component({
  selector: 'app-admin-image-delete',
  templateUrl: './admin-image-delete.component.html',
  styleUrls: ['./admin-image-delete.component.css']
})
export class AdminImageDeleteComponent implements OnInit, OnDestroy {

  id: any;
  params: any;

  constructor(private activatedRoute: ActivatedRoute, private imageService: ImageService, private router: Router) { }

  ngOnInit() {

    // activedRoute is an Observable, so subscribe for an action
    this.params = this.activatedRoute.params.subscribe(params => this.id = params['id']);

    //image service to deleting image
    this.imageService.deleteImage(this.id).subscribe(

      data => {

            console.log(data);
            this.router.navigate(['/admin/images']);
      },
      error =>  console.log(<any>error)

    );
  }

  ngOnDestroy() {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.

    this.params.unsubscribe();
  }

}
