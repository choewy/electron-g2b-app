import { authStore } from '@/store';
import { ChangeEvent, FC, useCallback, useState } from 'react';

export const SignUpPage: FC = () => {
  const [account, setAccount] = useState<{
    email: string;
    password: string;
    confirmPassword: string;
  }>({
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
    <form onSubmit={onSignUp}>
      <input
        type="text"
        name="email"
        value={account.email}
        onChange={onChange}
      />
      <input
        type="password"
        name="password"
        value={account.password}
        onChange={onChange}
      />
      <input
        type="password"
        name="confirmPassword"
        value={account.confirmPassword}
        onChange={onChange}
      />
      <button type="submit">회원가입</button>
    </form>
  );
};
