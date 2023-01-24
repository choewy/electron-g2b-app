import { ApiInstance } from '@/core';
import { SearchQuery } from './search.query';
import {
  BidItemType,
  SearchCustomQueryType,
  SearchResponseType,
} from './types';

export class SearchApi extends ApiInstance {
  private readonly URL = process.env.REACT_APP_G2B_API_URL as string;

  private get bidURL(): string {
    return [this.URL, 'BidPublicInfoService03'].join('/');
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
}

export const searchApi = new SearchApi();
