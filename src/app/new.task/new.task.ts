import { Component, EventEmitter, Output, signal, inject, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import type { NewTaskData } from './new-task.module';
import { TasksService } from '../tasks/tasks.service';

@Component({
  selector: 'app-new-task',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './new.task.html',
  styleUrl: './new.task.css',
})
export class NewTaskComponent {
  @Input({ required: true }) userId?: string;
  @Output() close = new EventEmitter<void>();
  
  enteredTitle = '';
  enteredSummary = '';
  enteredDueDate = '';

  private tasksService = inject(TasksService);

  onCancel() {
    this.close.emit();
  }

  onSubmit() {
    this.tasksService.addTask(
      {
        title: this.enteredTitle,
        summary: this.enteredSummary,
        dueDate: this.enteredDueDate,
      },
      this.userId!
    );
    this.close.emit();
  }
}
