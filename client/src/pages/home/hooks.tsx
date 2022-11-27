import { authApi } from '@/apis';
import { useUserState } from '@/states';
import { getAccessToken } from '@/utils';
import { useCallback, useEffect } from 'react';

export const useCallAuthApi = () => {
  const [user, setUser] = useUserState();

  const callApi = useCallback(async () => {
    try {
      const { data } = await authApi.auth();
      setUser(data);
    } catch {}
  }, [setUser]);

  useEffect(() => {
    if (getAccessToken()) {
      callApi();
    }
  }, [callApi]);

  return user;
};
