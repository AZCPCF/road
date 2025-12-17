import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { TodoService } from './todo.service';
import { CreateTodoDto } from './dto/create-todo.dto';
import { Todo } from './todo.interface';

@Controller('todo')
export class TodoController {
  constructor(private readonly todoService: TodoService) {}
  @Get()
  getAll(): Todo[] {
    return this.todoService.getAll();
  }
  @Get(':id')
  getById(@Param('id') id: number): Todo {
    return this.todoService.getById(id);
  }
  @Post()
  create(@Body() createTodoDto: CreateTodoDto): Todo {
    return;
  }
}
