import { FunctionComponent } from 'react';
import { useLocation } from 'react-router-dom';

import { Box, Drawer, List } from '@mui/material';

import { RouterPath } from '@router/enums';

import { sidebarStore } from './sidebar.store';

export const Sidebar: FunctionComponent = () => {
  const [sidebar, setSidebar] = sidebarStore.useState();

  const location = useLocation();

  for (const pathname of [
    RouterPath.Home,
    RouterPath.SignIn,
    RouterPath.SignUp,
    RouterPath.SignOut,
    RouterPath.ResetPassword,
    RouterPath.EmailVerification,
  ]) {
    if (pathname.startsWith(location.pathname)) {
      return null;
    }
  }

  return (
    <Drawer anchor="left" open={sidebar} onClose={() => setSidebar(false)}>
      <Box sx={{ width: 250 }}>
        <List disablePadding></List>
      </Box>
    </Drawer>
  );
};
