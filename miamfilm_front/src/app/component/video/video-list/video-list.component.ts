import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-video-list',
  templateUrl: './video-list.component.html',
  styleUrl: './video-list.component.scss'
})
export class VideoListComponent implements OnInit {
  images: string[] = [];
  notes: string = '9';

  ngOnInit() {
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
