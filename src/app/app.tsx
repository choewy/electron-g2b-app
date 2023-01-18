import { FC, Fragment } from 'react';
import { bidSearchStore } from '@/store';

const App: FC = () => {
  const { loading, data } = bidSearchStore.useValue();

  bidSearchStore.useGetDataEffect();

  return (
    <Fragment>
      {loading ? (
        <div>LOADING</div>
      ) : (
        <Fragment>
          {data.items.map((item) => (
            <div key={JSON.stringify(item)}>{item.crdtrNm}</div>
          ))}
        </Fragment>
      )}
    </Fragment>
  );
};

export default App;
