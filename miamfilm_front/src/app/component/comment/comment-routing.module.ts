import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CommentFormComponent } from './comment-form/comment-form.component';
import { CommentListComponent } from './comment-list/comment-list.component';
import { CommentItemComponent } from './comment-item/comment-item.component';
import { CommentDeleteComponent } from './comment-delete/comment-delete.component';

const routes: Routes = [
    { path: 'comment-form', component: CommentFormComponent },
    { path: 'comment-list', component: CommentListComponent },
    { path: 'comment-item', component: CommentItemComponent },
    { path: 'comment-delete', component: CommentDeleteComponent }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class CommentRoutingModule { }