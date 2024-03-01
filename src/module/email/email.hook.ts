import { useCallback, useEffect, useState } from 'react';

import { authStore } from '@module/auth/auth.store';

import { emailAxios } from './email.axios';

export class EmailHook {
  useVerifyEmailSeconds() {
    const [seconds, setSeconds] = useState<number>(0);

    const setAuth = authStore.useSetState();
    const getVerifyEmailSeconds = useCallback(async () => {
      const { ok, data } = await emailAxios.getRemainedVerifyEmailSeconds();

      if (ok === false) {
        return;
      }

      if (data > 0) {
        setSeconds(300 - data);
      }

      setAuth((prev) => ({ ...prev, verify: data > 0 }));
    }, [setAuth, setSeconds]);

    useEffect(() => {
      getVerifyEmailSeconds();
    }, [getVerifyEmailSeconds]);

    return seconds;
  }
}

export const emailHook = new EmailHook();
