export type HrcsSearchRequiredQueryType = {
  ServiceKey: string;
  numOfRows: number;
  pageNo: number;
  inqryDiv: 1 | 2;
  type: 'json';
};

export type HrcsSearchOptionalQueryType = Partial<{
  inqryBgnDt: string;
  inqryEndDt: string;
  bfSpecRgstNo: string;
}>;

export type HrcsSearchQueryType = HrcsSearchRequiredQueryType &
  HrcsSearchOptionalQueryType;

export type HrcsSearchItemKeyType =
  | 'asignBdgtAmt'
  | 'bfSpecRgstNo'
  | 'bidNtceNoList'
  | 'bsnsDivNm'
  | 'chgDt'
  | 'dlvrDaynum'
  | 'dlvrTmlmtDt'
  | 'ofclNm'
  | 'ofclTelNo'
  | 'opninRgstClseDt'
  | 'orderInsttNm'
  | 'prdctClsfcNoNm'
  | 'prdctDtlList'
  | 'rcptDt'
  | 'refNo'
  | 'rgstDt'
  | 'rlDminsttNm'
  | 'specDocFileUrl1'
  | 'specDocFileUrl2'
  | 'specDocFileUrl3'
  | 'specDocFileUrl4'
  | 'specDocFileUrl5'
  | 'swBizObjYn';

export type HrcsSearchItemType = Record<HrcsSearchItemKeyType, string>;

export type HrcsSearchResponseBodyType = {
  totalCount: number;
  numOfRows: number;
  pageNo: number;
  items: HrcsSearchItemType[];
};

export type HrcsSearchResponseType = {
  response: { body: HrcsSearchResponseBodyType };
  headers: {
    resultCode: string;
    resultMsg: string;
  };
};
