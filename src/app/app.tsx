import { FunctionComponent } from 'react';
import { Outlet } from 'react-router-dom';

import { ThemeProvider } from '@mui/material';

import { ThemeOptions } from '@layout/theme';
import { AlertProvider } from '@layout/alert/alert.provider';

import { authHook } from '@module/auth/auth.hook';
import { sizeHook } from '@module/size/size.hook';

export const App: FunctionComponent = () => {
  sizeHook.useObserver();
  authHook.useAuth();

  return (
    <ThemeProvider theme={ThemeOptions.create()}>
      <AlertProvider />
      <Outlet />
    </ThemeProvider>
  );
};
