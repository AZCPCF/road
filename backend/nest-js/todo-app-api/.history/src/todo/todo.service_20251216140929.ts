import { Injectable, NotFoundException } from '@nestjs/common';
import { Todo } from './todo.interface';

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
    return this.todos.find((item) => item.id == id);
  }
}
