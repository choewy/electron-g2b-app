import { FC, useEffect } from 'react';
import { Paper } from '@mui/material';
import { HrcsSearchButtons } from './hrcs.buttons';
import { HrcsSearchDate } from './hrcs.date';
import { HrcsSearchTasks } from './hrcs.tasks';
import { hrcsSearchStore } from '@/store';
import { hrcsExcelService } from './hrcs-excel.service';

export const HrcsSearchForm: FC = () => {
  const rows = hrcsSearchStore.useValue().rows || [];
  const resetRows = hrcsSearchStore.useResetRows();

  useEffect(() => {
    if (!rows || rows.length < 1) {
      return;
    }

    hrcsExcelService.exportToExcel(rows);
    resetRows();
  }, [rows]);

  return (
    <Paper elevation={3} sx={{ flex: 2, padding: 3, marginRight: 1 }}>
      <HrcsSearchTasks />
      <HrcsSearchDate />
      <HrcsSearchButtons />
    </Paper>
  );
};
