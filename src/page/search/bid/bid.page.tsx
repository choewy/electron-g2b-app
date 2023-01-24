import { FC } from 'react';
import { Box } from '@mui/material';
import { KeywordBox } from '../keyword';
import { BidSearchForm } from './bid.form';

export const BidSearchPage: FC = () => {
  return (
    <Box display="flex">
      <BidSearchForm />
      <KeywordBox />
    </Box>
  );
};
