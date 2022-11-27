import { UserParam } from '@/common';
import { User } from '@/core';
import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import {
  CreateTodoBody,
  TodoParams,
  TodoItemResponse,
  TodoResponse,
  CreateTodoItemBody,
} from './dtos';
import { TodoService } from './todo.service';

@Controller('todo')
export class TodoController {
  constructor(private readonly service: TodoService) {}

  @Get()
  async getList(@UserParam() user: User): Promise<TodoResponse[]> {
    return this.service.getList(user);
  }

  @Get(':todoId')
  async getOne(@UserParam() user: User, @Param() params: TodoParams): Promise<TodoResponse> {
    return this.service.getOne(user, params.todoId);
  }

  @Get(':todoId/items')
  async getItems(
    @UserParam() user: User,
    @Param() params: TodoParams,
  ): Promise<TodoItemResponse[]> {
    return this.service.getItems(user, params.todoId);
  }

  @Post()
  async createTodo(@UserParam() user: User, @Body() body: CreateTodoBody): Promise<void> {
    return this.service.createTodo(user, body);
  }

  @Post(':todoId')
  async createItem(
    @UserParam() user: User,
    @Param() params: TodoParams,
    @Body() body: CreateTodoItemBody,
  ) {
    return this.service.createItem(user, params.todoId, body);
  }
}
