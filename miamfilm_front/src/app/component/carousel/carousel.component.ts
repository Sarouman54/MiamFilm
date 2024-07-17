import { Component, OnInit } from '@angular/core';
import { VideoService } from '../../services/video.service';
import { VideoModel } from '../../models/video.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements OnInit {

  videoList: VideoModel[] = [];

  responsiveOptions: any[] = [
    {
      breakpoint: '1600px',
      numVisible: 4,
      numScroll: 1
    },
    {
      breakpoint: '1280px',
      numVisible: 3,
      numScroll: 1
    },
    {
      breakpoint: '1024px',
      numVisible: 2,
      numScroll: 1
    },
    {
      breakpoint: '768px',
      numVisible: 2,
      numScroll: 1
    },
    {
      breakpoint: '560px',
      numVisible: 1,
      numScroll: 1
    }
  ];

  constructor(
    private videoService: VideoService,
    private router: Router
  ) { }


  ngOnInit(): void {
    this.videoService.getAllVideo().subscribe((response: VideoModel[]) => {
      this.videoList = response
    },
    error => {
      console.error('Erreur lors de la récupération des vidéos :', error);
    })
  }
}
