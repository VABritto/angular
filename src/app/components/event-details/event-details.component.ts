import { UserService } from './../../services/user.service';
import { Component, OnInit, SystemJsNgModuleLoader } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Event } from 'src/app/common/event';
import { EventService } from './../../services/event.service';
import { TicketSalesService } from './../../services/ticket-sales.service';
import { User } from 'src/app/common/user';

@Component({
  selector: 'app-event-details',
  templateUrl: './event-details.component.html',
  styleUrls: ['./event-details.component.css']
})
export class EventDetailsComponent implements OnInit {

  event: Event = new Event();
  user: User = new User();
  baseUrl: string = "/event";

  constructor(private eventService: EventService,
    private ticketSalesService: TicketSalesService,
    private userService: UserService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(
      () => {
        this.handleEventDetails();
      }
    );
  }
  handleEventDetails() {
    const theEventId: number = +this.route.snapshot.paramMap.get('id');

    this.eventService.getEvent<Event>(theEventId, (result) => {
      result.subscribe(
        data => {
          this.event = data;
        }
      );
    })

  }

  doBuy(userId: number, value: number) {
    
    this.userService.getUser<User>(userId).subscribe(
      data => {
        this.user = data;
        this.ticketSalesService.buyTicket(this.user, this.event.id, value).subscribe(
          response => {
            console.log(response);
            this.handleEventDetails();
          },
          err => console.log(err)
        );
      }
    );
    
  }

}
