import { BidItemType } from '@/apis';
import { ExcelHeader, ExcelRow, ExcelService } from '@/core';
import { CellObject } from 'xlsx';

export class BidExcelService<T extends BidItemType> extends ExcelService {
  private readonly $headers = [
    new ExcelHeader('순번').value(),
    new ExcelHeader('검색어').value(),
    new ExcelHeader('입찰공고번호').value(),
    new ExcelHeader('입찰공고명').value(),
    new ExcelHeader('공고기관명').value(),
    new ExcelHeader('수요기관명').value(),
    new ExcelHeader('계약체결방법명').value(),
    new ExcelHeader('추정가격').value(),
    new ExcelHeader('입찰공고일시').value(),
    new ExcelHeader('입찰마감일시').value(),
  ];

  private readonly $rows = [
    new ExcelRow<T>('number', 'index', 'center'),
    new ExcelRow<T>('string', 'keyword', 'center'),
    new ExcelRow<T>('link', 'bidNtceDtlUrl', 'center', 'bidNtceNo'),
    new ExcelRow<T>('string', 'bidNtceNm', 'left'),
    new ExcelRow<T>('string', 'ntceInsttNm', 'left'),
    new ExcelRow<T>('string', 'dminsttNm', 'left'),
    new ExcelRow<T>('string', 'cntrctCnclsMthdNm', 'left'),
    new ExcelRow<T>('number', 'presmptPrce', 'right', '0,000'),
    new ExcelRow<T>('string', 'bidNtceDt', 'left'),
    new ExcelRow<T>('string', 'bidClseDt', 'left'),
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

export const bidExcelService = new BidExcelService('입찰공고');
