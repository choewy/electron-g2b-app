import { FC } from 'react';
import { Paper } from '@mui/material';
import { HrcsSearchButtons } from './hrcs.buttons';
import { HrcsSearchDate } from './hrcs.date';
import { HrcsDownload } from './hrcs.download';
import { HrcsSearchTasks } from './hrcs.tasks';
import { hrcsSearchStore } from '@/store';

export const HrcsSearchForm: FC = () => {
  const rows = hrcsSearchStore.useValue().rows || [];

  return (
    <Paper elevation={3} sx={{ flex: 2, padding: 3, marginRight: 1 }}>
      <HrcsSearchTasks />
      <HrcsSearchDate />
      <HrcsDownload rows={rows} />
      <HrcsSearchButtons />
    </Paper>
  );
};
