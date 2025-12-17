import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { TodoService } from './todo.service';
import { CreateTodoDto } from './dto/create-todo.dto';
import { Todo } from './todo.interface';
import { UpdateTodoDto } from './dto/update-todo.dto';

@Controller('todo')
export class TodoController {
  constructor(private readonly todoService: TodoService) {}
  @Get()
  getAll(): Todo[] {
    return this.todoService.getAll();
  }
  @Get(':id')
  getById(@Param('id') id: string): Todo {
    return this.todoService.getById(id);
  }
  @Post()
  create(@Body() createTodoDto: CreateTodoDto): Todo {
    return this.todoService.create(createTodoDto);
  }
  @Patch(':id')
  updateById(
    @Param('id') id: string,
    @Body() updateTodoDto: UpdateTodoDto,
  ): Todo {
    return this.todoService.updateById(id, updateTodoDto);
  }
  @Delete(':id')
  deleteById(@Param('id') id: string): Todo {
    return this.todoService.deleteById(id);
  }
}
