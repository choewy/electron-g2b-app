import { ChangeEvent, FC, useCallback, useState } from 'react';
import { Box } from '@mui/material';

import { authStore } from '@/store';
import { SignInInputs } from './signin.inputs';
import { SignInAccountType } from './types';
import { SignInButtons } from './signin.buttons';

export const SignInPage: FC = () => {
  const [account, setAccount] = useState<SignInAccountType>({
    email: '',
    password: '',
  });

  const onSignIn = authStore.useSignInCallback(account.email, account.password);
  const onChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      const { name, value } = e.target;
      setAccount((prev) => ({ ...prev, [name]: value }));
    },
    [setAccount],
  );

  return (
    <Box
      component="form"
      onSubmit={onSignIn}
      style={{
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        top: 80,
      }}
    >
      <SignInInputs account={account} onChange={onChange} />
      <SignInButtons />
    </Box>
  );
};
