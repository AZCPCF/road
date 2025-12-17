import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { Todo } from './todo.interface';
import { CreateTodoDto } from './dto/create-todo.dto';
import { UpdateTodoDto } from './dto/update-todo.dto';

@Injectable()
export class TodoService {
  private todos: Todo[] = [];

  getAll(): Todo[] {
    return this.todos;
  }
  getById(id: string): Todo {
    const todo = this.todos.find((item) => item.id == id);
    if (!todo) {
      throw new NotFoundException();
    }
    return todo;
  }
  create({ title, description }: CreateTodoDto): Todo {
    if (!title || !description) {
      throw new BadRequestException('Title and description are required');
    }
    const todo: Todo = {
      title,
      description,
      done: false,
      id: crypto.randomUUID(),
    };
    this.todos.push();
    return todo;
  }
  updateById(id: string, { done }: UpdateTodoDto): Todo {
    if (typeof done !== 'boolean') {
      throw new BadRequestException('Done must be Boolean');
    }
    const todo = this.getById(id);
    todo.done = done;
    return todo;
  }
}
