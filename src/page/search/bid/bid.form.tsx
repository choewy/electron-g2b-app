import { FC, useEffect } from 'react';
import { Paper } from '@mui/material';
import { bidSearchStore } from '@/store';
import { BidSearchTasks } from './bid.tasks';
import { BidSearchDate } from './bid.date';
import { BidSearchButtons } from './bid.buttons';
import { bidExcelService } from './bid-excel.service';

export const BidSearchForm: FC = () => {
  const rows = bidSearchStore.useValue().rows || [];
  const resetRows = bidSearchStore.useResetRows();

  useEffect(() => {
    if (!rows || rows.length < 1) {
      return;
    }

    bidExcelService.exportToExcel(rows);
    resetRows();
  }, [rows]);

  return (
    <Paper elevation={3} sx={{ flex: 2, padding: 3, marginRight: 1 }}>
      <BidSearchTasks />
      <BidSearchDate />
      <BidSearchButtons />
    </Paper>
  );
};
