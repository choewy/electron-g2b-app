import {
  atom,
  useRecoilState,
  useRecoilValue,
  useSetRecoilState,
} from 'recoil';
import { TodoListStore } from './types';

export const todoListStore = atom<TodoListStore>({
  key: 'todoListStore',
  default: [],
});

export const useTodoListState = () => useRecoilState(todoListStore);
export const useTodoListValue = () => useRecoilValue(todoListStore);
export const useSetTodoList = () => useSetRecoilState(todoListStore);
