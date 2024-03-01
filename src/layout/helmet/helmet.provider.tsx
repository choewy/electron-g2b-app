import { FunctionComponent } from 'react';
import { HelmetProvider as ReactHelmentProvider } from 'react-helmet-async';

import { HelmetTitle } from './helmet-title';

export const HelmetProvider: FunctionComponent = () => {
  return (
    <ReactHelmentProvider>
      <HelmetTitle />
    </ReactHelmentProvider>
  );
};
