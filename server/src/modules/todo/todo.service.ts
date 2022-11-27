import { Todo, TodoItem, User } from '@/core';
import { Injectable, NotFoundException } from '@nestjs/common';
import { DateTime } from 'luxon';
import {
  CreateTodoBody,
  CreateTodoItemBody,
  TodoItemResponse,
  TodoResponse,
  UpdateTodoItemDoneBody,
} from './dtos';
import { TodoRepository } from './todo.repository';

@Injectable()
export class TodoService {
  constructor(private readonly repository: TodoRepository) {}

  async getList(user: User): Promise<TodoResponse[]> {
    const rows = await this.repository.findByUserId(user.id);

    return rows.map((row) => Object.assign<TodoResponse, Todo>(new TodoResponse(), row));
  }

  async getOne(user: User, todoId: number): Promise<TodoResponse> {
    const todo = await this.repository.findByUserAndId(user.id, todoId);

    if (!todo) {
      throw new NotFoundException();
    }

    return Object.assign<TodoResponse, Todo>(new TodoResponse(), todo);
  }

  async getItems(user: User, todoId: number): Promise<TodoItemResponse[]> {
    const todo = await this.repository.findByUserAndId(user.id, todoId);

    if (!todo) {
      throw new NotFoundException();
    }

    const items = await this.repository.findItemsByTodoId(todoId);

    return items.map((row) =>
      Object.assign<TodoItemResponse, TodoItem>(new TodoItemResponse(), row),
    );
  }

  async createTodo(user: User, body: CreateTodoBody): Promise<void> {
    await this.repository.insert(
      Object.assign<Todo, Partial<Todo>>(new Todo(), {
        ...body,
        user,
      }),
    );
  }

  async createItem(user: User, todoId: number, body: CreateTodoItemBody): Promise<void> {
    const todo = await this.repository.findByUserAndId(user.id, todoId);

    if (!todo) {
      throw new NotFoundException();
    }

    await this.repository.insertItem(
      Object.assign<TodoItem, Partial<TodoItem>>(new TodoItem(), {
        ...body,
        todo,
      }),
    );
  }

  async updateDone(
    user: User,
    todoId: number,
    itemId: number,
    body: UpdateTodoItemDoneBody,
  ): Promise<void> {
    const todo = await this.repository.findByUserAndId(user.id, todoId);

    if (!todo) {
      throw new NotFoundException();
    }

    const item = await this.repository.findItemByIdAndTodoId(todoId, itemId);

    if (!item) {
      throw new NotFoundException();
    }

    item.done = body.done;
    item.updatedAt = DateTime.local();

    await this.repository.updateItem(item);
  }

  async deleteItem(user: User, todoId: number, itemId: number): Promise<void> {
    const todo = await this.repository.findByUserAndId(user.id, todoId);

    if (!todo) {
      throw new NotFoundException();
    }

    const item = await this.repository.findItemByIdAndTodoId(todoId, itemId);

    if (!item) {
      throw new NotFoundException();
    }

    item.deletedAt = DateTime.local();

    await this.repository.updateItem(item);
  }
}
