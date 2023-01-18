import { StoreInstance } from '@/core';
import { useCallback, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { AppStoreType } from './types';

export class AppStore extends StoreInstance<AppStoreType> {
  useTitleEffect(): void {
    const location = useLocation();
    const setState = this.useSetState();

    useEffect(() => {
      let title: string;

      switch (location.pathname) {
        case '/':
          title = '나라장터 입찰정보 수집 프로그램';
          break;

        case '/setting':
          title = '환경설정';
          break;
      }

      setState((prev) => ({ ...prev, title }));
    }, [location]);
  }

  useSetSidebar(isOpenSidebar: boolean): () => void {
    const setState = this.useSetState();

    return useCallback(() => {
      setState((prev) => ({ ...prev, isOpenSidebar }));
    }, [setState]);
  }
}

export const appStore = new AppStore(AppStore.name, {
  title: '나라장터 입찰정보 수집 프로그램',
  isOpenSidebar: false,
});
