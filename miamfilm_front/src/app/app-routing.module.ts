import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PageNotFoundComponent } from './component/page-not-found/page-not-found.component';
import { HomeComponent } from './component/home/home.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },

  { path: 'auth', loadChildren: () => import('./component/auth/auth.module').then(m => m.AuthModule) },
  { path: 'profile', loadChildren: () => import('./component/profile/profile.module').then(m => m.ProfileModule) },
  { path: 'recipe', loadChildren: () => import('./component/recipe/recipe.module').then(m => m.RecipeModule) },
  { path: 'comment', loadChildren: () => import('./component/comment/comment.module').then(m => m.CommentModule) },
  { path: 'video', loadChildren: () => import('./component/video/video.module').then(m => m.VideoModule) },


  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
