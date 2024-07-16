import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class VideoService {

  constructor(private http: HttpClient) {}

  getAllVideo(): Observable<any> {
    return this.http.get<any>(`${environment.apiUrl}/video`);
  }

  getVideoById(_id: string): Observable<any> {
    return this.http.get<any>(`${environment.apiUrl}/video/` + _id);
  }

  getVideoByTitle(title: string): Observable<any> {
    return this.http.get<any>(`${environment.apiUrl}/video/title/` + title);
  }

  addVideo(Token: string, title: string): Observable<any> {
    const headers = new HttpHeaders().set('Authorization', `Bearer ${Token}`);
    return this.http.post<any>(`${environment.apiUrl}/video`, {title}, { headers });
  }

  updateVideoById(Token: string, _id: string, title: string, released: Date, director: string, actors: string, synopsis: Text, genre: string, type: string, runtime: number, poster: string, box_office: number): Observable<any> {
    const headers = new HttpHeaders().set('Authorization', `Bearer ${Token}`);
    return this.http.put<any>(`${environment.apiUrl}/video/` + _id, {title, released, director, actors, synopsis, genre, type, runtime, poster, box_office}, { headers });
  }

  deleteRoleById(Token: string, _id: string): Observable<any> {
    const headers = new HttpHeaders().set('Authorization', `Bearer ${Token}`);
    return this.http.delete<any>(`${environment.apiUrl}/video/` + _id, { headers });
  }
}