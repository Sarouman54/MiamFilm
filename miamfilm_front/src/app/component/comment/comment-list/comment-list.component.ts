
import { Component, OnInit, Input } from '@angular/core';
import { CommentService } from '../../../services/comment.service';
import { CommentModel } from '../../../models/comment.model';
import { AuthService } from '../../../services/auth.service';
import { Router } from '@angular/router';
import { UsersService } from '../../../services/users.service';
import { UserModel } from '../../../models/user.model';

@Component({
  selector: 'app-comment-list',
  templateUrl: './comment-list.component.html',
  styleUrl: './comment-list.component.scss'
})
export class CommentListComponent implements OnInit {
  @Input() idVideo: number = 0;
  value: number = 2;
  commentList: CommentModel [] = [];
  users: UserModel [] = [];

  constructor(private usersService: UsersService, private authService: AuthService, private router: Router, private commentService: CommentService){
    this.idVideo = 0;
  }

  ngOnInit(): void{
    const token = localStorage.getItem('token');
    this.usersService.getUsers().subscribe((hope: UserModel[]) => {
      this.users = hope;
      console.log(this.users)
     },
     error => {
      console.error('Erreur lors de la récupération user :', error);
      
    });
    // this.commentService.getAllComment().subscribe((response: CommentModel[]) => {
    this.commentService.getAllComment().subscribe((response: CommentModel[]) => {
        this.commentList = response
      },
      error => {
        console.error('Erreur lors de la récupération des commentaires :', error);
        
      }
    )
  }
}
