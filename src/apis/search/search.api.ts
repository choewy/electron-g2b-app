import { ApiInstance } from '@/core';
import { SearchQuery } from './search.query';
import {
  BidItemType,
  HrcsItemType,
  SearchCustomQueryType,
  SearchResponseType,
} from './types';

export class SearchApi extends ApiInstance {
  private readonly BID_VERSION = process.env
    .REACT_APP_G2B_API_VERSION as string;
  private readonly URL = process.env.REACT_APP_G2B_API_URL as string;

  private get bidURL(): string {
    return [this.URL, `BidPublicInfoService${this.BID_VERSION}`].join('/');
  }

  private get hrcsURL(): string {
    return [this.URL, 'HrcspSsstndrdInfoService'].join('/');
  }

  async bid(
    endPoint: string,
    query?: SearchCustomQueryType,
  ): Promise<SearchResponseType<BidItemType>> {
    return this.request.get([this.bidURL, endPoint].join('/'), {
      params: new SearchQuery(query),
    });
  }

  async hrcs(
    endPoint: string,
    query?: SearchCustomQueryType,
  ): Promise<SearchResponseType<HrcsItemType>> {
    return this.request.get([this.hrcsURL, endPoint].join('/'), {
      params: new SearchQuery(query),
    });
  }
}

export const searchApi = new SearchApi();
