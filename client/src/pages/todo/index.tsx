import { Box } from '@mui/material';
import { lazy } from 'react';

const TodoList = lazy(() => import('./todo-list'));

const TodoPage = () => {
  return (
    <Box>
      <TodoList />
    </Box>
  );
};

export default TodoPage;
