import { todoApi, TodoDataType, TodoItemDataType } from '@/apis/todo';
import { useSetAlert } from '@/states';
import {
  Dispatch,
  FormEvent,
  SetStateAction,
  useCallback,
  useEffect,
  useState,
} from 'react';
import { SetterOrUpdater } from 'recoil';

export const useCallGetTodoApi = (params: { todoId?: string }) => {
  const setAlert = useSetAlert();

  const [todo, setTodo] = useState<TodoDataType>({
    id: 0,
    title: '',
    createdAt: '',
    updatedAt: '',
  });

  const callApi = useCallback(
    async (todoId: string) => {
      try {
        const { data } = await todoApi.getOne(todoId);
        setTodo(data);
      } catch (e) {
        setAlert((prev) => ({
          ...prev,
          error: '서버 요청 오류',
        }));
      }
    },
    [setAlert],
  );

  useEffect(() => {
    if (params.todoId) {
      callApi(params.todoId);
    }
  }, [params, callApi]);

  return todo;
};

export const useCallGetTodoItemsApi = (params: {
  todoId?: string;
}): [TodoItemDataType[], Dispatch<SetStateAction<TodoItemDataType[]>>] => {
  const setAlert = useSetAlert();

  const [items, setItems] = useState<TodoItemDataType[]>([]);

  const callApi = useCallback(
    async (todoId: string) => {
      try {
        const { data } = await todoApi.getItems(todoId);
        setItems(data);
      } catch (e) {
        setAlert((prev) => ({
          ...prev,
          error: '서버 요청 오류',
        }));
      }
    },
    [setAlert],
  );

  useEffect(() => {
    if (params.todoId) {
      callApi(params.todoId);
    }
  }, [params, callApi]);

  return [items, setItems];
};

export const useSubmitTodoItemFormEvent = () => {
  const setAlert = useSetAlert();

  return useCallback(
    (
        todoId: string,
        name: string,
        setName: Dispatch<SetStateAction<string>> | SetterOrUpdater<string>,
        description: string,
        setDescription:
          | Dispatch<SetStateAction<string>>
          | SetterOrUpdater<string>,
        setItems:
          | Dispatch<SetStateAction<TodoItemDataType[]>>
          | SetterOrUpdater<TodoItemDataType[]>,
      ) =>
      async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        try {
          await todoApi.createItem(todoId, {
            name,
            description,
          });
          setName('');
          setDescription('');

          const { data } = await todoApi.getItems(todoId);
          setItems(data);
        } catch (e) {
          setAlert((prev) => ({
            ...prev,
            error: '서버 요청 오류',
          }));
        }
      },
    [setAlert],
  );
};
