import { Component, EventEmitter, Input, Output } from '@angular/core';
import type { Task } from './task.model';
import { Card } from '../../shared/card/card';
import { DatePipe, CommonModule } from '@angular/common';

@Component({
  selector: 'app-task',
  imports: [Card, DatePipe, CommonModule],
  templateUrl: './task.html',
  styleUrl: './task.css',
})
export class TaskComponent {
  @Input({ required: true }) task!: Task;
  @Output() complete = new EventEmitter<string>();

  onComplete() {
    this.complete.emit(this.task.id);
  }
}
