import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { TodoService } from './todo.service';
import { CreateTodoDto } from './dto/create-todo.dto';

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
  @Post()
  create(@Body() createTodoDto: CreateTodoDto) {}
}
