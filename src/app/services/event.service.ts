import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EventService {
  
  private baseUrl = 'http://localhost:8080/api/event';
  
  constructor(private httpClient: HttpClient) { }
  
  getEventList(): Observable<any> {
    
    return this.httpClient.get(`${this.baseUrl}`);
  }
  //getEvent<Event>(theEventId: number): Observable<Event> {
    
  //  return this.httpClient.get<Event>(`${this.baseUrl}/${theEventId}`);
  //}

  getEvent<Event>(theEventId: number, callback) {
    
    return callback(this.httpClient.get<Event>(`${this.baseUrl}/${theEventId}`));
  }
  
  searchEvents(theKeyword: string): Observable<any> {
    return this.httpClient.get(`${this.baseUrl}/search/findByNameContaining?name=${theKeyword}`);
  }

}