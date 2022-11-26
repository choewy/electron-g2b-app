import { FC, Fragment } from 'react';
import { CustomHelmet } from '@/components';
import { Routes } from 'react-router-dom';
import { PrivateRouter, PublicRouter } from '@/routes';

const App: FC = () => {
  return (
    <Fragment>
      <CustomHelmet title="TODO" />
      <Routes>
        {PublicRouter.render()}
        {PrivateRouter.render()}
      </Routes>
    </Fragment>
  );
};

export default App;
