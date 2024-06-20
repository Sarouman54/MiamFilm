import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VideoListComponent } from './video-list/video-list.component';
import { VideoItemComponent } from './video-item/video-item.component';



@NgModule({
  declarations: [
    VideoListComponent,
    VideoItemComponent
  ],
  imports: [
    CommonModule
  ]
})
export class VideoModule { }
