import { ApiInstance } from '@/core';
import { HrcsSearchQuery } from './hrcs-saerch.query';
import { HrcsSearchConfig } from './hrcs-search.config';
import { HrcsSearchOptionalQueryType, HrcsSearchResponseType } from './types';

export class HrcsSearchApi extends ApiInstance {
  private readonly config = new HrcsSearchConfig();

  async search(
    query: HrcsSearchOptionalQueryType = {},
  ): Promise<HrcsSearchResponseType> {
    return this.request.get(this.config.url, {
      params: Object.assign(new HrcsSearchQuery(this.config), query),
    });
  }
}

export const hrcsSearchApi = new HrcsSearchApi();
