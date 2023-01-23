import { appStore } from '@/store';
import { FC } from 'react';
import { Helmet } from 'react-helmet-async';

export const AppHelmet: FC = () => {
  const title = appStore.useTitle();

  return (
    <Helmet>
      <title>{title}</title>
    </Helmet>
  );
};
