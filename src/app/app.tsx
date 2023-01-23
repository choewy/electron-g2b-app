import { FC, Fragment } from 'react';
import { AppHelmet } from './app.helmet';
import { AppLoader } from './app.loader';
import { AppHeader } from './app.header';
import { AppDrawer } from './app.drawer';
import { AppRoutes } from './app.routes';

const App: FC = () => {
  return (
    <Fragment>
      <AppHelmet />
      <AppLoader />
      <AppHeader />
      <AppDrawer />
      <AppRoutes />
    </Fragment>
  );
};

export default App;
