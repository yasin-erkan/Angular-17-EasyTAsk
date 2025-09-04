import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TaskComponent } from './task/task';
import { NewTaskComponent } from '../new.task/new.task';
import { TasksService } from './tasks.service';

@Component({
  selector: 'app-tasks',
  imports: [CommonModule, TaskComponent, NewTaskComponent],
  templateUrl: './tasks.html',
  styleUrl: './tasks.css',
})
export class TasksComponent {
  @Input({ required: true }) userId?: string;
  @Input({ required: true }) name?: string;
  isAddingTask: boolean = false;

  constructor(private tasksService: TasksService) {}

  get selectedUserTasks() {
    return this.tasksService.getUserTasks(this.userId!);
  }

  showNewTask = false;

  onComplete(id: string) {
    this.tasksService.removeTask(id);
  }

  onStartAddTask() {
    this.isAddingTask = true;
  }

  onCloseAddTask() {
    this.isAddingTask = false;
  }
}
