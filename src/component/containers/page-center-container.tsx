import { FunctionComponent, PropsWithChildren } from 'react';

import { Box } from '@mui/material';

import { PageFooter } from '@layout/page-footer';
import { PageTitle } from '@layout/page-title';

export const PageCenterContainer: FunctionComponent<PropsWithChildren> = ({ children }) => {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', height: '100vh', width: '100%' }}>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          height: 'calc(100% - 55px)',
          width: '100%',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <PageTitle />
        {children}
      </Box>
      <PageFooter />
    </Box>
  );
};
