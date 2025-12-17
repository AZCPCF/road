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
    if (!createTodoDto?.title || !createTodoDto?.description) {
      throw new BadRequestException('Title and description are required');
    }
    const todo: Todo = {
      title: createTodoDto.title,
      description: createTodoDto.description,
      done: false,
      id: crypto.randomUUID(),
    };
    this.todos.push(todo);
    return todo;
  }
  updateById(id: string, { done }: UpdateTodoDto): Todo {
    const todo = this.getById(id);
    const doneLower = done.toLowerCase();
    const trueIncludes = ['true', '1'];
    const falseIncludes = ['false', '0'];
    const doneIncludes = ['true', '1', '0', 'false'];
    if (!doneIncludes.includes(done.toLowerCase())) {
      throw new BadRequestException('Done must be Boolean');
    }
    todo.done = done;
    return todo;
  }
  deleteById(id: string): Todo {
    const todo = this.getById(id);
    this.todos = this.todos.filter((item) => item.id != id);
    return todo;
  }
}
