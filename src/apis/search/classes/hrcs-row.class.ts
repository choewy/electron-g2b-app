import { HrcsItemHeaderKeyType, HrcsItemType } from '../types';
import { intToLocaleString } from './helpers';

export class HrcsItemRow
  implements Record<HrcsItemHeaderKeyType, number | string>
{
  순번: number;
  검색어: string;
  사전규격등록번호: string;
  업무구분명: string;
  품명: string;
  실수요기관명: string;
  배정예산금액: string;
  등록일시: string;
  의견등록마감일시: string;

  constructor(index: number, keyword: string, row: HrcsItemType) {
    this.순번 = index;
    this.검색어 = keyword;
    this.사전규격등록번호 = row.bfSpecRgstNo;
    this.업무구분명 = row.bsnsDivNm;
    this.품명 = row.prdctClsfcNoNm;
    this.실수요기관명 = row.rlDminsttNm;
    this.배정예산금액 = intToLocaleString(parseInt(row.asignBdgtAmt));
    this.등록일시 = row.rgstDt;
    this.의견등록마감일시 = row.opninRgstClseDt;
  }
}
