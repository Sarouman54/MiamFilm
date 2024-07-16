import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { RecipeModel } from '../models/recipe.model';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  constructor(private http: HttpClient) {}

  getAllRecipe(): Observable<RecipeModel[]> {
    return this.http.get<{ data: RecipeModel[] }>(`${environment.apiUrl}/recipe`)
    .pipe(map(response => response.data));
  }

  getRecipeById(_id: string): Observable<any> {
    return this.http.get<any>(`${environment.apiUrl}/recipe/` + _id);
  }

  getRecipeByTitle(title: string): Observable<any> {
    return this.http.get<any>(`${environment.apiUrl}/recipe/title/` + title);
  }

  addRecipe(Token: string, title: string, persons: number, preparation_time: number, ingredients: Text, picture: string, description: Text, difficulty: string, note: number): Observable<any> {
    const headers = new HttpHeaders().set('Authorization', `Bearer ${Token}`);
    return this.http.post<any>(`${environment.apiUrl}/recipe`, {title, persons, preparation_time, ingredients, picture, description, difficulty, note}, { headers });
  }

  updateRecipeById(Token: string, _id: string, title: string, persons: number, preparation_time: number, ingredients: Text, picture: string, description: Text, difficulty: string, note: number): Observable<any> {
    const headers = new HttpHeaders().set('Authorization', `Bearer ${Token}`);
    return this.http.put<any>(`${environment.apiUrl}/recipe/` + _id, {title, persons, preparation_time, ingredients, picture, description, difficulty, note}, { headers });
  }

  deleteRecipeById(Token: string, _id: string): Observable<any> {
    const headers = new HttpHeaders().set('Authorization', `Bearer ${Token}`);
    return this.http.delete<any>(`${environment.apiUrl}/recipe/` + _id, { headers });
  }
}