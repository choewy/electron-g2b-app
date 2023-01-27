import { BidItemHeaderKeyType, BidItemType } from '../types';
import { intToLocaleString } from './helpers';

export class BidItemRow
  implements Record<BidItemHeaderKeyType, number | string>
{
  순번: number;
  검색어: string;
  입찰공고번호: string;
  입찰공고상세URL: string;
  입찰공고명: string;
  공고기관명: string;
  수요기관명: string;
  계약체결방법명: string;
  추정가격: string;
  입찰공고일시: string;
  입찰마감일시: string;

  constructor(index: number, keyword: string, row: BidItemType) {
    this.순번 = index;
    this.검색어 = keyword;
    this.입찰공고번호 = row.bidNtceNo;
    this.입찰공고상세URL = row.bidNtceDtlUrl;
    this.입찰공고명 = row.bidNtceNm;
    this.공고기관명 = row.ntceInsttNm;
    this.수요기관명 = row.dminsttNm;
    this.계약체결방법명 = row.cntrctCnclsMthdNm;
    this.추정가격 = intToLocaleString(parseInt(row.presmptPrce));
    this.입찰공고일시 = row.bidNtceDt;
    this.입찰마감일시 = row.bidClseDt;
  }
}
