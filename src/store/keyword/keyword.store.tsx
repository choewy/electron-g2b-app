import { StoreInstance } from '@/core';
import { KeywordStoreType } from './types';

export class KeywordStore extends StoreInstance<KeywordStoreType> {}

export const keywordStore = new KeywordStore(KeywordStore.name, {
  rows: [],
});
