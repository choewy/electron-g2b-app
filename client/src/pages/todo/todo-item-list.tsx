import { FC, lazy } from 'react';
import { Table, TableBody, TableContainer } from '@mui/material';
import { TodoStore } from '@/states';

const TodoItemTableHead = lazy(() => import('./todo-item-table-head'));
const TodoItemTableBodyRow = lazy(() => import('./todo-item-table-body-row'));

type Props = {
  todo: TodoStore;
};

const TodoItemList: FC<Props> = ({ todo }) => {
  return (
    <TableContainer>
      <Table>
        <TodoItemTableHead />
        <TableBody>
          {todo.items.map((item) => (
            <TodoItemTableBodyRow
              key={JSON.stringify(item)}
              todoId={todo.id}
              item={item}
            />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default TodoItemList;
