import { FC } from 'react';
import { hrcsSearchStore } from '@/store';

export const HrcsSearchPage: FC = () => {
  const onSearch = hrcsSearchStore.useGetData();

  return (
    <div>
      <h1>HRCS SEARCH PAGE</h1>
      <button onClick={onSearch}>조회</button>
    </div>
  );
};
