import { TicketSales } from './../common/ticket-sales';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from './../common/user';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class TicketSalesService {

  private baseUrl = 'http://localhost:8080/api/ticketSales';
  ticketId: number = 0;
  hasTicket: boolean = false;

  constructor(private httpClient: HttpClient,
    private userService: UserService) { }

  getTicketSalesList(): Observable<any> {

    return this.httpClient.get(`${this.baseUrl}`);
  }
  getTicketSales(theTicketSalesId: number): Observable<any> {

    return this.httpClient.get(`${this.baseUrl}/${theTicketSalesId}`);
  }

  buyTicket(user: User, eventId: number, value: number): Observable<TicketSales> {

    if (user.events.length == 0) {
      this.hasTicket = false;
    }
    else {
      for (let ticket of user.events) {
        if (ticket.event.id == eventId) {
          this.hasTicket = true;
          this.ticketId = ticket.id;
          break;
        }
        else {
          this.hasTicket = false;
        }
      }
    }

    if (!this.hasTicket) {
      return this.httpClient.post<TicketSales>(`${this.baseUrl}/${user.id}/${eventId}`, { quantity: value });

    }
    else {
      return this.httpClient.put<TicketSales>(`${this.baseUrl}/${this.ticketId}/`, { quantity: value });
    }
  }
}
