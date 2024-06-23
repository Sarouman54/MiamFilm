import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileRoutingModule } from './profile-routing.module';

import { ProfileComponent } from './profile/profile.component';
import { UserUpdateComponent } from './user-update/user-update.component';
import { UserDeleteComponent } from './user-delete/user-delete.component';
import { UserPasswordUpdateComponent } from './user-password-update/user-password-update.component';



@NgModule({
  declarations: [
    ProfileComponent,
    UserUpdateComponent,
    UserDeleteComponent,
    UserPasswordUpdateComponent
  ],
  imports: [
    CommonModule,
    ProfileRoutingModule
  ]
})
export class ProfileModule { }
