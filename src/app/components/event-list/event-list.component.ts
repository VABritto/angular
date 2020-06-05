import { Event } from './../../common/event';
import { EventService } from './../../services/event.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-event-list',
  templateUrl: './event-list.component.html',
  styleUrls: ['./event-list.component.css']
})
export class EventListComponent implements OnInit {

  events: Event[] = [];
  searchMode: boolean = false;

  constructor(private eventService: EventService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(
      () => {
        this.listEvents();
      }
    );
  }

  listEvents() {

    this.searchMode = this.route.snapshot.paramMap.has('keyword');
    if (this.searchMode) {
      this.handleSearchEvents();
    }
    else {
      this.handleListEvents();
    }
  }

  handleSearchEvents() {
    const theKeyword: string = this.route.snapshot.paramMap.get('keyword');
    this.eventService.searchEvents(theKeyword).subscribe(
      data => {
        this.events = data;
      }
    );
  }

  handleListEvents() {
    this.eventService.getEventList().subscribe(
      data => {
        this.events = data;
      }
    );
  }

}
