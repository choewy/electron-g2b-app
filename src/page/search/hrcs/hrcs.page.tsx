import { FC } from 'react';
import { Box } from '@mui/material';
import { KeywordBox } from '../keyword';
import { HrcsSearchForm } from './hrcs.form';

export const HrcsSearchPage: FC = () => {
  return (
    <Box component="div" display="flex" sx={{ padding: 1, height: 600 }}>
      <HrcsSearchForm />
      <KeywordBox />
    </Box>
  );
};
