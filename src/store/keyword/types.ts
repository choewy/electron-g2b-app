import { FirebaseKeywordRowType } from '@/core';

export type KeywordStoreType = {
  deleteDocId: string;
  include: FirebaseKeywordRowType[];
  exclude: FirebaseKeywordRowType[];
};
