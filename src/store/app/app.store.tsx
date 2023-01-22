import { StoreInstance } from '@/core';
import { RouterProps } from '@/router';
import { useCallback, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { AppStoreType } from './types';

export class AppStore extends StoreInstance<AppStoreType> {
  useTitleEffect(): void {
    const location = useLocation();
    const setState = this.useSetState();
    const router = RouterProps.findByPath(location.pathname);

    useEffect(() => {
      setState((prev) => ({ ...prev, title: router?.title || '' }));
    }, [router]);
  }

  useSetSidebar(isOpenSidebar: boolean): () => void {
    const setState = this.useSetState();

    return useCallback(() => {
      setState((prev) => ({ ...prev, isOpenSidebar }));
    }, [setState]);
  }
}

export const appStore = new AppStore(AppStore.name, {
  title: RouterProps.Home.title,
  isOpenSidebar: false,
});
