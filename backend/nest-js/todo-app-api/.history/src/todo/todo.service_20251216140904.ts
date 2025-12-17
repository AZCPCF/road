import { Injectable } from '@nestjs/common';
import { Todo } from './todo.interface';

@Injectable()
export class TodoService {
  private todos: Todo[] = [];

  getAll(): Todo[] {
    return this.todos;
  }
  getById(id: number): Todo {
    return this.todos.find((item) => item.id == id);
  }
}
