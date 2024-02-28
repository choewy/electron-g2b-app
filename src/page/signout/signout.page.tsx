import { FunctionComponent, useCallback, useEffect } from 'react';

import { authStore } from '@module/auth/auth.store';
import { authAxios } from '@module/auth/auth.axios';
import { ProfileDto } from '@module/auth/dto/profile.dto';

export const SignOutPage: FunctionComponent = () => {
  const setAuth = authStore.useSetState();

  const handleSignout = useCallback(async () => {
    await authAxios.signout();
    setAuth({ ok: false, profile: new ProfileDto() });
  }, []);

  useEffect(() => {
    handleSignout();
  }, [handleSignout]);

  return null;
};
