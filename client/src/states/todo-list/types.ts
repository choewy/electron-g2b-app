import { TodoDataType, TodoItemDataType } from '@/apis/todo';

export type TodoStore = TodoDataType & {
  items: TodoItemDataType[];
  expanded: boolean;
};

export type TodoListStore = Array<TodoStore>;
