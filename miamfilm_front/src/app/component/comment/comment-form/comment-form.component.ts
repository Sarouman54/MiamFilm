import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../../services/auth.service';
import { CommentService } from '../../../services/comment.service';
import { ActivatedRoute, Router } from '@angular/router';
import { UserModel } from '../../../models/user.model';
import { CommentModel } from '../../../models/comment.model';
import { UsersService } from '../../../services/users.service';
import { jwtDecode } from 'jwt-decode';

@Component({
  selector: 'app-comment-form',
  templateUrl: './comment-form.component.html',
  styleUrl: './comment-form.component.scss'
})
export class CommentFormComponent implements OnInit {
  value: number = 0;

  commentForm: FormGroup;
  message: string | null = null;
  user: UserModel [] = [];
  comment: CommentModel | null = null;
  type: string | null = null;
  idVideo: number | null = null;
  
  

  constructor(private fb: FormBuilder, private usersService: UsersService, private authService: AuthService, private router: Router, private route: ActivatedRoute, private commentService: CommentService) {
    this.commentForm = this.fb.group({
      description: ['', Validators.required],
      title: ['', Validators.required]
    });
  }

  onSubmit(): void {
    const token = localStorage.getItem('token');
    const id_recipe = 1;
    if (token && this.commentForm.valid) {
      const {description, title} = this.commentForm.value;
      const decodedToken: any = jwtDecode(token);
      const userId = decodedToken.userId;
      this.usersService.getUserById(userId).subscribe((hope: UserModel[]) => {
       this.user = hope;
       console.log(this.user)
      });

      if(this.idVideo){
        this.commentService.addComment(token, title, description, this.idVideo, userId , id_recipe).subscribe(response => {
          this.router.navigate(['/']).then(() => {
            window.location.reload();
          });
        }, error => {
            alert('Ajout commentaire fail failed: ' + JSON.stringify(error.error)); // Affiche les détails de l'erreur
        });
      }
    }
  }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.type = params['type'];
      this.idVideo = params['id'];
      console.log('Paramètres récupérés:', this.type, this.idVideo);
    });
  }
}
