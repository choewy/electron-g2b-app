import { StoreInstance } from '@/core';
import { BidSearchStoreType } from './types';

export class BidSearchStore extends StoreInstance<BidSearchStoreType> {}

export const bidSearchStore = new BidSearchStore(BidSearchStore.name, {
  query: {},
  data: {
    totalCount: 0,
    numOfRows: 0,
    pageNo: 0,
    items: [],
  },
});
