import { FunctionComponent, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import { RouterPath } from '@router/enums';

import { authStore } from '../auth.store';

export const EmailVerifyGuard: FunctionComponent = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const auth = authStore.useValue();

  useEffect(() => {
    if ((auth.ok === null || auth.ok) === false) {
      return;
    }

    if (location.pathname.startsWith(RouterPath.EmailVerification)) {
      if (auth.profile.verified === true) {
        navigate(RouterPath.Home, { replace: true });
      }
    } else {
      if (auth.profile.verified === false) {
        navigate(RouterPath.EmailVerification, { replace: true });
      }
    }
  }, [location, navigate, auth]);

  return null;
};
