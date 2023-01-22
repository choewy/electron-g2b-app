import { FormEvent, MouseEvent, useCallback } from 'react';
import { bidSearchApi } from '@/apis';
import { StoreInstance } from '@/core';
import { BidSearchStoreType } from './types';
import { DateTime } from 'luxon';
import { CalenderChangeEventHandler } from '@/component';

export class BidSearchStore extends StoreInstance<BidSearchStoreType> {
  useGetData() {
    const [{ query }, setState] = this.useState();

    return useCallback(
      async (e: FormEvent<HTMLElement> | MouseEvent<HTMLElement>) => {
        e.preventDefault();

        try {
          setState((prev) => ({ ...prev, loading: true }));
          const { response } = await bidSearchApi.search(query);
          console.log(response);
          setState((prev) => ({
            ...prev,
            loading: false,
            data: response.body,
          }));
        } catch (e) {
          console.log(e);
          setState((prev) => ({ ...prev, loading: false }));
        }
      },
      [query, setState],
    );
  }

  useChangeDate(key: 'inqryBgnDt' | 'inqryEndDt'): CalenderChangeEventHandler {
    const setState = this.useSetState();

    return useCallback(
      (datetime) => {
        setState((prev) => ({
          ...prev,
          query: {
            ...prev.query,
            [key]: datetime?.toFormat('yyyyMMdd0000') || undefined,
          },
        }));
      },
      [key, setState],
    );
  }
}

export const bidSearchStore = new BidSearchStore(BidSearchStore.name, {
  loading: false,
  query: {
    inqryBgnDt: DateTime.local().toFormat('yyyyMMdd0000'),
    inqryEndDt: DateTime.local().toFormat('yyyyMMdd0000'),
  },
  data: {
    totalCount: 0,
    numOfRows: 0,
    pageNo: 0,
    items: [],
  },
});
