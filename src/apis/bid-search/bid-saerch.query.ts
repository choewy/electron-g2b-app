import { BidSearchConfig } from './bid-search.config';
import { BidSearchQueryType } from './types';

export class BidSearchQuery implements BidSearchQueryType {
  public readonly ServiceKey: string;
  public readonly inqryDiv: 1 | 2;
  public readonly numOfRows: number;
  public readonly pageNo: number;
  public readonly type: 'json';

  inqryBgnDt: string | undefined;
  inqryEndDt: string | undefined;
  bidNtceNm: string | undefined;
  ntceInsttCd: string | undefined;
  ntceInsttNm: string | undefined;
  dminsttCd: string | undefined;
  dminsttNm: string | undefined;
  refNo: string | undefined;
  prtcptLmtRgnCd: string | undefined;
  prtcptLmtRgnNm: string | undefined;
  indstrytyCd: string | undefined;
  indstrytyNm: string | undefined;
  presmptPrceBgn: string | undefined;
  presmptPrceEnd: string | undefined;
  dtilPrdctClsfcNoNm: string | undefined;
  masYn: 'Y' | 'N' | undefined;
  prcrmntReqNo: string | undefined;
  bidClseExcpYn: string | undefined;
  intrntnlDivCd: string | undefined;

  constructor(config: BidSearchConfig) {
    this.ServiceKey = config.key;
    this.inqryDiv = 1;
    this.numOfRows = 10;
    this.pageNo = 1;
    this.type = 'json';
  }
}
