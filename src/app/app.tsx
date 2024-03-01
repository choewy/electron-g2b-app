import { FunctionComponent } from 'react';
import { Outlet } from 'react-router-dom';

import { ThemeProvider } from '@mui/material';

import { authHook } from '@module/auth/auth.hook';
import { sizeHook } from '@module/size/size.hook';

import { HelmetProvider } from '@layout/helmet/helmet.provider';
import { ThemeOptions } from '@layout/theme';
import { Alert } from '@layout/alert/alert';
import { Header } from '@layout/header/header';
import { Sidebar } from '@layout/sidebar/sidebar';

export const App: FunctionComponent = () => {
  sizeHook.useObserver();
  authHook.useAuth();

  return (
    <>
      <HelmetProvider />
      <ThemeProvider theme={ThemeOptions.create()}>
        <Alert />
        <Header />
        <Sidebar />
        <Outlet />
      </ThemeProvider>
    </>
  );
};
