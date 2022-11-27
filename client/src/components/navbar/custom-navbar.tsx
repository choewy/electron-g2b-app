import { FC } from 'react';
import {
  AppBar,
  Avatar,
  Box,
  Button,
  IconButton,
  Toolbar,
  Typography,
} from '@mui/material';
import { Menu as MenuIcon } from '@mui/icons-material';
import { useSetSidebar, useUserValue } from '@/states';

const CustomNavbar: FC = () => {
  const user = useUserValue();

  const setOpen = useSetSidebar();

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
            onClick={() => setOpen(true)}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            TODO
          </Typography>
          {user.id === 0 ? (
            <Button color="inherit">로그인</Button>
          ) : (
            <Avatar src={user.imagePath} />
          )}
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default CustomNavbar;
