import { FC, Fragment } from 'react';
import { bidSearchStore } from '@/store';
import { CommonComponent } from '@/component';
import { RouterComponent } from '@/router';

const App: FC = () => {
  const { loading } = bidSearchStore.useValue();

  return (
    <Fragment>
      <CommonComponent.Header />
      <CommonComponent.Sidebar item={<RouterComponent.Navigator />} />
      <RouterComponent.Routes />
      <CommonComponent.Loader loading={loading}>
        <div>Complete</div>
      </CommonComponent.Loader>
    </Fragment>
  );
};

export default App;
