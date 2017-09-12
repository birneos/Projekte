import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { User } from '../../models/user';
import { UserService } from '../../services/user.service';


@Component({
  selector: 'app-admin-user-list',
  templateUrl: './admin-user-list.component.html',
  styleUrls: ['./admin-user-list.component.css']
})
export class AdminUserListComponent implements OnInit {


   users: Observable<User[]>;

  constructor( private userService:UserService) { }

  ngOnInit() {

    this.users = this.userService.getUsers();
  }

}
