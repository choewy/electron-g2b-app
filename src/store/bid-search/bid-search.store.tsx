import { useCallback } from 'react';
import { bidSearchApi } from '@/apis';
import { StoreInstance } from '@/core';
import { BidSearchStoreType } from './types';
import { DateTime } from 'luxon';
import { CalenderChangeEventHandler } from '@/component';

export class BidSearchStore extends StoreInstance<BidSearchStoreType> {
  useGetData(): () => Promise<void> {
    const [{ query }, setState] = this.useState();

    return this.useFallback({
      func: useCallback(async () => {
        try {
          const { response } = await bidSearchApi.search(query);
          setState((prev) => ({ ...prev, data: response.body }));
        } catch (e) {
          console.log(e);
        }
      }, [query, setState]),
      args: [],
    });
  }

  useChangeDate(key: 'inqryBgnDt' | 'inqryEndDt'): CalenderChangeEventHandler {
    const setState = this.useSetState();

    return useCallback(
      (datetime) => {
        setState((prev) => ({
          ...prev,
          query: {
            ...prev.query,
            [key]: datetime?.toFormat('yyyy-MM-dd') || undefined,
          },
        }));
      },
      [setState],
    );
  }
}

export const bidSearchStore = new BidSearchStore(BidSearchStore.name, {
  loading: false,
  query: {
    inqryBgnDt: DateTime.local().toFormat('yyyy-MM-dd'),
    inqryEndDt: DateTime.local().toFormat('yyyy-MM-dd'),
  },
  data: {
    totalCount: 0,
    numOfRows: 0,
    pageNo: 0,
    items: [],
  },
});
