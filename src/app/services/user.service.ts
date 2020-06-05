import { User } from './../common/user';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private baseUrl = 'http://localhost:8080/api/user';

  constructor(private httpClient: HttpClient) { }

  getUserList(): Observable<any> {
    
    return this.httpClient.get(`${this.baseUrl}`);
  }
  getUser<User>(theUserId: number): Observable<User> {
    
    return this.httpClient.get<User>(`${this.baseUrl}/${theUserId}`);
  }
}
