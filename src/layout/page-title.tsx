import { FunctionComponent } from 'react';

import { Box, Typography } from '@mui/material';

export const PageTitle: FunctionComponent = () => {
  return (
    <Box sx={{ marginBottom: '20px', textAlign: 'center' }}>
      <Box sx={{ display: 'flex' }}>
        <Typography variant="h3" color="#A00" sx={{ marginBottom: '10px', fontWeight: 400 }}>
          G2B
        </Typography>
        <Typography variant="h3" color="GrayText" sx={{ marginBottom: '10px', fontWeight: 200 }}>
          .stdte.click
        </Typography>
      </Box>
      <Typography variant="subtitle1" color="GrayText">
        조달청 입찰공고 수집 앱
      </Typography>
    </Box>
  );
};
