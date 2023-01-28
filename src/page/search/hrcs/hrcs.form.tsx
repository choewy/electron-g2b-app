import { FC } from 'react';
import { Paper } from '@mui/material';
import { HrcsSearchButtons } from './hrcs.buttons';
import { HrcsSearchDate } from './hrcs.date';
import { HrcsSearchTasks } from './hrcs.tasks';
import { hrcsSearchStore } from '@/store';
import { DownloadProvider } from '@/component';

export const HrcsSearchForm: FC = () => {
  const rows = hrcsSearchStore.useValue().rows || [];
  const resetRows = hrcsSearchStore.useResetRows();

  return (
    <Paper elevation={3} sx={{ flex: 2, padding: 3, marginRight: 1 }}>
      <HrcsSearchTasks />
      <HrcsSearchDate />
      <DownloadProvider rows={rows} resetRows={resetRows} filename="사전규격" />
      <HrcsSearchButtons />
    </Paper>
  );
};
