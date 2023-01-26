export type SearchFixedQuery = {
  readonly ServiceKey: string;
  readonly numOfRows: number;
  readonly inqryDiv: 1 | 2;
  readonly type: 'json';
};

export type SearchCustomQueryType = {
  pageNo: number;
  inqryBgnDt: string;
  inqryEndDt: string;
};

export type SearchQueryType = SearchFixedQuery & SearchCustomQueryType;

export type SearchResponseBodyType<T> = {
  totalCount: number;
  numOfRows: number;
  pageNo: number;
  items: T[];
};

export type SearchResponseType<T> = {
  response: { body: SearchResponseBodyType<T> };
  headers: {
    resultCode: string;
    resultMsg: string;
  };
};

export type SearchTaskType = {
  text: string;
  endPoint: string;
};

export type BidItemKeyType =
  | 'bidNtceNo'
  | 'bidNtceOrd'
  | 'bidNtceDt'
  | 'bidNtceNm'
  | 'bidNtceDtlUrl'
  | 'bidNtceUrl'
  | 'refNo'
  | 'ntceInsttNm'
  | 'dminsttNm'
  | 'cntrctCnclsMthdNm'
  | 'bidBeginDt'
  | 'bidClseDt'
  | 'bdgtAmt'
  | 'presmptPrce'
  | 'cmmnSpldmdMethdNm'
  | 'brffcBidprcPermsnYn';

export type BidItemType = Record<BidItemKeyType, string>;

export type BidItemHeaderKeyType =
  | '순번'
  | '검색어'
  | '입찰공고번호'
  | '입찰공고차수'
  | '입찰공고상세URL'
  | '입찰공고명'
  | '공고기관명'
  | '수요기관명'
  | '계약체결방법명'
  | '입찰공고일시'
  | '입찰개시일시'
  | '입찰마감일시'
  | '예산금액'
  | '추정가격'
  | '참조번호'
  | '입찰공고URL'
  | '공동수급방식명'
  | '자사투찰허용여부';
