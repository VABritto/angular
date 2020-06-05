import { ConcertHall } from './concert-hall';
import { TicketSales } from './ticket-sales';
export class User {

    id: number;
    name: string;
    email: string;
    birthdate: Date;
    events: TicketSales[];
    concertHalls: ConcertHall[];
}
