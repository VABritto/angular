import { UserService } from './../../services/user.service';
import { Router, ActivatedRoute } from '@angular/router';
import { User } from './../../common/user';
import { Event } from './../../common/event';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-events-list',
  templateUrl: './my-events-list.component.html',
  styleUrls: ['./my-events-list.component.css']
})
export class MyEventsListComponent implements OnInit {
  events: Event[] = [];
  user: User = new User();

  constructor(private userService: UserService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(
      () => {
        this.getUser();
      }
    );
  }
  getUser() {
    const theUserId: number = 1;
    this.userService.getUser<User>(theUserId).subscribe(
      data => this.user = data
    );
  }

}
