import { FC } from 'react';
import { Paper } from '@mui/material';
import { bidSearchStore } from '@/store';
import { BidItemRow } from '@/apis';
import { CsvDownloader } from '@/component';
import { BidSearchTasks } from './bid.tasks';
import { BidSearchDate } from './bid.date';
import { BidSearchButtons } from './bid.buttons';

export const BidSearchForm: FC = () => {
  const rows = bidSearchStore.useValue().rows || [];
  const onReset = bidSearchStore.useResetState();

  return (
    <Paper elevation={3} sx={{ flex: 2, padding: 3, marginRight: 1 }}>
      <BidSearchTasks />
      <BidSearchDate />
      <BidSearchButtons />
      <CsvDownloader
        title="나라장터입찰공고"
        classType={BidItemRow}
        onReset={onReset}
        data={rows}
      />
    </Paper>
  );
};
