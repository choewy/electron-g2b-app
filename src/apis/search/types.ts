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

export type BidItemHeaderKeyType =
  | '순번'
  | '검색어'
  | '입찰공고번호'
  | '입찰공고상세URL'
  | '입찰공고명'
  | '공고기관명'
  | '수요기관명'
  | '계약체결방법명'
  | '입찰공고일시'
  | '입찰마감일시'
  | '추정가격';

export type BidItemKeyType =
  | 'bidNtceNo'
  | 'bidNtceDt'
  | 'bidNtceNm'
  | 'bidNtceDtlUrl'
  | 'ntceInsttNm'
  | 'dminsttNm'
  | 'cntrctCnclsMthdNm'
  | 'bidClseDt'
  | 'presmptPrce';

export type BidItemType = Record<BidItemKeyType, string>;

export type HrcsItemHeaderKeyType =
  | '순번'
  | '검색어'
  | '사전규격등록번호'
  | '업무구분명'
  | '품명'
  | '실수요기관명'
  | '등록일시'
  | '배정예산금액'
  | '의견등록마감일시';

export type HrcsItemKeyType =
  | 'bfSpecRgstNo'
  | 'bsnsDivNm'
  | 'prdctClsfcNoNm'
  | 'rlDminsttNm'
  | 'rgstDt'
  | 'asignBdgtAmt'
  | 'opninRgstClseDt';

export type HrcsItemType = Record<HrcsItemKeyType, string>;
