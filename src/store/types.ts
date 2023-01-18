import {
  BidSearchOptionalQueryType,
  BidSearchResponseBodyType,
} from '@/apis/bid-search/types';

export type BidSearchStoreType = {
  query: BidSearchOptionalQueryType;
  data: BidSearchResponseBodyType;
};
