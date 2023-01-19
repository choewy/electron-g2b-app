import { FC, Fragment } from 'react';
import { CommonComponent } from '@/component';
import { RouterComponent } from '@/router';

const App: FC = () => {
  return (
    <Fragment>
      <CommonComponent.Header />
      <CommonComponent.Sidebar item={<RouterComponent.Navigator />} />
      <CommonComponent.Page>
        <RouterComponent.Routes />
      </CommonComponent.Page>
    </Fragment>
  );
};

export default App;
