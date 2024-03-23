import { FunctionComponent, useCallback, useEffect, useState } from 'react';

import { Box } from '@mui/material';

import { AlertEvent } from '@layout/alert/alert.event';

import { authStore } from '@module/auth/auth.store';
import { sizeStore } from '@module/size/size.store';

import { VerificationEmailCodeTextField } from './textfield';
import { emailAxios } from '@module/email/email.axios';

export const EmailVerificationForm: FunctionComponent = () => {
  const width = sizeStore.useCenterPageContentWidth();
  const setAuth = authStore.useSetState();

  const [codes, setCodes] = useState<string[]>(new Array(6).fill(''));

  const verifyEmailCode = useCallback(async () => {
    const { error, data } = await emailAxios.verifySignUpEmail(codes.join(''));

    if (error) {
      AlertEvent.warning(error.message).dispatch();
    } else {
      setAuth((prev) => ({ ...prev, verify: false, profile: data }));

      AlertEvent.success('이메일 인증이 완료되었습니다.').dispatch();
    }
  }, [codes]);

  useEffect(() => {
    if (codes.join('').length < 6) {
      return;
    }

    verifyEmailCode();
  }, [codes, verifyEmailCode]);

  return (
    <Box
      component="div"
      sx={{ display: 'flex', flexDirection: 'column', maxWidth: '468px', width, alignItems: 'center' }}
    >
      <Box sx={{ width, maxWidth: '300px', display: 'flex', gap: 0.5 }}>
        {codes.map((_, index) => (
          <VerificationEmailCodeTextField
            key={['verify-email-form-textfield', index].join('-')}
            index={index}
            codes={codes}
            setCodes={setCodes}
          />
        ))}
      </Box>
    </Box>
  );
};
