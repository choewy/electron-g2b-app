import { FormEvent, MouseEvent, useCallback } from 'react';
import { hrcsSearchApi } from '@/apis';
import { StoreInstance } from '@/core';
import { HrcsSearchStoreType } from './types';
import { DateTime } from 'luxon';

export class HrcsSearchStore extends StoreInstance<HrcsSearchStoreType> {
  useGetData() {
    const [{ query }, setState] = this.useState();

    return useCallback(
      async (e: FormEvent<HTMLElement> | MouseEvent<HTMLElement>) => {
        e.preventDefault();

        try {
          setState((prev) => ({ ...prev, loading: true }));
          const { response } = await hrcsSearchApi.search(query);

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
}

export const hrcsSearchStore = new HrcsSearchStore(HrcsSearchStore.name, {
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
