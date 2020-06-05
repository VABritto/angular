import { TicketSalesService } from './services/ticket-sales.service';
import { ConcertHallService } from './services/concert-hall.service';
import { UserService } from './services/user.service';
import { EventService } from './services/event.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { EventListComponent } from './components/event-list/event-list.component';
import { HttpClientModule } from '@angular/common/http';
import { Routes, RouterModule } from '@angular/router';
import { SearchComponent } from './components/search/search.component';
import { EventDetailsComponent } from './components/event-details/event-details.component';
import { MyEventsListComponent } from './components/my-events-list/my-events-list.component';

const routes: Routes = [
  {path: 'my-events', component: MyEventsListComponent},
  {path: 'events/:id', component: EventDetailsComponent},
  {path: 'search/:keyword', component: EventListComponent},
  {path: 'events/:id', component: EventListComponent},
  {path: 'events', component: EventListComponent},
  {path: '', redirectTo: '/events', pathMatch: 'full'},
  {path: '**', redirectTo: '/events', pathMatch: 'full'}
];
@NgModule({
  declarations: [
    AppComponent,
    EventListComponent,
    SearchComponent,
    EventDetailsComponent,
    MyEventsListComponent
  ],
  imports: [
    RouterModule.forRoot(routes),
    BrowserModule,
    HttpClientModule
  ],
  providers: [EventService, UserService, ConcertHallService, TicketSalesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
