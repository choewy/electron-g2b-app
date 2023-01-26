import { BidItemHeaderKeyType, BidItemType } from '../types';

export class BidItemRow
  implements Record<BidItemHeaderKeyType, number | string>
{
  순번: number;
  검색어: string;
  입찰공고번호: string;
  입찰공고차수: string;
  입찰공고상세URL: string;
  입찰공고명: string;
  공고기관명: string;
  수요기관명: string;
  계약체결방법명: string;
  입찰공고일시: string;
  입찰개시일시: string;
  입찰마감일시: string;
  예산금액: string;
  추정가격: string;
  참조번호: string;
  입찰공고URL: string;
  공동수급방식명: string;
  자사투찰허용여부: string;

  constructor(index: number, keyword: string, row: BidItemType) {
    const bdgtAmt = parseInt(row.bdgtAmt);
    const presmptPrce = parseInt(row.presmptPrce);

    this.순번 = index;
    this.검색어 = keyword;
    this.입찰공고번호 = row.bidNtceNo;
    this.입찰공고차수 = row.bidNtceOrd;
    this.입찰공고상세URL = row.bidNtceDtlUrl;
    this.입찰공고명 = row.bidNtceNm;
    this.공고기관명 = row.ntceInsttNm;
    this.수요기관명 = row.dminsttNm;
    this.계약체결방법명 = row.cntrctCnclsMthdNm;
    this.입찰공고일시 = row.bidNtceDt;
    this.입찰개시일시 = row.bidBeginDt;
    this.입찰마감일시 = row.bidClseDt;
    this.예산금액 = !isNaN(bdgtAmt) ? bdgtAmt.toLocaleString('ko-KR') : '';
    this.추정가격 = !isNaN(presmptPrce)
      ? presmptPrce.toLocaleString('ko-KR')
      : '';

    this.참조번호 = row.refNo;
    this.입찰공고URL = row.bidNtceUrl;
    this.공동수급방식명 = row.cmmnSpldmdMethdNm;
    this.자사투찰허용여부 = row.brffcBidprcPermsnYn;
  }
}
