import { FunctionComponent } from 'react';
import { Link } from 'react-router-dom';

import { Box, Typography } from '@mui/material';

import { RouterPath } from '@router/enums';

import { sizeStore } from '@module/size/size.store';

export const EmailVerificationLinks: FunctionComponent = () => {
  const width = sizeStore.useSignFormWidth();

  return (
    <Box
      sx={{
        display: 'flex',
        marginTop: '10px',
        justifyContent: 'center',
        paddingX: '5px',
        boxSizing: 'border-box',
        maxWidth: '468px',
        width,
      }}
    >
      <Link to={RouterPath.SignOut} style={{ textDecoration: 'none', color: 'GrayText' }}>
        <Typography variant="body2">로그아웃</Typography>
      </Link>
    </Box>
  );
};
