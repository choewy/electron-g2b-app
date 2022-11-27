import { lazy } from 'react';
import { Box } from '@mui/material';
import { useCallGetTodoListApi } from './hooks';

const TodoForm = lazy(() => import('./todo-form'));
const TodoDetail = lazy(() => import('./todo-detail'));

const TodoList = () => {
  const list = useCallGetTodoListApi();

  return (
    <Box>
      <TodoForm />
      {list.map((todo) => (
        <TodoDetail key={JSON.stringify(todo)} todo={todo} />
      ))}
    </Box>
  );
};

export default TodoList;
