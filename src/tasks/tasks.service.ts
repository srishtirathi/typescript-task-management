import { Injectable } from '@nestjs/common';
import { Task, taskStatus } from './task.model';
import { v1 as uuid } from 'uuid';

@Injectable()
export class TasksService {
  private tasks: Task[] = [];

  getAllTasks(): Task[] {
    return this.tasks;
  }

  createTask(title: string, description: string): Task {
    const task: Task = {
      title,
      description,
      id: uuid(),
      status: taskStatus.OPEN,
    };
    this.tasks.push(task);
    return task;
  }
}
