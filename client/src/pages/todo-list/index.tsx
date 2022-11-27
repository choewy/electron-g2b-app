import { useState } from 'react';
import { useOnChangeEvent, useOnClickLink } from '@/hooks';
import { useCallGetTodoListApi, useSubmitTodoFormEvent } from './hooks';

const TodoPage = () => {
  const [list, setList] = useCallGetTodoListApi();
  const [title, setTitle] = useState<string>('');

  const onChangeEvent = useOnChangeEvent();
  const onSubmitEvent = useSubmitTodoFormEvent();
  const onClickEvent = useOnClickLink();

  return (
    <div>
      <h1>TODO LIST</h1>
      {list.map((todo) => (
        <div key={JSON.stringify(todo)}>
          <div onClick={onClickEvent(`${todo.id}`)}>{todo.title}</div>
        </div>
      ))}

      <form onSubmit={onSubmitEvent(title, setTitle, setList)}>
        <input value={title} onChange={onChangeEvent(setTitle)} />
        <button type="submit">생성</button>
      </form>
    </div>
  );
};

export default TodoPage;
