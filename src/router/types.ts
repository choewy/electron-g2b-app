import { ReactElement } from 'react';

export type RouterPropsType = {
  title: string;
  path: string;
  icon: ReactElement;
  page: ReactElement;
  hiddenInSidebar?: boolean;
  openNewWindow?: boolean;
  url?: string;
};

export type RouterPropsMapKey = 'common' | 'service' | 'user' | 'visitor';

export type RouterPropsMapType = Partial<
  Record<RouterPropsMapKey, RouterPropsType[]>
>;
