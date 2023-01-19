import { FC } from 'react';
import { CommonComponent } from '@/component';
import { hrcsSearchStore } from '@/store';

export const HrcsSearchPage: FC = () => {
  const { loading } = hrcsSearchStore.useValue();
  const onSearch = hrcsSearchStore.useGetData();

  return (
    <CommonComponent.Loader loading={loading}>
      <div>
        <h1>HRCS SEARCH PAGE</h1>
        <button onClick={onSearch}>조회</button>
      </div>
    </CommonComponent.Loader>
  );
};
