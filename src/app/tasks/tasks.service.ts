import { NewTaskData } from '../new.task/new-task.module';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class TasksService {
  private tasks = [
    {
      id: 't1',
      userId: 'u1',
      title: 'Master In Angular',
      summary:
        'Learn all basic basic and advanced concepts of Angular and how to apply them in a real-world application',
      dueDate: '2025-01-01',
    },
    {
      id: 't2',
      userId: 'u2',
      title: 'Master In React JS',
      summary:
        'Learn all basic basic and advanced concepts of React and how to apply them in a real-world application',
      dueDate: '2025-03-03',
    },
    {
      id: 't3',
      userId: 'u3',
      title: ' Learn React Native',
      summary:
        'Learn all basic basic and advanced concepts of Vue and how to apply them in a real-world application',
      dueDate: '2025-02-02',
    },
    {
      id: 't4',
      userId: 'u4',
      title: 'Master In Node.js',
      summary:
        'Learn all basic basic and advanced concepts of Node.js and how to apply them in a real-world application',
      dueDate: '2025-04-04',
    },
    {
      id: 't5',
      userId: 'u5',
      title: 'Learn Python',
      summary:
        'Learn all basic basic and advanced concepts of Python and how to apply them in a real-world application',
      dueDate: '2025-05-05',
    },
    {
      id: 't6',
      userId: 'u6',
      title: ' Learn Java',
      summary:
        'Learn all basic basic and advanced concepts of Java and how to apply them in a real-world application',
      dueDate: '2025-06-06',
    },
  ];

  constructor() {
    const tasks = localStorage.getItem('tasks');

    if (tasks) {
      this.tasks = JSON.parse(tasks);
    }
  }

  getUserTasks(userId: string) {
    return this.tasks.filter((task) => task?.userId === userId);
  }

  addTask(taskData: NewTaskData, userId: string) {
    this.tasks.unshift({
      id: new Date().getTime().toString(),
      userId: userId,
      title: taskData.title,
      summary: taskData.summary,
      dueDate: taskData.dueDate,
    });
    this.saveTasks();
  }
  removeTask(id: string) {
    this.tasks = this.tasks.filter((task) => task.id !== id);
  }
  completeTask(id: string) {
    this.tasks = this.tasks.map((task) => (task.id === id ? { ...task, completed: true } : task));
    this.saveTasks();
  }

  private saveTasks() {
    localStorage.setItem('tasks', JSON.stringify(this.tasks));
  }
}
