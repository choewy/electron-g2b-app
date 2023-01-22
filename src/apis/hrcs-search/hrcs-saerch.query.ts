import { HrcsSearchConfig } from './hrcs-search.config';
import { HrcsSearchQueryType } from './types';

export class HrcsSearchQuery implements HrcsSearchQueryType {
  public readonly ServiceKey: string;
  public readonly inqryDiv: 1 | 2;
  public readonly numOfRows: number;
  public readonly pageNo: number;
  public readonly type: 'json';

  public inqryBgnDt: string | undefined;
  public inqryEndDt: string | undefined;
  public bfSpecRgstNo: string | undefined;

  constructor(private readonly config: HrcsSearchConfig) {
    this.ServiceKey = this.config.key;
    this.inqryDiv = 1;
    this.numOfRows = 10;
    this.pageNo = 1;
    this.type = 'json';
  }
}
