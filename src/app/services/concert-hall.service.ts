import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ConcertHallService {

  private baseUrl = 'http://localhost:8080/api/conceretHall';

  constructor(private httpClient: HttpClient) { }

  getConcertHallList(): Observable<any> {
    
    return this.httpClient.get(`${this.baseUrl}`);
  }
  getConcertHall(theConcertHallId: number): Observable<any> {
    
    return this.httpClient.get(`${this.baseUrl}/${theConcertHallId}`);
  }
}
