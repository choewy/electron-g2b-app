import { FC, useEffect } from 'react';
import { Box } from '@mui/material';
import { KeywordBox } from '../keyword';
import { HrcsSearchForm } from './hrcs.form';
import { hrcsSearchStore } from '@/store';

export const HrcsSearchPage: FC = () => {
  const resetState = hrcsSearchStore.useResetState();

  useEffect(() => {
    resetState();
  }, [resetState]);

  return (
    <Box component="div" display="flex" sx={{ padding: 1, height: 600 }}>
      <HrcsSearchForm />
      <KeywordBox />
    </Box>
  );
};
