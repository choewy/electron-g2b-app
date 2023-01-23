import { FC, Fragment, useCallback, useEffect } from 'react';
import { SnackbarProvider, useSnackbar } from 'notistack';
import { appStore } from '@/store';

export const AppSnakbar: FC = () => {
  const setMessage = appStore.useSetMessage();

  const onCloseSnakbar = useCallback(() => {
    setMessage({});
  }, [setMessage]);

  const Snakbar: FC = () => {
    const { messages } = appStore.useValue();
    const { enqueueSnackbar } = useSnackbar();

    useEffect(() => {
      if (messages?.info) {
        enqueueSnackbar(messages.info, { variant: 'info' });
        return;
      }

      if (messages?.warn) {
        enqueueSnackbar(messages.warn, { variant: 'warning' });
        return;
      }

      if (messages?.error) {
        enqueueSnackbar(messages.error, { variant: 'error' });
        return;
      }
    }, [messages]);

    return <Fragment />;
  };

  return (
    <SnackbarProvider maxSnack={3} onClose={onCloseSnakbar}>
      <Snakbar />
    </SnackbarProvider>
  );
};
