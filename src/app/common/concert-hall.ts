import { User } from './user';
import { Event } from './event';

export class ConcertHall {
    
    id: number;
    name: string;
    address: string;
    capacity: number;
    concertHallImage: string;
    events: Event[];
    owner: User;
}
