import { Component, OnInit } from '@angular/core';

import {FormBuilder, FormGroup, Validators, FormControl} from "@angular/forms";
import { UserService } from '../../services/user.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-admin-user-create',
  templateUrl: './admin-user-create.component.html',
  styleUrls: ['./admin-user-create.component.css']
})
export class AdminUserCreateComponent implements OnInit {

  //create UserForm
  userForm: FormGroup;

  //custom Validation Rules
  static isValidEmail(control: FormControl) {
  let email_regexp = /^[a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)*$/i;

  return email_regexp.test(control.value) ? null : {
        invalidEmail: true
    };
}


 //initialize form-group
  constructor(fb: FormBuilder, private userService:UserService, private router: Router) {

     this.userForm = fb.group({

    email: fb.control('', [Validators.required, Validators.minLength(3), AdminUserCreateComponent.isValidEmail]),
     name:fb.control('', [Validators.required, Validators.minLength(3)]),
     password: fb.control('', [Validators.required, Validators.minLength(6)])

  });

  }

  ngOnInit() {
  }

  createUser() {

    this.userService.addUser(this.userForm.value).subscribe(
       user  => {
        console.log(user);
        this.router.navigate(['/admin']);
      },
      error =>  console.log(<any>error)

    );
    console.log(this.userForm.value);
  }
}
