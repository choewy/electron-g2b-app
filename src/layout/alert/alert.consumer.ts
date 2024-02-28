import { FunctionComponent } from 'react';

import { alertStore } from './alert.store';

export const AlertConsumer: FunctionComponent = () => {
  alertStore.useListener();
  alertStore.useConsumer();

  return null;
};
