import { AxiosInstance } from '@/utils';
import {
  CreateTodoBody,
  CreateTodoItemBody,
  TodoItemsResponse,
  TodoListResponse,
  TodoResponse,
  UpdateTodoItemDoneBody,
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

  async getItems(todoId: number): Promise<TodoItemsResponse> {
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

  async createItem(todoId: number, data: CreateTodoItemBody): Promise<void> {
    return this.request({
      method: this.method.Post,
      url: `${this.URL}/${todoId}`,
      data,
    });
  }

  async updateItemDone(
    todoId: number,
    itemId: number,
    data: UpdateTodoItemDoneBody,
  ): Promise<void> {
    return this.request({
      method: this.method.Patch,
      url: `${this.URL}/${todoId}/items/${itemId}/done`,
      data,
    });
  }

  async deleteItem(todoId: number, itemId: number) {
    return this.request({
      method: this.method.Delete,
      url: `${this.URL}/${todoId}/items/${itemId}`,
    });
  }
}

export const todoApi = new TodoApi();
