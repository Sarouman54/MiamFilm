import { Component, Input, OnInit } from '@angular/core';
import { CommentService } from '../../../services/comment.service';
import { CommentModel } from '../../../models/comment.model';
import { AuthService } from '../../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-comment-list',
  templateUrl: './comment-list.component.html',
  styleUrl: './comment-list.component.scss'
})
export class CommentListComponent implements OnInit {
  @Input() idVideo: number = 0;
  value: number = 2;
  commentList: CommentModel [] = [];

  constructor(private authService: AuthService, private router: Router, private commentService: CommentService){
  }

  ngOnInit(): void{
    this.commentService.getCommentsByVideoId(this.idVideo).subscribe((response: CommentModel[]) => {
        this.commentList = response
      },
      error => {
        console.error('Erreur lors de la récupération des commentaires :', error);
        
      }
    )
  }
}
