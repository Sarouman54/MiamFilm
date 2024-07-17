import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { environment } from '../../environments/environment';
import { CommentModel } from '../models/comment.model';
import { jwtDecode } from "jwt-decode";

@Injectable({
    providedIn: 'root'
  })
  export class CommentService {
    constructor(private http: HttpClient) {}

    addComment(Token: string, title: String, description: String, id_video: number, id_user: number, id_recipe: number): Observable<any> {
        console.log("ici 1 " + description, id_video, id_user , id_recipe)
        const headers = new HttpHeaders().set('Authorization', `Bearer ${Token}`);
        return this.http.post<any>(`${environment.apiUrl}/comment`, {title, description, id_video, id_user, id_recipe});
      }

    getAllComment(): Observable<CommentModel[]> {
      return this.http.get<{ data: CommentModel[] }>(`${environment.apiUrl}/comment`)
      .pipe(map(response => response.data));
    }
  }