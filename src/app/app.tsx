import { FC, Fragment } from 'react';
import { bidSearchStore } from '@/store';
import { CommonComponent } from '@/component';

const App: FC = () => {
  const { loading, data } = bidSearchStore.useValue();

  return (
    <Fragment>
      <CommonComponent.Header />
      <CommonComponent.Sidebar item={<CommonComponent.SidebarItem />} />
      <CommonComponent.Router />

      {loading ? (
        <div>LOADING</div>
      ) : (
        <Fragment>
          {data.items.map((item) => (
            <div key={JSON.stringify(item)}>{item.bidNtceNm}</div>
          ))}
        </Fragment>
      )}
    </Fragment>
  );
};

export default App;
