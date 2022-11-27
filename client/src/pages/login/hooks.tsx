import { authApi } from '@/apis';
import { CommonRouter } from '@/routes';
import { useSetAlert } from '@/states';
import { setAccessToken } from '@/utils';
import { FormEvent, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';

export const useOnSubmitLoginForm = () => {
  const navigate = useNavigate();
  const setAlert = useSetAlert();

  return useCallback(
    (email: string, password: string) =>
      async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
          const { data } = await authApi.signIn({
            email,
            password,
          });

          setAccessToken(data.accessToken);
          navigate(CommonRouter.Home.path, { replace: true });
        } catch (e) {
          setAlert((prev) => ({
            ...prev,
            error: '로그인 실패',
          }));
        }
      },
    [navigate, setAlert],
  );
};
