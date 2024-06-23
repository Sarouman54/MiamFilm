import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VideoRoutingModule } from './video-routing.module';

import { VideoListComponent } from './video-list/video-list.component';
import { VideoItemComponent } from './video-item/video-item.component';

@NgModule({
  declarations: [
    VideoListComponent,
    VideoItemComponent
  ],
  imports: [
    CommonModule,
    VideoRoutingModule
  ]
})
export class VideoModule { }
