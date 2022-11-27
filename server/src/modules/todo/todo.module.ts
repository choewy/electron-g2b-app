import { Module } from '@nestjs/common';
import { TodoController } from './todo.controller';
import { TodoRepository } from './todo.repository';
import { TodoService } from './todo.service';

@Module({
  providers: [TodoRepository, TodoService],
  controllers: [TodoController],
})
export class TodoModule {}
