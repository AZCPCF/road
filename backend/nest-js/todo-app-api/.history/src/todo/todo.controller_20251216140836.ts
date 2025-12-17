import { Controller, Get, Param } from '@nestjs/common';
import { TodoService } from './todo.service';

@Controller('todo')
export class TodoController {
  constructor(private readonly todoService: TodoService) {}
  @Get()
  getAll() {
    return this.todoService.getAll();
  }
  @Get(':id')
  getById(@Param('id') id: number) {
    return this.todoService.getById(id);
  }
}
