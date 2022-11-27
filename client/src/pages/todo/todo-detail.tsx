import { FC, lazy } from 'react';

import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Typography,
} from '@mui/material';
import { ExpandMore as ExpandMoreIcon } from '@mui/icons-material';
import { TodoStore } from '@/states';
import { useCallGetTodoItemsApi } from './hooks';

const TodoItemForm = lazy(() => import('./todo-item-form'));
const TodoItemList = lazy(() => import('./todo-item-list'));

type Props = {
  todo: TodoStore;
};

const TodoDetail: FC<Props> = ({ todo }) => {
  const onClickEvent = useCallGetTodoItemsApi();

  return (
    <Accordion onChange={onClickEvent(todo.id)} expanded={todo.expanded}>
      <AccordionSummary expandIcon={<ExpandMoreIcon />}>
        <Typography>{todo.title}</Typography>
        <Typography>{todo.createdAt}</Typography>
      </AccordionSummary>
      <AccordionDetails
        sx={{
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <TodoItemForm todo={todo} />
        <TodoItemList todo={todo} />
      </AccordionDetails>
    </Accordion>
  );
};

export default TodoDetail;
