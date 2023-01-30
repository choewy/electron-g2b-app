import { DateTime } from 'luxon';
import { CellObject, utils, writeFile } from 'xlsx-js-style';

export class ExcelService {
  constructor(private readonly sheetName: string) {}

  private createFileName(): string {
    return (
      [this.sheetName, DateTime.local().toFormat('yyyy-MM-dd-HHmmss')].join(
        '-',
      ) + '.xlsx'
    );
  }

  protected toExcel(headers: CellObject[], rows: CellObject[][]): void {
    const data = [headers].concat(rows);

    const wb = utils.book_new();
    const ws = utils.aoa_to_sheet(data);

    utils.book_append_sheet(wb, ws, this.sheetName);
    writeFile(wb, this.createFileName());
  }
}
