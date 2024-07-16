import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RecipeRoutingModule } from './recipe-routing.module';

import { RecipeListComponent } from './recipe-list/recipe-list.component';
import { RecipeItemComponent } from './recipe-item/recipe-item.component';
import { CarouselModule } from 'primeng/carousel';
import { RatingModule } from 'primeng/rating';
import { FormsModule } from '@angular/forms';
import { CommentModule } from "../comment/comment.module";

@NgModule({
  declarations: [
    RecipeListComponent,
    RecipeItemComponent
  ],
  imports: [
    CommonModule,
    RecipeRoutingModule,
    FormsModule,
    RatingModule,
    CarouselModule,
    CommentModule
  ]
})
export class RecipeModule { }
