import { Component } from '@angular/core';
import { Header } from './header/header';
import { UserComponent } from './user/user';
import { DUMMY_USERS } from './dummy-users';
import { TasksComponent } from './tasks/tasks';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [Header, UserComponent, TasksComponent],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  users = DUMMY_USERS;
  selectedUserId = '';

  get selectedUser() {
    if (!this.selectedUserId) return undefined;
    return this.users.find((user) => user.id === this.selectedUserId);
  }
  onSelectUser(id: string) {
    this.selectedUserId = id;
  }
}
