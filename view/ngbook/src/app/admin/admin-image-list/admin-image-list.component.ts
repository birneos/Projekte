import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import {Image} from '../../models/image';
import { ImageService } from '../../services/image.service';


@Component({
  selector: 'app-admin-image-list',
  templateUrl: './admin-image-list.component.html',
  styleUrls: ['./admin-image-list.component.css']
})

export class AdminImageListComponent implements OnInit {

  constructor(private imageService: ImageService) { }

  images: Observable<Image[]> ;


  ngOnInit() {

    this.images  = this.imageService.getImages();

  }

}
