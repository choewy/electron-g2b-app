import { FC, useState } from 'react';
import { useOnChangeEvent } from '@/hooks';
import { useOnSubmitSignUpForm } from './hooks';
import { Box, Button, TextField, Typography } from '@mui/material';

const SignUpPage: FC = () => {
  const [email, setEmail] = useState<string>('');
  const [name, setName] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [confirmPassword, setConfirmPassword] = useState<string>('');

  const onChangeEvent = useOnChangeEvent();
  const onSubmitEvent = useOnSubmitSignUpForm();

  return (
    <Box
      component="form"
      sx={{
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        boxSizing: 'border-box',
        alignItems: 'center',
        padding: 10,
      }}
      onSubmit={onSubmitEvent(name, email, password, confirmPassword)}
    >
      <Typography
        variant="h4"
        align="center"
        sx={{
          py: 3,
          boxSizing: 'border-box',
        }}
      >
        회원가입
      </Typography>

      <TextField
        type="text"
        label="이름"
        placeholder="이름을 입력하세요."
        autoComplete="off"
        size="small"
        sx={{
          my: 1,
          width: '300px',
        }}
        value={name}
        onChange={onChangeEvent(setName)}
      />

      <TextField
        type="text"
        label="이메일"
        placeholder="이메일을 입력하세요."
        autoComplete="off"
        size="small"
        sx={{
          my: 1,
          width: '300px',
        }}
        value={email}
        onChange={onChangeEvent(setEmail)}
      />

      <TextField
        type="password"
        label="비밀번호"
        placeholder="비밀번호를 입력하세요."
        autoComplete="off"
        size="small"
        sx={{
          my: 1,
          width: '300px',
        }}
        value={password}
        onChange={onChangeEvent(setPassword)}
      />

      <TextField
        type="password"
        label="비밀번호 확인"
        placeholder="비밀번호를 한번더 입력하세요."
        autoComplete="off"
        size="small"
        sx={{
          my: 1,
          width: '300px',
        }}
        value={confirmPassword}
        onChange={onChangeEvent(setConfirmPassword)}
      />

      <Button
        type="submit"
        variant="contained"
        sx={{
          my: 1,
          width: '300px',
        }}
      >
        회원가입
      </Button>
    </Box>
  );
};

export default SignUpPage;
