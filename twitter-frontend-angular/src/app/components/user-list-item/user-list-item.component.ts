import { Component, EventEmitter, Input, Output } from '@angular/core';
import { User } from '../../models/user.model';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-user-list-item',
  templateUrl: './user-list-item.component.html',
  styleUrl: './user-list-item.component.css'
})
export class UserListItemComponent {

  @Input() user?: User;
  @Output() delete = new EventEmitter<User>();

  constructor(private userService: UserService) {}

  deleteAction(user: User) {
    return () => this.userService.deleteById(user.id);
  }

  onDeleteSuccess() {
    this.delete.emit(this.user);
  }

}
