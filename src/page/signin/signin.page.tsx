import { authStore } from '@/store';
import { ChangeEvent, FC, useCallback, useState } from 'react';

export const SignInPage: FC = () => {
  const [account, setAccount] = useState<{ email: string; password: string }>({
    email: '',
    password: '',
  });

  const onSignIn = authStore.useSignInCallback(account.email, account.password);
  const onChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      setAccount((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    },
    [setAccount],
  );

  return (
    <form onSubmit={onSignIn}>
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
      <button type="submit">로그인</button>
    </form>
  );
};
