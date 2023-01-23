import { FC, Fragment } from 'react';
import { AppHelmet } from './app.helmet';
import { AppLoader } from './app.loader';
import { AppHeader } from './app.header';
import { AppDrawer } from './app.drawer';
import { AppRoutes } from './app.routes';
import { AppSnakbar } from './app.snakbar';

const App: FC = () => {
  return (
    <Fragment>
      <AppHelmet />
      <AppSnakbar />
      <AppLoader />
      <AppHeader />
      <AppDrawer />
      <AppRoutes />
    </Fragment>
  );
};

export default App;
