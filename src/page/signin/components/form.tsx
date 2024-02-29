import { FormEvent, FunctionComponent, useCallback, useState } from 'react';

import { Box, Button, FormControl, TextField, Typography } from '@mui/material';

import { AlertEvent } from '@layout/alert/alert.event';

import { sizeStore } from '@module/size/size.store';
import { authAxios } from '@module/auth/auth.axios';
import { SignInDto } from '@module/auth/dto/signin.dto';
import { authStore } from '@module/auth/auth.store';

export const SignInForm: FunctionComponent = () => {
  const width = sizeStore.useCenterPageContentWidth();

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
        setAuth({ ok, profile: data, verify: false });
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
    </Box>
  );
};
