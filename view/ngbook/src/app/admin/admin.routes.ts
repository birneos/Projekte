import {Routes} from "@angular/router";
import {AdminImageListComponent} from "./admin-image-list/admin-image-list.component";
import {DashboardComponent} from "./dashboard.component";
import { AdminImageCreateComponent } from './admin-image-create/admin-image-create.component';
import { AdminImageEditComponent } from './admin-image-edit/admin-image-edit.component';
import { AdminImageDeleteComponent } from './admin-image-delete/admin-image-delete.component';
import { AdminUserCreateComponent } from './admin-user-create/admin-user-create.component';
import { AdminUserListComponent } from './admin-user-list/admin-user-list.component';
import { AuthGuardService } from '../services/auth-guard.service';

export const adminRoutes: Routes = [
  { path: '', component: DashboardComponent, canActivate: [AuthGuardService]},
  { path: 'images', component: AdminImageListComponent},
  { path: 'images/create', component: AdminImageCreateComponent},
  { path: 'images/edit/:id', component: AdminImageEditComponent},
  { path: 'images/delete/:id', component: AdminImageDeleteComponent},
  { path: 'users/create', component: AdminUserCreateComponent},
  { path: 'users', component: AdminUserListComponent},
];