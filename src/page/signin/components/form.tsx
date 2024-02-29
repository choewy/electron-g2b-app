import { FormEvent, FunctionComponent, useCallback, useState } from 'react';
import { Link } from 'react-router-dom';

import { Box, Button, FormControl, TextField, Typography } from '@mui/material';

import { RouterPath } from '@router/enums';

import { AlertEvent } from '@layout/alert/alert.event';

import { sizeStore } from '@module/size/size.store';
import { authAxios } from '@module/auth/auth.axios';
import { SignInDto } from '@module/auth/dto/signin.dto';
import { authStore } from '@module/auth/auth.store';

export const SignInForm: FunctionComponent = () => {
  const width = sizeStore.useSignFormWidth();

  const setAuth = authStore.useSetState();
  const [capsLockPressed, setCapsLockPressed] = useState<boolean>(false);
  const [body, setBody] = useState<Omit<SignInDto, 'validate'>>(new SignInDto());

  const onSubmit = useCallback(
    async (e: FormEvent) => {
      e.preventDefault();

      const { ok, data, error } = await authAxios.signin(new SignInDto(body.email, body.password));

      if (error) {
        AlertEvent.warning(error.message).dispatch();
      } else {
        setAuth({ ok, profile: data });
      }
    },
    [body],
  );

  return (
    <Box component={'form'} sx={{ maxWidth: '468px', width }} onSubmit={onSubmit}>
      <TextField
        fullWidth
        label="이메일"
        value={body.email}
        onChange={(e) => setBody((prev) => ({ ...prev, email: e.target.value }))}
        onKeyUp={(e) => setCapsLockPressed(e.getModifierState('CapsLock'))}
      />
      <TextField
        fullWidth
        label="비밀번호"
        type="password"
        value={body.password}
        onChange={(e) => setBody((prev) => ({ ...prev, password: e.target.value }))}
        onKeyUp={(e) => setCapsLockPressed(e.getModifierState('CapsLock'))}
      />
      <Typography variant="body2" color="red" textAlign="center">
        {capsLockPressed && 'CapsLock이 활성화되어 있습니다.'}
      </Typography>
      <FormControl>
        <Button type="submit" disabled={capsLockPressed}>
          로그인
        </Button>
      </FormControl>
      <Box
        sx={{
          display: 'flex',
          marginTop: '10px',
          justifyContent: 'space-between',
          paddingX: '5px',
          boxSizing: 'border-box',
        }}
      >
        <Link to={'#'} style={{ textDecoration: 'none', color: 'GrayText' }}>
          <Typography variant="body2">비밀번호를 잊으셨나요?</Typography>
        </Link>
        <Link to={RouterPath.SignUp} style={{ textDecoration: 'none', color: 'GrayText' }}>
          <Typography variant="body2">계정이 없으신가요?</Typography>
        </Link>
      </Box>
    </Box>
  );
};
