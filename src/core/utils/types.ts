import { FormEvent } from 'react';

export type StoreCallbackType = {
  func: (...args: any[]) => void | Promise<void>;
  args?: any[];
};

export type StoreFallbackType = (
  e: undefined | FormEvent<HTMLElement>,
) => Promise<void>;
