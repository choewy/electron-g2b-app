import { StoreInstance } from '@/core';
import { RouterProps } from '@/router';
import { useCallback, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { AppStoreType } from './types';

export class AppStore extends StoreInstance<AppStoreType> {
  useTitle(): string {
    const [{ title }, setState] = this.useState();

    const location = useLocation();

    useEffect(() => {
      const router = RouterProps.selectByPath(location.pathname);
      setState((prev) => ({ ...prev, title: router?.title || '' }));
    }, [location]);

    return title;
  }

  useSetSidebar(isOpenSidebar: boolean): () => void {
    const setState = this.useSetState();

    return useCallback(() => {
      setState((prev) => ({ ...prev, isOpenSidebar }));
    }, [setState]);
  }

  useSetLoading(): (loading: boolean) => void {
    const setState = this.useSetState();

    return useCallback(
      async (loading) => {
        setState((prev) => ({ ...prev, loading }));
      },
      [setState],
    );
  }

  useSetError(): (error: string) => void {
    const setState = this.useSetState();

    return useCallback(
      async (error) => {
        setState((prev) => ({ ...prev, error }));
      },
      [setState],
    );
  }
}

export const appStore = new AppStore(AppStore.name, {
  title: RouterProps.Home.title,
  loading: false,
  error: '',
  isOpenSidebar: false,
});
