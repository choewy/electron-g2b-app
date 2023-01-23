import { FC, Fragment, useEffect } from 'react';
import { authStore } from '@/store';

export const SignOutPage: FC = () => {
  const onSignOut = authStore.useSignOutCallback();

  useEffect(() => {
    onSignOut();
  }, [onSignOut]);

  return <Fragment />;
};
