import { Component, OnInit } from '@angular/core';
import { VideoModel } from '../../../models/video.model';
import { VideoService } from '../../../services/video.service';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { map, switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-video-item',
  templateUrl: './video-item.component.html',
  styleUrl: './video-item.component.scss'
})
export class VideoItemComponent implements OnInit {
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

  ngOnInit() {
    this.router.paramMap.pipe(
      map(params => {
        const idParam = params.get('id');
        return idParam ? +idParam : null; // Convertit en nombre si non null
      })
    ).subscribe(id => {
      this.id = id;
      console.log('ID récupéré:', this.id);
    });
    if(this.id != null){
      this.videoService.getVideoById(this.id).subscribe(response => {
        this.video = response
        console.log(this.video);
      },
        error => {
          console.error('Erreur lors de la récupération de la vidéo :', error);
        })
    }
    this.images = [
      'assets/img/fraisier.jpg',
      'assets/img/frozencupcake.jpg',
      'assets/img/sunflowercake.jpg',
      'assets/img/tiramisu.jpg'
    ];
  }
}
