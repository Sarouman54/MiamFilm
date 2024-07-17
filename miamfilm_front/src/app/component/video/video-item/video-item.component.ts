import { Component, inject, OnInit } from '@angular/core';
import { VideoService } from '../../../services/video.service';
import { VideoModel } from '../../../models/video.model';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-video-item',
  templateUrl: './video-item.component.html',
  styleUrl: './video-item.component.scss'
})
export class VideoItemComponent implements OnInit {
  private route = inject(ActivatedRoute);
  images!: string[];
  value: number = 2;
  notes: string = '9';

  idVideo = 0;
  video! : VideoModel;

  constructor(
    private videoService: VideoService,
  ) {}

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
