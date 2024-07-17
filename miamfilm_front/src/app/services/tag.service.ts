import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { TagModel } from '../models/tag.model';

@Injectable({
  providedIn: 'root'
})
export class TagService {

  constructor(private http: HttpClient) {}

  getAllTag(): Observable<TagModel[]> {
    return this.http.get<{ data: TagModel[] }>(`${environment.apiUrl}/tag`)
    .pipe(map(response => response.data));
  }

  getTagById(_id: string): Observable<any> {
    return this.http.get<any>(`${environment.apiUrl}/tag/` + _id);
  }

  getTagByName(name: string): Observable<any> {
    return this.http.get<any>(`${environment.apiUrl}/tag/name/` + name);
  }

  addTag(Token: string, name: string, color: string): Observable<any> {
    const headers = new HttpHeaders().set('Authorization', `Bearer ${Token}`);
    return this.http.post<any>(`${environment.apiUrl}/tag`, {name, color}, { headers });
  }

  updateTagById(Token: string, _id: string, name: string, color: string): Observable<any> {
    const headers = new HttpHeaders().set('Authorization', `Bearer ${Token}`);
    return this.http.put<any>(`${environment.apiUrl}/tag/` + _id, {name, color}, { headers });
  }

  deleteTagById(Token: string, _id: string): Observable<any> {
    const headers = new HttpHeaders().set('Authorization', `Bearer ${Token}`);
    return this.http.delete<any>(`${environment.apiUrl}/tag/` + _id, { headers });
  }
}