import { DateTime } from 'luxon';
import { FunctionComponent, useCallback, useEffect, useState } from 'react';

import { Button, FormControl } from '@mui/material';

import { AlertEvent } from '@layout/alert/alert.event';

import { authStore } from '@module/auth/auth.store';
import { emailAxios } from '@module/email/email.axios';
import { emailHook } from '@module/email/email.hook';
import { sizeStore } from '@module/size/size.store';

export const SendVerifyEmailButton: FunctionComponent = () => {
  const width = sizeStore.useSignFormWidth();
  const initSeconds = emailHook.useVerifyEmailSeconds();

  const [auth, setAuth] = authStore.useState();
  const [seconds, setSeconds] = useState<number>(0);

  const onClick = useCallback(async () => {
    const { error } = await emailAxios.sendVerifyEmail();

    if (error) {
      AlertEvent.warning(error.message).dispatch();
    } else {
      AlertEvent.info('인증 메일이 발송되었습니다.').dispatch();
      setAuth((prev) => ({ ...prev, verify: true }));
    }
  }, [setAuth]);

  useEffect(() => {
    setSeconds(initSeconds);
  }, [initSeconds]);

  useEffect(() => {
    if (auth.verify === false) {
      return;
    }

    if (seconds > 3000) {
      return setAuth((prev) => ({ ...prev, verify: false }));
    }

    const timeout = setTimeout(() => {
      setSeconds((prev) => prev + 1);
    }, 1_000);

    return () => clearTimeout(timeout);
  }, [auth, seconds, setAuth, setSeconds]);

  return (
    <FormControl sx={{ maxWidth: '468px', width }}>
      <Button onClick={onClick} disabled={auth.verify} fullWidth>
        인증 메일 요청
        {auth.verify &&
          `(${DateTime.local().startOf('hour').plus({ minutes: 5 }).minus({ seconds }).toFormat('mm:ss')})`}
      </Button>
    </FormControl>
  );
};
