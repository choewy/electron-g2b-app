import { FC, Fragment } from 'react';
import { CustomHelmet } from '@/components';
import { Routes } from 'react-router-dom';
import { CommonRouter, PrivateRouter, PublicRouter } from '@/routes';

const App: FC = () => {
  return (
    <Fragment>
      <CustomHelmet title="TODO" />
      <Routes>
        {CommonRouter.render()}
        {PublicRouter.render()}
        {PrivateRouter.render()}
      </Routes>
    </Fragment>
  );
};

export default App;
