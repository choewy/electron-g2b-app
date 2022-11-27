import { TableCell, TableHead, TableRow } from '@mui/material';

const TodoItemTableHead = () => {
  return (
    <TableHead>
      <TableRow>
        <TableCell />
        <TableCell>항목</TableCell>
        <TableCell>설명</TableCell>
        <TableCell />
      </TableRow>
    </TableHead>
  );
};

export default TodoItemTableHead;
