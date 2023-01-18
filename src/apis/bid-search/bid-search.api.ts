import { ApiInstance } from '@/core';
import { BidSearchQuery } from './bid-saerch.query';
import { BidSearchConfig } from './bid-search.config';
import { BidSearchOptionalQueryType, BidSearchResponseType } from './types';

export class BidSearchApi extends ApiInstance {
  private readonly config = new BidSearchConfig();

  async search(
    query: BidSearchOptionalQueryType = {},
  ): Promise<BidSearchResponseType> {
    return this.request.get(this.config.url, {
      params: Object.assign(new BidSearchQuery(this.config), query),
    });
  }
}

export const bidSearchApi = new BidSearchApi();
