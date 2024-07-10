import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements OnInit {
  images!: string[];
  notes!: string[];

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
    this.notes = [
      '9'
    ];
  }
}
