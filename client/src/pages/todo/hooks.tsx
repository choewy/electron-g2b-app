import { FormEvent, SyntheticEvent, useCallback, useEffect } from 'react';
import { todoApi } from '@/apis';
import { useSetAlert, useSetTodoList, useTodoListState } from '@/states';

export const useCallGetTodoListApi = () => {
  const setAlert = useSetAlert();
  const [list, setList] = useTodoListState();

  const callApi = useCallback(async () => {
    try {
      const { data } = await todoApi.getList();
      setList(
        data.map((row) => ({
          ...row,
          expanded: false,
          items: [],
        })),
      );
    } catch (e) {
      setAlert((prev) => ({
        ...prev,
        error: '서버 요청 오류',
      }));
    }
  }, [setAlert, setList]);

  useEffect(() => {
    callApi();
  }, [callApi]);

  return list;
};

export const useCallGetTodoItemsApi = () => {
  const setAlert = useSetAlert();
  const setList = useSetTodoList();

  return useCallback(
    (todoId: number) =>
      async (_: SyntheticEvent<Element, Event>, expanded: boolean) => {
        if (!expanded) {
          return setList((prev) =>
            prev.map((todo) =>
              todo.id === todoId
                ? {
                    ...todo,
                    expanded: false,
                  }
                : todo,
            ),
          );
        }

        try {
          const { data } = await todoApi.getItems(todoId);

          setList((prev) =>
            prev.map((todo) =>
              todo.id === todoId
                ? {
                    ...todo,
                    expanded: true,
                    items: data,
                  }
                : todo,
            ),
          );
        } catch (e) {
          setAlert((prev) => ({
            ...prev,
            error: '서버 요청 오류',
          }));
        }
      },
    [setAlert, setList],
  );
};

export const useCallUpdateTodoItemDoneApi = () => {
  const setAlert = useSetAlert();
  const setList = useSetTodoList();

  return useCallback(
    (todoId: number, itemId: number, done: boolean) => async () => {
      try {
        await todoApi.updateItemDone(todoId, itemId, { done });
        const { data } = await todoApi.getItems(todoId);
        setList((prev) =>
          prev.map((todo) =>
            todo.id === todoId
              ? {
                  ...todo,
                  expanded: true,
                  items: data,
                }
              : todo,
          ),
        );
      } catch (e) {
        setAlert((prev) => ({
          ...prev,
          error: '서버 요청 오류',
        }));
      }
    },
    [setAlert, setList],
  );
};

export const useCallDeleteTodoItemApi = () => {
  const setAlert = useSetAlert();
  const setList = useSetTodoList();

  return useCallback(
    (todoId: number, itemId: number) => async () => {
      try {
        await todoApi.deleteItem(todoId, itemId);
        const { data } = await todoApi.getItems(todoId);
        setList((prev) =>
          prev.map((todo) =>
            todo.id === todoId
              ? {
                  ...todo,
                  expanded: true,
                  items: data,
                }
              : todo,
          ),
        );
      } catch (e) {
        setAlert((prev) => ({
          ...prev,
          error: '서버 요청 오류',
        }));
      }
    },
    [setAlert, setList],
  );
};

export const useCallCreateTodoItemApi = () => {
  const setAlert = useSetAlert();
  const setList = useSetTodoList();

  return useCallback(
    (todoId: number, name: string, description: string) =>
      async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        try {
          await todoApi.createItem(todoId, { name, description });
          const { data } = await todoApi.getItems(todoId);

          setList((prev) =>
            prev.map((todo) =>
              todo.id === todoId
                ? {
                    ...todo,
                    items: data,
                  }
                : todo,
            ),
          );
        } catch (e) {
          setAlert((prev) => ({
            ...prev,
            error: '서버 요청 오류',
          }));
        }
      },
    [setAlert, setList],
  );
};
