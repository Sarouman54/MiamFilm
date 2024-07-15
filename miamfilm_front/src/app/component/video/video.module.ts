import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VideoListComponent } from './video-list/video-list.component';
import { VideoItemComponent } from './video-item/video-item.component';
import { VideoRoutingModule } from './video-routing.module';
import { CarouselModule } from 'primeng/carousel';
import { RatingModule } from 'primeng/rating';
import { FormsModule } from '@angular/forms';
import { CommentModule } from '../comment/comment.module';

@NgModule({
  declarations: [
    VideoListComponent,
    VideoItemComponent
  ],
  imports: [
    CommonModule,
    VideoRoutingModule,
    CarouselModule,
    RatingModule,
    FormsModule,
    CommentModule
  ]
})
export class VideoModule { }
