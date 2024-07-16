import { Component } from '@angular/core';
import { CommentService } from '../../../services/comment.service';
import { CommentModel } from '../../../models/comment.model';
import { AuthService } from '../../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-comment-list',
  templateUrl: './comment-list.component.html',
  styleUrl: './comment-list.component.scss'
})
export class CommentListComponent {
  value: number = 2;
  commentList: CommentModel[] | undefined;

  constructor(private authService: AuthService, private router: Router, private commentService: CommentService){
  }

  // ngOnInit(){
  //   const token = localStorage.getItem('token');
  //   if(token){
  //     this.commentList = this.commentService.getAllComment(token).subscribe(response => {
  //       console.log('hello')
  //     }, error => {
  //         alert('Login failed: ' + JSON.stringify(error.error)); // Affiche les détails de l'erreur
  //     });
  //   }
  // }
}
