import { Inject, Injectable, NotFoundException, Scope } from '@nestjs/common';
import { REQUEST } from '@nestjs/core';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/auth/user.entity';
import { Repository } from 'typeorm';
import { CreateTaskDto } from './dto/create-task.dto';
import { GetTaskFilterDto } from './dto/get-task-filter.dto';
import { Task, TaskStatus } from './tasks.entity';

@Injectable({ scope: Scope.REQUEST })
export class TasksService {
  constructor(
    @InjectRepository(Task)
    private readonly taskRepository: Repository<Task>,
    @Inject(REQUEST) private readonly request: Request,
  ) {}

  private get user(): User {
    return this.request.user as User;
  }
  async getTasks({ search, status }: GetTaskFilterDto): Promise<Task[]> {
    const query = this.taskRepository.createQueryBuilder('task');
    query.where({ user: this.user });
    if (status) {
      query.andWhere('task.status = :status', { status });
    }
    if (search) {
      query.andWhere(
        '(LOWER(task.title) LIKE LOWER(:search) OR LOWER(task.description) LIKE LOWER(:search))',
        { search: `%${search.toLowerCase()}%` },
      );
    }
    return await query.getMany();
  }

  async createTask(createTaskDto: CreateTaskDto): Promise<Task> {
    const task = this.taskRepository.create({
      ...createTaskDto,
      user: this.user,
      status: TaskStatus.OPEN,
    });
    return await this.taskRepository.save(task);
  }

  async getTaskById(id: string): Promise<Task> {
    const task = await this.taskRepository.findOneBy({ user: this.user, id });
    if (!task) {
      throw new NotFoundException();
    }
    return task;
  }

  async deleteTaskById(id: string): Promise<void> {
    const result = await this.taskRepository.delete({ id, user: this.user });
    if (!result.affected) {
      throw new NotFoundException();
    }
  }

  async updateTaskById(id: string, status: TaskStatus): Promise<Task> {
    const task = await this.getTaskById(id);
    task.status = status;
    return await this.taskRepository.save(task);
  }
}
