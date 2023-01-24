import { DateFormat } from '@/component';
import { DateTime } from 'luxon';
import { SearchCustomQueryType, SearchQueryType } from './types';

export class SearchQuery implements SearchQueryType {
  public readonly ServiceKey: string;
  public readonly numOfRows: number;
  public readonly pageNo: number;
  public readonly inqryDiv: 1 | 2;
  public readonly type: 'json';

  inqryBgnDt: string = DateTime.local().toFormat(DateFormat);
  inqryEndDt: string = DateTime.local().toFormat(DateFormat);

  constructor(query?: SearchCustomQueryType) {
    this.ServiceKey = process.env.REACT_APP_G2B_API_KEY as string;
    this.inqryDiv = 1;
    this.numOfRows = 100;
    this.pageNo = 1;
    this.type = 'json';

    if (query) {
      this.inqryBgnDt = query.inqryBgnDt;
      this.inqryEndDt = query.inqryEndDt;
    }
  }
}
