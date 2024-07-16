import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommentRoutingModule } from './comment-routing.module';

import { CommentFormComponent } from './comment-form/comment-form.component';
import { CommentListComponent } from './comment-list/comment-list.component';
import { CommentItemComponent } from './comment-item/comment-item.component';
import { CommentDeleteComponent } from './comment-delete/comment-delete.component';
import { CarouselModule } from 'primeng/carousel';
import { RatingModule } from 'primeng/rating';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    CommentFormComponent,
    CommentListComponent,
    CommentItemComponent,
    CommentDeleteComponent,
  ],
  imports: [
    CommonModule,
    CommentRoutingModule,
    CarouselModule,
    RatingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  exports: [
    CommentItemComponent,
    CommentListComponent
  ]
})
export class CommentModule { }
