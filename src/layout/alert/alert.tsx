import { FunctionComponent } from 'react';
import { SnackbarProvider } from 'notistack';

import { AlertConsumer } from './alert.consumer';

export const Alert: FunctionComponent = () => {
  return (
    <SnackbarProvider maxSnack={5} autoHideDuration={5000}>
      <AlertConsumer />
    </SnackbarProvider>
  );
};
