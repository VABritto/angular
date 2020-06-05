import { TicketSales } from './ticket-sales';
import { ConcertHall } from './concert-hall';

export class Event {

    id: number;
    name: string;
    startDate: Date;
    endDate: Date;
    description: string;
    eventImage: string;
    concertHall: ConcertHall;
    tickets: TicketSales[];
    ticketPrice: number;
    totalTickets: number;
}
