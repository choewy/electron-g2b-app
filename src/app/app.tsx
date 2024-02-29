import { FunctionComponent } from 'react';
import { Outlet } from 'react-router-dom';

import { ThemeProvider } from '@mui/material';

import { AppHelmetProvider } from '@layout/helmet/helmet.provider';
import { ThemeOptions } from '@layout/theme';
import { AlertProvider } from '@layout/alert/alert.provider';

import { authHook } from '@module/auth/auth.hook';
import { sizeHook } from '@module/size/size.hook';
import { Header } from '@layout/header/header';
import { Sidebar } from '@layout/sidebar/sidebar';

export const App: FunctionComponent = () => {
  sizeHook.useObserver();
  authHook.useAuth();

  return (
    <>
      <AppHelmetProvider />
      <ThemeProvider theme={ThemeOptions.create()}>
        <AlertProvider />
        <Header />
        <Sidebar />
        <Outlet />
      </ThemeProvider>
    </>
  );
};
