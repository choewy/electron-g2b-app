import { bidSearchApi } from '@/apis';
import { StoreInstance } from '@/core';
import { StoreCallbackType } from '@/core/utils/types';
import { useCallback, useEffect } from 'react';
import { BidSearchStoreType } from './types';

export class BidSearchStore extends StoreInstance<BidSearchStoreType> {
  useGetDataEffect(): void {
    const useFallback = this.useFallback();
    const useGetData = this.useGetData();

    useEffect(() => {
      const callback: StoreCallbackType = {
        func: useGetData,
        args: [],
      };

      useFallback(callback);
    }, [useGetData]);
  }

  useGetData(): () => Promise<void> {
    const [{ query }, setState] = this.useState();

    return useCallback(async () => {
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
    }, [query, setState]);
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
