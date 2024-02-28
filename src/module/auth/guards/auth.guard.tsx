import { FunctionComponent, useEffect, useState } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';

import { RouterPath } from '@router/enums';

import { authStore } from '../auth.store';

export const AuthGuard: FunctionComponent<{ requiredAuth: boolean }> = ({ requiredAuth }) => {
  const navigate = useNavigate();
  const auth = authStore.useValue();

  const [pass, setPass] = useState<boolean>(false);

  useEffect(() => {
    if (auth.ok === null) {
      return;
    }

    if (requiredAuth) {
      auth.ok ? setPass(true) : navigate(RouterPath.SignIn, { replace: true });
    } else {
      auth.ok ? navigate(RouterPath.Search, { replace: true }) : setPass(true);
    }
  }, [requiredAuth, navigate, auth]);

  return pass ? <Outlet /> : null;
};
