import { CellObject } from 'xlsx';
import {
  CellAlignment,
  CellAlignmentHorizontal,
  ExcelRowValueType,
} from './types';

export class ExcelRow<T> {
  constructor(
    public readonly type: ExcelRowValueType,
    private readonly key: keyof T,
    private readonly horizontal?: CellAlignmentHorizontal,
    private readonly formatOrKeyOrText?: string | keyof T,
  ) {}

  private alignment(
    horizontal: CellAlignmentHorizontal = 'center',
  ): CellAlignment {
    return {
      vertical: 'center',
      horizontal,
    };
  }

  private link(row: T, textOrKey: string | keyof T): CellObject {
    let text: string;

    if (Object.hasOwn(row as object, textOrKey)) {
      text = row[textOrKey as keyof T] as string;
    } else {
      text = textOrKey as string;
    }

    return {
      t: 's',
      v: text,
      s: { alignment: this.alignment(this.horizontal) },
      l: { Target: row[this.key] as string },
    };
  }

  private string(row: T): CellObject {
    return {
      t: 's',
      v: row[this.key] as string,
      s: { alignment: this.alignment(this.horizontal) },
    };
  }

  private number(row: T, format?: string | keyof T): CellObject {
    const value = parseInt(row[this.key] as string);

    return {
      t: 'n',
      v: isNaN(value) ? undefined : value,
      s: { alignment: this.alignment(this.horizontal) },
      z: format as string,
    };
  }

  value(row: T) {
    switch (this.type) {
      case 'string':
        return this.string(row);

      case 'link':
        return this.link(
          row,
          this.formatOrKeyOrText || (row[this.key] as string),
        );

      case 'number':
        return this.number(row, this.formatOrKeyOrText);
    }
  }
}
