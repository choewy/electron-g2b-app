import {
  HrcsSearchOptionalQueryType,
  HrcsSearchResponseBodyType,
} from '@/apis';

export type HrcsSearchStoreType = {
  loading: boolean;
  query: HrcsSearchOptionalQueryType;
  data: HrcsSearchResponseBodyType;
};
