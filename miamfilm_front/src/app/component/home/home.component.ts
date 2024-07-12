import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {
  images!: string[];
  value: number = 2;

  ngOnInit() {
    this.images = [
      'assets/img/fraisier.jpg',
      'assets/img/frozencupcake.jpg',
      'assets/img/sunflowercake.jpg',
      'assets/img/tiramisu.jpg'
    ];
  }
}