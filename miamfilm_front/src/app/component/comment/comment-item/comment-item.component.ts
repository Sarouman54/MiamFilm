import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-comment-item',
  templateUrl: './comment-item.component.html',
  styleUrl: './comment-item.component.scss'
})
export class CommentItemComponent implements OnInit {
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
