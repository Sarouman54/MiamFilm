import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { environment } from '../../environments/environment';
import { UserModel } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http: HttpClient) {}

  getUsers(): Observable<UserModel[]> {
    return this.http.get<{ data: UserModel[]}>(`${environment.apiUrl}/users`)
    .pipe(map(response => response.data));
  }

  getUserById(_id: string): Observable<UserModel[]> {
    return this.http.get<{ data: UserModel[]}>(`${environment.apiUrl}/users/` + _id)
    .pipe(map(response => response.data));
  }

  updateUserById(Token: string, _id: string, username: string, email: string): Observable<any> {
    const headers = new HttpHeaders().set('Authorization', `Bearer ${Token}`);
    return this.http.put<any>(`${environment.apiUrl}/users/` + _id, {username, email}, { headers });
  }

  updateUserPasswordById(Token: string, _id: string, password: string): Observable<any> {
    const headers = new HttpHeaders().set('Authorization', `Bearer ${Token}`);
    return this.http.put<any>(`${environment.apiUrl}/users/password/` + _id, {password}, { headers });
  }

  deleteUserById(Token: string, _id: string): Observable<any> {
    const headers = new HttpHeaders().set('Authorization', `Bearer ${Token}`);
    return this.http.delete<any>(`${environment.apiUrl}/users/` + _id, { headers });
  }
}