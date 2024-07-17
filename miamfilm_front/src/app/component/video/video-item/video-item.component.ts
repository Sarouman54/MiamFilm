
import { ActivatedRoute, ParamMap } from '@angular/router';
import { map, switchMap } from 'rxjs/operators';

import { Component, inject, OnInit } from '@angular/core';
import { VideoService } from '../../../services/video.service';
import { VideoModel } from '../../../models/video.model';


@Component({
  selector: 'app-video-item',
  templateUrl: './video-item.component.html',
  styleUrl: './video-item.component.scss'
})
export class VideoItemComponent implements OnInit {
  private route = inject(ActivatedRoute);
  idVideo: number = 0;
  images!: string[];
  value: number = 2;
  notes: string = '9';
  video: any;
  id: number | null = null;
  v: string = "video";
  c: string = "critic";
  r: string = "recette";

  constructor(
    private videoService: VideoService, private router: ActivatedRoute
  ) { }

  ngOnInit(): void {

    this.route.params.subscribe(params => {
      this.idVideo = params['id'];
    })

    this.videoService.getVideoById(this.idVideo).subscribe((response: VideoModel) => {
      this.video = response
    },
    error => {
      console.error('Erreur lors de la récupération de la vidéo :', error);
    })

    this.images = [
      'assets/img/fraisier.jpg',
      'assets/img/frozencupcake.jpg',
      'assets/img/sunflowercake.jpg',
      'assets/img/tiramisu.jpg'
    ];
  }
}
