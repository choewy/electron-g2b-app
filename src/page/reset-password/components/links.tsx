import { FunctionComponent } from 'react';
import { Link } from 'react-router-dom';

import { Box, Typography } from '@mui/material';

import { RouterPath } from '@router/enums';

import { sizeStore } from '@module/size/size.store';

export const ResetPasswordLinks: FunctionComponent = () => {
  const width = sizeStore.useSignFormWidth();

  return (
    <Box
      sx={{
        display: 'flex',
        marginTop: '10px',
        justifyContent: 'space-between',
        paddingX: '5px',
        boxSizing: 'border-box',
        maxWidth: '468px',
        width,
      }}
    >
      <Link to={RouterPath.SignIn} style={{ textDecoration: 'none', color: 'GrayText' }}>
        <Typography variant="body2">로그인</Typography>
      </Link>
      <Link to={RouterPath.SignUp} style={{ textDecoration: 'none', color: 'GrayText' }}>
        <Typography variant="body2">회원가입</Typography>
      </Link>
    </Box>
  );
};
