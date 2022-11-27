import { useOnChangeEvent } from '@/hooks';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import {
  useCallGetTodoApi,
  useCallGetTodoItemsApi,
  useSubmitTodoItemFormEvent,
} from './hooks';

const TodoDetailPage = () => {
  const params = useParams<{ todoId: string }>();

  const todo = useCallGetTodoApi(params);
  const [items, setItems] = useCallGetTodoItemsApi(params);

  const [name, setName] = useState<string>('');
  const [description, setDescription] = useState<string>('');

  const onChangeEvent = useOnChangeEvent();
  const onSubmitEvent = useSubmitTodoItemFormEvent();

  return (
    <div>
      <h1>TODO DETAILS</h1>
      <div>{todo.title}</div>
      <div>
        <h2>ITEMS</h2>
        <div>
          {items.map((item) => (
            <div key={JSON.stringify(item)}>
              {item.name}
              <br />
              {item.description || ''}
              <br />
              {item.done ? 'V' : 'X'}
            </div>
          ))}
        </div>
      </div>

      <form
        onSubmit={onSubmitEvent(
          params.todoId as string,
          name,
          setName,
          description,
          setDescription,
          setItems,
        )}
      >
        <input value={name} onChange={onChangeEvent(setName)} />
        <input value={description} onChange={onChangeEvent(setDescription)} />
        <button type="submit">추가</button>
      </form>
    </div>
  );
};

export default TodoDetailPage;
