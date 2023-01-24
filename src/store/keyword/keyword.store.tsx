import { firebaseDB, FirebaseKeywordType, StoreInstance } from '@/core';
import { FormEvent, MouseEvent, useCallback } from 'react';
import { appStore } from '../app';
import { authStore } from '../auth';
import { KeywordStoreType } from './types';

export class KeywordStore extends StoreInstance<KeywordStoreType> {
  useInitCallback() {
    const setState = this.useSetState();
    const setLoading = appStore.useSetLoading();
    const setMessage = appStore.useSetMessage();

    const { user } = authStore.useValue();

    return useCallback(async () => {
      if (!user) {
        return;
      }

      try {
        setLoading(true);
        const rows = await firebaseDB.findKeywordsByUid(user.uid);
        const { include, exclude } = rows.reduce<KeywordStoreType>(
          (prev, row) => {
            prev[row.type].push(row);
            return prev;
          },
          { include: [], exclude: [] },
        );

        setState((prev) => ({ ...prev, include, exclude }));
      } catch (e) {
        const error = e as any;
        setMessage({ error: error.code });
      } finally {
        setLoading(false);
      }
    }, [user, setState, setLoading, setMessage]);
  }

  useLoadCallback(type: FirebaseKeywordType) {
    const setState = this.useSetState();
    const setLoading = appStore.useSetLoading();
    const setMessage = appStore.useSetMessage();

    const { user } = authStore.useValue();

    return useCallback(async () => {
      if (!user) {
        return;
      }

      try {
        setLoading(true);
        const rows = await firebaseDB.findKeywordsByUidAndType(user.uid, type);
        setState((prev) => ({ ...prev, [type]: rows }));
      } catch (e) {
        console.log(e);
        const error = e as any;
        setMessage({ error: error.code });
      } finally {
        setLoading(false);
      }
    }, [user, setState, setLoading, setMessage]);
  }

  useAppendCallback(
    type: FirebaseKeywordType,
    keyword: string,
    ...callbacks: Array<() => void | Promise<void>>
  ) {
    const setState = this.useSetState();
    const setLoading = appStore.useSetLoading();
    const setMessage = appStore.useSetMessage();

    const { user } = authStore.useValue();

    return useCallback(
      async (e: FormEvent<HTMLElement>) => {
        e.preventDefault();

        if (!user || !keyword) {
          return;
        }

        try {
          setLoading(true);

          await firebaseDB.insertKeyword(user.uid, { type, keyword });

          for (const callback of callbacks) {
            await callback();
          }

          setMessage({ info: '키워드가 추가되었습니다.' });
        } catch (e) {
        } finally {
          setLoading(false);
        }
      },
      [type, user, keyword, callbacks, setState, setLoading, setMessage],
    );
  }

  useUpdateCallback(
    docId: string,
    keyword: string,
    ...callbacks: Array<() => void | Promise<void>>
  ) {
    const setState = this.useSetState();
    const setLoading = appStore.useSetLoading();
    const setMessage = appStore.useSetMessage();

    return useCallback(
      async (_: MouseEvent<HTMLElement>) => {
        try {
          setLoading(true);
          const doc = await firebaseDB.findKeywordById(docId);

          if (!doc) {
            setMessage({
              warn: '존재하지 않는 키워드 항목입니다.',
            });
            setLoading(false);
            return;
          }

          await firebaseDB.updateKeyword(doc, { keyword });

          for (const callback of callbacks) {
            await callback();
          }

          setMessage({ info: '키워드가 수정되었습니다.' });
        } catch (e) {
        } finally {
          setLoading(false);
        }
      },
      [docId, keyword, callbacks, setState, setLoading, setMessage],
    );
  }

  useDeleteCallback(docId: string, ...callbacks: Array<() => Promise<void>>) {
    const setState = this.useSetState();
    const setLoading = appStore.useSetLoading();
    const setMessage = appStore.useSetMessage();

    return useCallback(
      async (_: MouseEvent<HTMLElement>) => {
        try {
          setLoading(true);
          const doc = await firebaseDB.findKeywordById(docId);

          if (!doc) {
            setMessage({
              warn: '존재하지 않는 키워드 항목입니다.',
            });
            setLoading(false);
            return;
          }

          await firebaseDB.deleteKeyword(doc);

          for (const callback of callbacks) {
            await callback();
          }

          setMessage({ info: '키워드가 삭제되었습니다.' });
        } catch (e) {
        } finally {
          setLoading(false);
        }
      },
      [docId, callbacks, setState, setLoading, setMessage],
    );
  }
}

export const keywordStore = new KeywordStore(KeywordStore.name, {
  include: [],
  exclude: [],
});
