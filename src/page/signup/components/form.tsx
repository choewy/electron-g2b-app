import { FormEvent, FunctionComponent, useCallback, useState } from 'react';

import { Box, Button, FormControl, TextField, Typography } from '@mui/material';

import { AlertEvent } from '@layout/alert/alert.event';

import { sizeStore } from '@module/size/size.store';
import { authAxios } from '@module/auth/auth.axios';
import { authStore } from '@module/auth/auth.store';
import { SignUpDto } from '@module/auth/dto/signup.dto';

export const SignUpForm: FunctionComponent = () => {
  const width = sizeStore.useCenterPageContentWidth();

  const setAuth = authStore.useSetState();
  const [capsLockPressed, setCapsLockPressed] = useState<boolean>(false);
  const [body, setBody] = useState<Omit<SignUpDto, 'validate'>>(new SignUpDto());

  const onSubmit = useCallback(
    async (e: FormEvent) => {
      e.preventDefault();

      const { ok, data, error } = await authAxios.signup(
        new SignUpDto(body.name, body.email, body.password, body.confirmPassword),
      );

      if (error) {
        AlertEvent.warning(error.message).dispatch();
      } else {
        setAuth((prev) => ({ ...prev, ok, profile: data }));
        AlertEvent.info('인증 메일이 발송되었습니다.').dispatch();
      }
    },
    [body],
  );

  return (
    <Box component={'form'} sx={{ maxWidth: '468px', width }} onSubmit={onSubmit}>
      <TextField
        fullWidth
        label="이름"
        value={body.name}
        onChange={(e) => setBody((prev) => ({ ...prev, name: e.target.value }))}
        onKeyUp={(e) => setCapsLockPressed(e.getModifierState('CapsLock'))}
      />
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
      <TextField
        fullWidth
        label="비밀번호 확인"
        type="password"
        value={body.confirmPassword}
        onChange={(e) => setBody((prev) => ({ ...prev, confirmPassword: e.target.value }))}
        onKeyUp={(e) => setCapsLockPressed(e.getModifierState('CapsLock'))}
      />
      <Typography variant="body2" color="red" textAlign="center">
        {capsLockPressed && 'CapsLock이 활성화되어 있습니다.'}
      </Typography>
      <FormControl>
        <Button type="submit" disabled={capsLockPressed}>
          회원가입
        </Button>
      </FormControl>
    </Box>
  );
};
