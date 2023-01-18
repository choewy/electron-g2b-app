import { useCallback } from 'react';
import {
  atom,
  RecoilState,
  Resetter,
  SetterOrUpdater,
  useRecoilState,
  useRecoilValue,
  useResetRecoilState,
  useSetRecoilState,
} from 'recoil';
import { StoreCallbackType, StoreDefaultType } from './types';

export class StoreInstance<T extends {} | StoreDefaultType> {
  private readonly store: RecoilState<T>;

  constructor(private readonly key: string, private readonly init: T) {
    this.store = atom({
      key: this.key,
      default: this.init,
    });
  }

  initValue() {
    return this.init;
  }

  useState(): [T, SetterOrUpdater<T>] {
    return useRecoilState(this.store);
  }

  useValue(): T {
    return useRecoilValue(this.store);
  }

  useSetState(): SetterOrUpdater<T> {
    return useSetRecoilState(this.store);
  }

  useResetState(): Resetter {
    return useResetRecoilState(this.store);
  }

  useFallback() {
    const setState = this.useSetState();

    return useCallback(
      async (...callbacks: StoreCallbackType[]) => {
        setState((prev) => ({ ...prev, loading: true }));
        try {
          for (const callback of callbacks) {
            const { func, args } = callback;
            if (args) {
              await func(...args);
            } else {
              await func();
            }
          }
        } catch (e) {
        } finally {
          setState((prev) => ({ ...prev, loading: false }));
        }
      },
      [setState],
    );
  }
}
