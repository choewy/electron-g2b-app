import { FunctionComponent } from 'react';

import {
  Table,
  TableBody,
  TableCell,
  TableCellProps,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from '@mui/material';

export type CommonTableProps = {
  id: string;
  columns: TableCellProps[];
  rows: TableCellProps[][];
  emptyText: string;
  height?: number;
  minHeight?: number;
  maxHeight?: number;
};

const CommonTableHead: FunctionComponent<Pick<CommonTableProps, 'id' | 'columns'>> = ({ id, columns }) => {
  return (
    <TableHead>
      <TableRow>
        {columns.map((column, i) => (
          <TableCell key={[id, 'head', i].join('-')} {...column} />
        ))}
      </TableRow>
    </TableHead>
  );
};

const CommonTableBody: FunctionComponent<CommonTableProps> = ({ id, columns, rows, emptyText, height }) => {
  if (rows.length === 0) {
    return (
      <TableBody>
        <TableRow>
          <TableCell
            align="center"
            colSpan={columns.length}
            sx={{
              height: height ? height - 55 : '100%',
              border: 'none',
            }}
          >
            <Typography variant="body2" color="GrayText">
              {emptyText}
            </Typography>
          </TableCell>
        </TableRow>
      </TableBody>
    );
  }

  return (
    <TableBody>
      {rows.map((row, i) => (
        <TableRow key={[id, 'row', i].join('-')}>
          {row.map((cell, j) => (
            <TableCell key={[id, 'cell', i, j].join('-')} {...cell} />
          ))}
        </TableRow>
      ))}
    </TableBody>
  );
};

export const CommonTable: FunctionComponent<CommonTableProps> = ({
  id,
  columns,
  rows,
  emptyText,
  height,
  minHeight,
  maxHeight,
}) => {
  return (
    <TableContainer sx={{ minHeight, maxHeight, height }}>
      <Table stickyHeader>
        <CommonTableHead id={id} columns={columns} />
        <CommonTableBody id={id} columns={columns} rows={rows} emptyText={emptyText} height={height} />
      </Table>
    </TableContainer>
  );
};
