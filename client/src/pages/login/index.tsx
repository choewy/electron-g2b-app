import { FC, useState } from 'react';
import { useOnChangeEvent } from '@/hooks';
import { useOnSubmitLoginForm } from './hooks';
import { Box, Button, TextField, Typography } from '@mui/material';

const LoginPage: FC = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const onChangeEvent = useOnChangeEvent();
  const onSubmitEvent = useOnSubmitLoginForm();

  return (
    <Box
      component="form"
      sx={{
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        boxSizing: 'border-box',
        padding: 10,
      }}
      onSubmit={onSubmitEvent(email, password)}
    >
      <Typography
        variant="h4"
        align="center"
        sx={{
          py: 3,
          boxSizing: 'border-box',
        }}
      >
        로그인
      </Typography>
      <TextField
        type="text"
        label="이메일"
        placeholder="이메일을 입력하세요."
        autoComplete="off"
        size="small"
        sx={{ my: 1 }}
        value={email}
        onChange={onChangeEvent(setEmail)}
      />
      <TextField
        type="password"
        label="비밀번호"
        placeholder="비밀번호를 입력하세요."
        autoComplete="off"
        size="small"
        sx={{ my: 1 }}
        value={password}
        onChange={onChangeEvent(setPassword)}
      />
      <Button
        type="submit"
        variant="contained"
        sx={{
          width: '100%',
          my: 1,
        }}
      >
        로그인
      </Button>
    </Box>
  );
};

export default LoginPage;
