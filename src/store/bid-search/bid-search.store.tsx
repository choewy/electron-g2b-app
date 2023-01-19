import { useCallback } from 'react';
import { bidSearchApi } from '@/apis';
import { StoreInstance } from '@/core';
import { BidSearchStoreType } from './types';

export class BidSearchStore extends StoreInstance<BidSearchStoreType> {
  useGetData(): () => Promise<void> {
    const [{ query }, setState] = this.useState();

    return this.useFallback({
      func: useCallback(async () => {
        const {
          response: { body },
        } = await bidSearchApi.search(query);

        try {
          setState((prev) => ({
            ...prev,
            data: body,
          }));
        } catch (e) {
          console.log(e);
        }
      }, [query, setState]),
      args: [],
    });
  }
}

export const bidSearchStore = new BidSearchStore(BidSearchStore.name, {
  loading: false,
  query: {},
  data: {
    totalCount: 0,
    numOfRows: 0,
    pageNo: 0,
    items: [],
  },
});
