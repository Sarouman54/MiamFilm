import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommentFormComponent } from './comment-form/comment-form.component';
import { CommentListComponent } from './comment-list/comment-list.component';
import { CommentItemComponent } from './comment-item/comment-item.component';
import { CommentDeleteComponent } from './comment-delete/comment-delete.component';



@NgModule({
  declarations: [
    CommentFormComponent,
    CommentListComponent,
    CommentItemComponent,
    CommentDeleteComponent
  ],
  imports: [
    CommonModule
  ]
})
export class CommentModule { }
