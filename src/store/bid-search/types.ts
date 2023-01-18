import {
  BidSearchOptionalQueryType,
  BidSearchResponseBodyType,
} from '@/apis/bid-search/types';

export type BidSearchStoreType = {
  loading: boolean;
  query: BidSearchOptionalQueryType;
  data: BidSearchResponseBodyType;
};
