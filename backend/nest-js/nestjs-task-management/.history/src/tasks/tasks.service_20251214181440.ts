import { Injectable } from '@nestjs/common';
import { CreateTaskDto } from './dto/create-task.dto';
import { Task, TaskStatus } from './tasks.model';
import { GetTaskFilterDto } from './dto/get-task-filter.dto';

@Injectable()
export class TasksService {
  private tasks: Task[] = [
    {
      id: 'testId',
      description: 'testing description',
      title: 'testing title',
      status: TaskStatus.OPEN,
    },
  ];
  getAllTasks(): Task[] {
    return this.tasks;
  }
  getTasksWithFilter(filterDto: GetTaskFilterDto): Task[] {
    const { search, status } = filterDto;
    const tasks = this.getAllTasks();
    if (search) {
    }
    if (status) {
    }
    return tasks;
  }
  createTask({ title, description }: CreateTaskDto): Task {
    const task: Task = {
      title,
      description,
      id: crypto.randomUUID(),
      status: TaskStatus.OPEN,
    };
    this.tasks.push(task);
    return task;
  }
  getTaskById(id: string): Task {
    return this.tasks.find((item) => item.id === id)!;
  }
  deleteTaskById(id: string): void {
    this.tasks = this.tasks.filter((item) => item.id !== id);
  }
  updateTaskById(id: string, status: TaskStatus): Task {
    const task = this.getTaskById(id);
    task.status = status;
    return task;
  }
}
