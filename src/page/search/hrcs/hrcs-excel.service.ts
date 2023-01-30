import { HrcsItemType } from '@/apis';
import { ExcelHeader, ExcelRow, ExcelService } from '@/core';
import { CellObject } from 'xlsx';

export class HrcsExcelService<T extends HrcsItemType> extends ExcelService {
  private readonly $headers = [
    new ExcelHeader('순번').value(),
    new ExcelHeader('검색어').value(),
    new ExcelHeader('사전규격등록번호').value(),
    new ExcelHeader('업무구분명').value(),
    new ExcelHeader('품명').value(),
    new ExcelHeader('실수요기관명').value(),
    new ExcelHeader('배정예산금액').value(),
    new ExcelHeader('등록일시').value(),
    new ExcelHeader('의견등록마감일시').value(),
  ];

  private readonly $rows = [
    new ExcelRow<T>('number', 'index', 'center'),
    new ExcelRow<T>('string', 'keyword', 'center'),
    new ExcelRow<T>('string', 'bfSpecRgstNo', 'center'),
    new ExcelRow<T>('string', 'bsnsDivNm', 'center'),
    new ExcelRow<T>('string', 'prdctClsfcNoNm', 'left'),
    new ExcelRow<T>('string', 'rlDminsttNm', 'left'),
    new ExcelRow<T>('number', 'asignBdgtAmt', 'right', '0,000'),
    new ExcelRow<T>('string', 'rgstDt', 'center'),
    new ExcelRow<T>('string', 'opninRgstClseDt', 'center'),
  ];

  headers(): CellObject[] {
    return this.$headers;
  }

  transform(row: T): CellObject[] {
    return this.$rows.map(($row) => $row.value(row));
  }

  exportToExcel(rows: T[]): void {
    super.toExcel(
      this.headers(),
      rows.map((row) => this.transform(row)),
    );
  }
}

export const hrcsExcelService = new HrcsExcelService('사전규격');
