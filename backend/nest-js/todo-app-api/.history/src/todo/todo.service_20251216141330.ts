import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { Todo } from './todo.interface';
import { CreateTodoDto } from './dto/create-todo.dto';

@Injectable()
export class TodoService {
  private todos: Todo[] = [];

  getAll(): Todo[] {
    return this.todos;
  }
  getById(id: number): Todo {
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
    const todo: Todo = {};
    this.todos.push();
  }
}
