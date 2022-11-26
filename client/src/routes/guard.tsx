import { authApi } from '@/apis';
import { useSetAlert, useSetUser } from '@/states';
import { getAccessToken } from '@/utils';
import { FC, useCallback, useEffect } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import { PublicRouter } from './public';

const RouterGuard: FC = () => {
  const navigate = useNavigate();

  const setUser = useSetUser();
  const setAlert = useSetAlert();

  const callApi = useCallback(async () => {
    try {
      const { data } = await authApi.auth();
      setUser(data);
    } catch (e) {
      setAlert((prev) => ({
        ...prev,
        error: '로그인 페이지로 이동합니다.',
      }));

      navigate(PublicRouter.Login.path, {
        replace: true,
      });
    }
  }, [setUser, setAlert, navigate]);

  useEffect(() => {
    if (getAccessToken()) {
      callApi();
    } else {
      navigate(PublicRouter.Login.path, {
        replace: true,
      });
    }
  }, [callApi, navigate]);

  return <Outlet />;
};

export default RouterGuard;
