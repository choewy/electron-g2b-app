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
  | 'bidNtceNm'
  | 'bidNtceDtlUrl'
  | 'bidNtceUrl'
  | 'ntceInsttNm'
  | 'dminsttNm'
  | 'cntrctCnclsMthdNm'
  | 'bidBeginDt'
  | 'bidClseDt'
  | 'cmmnSpldmdMethdNm'
  | 'brffcBidprcPermsnYn';

export type BidItemType = Record<BidItemKeyType, string>;
