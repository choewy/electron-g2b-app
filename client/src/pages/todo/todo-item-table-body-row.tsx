import { FC } from 'react';
import { IconButton, TableCell, TableRow } from '@mui/material';
import {
  Delete as DeleteIcon,
  CheckCircleOutline as DoneIcon,
  RadioButtonUnchecked as DontIcon,
} from '@mui/icons-material';
import {
  useCallDeleteTodoItemApi,
  useCallUpdateTodoItemDoneApi,
} from './hooks';
import { TodoItemDataType } from '@/apis';

type Props = {
  todoId: number;
  item: TodoItemDataType;
};

const TodoItemTableBodyRow: FC<Props> = ({ todoId, item }) => {
  const onUpdateDoneEvent = useCallUpdateTodoItemDoneApi();
  const onDeleteEvent = useCallDeleteTodoItemApi();

  return (
    <TableRow>
      <TableCell>
        <IconButton onClick={onUpdateDoneEvent(todoId, item.id, !item.done)}>
          {item.done ? <DoneIcon /> : <DontIcon />}
        </IconButton>
      </TableCell>
      <TableCell>{item.name}</TableCell>
      <TableCell>{item.description}</TableCell>
      <TableCell>
        <IconButton onClick={onDeleteEvent(todoId, item.id)}>
          <DeleteIcon />
        </IconButton>
      </TableCell>
    </TableRow>
  );
};

export default TodoItemTableBodyRow;
