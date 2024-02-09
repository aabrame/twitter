import { Component } from '@angular/core';
import { UserService } from '../../services/user.service';
import { Router } from '@angular/router';
import { User } from '../../models/user.model';

@Component({
  selector: 'app-user-add',
  templateUrl: './user-add.component.html',
  styleUrl: './user-add.component.css'
})
export class UserAddComponent {


  constructor(
    private userService: UserService,
    private router: Router
  ) {}

  onSubmit(user: Partial<User>) {
    this.userService.save(user)
      .subscribe(() => this.router.navigateByUrl('/users'));
  }

}
