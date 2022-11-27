import { AxiosResponse } from 'axios';

export type TodoDataType = {
  id: number;
  title: string;
  createdAt: string;
  updatedAt: string;
};

export type TodoItemDataType = {
  id: number;
  name: string;
  description: string;
  done: boolean;
  createdAt: string;
  updatedAt: string;
};

export type TodoListResponse = AxiosResponse<TodoDataType[]>;
export type TodoResponse = AxiosResponse<TodoDataType>;
export type TodoItemsResponse = AxiosResponse<TodoItemDataType[]>;

export type CreateTodoBody = {
  title: string;
};

export type CreateTodoItemBody = {
  name: string;
  description: string;
};
