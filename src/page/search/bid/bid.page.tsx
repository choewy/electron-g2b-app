import { FC } from 'react';
import { Box } from '@mui/material';
import { KeywordBox } from '../keyword';
import { BidSearchForm } from './bid.form';

export const BidSearchPage: FC = () => {
  return (
    <Box component="div" display="flex" sx={{ padding: 1, height: 600 }}>
      <BidSearchForm />
      <KeywordBox />
    </Box>
  );
};
