import { FunctionComponent, PropsWithChildren } from 'react';

import { Box } from '@mui/material';

import { sizeStore } from '@module/size/size.store';
import { PageFooter } from '@layout/page-footer';

export const PageWideContainer: FunctionComponent<PropsWithChildren> = ({ children }) => {
  const pageHeight = sizeStore.useWidePageHeight();
  const contentHeight = sizeStore.useWidePageContentHeight();

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
        height: pageHeight,
        paddingX: 1,
        boxSizing: 'border-box',
      }}
    >
      <Box
        sx={{
          display: 'flex',
          my: 1,
          width: '100%',
          height: contentHeight,
          overflow: 'auto',
          justifyContent: 'center',
        }}
      >
        {children}
      </Box>
      <PageFooter />
    </Box>
  );
};
