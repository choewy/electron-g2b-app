import { FC } from 'react';
import {
  AppBar,
  Avatar,
  Box,
  Button,
  ButtonGroup,
  IconButton,
  Toolbar,
} from '@mui/material';
import { Menu as MenuIcon } from '@mui/icons-material';
import { useSetSidebar, useUserValue } from '@/states';
import { useOnClickLink } from '@/hooks';
import { PublicRouter } from '@/routes';

const CustomNavbar: FC = () => {
  const user = useUserValue();

  const setOpen = useSetSidebar();
  const onClickEvent = useOnClickLink();

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
          <Box sx={{ flexGrow: 1 }} />
          {user.id === 0 ? (
            <ButtonGroup variant="text">
              <Button
                onClick={onClickEvent(PublicRouter.Login.path)}
                sx={{ color: '#fff', padding: 2, boxSizing: 'border-box' }}
              >
                로그인
              </Button>
              <Button
                onClick={onClickEvent(PublicRouter.SignUp.path)}
                sx={{ color: '#fff', padding: 2, boxSizing: 'border-box' }}
              >
                회원가입
              </Button>
            </ButtonGroup>
          ) : (
            <Avatar src={user.imagePath} />
          )}
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default CustomNavbar;
