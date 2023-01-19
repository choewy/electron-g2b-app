import { BidSearchOptionalQueryType, BidSearchResponseBodyType } from '@/apis';

export type BidSearchStoreType = {
  loading: boolean;
  query: BidSearchOptionalQueryType;
  data: BidSearchResponseBodyType;
};
