import { Component, Input, Output, EventEmitter } from '@angular/core';
import { type User } from './user.model';
import { Card } from '../shared/card/card';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [Card],
  templateUrl: './user.html',
  styleUrl: './user.css',
})
export class UserComponent {
  @Input({ required: true }) user!: User;
  //avatar = input.required<string>();
  //name = input.required<string>(); // ! input function is a way to receive a value from a parent component to a child component
  @Input({ required: true }) selected!: boolean;

  @Output() select = new EventEmitter<string>();
  //select = output<string>(); // ! output function is a way to emit a value from a component to a parent component

  get imagePath() {
    return 'assets/users/' + this.user.avatar;
  }

  onSelectUser() {
    this.select.emit(this.user.id);
  }
}
