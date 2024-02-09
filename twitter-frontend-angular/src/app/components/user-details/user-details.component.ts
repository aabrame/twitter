import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../../services/user.service';
import { User } from '../../models/user.model';
import { Subscription, map, mergeMap } from 'rxjs';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrl: './user-details.component.css'
})
export class UserDetailsComponent implements OnInit, OnDestroy {

  user?: User;
  status: 'LOADING' | 'SUCCESS' | 'ERROR' = 'LOADING';
  private subscription?: Subscription

  constructor(
    private activatedRoute: ActivatedRoute,
    private userService: UserService
  ) {}

  ngOnInit(): void {
    this.subscription = this.activatedRoute.params.pipe(
      map(params => Number(params['id'])),
      mergeMap(id => this.userService.findById(id))
    ).subscribe({
      next: user => { this.user = user; this.status = 'SUCCESS'; },
      error: err => { this.status = 'ERROR'; console.log(err); }
    });
  }

  ngOnDestroy(): void {
      this.subscription?.unsubscribe();
  }

}
