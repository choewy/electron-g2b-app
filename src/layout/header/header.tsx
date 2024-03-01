import { FunctionComponent } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import { AppBar, Box, Button, Toolbar, Typography } from '@mui/material';

import { RouterPath } from '@router/enums';

export const Header: FunctionComponent = () => {
  const location = useLocation();
  const navigate = useNavigate();

  for (const pathname of [
    RouterPath.SignIn,
    RouterPath.SignUp,
    RouterPath.SignOut,
    RouterPath.ResetPassword,
    RouterPath.EmailVerification,
  ]) {
    if (location.pathname.startsWith(pathname)) {
      return null;
    }
  }

  return (
    <Box>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            G2B
          </Typography>
          <Box>
            <Button color="inherit" variant="outlined" onClick={() => navigate(RouterPath.SignOut, { replace: true })}>
              로그아웃
            </Button>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
};
