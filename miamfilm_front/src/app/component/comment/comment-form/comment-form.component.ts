import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../../services/auth.service';
import { CommentService } from '../../../services/comment.service';
import { ActivatedRoute, Router } from '@angular/router';
import { UserModel } from '../../../models/user.model';
import { CommentModel } from '../../../models/comment.model';
import { UsersService } from '../../../services/users.service';
import { RecipeService } from '../../../services/recipe.service';
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
  recipeForm: FormGroup;
  
  

  constructor(private fb: FormBuilder, private recipeService: RecipeService,  private usersService: UsersService, private authService: AuthService, private router: Router, private route: ActivatedRoute, private commentService: CommentService) {
    this.commentForm = this.fb.group({
      description: ['', Validators.required],
      title: ['', Validators.required]
    });
    this.recipeForm = this.fb.group({
      description: ['', Validators.required],
      title: ['', Validators.required],
      preparation_time:['', Validators.required],
      ingredients:['', Validators.required],
      difficult:['', Validators.required]
    })
  }

  onSubmit(): void {
    const token = localStorage.getItem('token');
    const id_recipe = 1;
    if (token) {
      const decodedToken: any = jwtDecode(token);
      const userId = decodedToken.userId;
      this.usersService.getUserById(userId).subscribe((hope: UserModel[]) => {
       this.user = hope;
       console.log(this.user)
      });
      console.log(this.type)

      if(this.type === 'recette'){
        const {description, title, preparation_time, ingredients, difficult} = this.recipeForm.value;
        console.log(description, title, preparation_time, ingredients, difficult)
        this.recipeService.addRecipe(token, title, 4, preparation_time, ingredients, "1", description, difficult, this.value).subscribe(response => {
          this.router.navigate(['/']).then(() => {
            window.location.reload();
          });
         })
      }

      if(this.idVideo && this.type == 'critic'){
      const {description, title} = this.commentForm.value;
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
