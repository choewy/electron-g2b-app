import { FC } from 'react';
import { Box } from '@mui/material';

import { BidSearchTasks } from './bid.tasks';
import { BidSearchDate } from './bid.date';
import { bidSearchStore } from '@/store';
import { BidItemRow } from '@/apis';
import { CsvDownloader } from '@/component';

export const BidSearchForm: FC = () => {
  const rows = bidSearchStore.useValue().rows || [];
  const onReset = bidSearchStore.useResetState();
  const onSearch = bidSearchStore.useSearchCallback();

  return (
    <Box flex="5" component="div">
      <BidSearchTasks />
      <BidSearchDate />
      <button onClick={onSearch}>검색</button>
      <CsvDownloader
        title="나라장터입찰공고"
        classType={BidItemRow}
        onReset={onReset}
        data={rows}
      />
    </Box>
  );
};
