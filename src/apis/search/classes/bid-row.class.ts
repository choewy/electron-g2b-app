import { BidItemType } from '../types';

export class BidItemRow {
  입찰공고번호: string;
  입찰공고차수: string;
  입찰공고명: string;
  입찰공고상세URL: string;
  입찰공고URL: string;
  공고기관명: string;
  수요기관명: string;
  계약체결방법명: string;
  입찰개시일시: string;
  입찰마감일시: string;
  공동수급방식명: string;
  지사투찰허용여부: string;

  constructor(row: BidItemType) {
    this.입찰공고번호 = row.bidNtceNo;
    this.입찰공고차수 = row.bidNtceOrd;
    this.입찰공고명 = row.bidNtceNm;
    this.입찰공고상세URL = row.bidNtceDtlUrl;
    this.입찰공고URL = row.bidNtceUrl;
    this.공고기관명 = row.ntceInsttNm;
    this.수요기관명 = row.dminsttNm;
    this.계약체결방법명 = row.cntrctCnclsMthdNm;
    this.입찰개시일시 = row.bidBeginDt;
    this.입찰마감일시 = row.bidClseDt;
    this.공동수급방식명 = row.cmmnSpldmdMethdNm;
    this.지사투찰허용여부 = row.brffcBidprcPermsnYn;
  }
}
