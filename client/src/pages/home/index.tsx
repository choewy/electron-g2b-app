import { FC } from 'react';
import { useOnClickLink } from '@/hooks';
import { useCallAuthApi } from './hooks';
import { PublicRouter } from '@/routes';
import { Box, Button, ButtonGroup, Paper, Typography } from '@mui/material';

const HomePage: FC = () => {
  const user = useCallAuthApi();
  const onClickEvent = useOnClickLink();

  return (
    <Box
      sx={{
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        px: 10,
        boxSizing: 'border-box',
      }}
    >
      <Typography
        variant="h4"
        align="center"
        sx={{
          py: 3,
          boxSizing: 'border-box',
        }}
      >
        Electron Todo App
      </Typography>
      {user.id === 0 && (
        <ButtonGroup variant="outlined">
          <Button onClick={onClickEvent(PublicRouter.Login.path)}>
            로그인
          </Button>
          <Button onClick={onClickEvent(PublicRouter.SignUp.path)}>
            회원가입
          </Button>
        </ButtonGroup>
      )}
      <Paper
        sx={{
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          mt: 5,
          padding: 5,
          boxSizing: 'border-box',
        }}
        elevation={2}
      >
        hi there ✋
      </Paper>
    </Box>
  );
};

export default HomePage;
