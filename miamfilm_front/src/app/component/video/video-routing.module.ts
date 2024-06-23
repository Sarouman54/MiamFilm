import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { VideoListComponent } from './video-list/video-list.component';
import { VideoItemComponent } from './video-item/video-item.component';

const routes: Routes = [
    { path: 'video-list', component: VideoListComponent },
    { path: 'video-item', component: VideoItemComponent },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class VideoRoutingModule { }