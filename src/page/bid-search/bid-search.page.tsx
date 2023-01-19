import { FC } from 'react';
import { CommonComponent } from '@/component';
import { bidSearchStore } from '@/store';

export const BidSearchPage: FC = () => {
  const { loading } = bidSearchStore.useValue();
  const onSearch = bidSearchStore.useGetData();

  return (
    <CommonComponent.Loader loading={loading}>
      <div>
        <h1>BID SEARCH PAGE</h1>
        <button onClick={onSearch}>조회</button>
      </div>
    </CommonComponent.Loader>
  );
};
