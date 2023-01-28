import { FC } from 'react';
import { Paper } from '@mui/material';
import { bidSearchStore } from '@/store';
import { BidSearchTasks } from './bid.tasks';
import { BidSearchDate } from './bid.date';
import { BidSearchButtons } from './bid.buttons';
import { DownloadProvider } from '@/component';

export const BidSearchForm: FC = () => {
  const rows = bidSearchStore.useValue().rows || [];
  const resetRows = bidSearchStore.useResetRows();

  return (
    <Paper elevation={3} sx={{ flex: 2, padding: 3, marginRight: 1 }}>
      <BidSearchTasks />
      <BidSearchDate />
      <DownloadProvider rows={rows} resetRows={resetRows} filename="입찰공고" />
      <BidSearchButtons />
    </Paper>
  );
};
