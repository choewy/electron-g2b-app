export type CellValueType = string | number | boolean;
export type CellAlignmentVertical = 'bottom' | 'center' | 'top';
export type CellAlignmentHorizontal = 'right' | 'center' | 'left';

export type CellAlignment = {
  vertical: CellAlignmentVertical;
  horizontal: CellAlignmentHorizontal;
};

export type ExcelRowValueType = 'string' | 'number' | 'link';
