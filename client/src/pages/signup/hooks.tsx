import { authApi } from '@/apis';
import { CommonRouter } from '@/routes';
import { useSetAlert } from '@/states';
import { setAccessToken } from '@/utils';
import { FormEvent, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';

export const useOnSubmitSignUpForm = () => {
  const navigate = useNavigate();
  const setAlert = useSetAlert();

  return useCallback(
    (name: string, email: string, password: string, confirmPassword: string) =>
      async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        try {
          const { data } = await authApi.signUp({
            name,
            email,
            password,
            confirmPassword,
          });

          setAccessToken(data.accessToken);
          navigate(CommonRouter.Home.path, { replace: true });
        } catch (e) {
          console.log(e);
          setAlert((prev) => ({
            ...prev,
            error: '회원가입 실패',
          }));
        }
      },
    [navigate, setAlert],
  );
};
