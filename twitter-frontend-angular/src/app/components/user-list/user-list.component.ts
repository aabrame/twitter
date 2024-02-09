import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { User } from '../../models/user.model';
import { FormControl } from '@angular/forms';
import { debounceTime, distinctUntilChanged, mergeMap, startWith } from 'rxjs';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.css'
})
export class UserListComponent implements OnInit {

  users?: User[];
  search = new FormControl('');

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.search.valueChanges.pipe(
      startWith(''),
      debounceTime(333),
      distinctUntilChanged(),
      mergeMap(name => this.userService.search(name ?? ''))
    ).subscribe(users => this.users = users);
  }

  onDelete(user: User) {
    setTimeout(
      () => this.users?.splice(this.users.findIndex(u => u.id === user.id), 1),
      2000);
  }
}
