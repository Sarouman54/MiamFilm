import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../../services/auth.service';
import { CommentService } from '../../../services/comment.service';
import { Router } from '@angular/router';
import { UserModel } from '../../../models/user.model';
import { CommentModel } from '../../../models/comment.model';

@Component({
  selector: 'app-comment-form',
  templateUrl: './comment-form.component.html',
  styleUrl: './comment-form.component.scss'
})
export class CommentFormComponent {
  value: number = 0;

  commentForm: FormGroup;
  message: string | null = null;
  user: UserModel | null = null;
  comment: CommentModel | null = null;
  

  constructor(private fb: FormBuilder, private authService: AuthService, private router: Router, private commentService: CommentService) {
    this.commentForm = this.fb.group({
      description: ['', Validators.required]
    });
  }

  onSubmit(): void {
    const token = localStorage.getItem('token');
    const id_video = 1;
    const id_user = 1;
    const id_recipe = 1;
    if (token && this.commentForm.valid) {
      const {description} = this.commentForm.value;
      this.commentService.addComment(token, description, id_video, id_user, id_recipe).subscribe(response => {
        this.router.navigate(['/']).then(() => {
          window.location.reload();
        });
      }, error => {
          alert('Ajout commentaire fail failed: ' + JSON.stringify(error.error)); // Affiche les détails de l'erreur
      });
    }
  }
}
