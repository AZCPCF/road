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
  create(createTodoDto: CreateTodoDto): Todo {
    if (!createTodoDto.title || !createTodoDto.description) {
      throw new BadRequestException('Title and description are required');
    }
    const todo: Todo = {
      title:createTodoDto.title,
      description:createTodoDto.description,
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
  deleteById(id: string): Todo {
    const todo = this.getById(id);
    this.todos = this.todos.filter((item) => item.id != id);
    return todo;
  }
}
