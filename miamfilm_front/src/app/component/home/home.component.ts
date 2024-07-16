import { Component, OnInit } from '@angular/core';
import { RecipeService } from '../../services/recipe.service';
import { RecipeModel } from '../../models/recipe.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {
  images!: string[];
  recipeList: RecipeModel[] = [];

  constructor(
    private recipeService: RecipeService,
  ) {}

  ngOnInit(): void {

    this.recipeService.getAllRecipe().subscribe((response: RecipeModel[]) => {
      this.recipeList = response
    },
    error => {
      console.error('Erreur lors de la récupération des recettes :', error);
    })

    this.images = [
      'assets/img/fraisier.jpg',
      'assets/img/frozencupcake.jpg',
      'assets/img/sunflowercake.jpg',
      'assets/img/tiramisu.jpg'
    ];
  }
}