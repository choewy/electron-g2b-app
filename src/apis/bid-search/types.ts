export type BidSearchRequiredQueryType = {
  ServiceKey: string;
  numOfRows: number;
  pageNo: number;
  inqryDiv: 1 | 2;
  type: 'json';
};

export type BidSearchOptionalQueryType = Partial<{
  inqryBgnDt: string;
  inqryEndDt: string;
  bidNtceNm: string;
  ntceInsttCd: string;
  ntceInsttNm: string;
  dminsttCd: string;
  dminsttNm: string;
  refNo: string;
  prtcptLmtRgnCd: string;
  prtcptLmtRgnNm: string;
  indstrytyCd: string;
  indstrytyNm: string;
  presmptPrceBgn: string;
  presmptPrceEnd: string;
  dtilPrdctClsfcNoNm: string;
  masYn: 'Y';
  prcrmntReqNo: string;
  bidClseExcpYn: string;
  intrntnlDivCd: string;
}>;

export type BidSearchQueryType = BidSearchRequiredQueryType &
  BidSearchOptionalQueryType;

export type BidSearchItemKeyType =
  | 'VAT'
  | 'apiBssCntnts'
  | 'arsltApplDocRcptDt'
  | 'arsltApplDocRcptMthdNm'
  | 'arsltCmptYn'
  | 'bdgtAmt'
  | 'bfSpecRgstNo'
  | 'bidBeginDt'
  | 'bidClseDt'
  | 'bidGrntymnyPaymntYn'
  | 'bidMethdNm'
  | 'bidNtceDt'
  | 'bidNtceDtlUrl'
  | 'bidNtceNm'
  | 'bidNtceNo'
  | 'bidNtceOrd'
  | 'bidNtceUrl'
  | 'bidPrtcptFee'
  | 'bidPrtcptFeePaymntYn'
  | 'bidPrtcptLmtYn'
  | 'bidQlfctRgstDt'
  | 'bidWgrnteeRcptClseDt'
  | 'brffcBidprcPermsnYn'
  | 'chgDt'
  | 'chgNtceRsn'
  | 'ciblAplYn'
  | 'cmmnSpldmdAgrmntClseDt'
  | 'cmmnSpldmdAgrmntRcptdocMethd'
  | 'cmmnSpldmdCnum'
  | 'cmmnSpldmdCorpRgnLmtYn'
  | 'cmmnSpldmdMethdCd'
  | 'cmmnSpldmdMethdNm'
  | 'cnstrtnAbltyEvlAmtList'
  | 'cnstrtsiteRgnNm'
  | 'cnsttyAccotShreRateList'
  | 'cntrctCnclsMthdNm'
  | 'contrctrcnstrtnGovsplyMtrlAmt'
  | 'crdtrNm'
  | 'd2bMngAssmntLwstlmtRt'
  | 'd2bMngAssmntUplmtRt'
  | 'd2bMngBfEvalClseDt'
  | 'd2bMngBfEvalObjYn'
  | 'd2bMngBssamt'
  | 'd2bMngCnstwkDivNm'
  | 'd2bMngCnstwkLctNm'
  | 'd2bMngCnstwkNo'
  | 'd2bMngCnstwkOutlnCntnts'
  | 'd2bMngCnstwkPrdCntnts'
  | 'd2bMngCnstwkScleCntnts'
  | 'd2bMngDmndYear'
  | 'd2bMngNgttnPlanDate'
  | 'd2bMngNgttnStleNm'
  | 'd2bMngPblctPlceNm'
  | 'd2bMngProgrsSttusNm'
  | 'd2bMngRgnLmtYn'
  | 'd2bMngRgstEvalExmpYn'
  | 'd2bMngRsrvtnPrceBssAplYn'
  | 'dcmtgOprtnDt'
  | 'dcmtgOprtnPlce'
  | 'dminsttCd'
  | 'dminsttNm'
  | 'dminsttOfclEmailAdrs'
  | 'drwtPrdprcNum'
  | 'dsgntCmptYn'
  | 'dtlsBidYn'
  | 'exctvNm'
  | 'govcnstrtnGovsplyMtrlAmt'
  | 'govsplyAmt'
  | 'incntvRgnNm1'
  | 'incntvRgnNm2'
  | 'incntvRgnNm3'
  | 'incntvRgnNm4'
  | 'indstrytyEvlRt'
  | 'indstrytyLmtYn'
  | 'indstrytyMfrcFldEvlYn'
  | 'indutyVAT'
  | 'intrbidYn'
  | 'jntcontrctDutyRgnNm1'
  | 'jntcontrctDutyRgnNm2'
  | 'jntcontrctDutyRgnNm3'
  | 'linkInsttNm'
  | 'mainCnsttyCnstwkPrearngAmt'
  | 'mainCnsttyNm'
  | 'mainCnsttyPresmptPrce'
  | 'mtltyAdvcPsblYn'
  | 'mtltyAdvcPsblYnCnstwkNm'
  | 'ntceDscrptYn'
  | 'ntceInsttCd'
  | 'ntceInsttNm'
  | 'ntceInsttOfclEmailAdrs'
  | 'ntceInsttOfclNm'
  | 'ntceInsttOfclTelNo'
  | 'ntceKindNm'
  | 'ntceSpecDocUrl1'
  | 'ntceSpecDocUrl2'
  | 'ntceSpecDocUrl3'
  | 'ntceSpecDocUrl4'
  | 'ntceSpecDocUrl5'
  | 'ntceSpecDocUrl6'
  | 'ntceSpecDocUrl7'
  | 'ntceSpecDocUrl8'
  | 'ntceSpecDocUrl9'
  | 'ntceSpecDocUrl10'
  | 'ntceSpecFileNm1'
  | 'ntceSpecFileNm2'
  | 'ntceSpecFileNm3'
  | 'ntceSpecFileNm4'
  | 'ntceSpecFileNm5'
  | 'ntceSpecFileNm6'
  | 'ntceSpecFileNm7'
  | 'ntceSpecFileNm8'
  | 'ntceSpecFileNm9'
  | 'ntceSpecFileNm10'
  | 'opengDt'
  | 'opengPlce'
  | 'orderPlanUntyNo'
  | 'pqApplDocRcptDt'
  | 'pqApplDocRcptMthdNm'
  | 'pqEvalYn'
  | 'prearngPrceDcsnMthdNm'
  | 'presmptPrce'
  | 'rbidOpengDt'
  | 'rbidPermsnYn'
  | 'reNtceYn'
  | 'refNo'
  | 'rgnDutyJntcontrctRt'
  | 'rgnDutyJntcontrctYn'
  | 'rgstDt'
  | 'rgstTyNm'
  | 'rsrvtnPrceReMkngMthdNm'
  | 'sptDscrptDocUrl1'
  | 'sptDscrptDocUrl2'
  | 'sptDscrptDocUrl3'
  | 'sptDscrptDocUrl4'
  | 'sptDscrptDocUrl5'
  | 'stdNtceDocUrl'
  | 'subsiCnsttyIndstrytyEvlRt1'
  | 'subsiCnsttyIndstrytyEvlRt2'
  | 'subsiCnsttyIndstrytyEvlRt3'
  | 'subsiCnsttyIndstrytyEvlRt4'
  | 'subsiCnsttyIndstrytyEvlRt5'
  | 'subsiCnsttyIndstrytyEvlRt6'
  | 'subsiCnsttyIndstrytyEvlRt7'
  | 'subsiCnsttyIndstrytyEvlRt8'
  | 'subsiCnsttyIndstrytyEvlRt9'
  | 'subsiCnsttyNm1'
  | 'subsiCnsttyNm2'
  | 'subsiCnsttyNm3'
  | 'subsiCnsttyNm4'
  | 'subsiCnsttyNm5'
  | 'subsiCnsttyNm6'
  | 'subsiCnsttyNm7'
  | 'subsiCnsttyNm8'
  | 'subsiCnsttyNm9'
  | 'sucsfbidLwltRate'
  | 'sucsfbidMthdCd'
  | 'sucsfbidMthdNm'
  | 'totPrdprcNum'
  | 'untyNtceNo';

export type BidSearchItemType = Record<BidSearchItemKeyType, string>;

export type BidSearchResponseBodyType = {
  totalCount: number;
  numOfRows: number;
  pageNo: number;
  items: BidSearchItemType[];
};

export type BidSearchResponseType = {
  response: { body: BidSearchResponseBodyType };
  headers: {
    resultCode: string;
    resultMsg: string;
  };
};
