import { useCallback } from 'react';
import { hrcsSearchApi } from '@/apis';
import { StoreInstance } from '@/core';
import { HrcsSearchStoreType } from './types';

export class HrcsSearchStore extends StoreInstance<HrcsSearchStoreType> {
  useGetData(): () => Promise<void> {
    const [{ query }, setState] = this.useState();

    return this.useFallback({
      func: useCallback(async () => {
        const {
          response: { body },
        } = await hrcsSearchApi.search(query);

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

export const hrcsSearchStore = new HrcsSearchStore(HrcsSearchStore.name, {
  loading: false,
  query: {},
  data: {
    totalCount: 0,
    numOfRows: 0,
    pageNo: 0,
    items: [],
  },
});
