import { AxiosInstance } from '@/utils';
import {
  CreateTodoBody,
  CreateTodoItemBody,
  TodoItemsResponse,
  TodoListResponse,
  TodoResponse,
} from './types';

class TodoApi extends AxiosInstance {
  private readonly URL = '/todo';

  async getList(): Promise<TodoListResponse> {
    return this.request({
      method: this.method.Get,
      url: this.URL,
    });
  }

  async getOne(todoId: string): Promise<TodoResponse> {
    return this.request({
      method: this.method.Get,
      url: `${this.URL}/${todoId}`,
    });
  }

  async getItems(todoId: string): Promise<TodoItemsResponse> {
    return this.request({
      method: this.method.Get,
      url: `${this.URL}/${todoId}/items`,
    });
  }

  async createTodo(data: CreateTodoBody): Promise<void> {
    return this.request({
      method: this.method.Post,
      url: this.URL,
      data,
    });
  }

  async createItem(todoId: string, data: CreateTodoItemBody): Promise<void> {
    return this.request({
      method: this.method.Post,
      url: `${this.URL}/${todoId}`,
      data,
    });
  }
}

export const todoApi = new TodoApi();
