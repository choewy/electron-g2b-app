import {
  AppBar,
  Box,
  Button,
  IconButton,
  Toolbar,
  Typography,
} from '@mui/material';
import { Menu as MenuIcon } from '@mui/icons-material';
import { useSetSidebar } from '@/states';
import { FC, useCallback } from 'react';

const CustomNavbar: FC = () => {
  const setOpen = useSetSidebar();

  const onOpen = useCallback(() => {
    setOpen(true);
  }, [setOpen]);

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
            onClick={onOpen}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            TODO
          </Typography>
          <Button color="inherit">로그인</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default CustomNavbar;
