import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RolesService {

  constructor(private http: HttpClient) {}

  getAllRole(Token: string): Observable<any> {
    const headers = new HttpHeaders().set('Authorization', `Bearer ${Token}`);
    return this.http.get<any>(`${environment.apiUrl}/role`, { headers });
  }

  getRoleById(Token: string, _id: string): Observable<any> {
    const headers = new HttpHeaders().set('Authorization', `Bearer ${Token}`);
    return this.http.get<any>(`${environment.apiUrl}/role/` + _id, { headers });
  }

  getRoleByName(Token: string, name: string): Observable<any> {
    const headers = new HttpHeaders().set('Authorization', `Bearer ${Token}`);
    return this.http.get<any>(`${environment.apiUrl}/role/name` + name, { headers });
  }

  addRole(Token: string, name: string, description: string): Observable<any> {
    const headers = new HttpHeaders().set('Authorization', `Bearer ${Token}`);
    return this.http.post<any>(`${environment.apiUrl}/role`, {name, description}, { headers });
  }

  updateRoleById(Token: string, _id: string, name: string, description: string): Observable<any> {
    const headers = new HttpHeaders().set('Authorization', `Bearer ${Token}`);
    return this.http.put<any>(`${environment.apiUrl}/role/` + _id, {name, description}, { headers });
  }

  deleteRoleById(Token: string, _id: string): Observable<any> {
    const headers = new HttpHeaders().set('Authorization', `Bearer ${Token}`);
    return this.http.delete<any>(`${environment.apiUrl}/role/` + _id, { headers });
  }
}