import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http: HttpClient) {}

  getUsers(Token: string): Observable<any> {
    const headers = new HttpHeaders().set('Authorization', `Bearer ${Token}`);
    return this.http.get<any>(`${environment.apiUrl}/users`, { headers });
  }

  getUserById(_id: string): Observable<any> {
    return this.http.get<any>(`${environment.apiUrl}/users/` + _id);
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