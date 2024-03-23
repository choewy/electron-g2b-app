import { FunctionComponent, useCallback, useState } from 'react';

import { Box, Button, FormControl, TextField, Typography } from '@mui/material';

import { AlertEvent } from '@layout/alert/alert.event';

import { sizeStore } from '@module/size/size.store';
import { ResetPasswordDto } from '@module/auth/dto/reset-password.dto';
import { emailAxios } from '@module/email/email.axios';
import { SendResetPasswordEmailDto } from '@module/email/dto/send-reset-password-email.dto';
import { authStore } from '@module/auth/auth.store';

export const ResetPasswordForm: FunctionComponent = () => {
  const width = sizeStore.useCenterPageContentWidth();

  const setAuth = authStore.useSetState();
  const [capsLockPressed, setCapsLockPressed] = useState<boolean>(false);
  const [emailSended, setEmailSended] = useState<boolean>(false);
  const [body, setBody] = useState<Omit<ResetPasswordDto, 'validate'>>({
    email: '',
    tempPassword: '',
    newPassword: '',
    confirmPassword: '',
  });

  const onClickSendEmail = useCallback(async () => {
    const { error } = await emailAxios.sendResetPasswordEmail(new SendResetPasswordEmailDto(body.email));

    if (error) {
      AlertEvent.warning(error.message).dispatch();
    } else {
      AlertEvent.info('임시 비밀번호가 발급되었습니다.').dispatch();

      setEmailSended(true);
    }
  }, [body.email, setEmailSended]);

  const onClickResetPassword = useCallback(async () => {
    const { error, data } = await emailAxios.verifyResetPasswordEmail(
      new ResetPasswordDto(body.email, body.tempPassword, body.newPassword, body.confirmPassword),
    );

    if (error) {
      AlertEvent.warning(error.message).dispatch();
    } else {
      AlertEvent.success('비밀번호가 재설정되었습니다.').dispatch();

      setAuth((prev) => ({ ...prev, ok: true, profile: data }));
    }
  }, [body, setAuth]);

  return (
    <Box
      component="div"
      sx={{ display: 'flex', flexDirection: 'column', maxWidth: '468px', width, alignItems: 'center' }}
    >
      <Box sx={{ width, maxWidth: '468px', display: 'flex', flexDirection: 'column' }}>
        {emailSended === false && (
          <TextField
            fullWidth
            label="이메일"
            value={body.email}
            onChange={(e) => setBody((prev) => ({ ...prev, email: e.target.value }))}
          />
        )}
        {emailSended === true && (
          <TextField
            fullWidth
            type="password"
            label="임시 비밀번호"
            value={body.tempPassword}
            onChange={(e) => setBody((prev) => ({ ...prev, tempPassword: e.target.value }))}
            onKeyUp={(e) => setCapsLockPressed(e.getModifierState('CapsLock'))}
          />
        )}
        {emailSended === true && (
          <TextField
            fullWidth
            type="password"
            label="새 비밀번호"
            value={body.newPassword}
            onChange={(e) => setBody((prev) => ({ ...prev, newPassword: e.target.value }))}
            onKeyUp={(e) => setCapsLockPressed(e.getModifierState('CapsLock'))}
          />
        )}
        {emailSended === true && (
          <TextField
            fullWidth
            type="password"
            label="새 비밀번호 확인"
            value={body.confirmPassword}
            onChange={(e) => setBody((prev) => ({ ...prev, confirmPassword: e.target.value }))}
            onKeyUp={(e) => setCapsLockPressed(e.getModifierState('CapsLock'))}
          />
        )}
        <Typography variant="body2" color="red" textAlign="center">
          {capsLockPressed && 'CapsLock이 활성화되어 있습니다.'}
        </Typography>
        <FormControl sx={{ maxWidth: '468px', width }}>
          {emailSended === false && (
            <Button onClick={onClickSendEmail} fullWidth>
              임시 비밀번호 발급
            </Button>
          )}
          {emailSended === true && (
            <Button onClick={onClickResetPassword} fullWidth>
              비밀번호 변경
            </Button>
          )}
        </FormControl>
      </Box>
    </Box>
  );
};
