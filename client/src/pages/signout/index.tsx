import { FC, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { PublicRouter } from '@/routes';
import { useResetUser } from '@/states';
import { removeAccessToken } from '@/utils';

const SignOutPage: FC = () => {
  const navigate = useNavigate();
  const resetUser = useResetUser();

  useEffect(() => {
    removeAccessToken();
    resetUser();
    navigate(PublicRouter.Login.path, { replace: true });
  }, [resetUser, navigate]);

  return <></>;
};

export default SignOutPage;
