import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ProfileComponent } from './profile/profile.component';
import { UserUpdateComponent } from './user-update/user-update.component';
import { UserDeleteComponent } from './user-delete/user-delete.component';
import { UserPasswordUpdateComponent } from './user-password-update/user-password-update.component';

const routes: Routes = [
    { path: '', component: ProfileComponent },
    { path: 'user-update', component: UserUpdateComponent },
    { path: 'user-delete', component: UserDeleteComponent },
    { path: 'user-password-update', component: UserPasswordUpdateComponent }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ProfileRoutingModule { }