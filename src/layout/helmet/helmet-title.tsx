import { FunctionComponent } from 'react';
import { Helmet } from 'react-helmet-async';

import { appConfig } from '@config/app.config';

export const HelmetTitle: FunctionComponent = () => {
  return (
    <Helmet>
      <title>G2B - {appConfig.getVersion()}</title>
    </Helmet>
  );
};
