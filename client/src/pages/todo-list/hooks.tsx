import { todoApi, TodoDataType } from '@/apis/todo';
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

export const useCallGetTodoListApi = (): [
  TodoDataType[],
  Dispatch<SetStateAction<TodoDataType[]>>,
] => {
  const setAlert = useSetAlert();

  const [list, setList] = useState<TodoDataType[]>([]);

  const callApi = useCallback(async () => {
    try {
      const { data } = await todoApi.getList();
      setList(data);
    } catch (e) {
      setAlert((prev) => ({
        ...prev,
        error: '서버 요청 오류',
      }));
    }
  }, [setAlert]);

  useEffect(() => {
    callApi();
  }, [callApi]);

  return [list, setList];
};

export const useSubmitTodoFormEvent = () => {
  const setAlert = useSetAlert();

  return useCallback(
    (
        title: string,
        setTitle: Dispatch<SetStateAction<string>> | SetterOrUpdater<string>,
        setList:
          | Dispatch<SetStateAction<TodoDataType[]>>
          | SetterOrUpdater<TodoDataType[]>,
      ) =>
      async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        try {
          await todoApi.createTodo({ title });
          setTitle('');

          const { data } = await todoApi.getList();
          setList(data);
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
