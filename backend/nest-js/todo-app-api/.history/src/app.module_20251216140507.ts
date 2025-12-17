import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TodosModule } from './todos/todos.module';
import { TodoController } from './todo/todo.controller';
import { TodoModule } from './todo/todo.module';

@Module({
  imports: [TodosModule, TodoModule],
  controllers: [AppController, TodoController],
  providers: [AppService],
})
export class AppModule {}
