import { useCallback, useEffect } from 'react';

import { authStore } from './auth.store';
import { authAxios } from './auth.axios';

import { ProfileDto } from './dto/profile.dto';

export class AuthHook {
  useAuth(): void {
    const setAuth = authStore.useSetState();
    const setAuthWithAxios = useCallback(async () => {
      const { ok, data } = await authAxios.auth();

      if (ok) {
        setAuth({ ok, profile: data });
      } else {
        setAuth({ ok, profile: new ProfileDto() });
      }
    }, [setAuth]);

    useEffect(() => {
      setAuthWithAxios();
    }, [setAuthWithAxios]);
  }
}

export const authHook = new AuthHook();
