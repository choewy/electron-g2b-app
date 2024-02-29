import { FunctionComponent } from 'react';
import { HelmetProvider } from 'react-helmet-async';

import { HelmetTitle } from './helmet-title';

export const AppHelmetProvider: FunctionComponent = () => {
  return (
    <HelmetProvider>
      <HelmetTitle />
    </HelmetProvider>
  );
};
