import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './component/home/home.component';
import { HeaderComponent } from './component/header/header.component';
import { FooterComponent } from './component/footer/footer.component';
import { SearchComponent } from './component/search/search.component';
import { PageNotFoundComponent } from './component/page-not-found/page-not-found.component';
import { CarouselComponent } from './component/carousel/carousel.component';
import { AuthModule } from './component/auth/auth.module';
import { CommentModule } from './component/comment/comment.module';
import { ProfileModule } from './component/profile/profile.module';
import { RecipeModule } from './component/recipe/recipe.module';
import { VideoModule } from './component/video/video.module';
import { CarouselModule } from 'primeng/carousel';
import { ButtonModule } from 'primeng/button';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    PageNotFoundComponent,
    SearchComponent,
    CarouselComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,    
    AppRoutingModule,
    AuthModule,
    CommentModule,
    ProfileModule,
    RecipeModule,
    VideoModule,
    ButtonModule,
    CarouselModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
