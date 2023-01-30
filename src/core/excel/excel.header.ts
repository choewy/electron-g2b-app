import { CellObject } from 'xlsx';
import { CellAlignment, CellAlignmentHorizontal } from './types';

export class ExcelHeader {
  constructor(
    private readonly description: string,
    private readonly horizontal?: CellAlignmentHorizontal,
  ) {}

  private alignment(
    horizontal: CellAlignmentHorizontal = 'center',
  ): CellAlignment {
    return {
      vertical: 'center',
      horizontal,
    };
  }

  value(): CellObject {
    return {
      t: 's',
      v: this.description,
      s: { alignment: this.alignment(this.horizontal) },
    };
  }
}
