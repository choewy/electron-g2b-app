import { appStore } from '@/store';
import { FC, Fragment, PropsWithChildren } from 'react';

export const PageTemplate: FC<PropsWithChildren> = ({ children }) => {
  appStore.useTitleEffect();

  return <Fragment>{children}</Fragment>;
};
