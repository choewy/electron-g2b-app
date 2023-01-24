import { FirebaseKeywordRowType } from '@/core';

export type KeywordStoreType = {
  include: FirebaseKeywordRowType[];
  exclude: FirebaseKeywordRowType[];
};
