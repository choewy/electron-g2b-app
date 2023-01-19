import { FC } from 'react';
import { CommonComponent } from '@/component';

export const HrcsSearchPage: FC = () => {
  return (
    <CommonComponent.Loader loading={false}>
      <div>
        <h1>HRCS SEARCH PAGE</h1>
        <button>조회</button>
      </div>
    </CommonComponent.Loader>
  );
};
