import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../../services/user.service';
import { Subscription, map, mergeMap } from 'rxjs';
import { User } from '../../models/user.model';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrl: './user-edit.component.css'
})
export class UserEditComponent implements OnInit, OnDestroy {

  user?: User;
  private subscription?: Subscription

  constructor(
    private activatedRoute: ActivatedRoute,
    private userService: UserService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.subscription = this.activatedRoute.params.pipe(
      map(params => Number(params['id'])),
      mergeMap(id => this.userService.findById(id)),
    ).subscribe(user => this.user = user);
  }

  ngOnDestroy(): void {
      this.subscription?.unsubscribe();
  }

  onSubmit(user: Partial<User>) {
    this.userService.update(user)
      .subscribe(() => this.router.navigateByUrl('/users'));
  }

}
