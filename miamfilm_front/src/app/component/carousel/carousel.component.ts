import { Component, OnInit } from '@angular/core';
import { VideoService } from '../../services/video.service';
import { VideoModel } from '../../models/video.model';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements OnInit {

  images: string[] = [];
  notes: string = '9';
  videoList: VideoModel[] = [];

  responsiveOptions: any[] = [
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
  ) {}


  ngOnInit(): void{
    this.videoService.getAllVideo().subscribe((response: VideoModel[]) => {
      this.videoList = response
      console.log(this.videoList);
    },
    error => {
      console.error('Erreur lors de la récupération des commentaires :', error);
    })

    this.images = [
      'assets/img/frozen1.jpg',
      'assets/img/frozen2.jpg',
      'assets/img/frozen3.jpg',
      'assets/img/ariel.jpg',
      'assets/img/insideout2.jpg',
      'assets/img/raiponse.jpg',
      'assets/img/frozen1.jpg',
      'assets/img/frozen2.jpg',
      'assets/img/frozen3.jpg',
      'assets/img/ariel.jpg',
      'assets/img/insideout2.jpg',
      'assets/img/raiponse.jpg',
      'assets/img/frozen1.jpg',
      'assets/img/frozen2.jpg',
      'assets/img/frozen3.jpg',
      'assets/img/ariel.jpg',
      'assets/img/insideout2.jpg',
      'assets/img/raiponse.jpg'
    ];
  }
}
