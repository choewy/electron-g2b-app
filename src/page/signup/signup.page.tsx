import { authStore } from '@/store';
import { Box } from '@mui/material';
import { ChangeEvent, FC, useCallback, useState } from 'react';
import { SignUpButtons } from './signup.buttons';
import { SignUpInputs } from './signup.inputs';
import { SignUpAccountType } from './types';

export const SignUpPage: FC = () => {
  const [account, setAccount] = useState<SignUpAccountType>({
    email: '',
    password: '',
    confirmPassword: '',
  });

  const onSignUp = authStore.useSignUpCallback(
    account.email,
    account.password,
    account.confirmPassword,
  );

  const onChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      setAccount((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    },
    [setAccount],
  );

  return (
    <Box
      component="form"
      onSubmit={onSignUp}
      style={{
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        top: 80,
      }}
    >
      <SignUpInputs account={account} onChange={onChange} />
      <SignUpButtons />
    </Box>
  );
};
