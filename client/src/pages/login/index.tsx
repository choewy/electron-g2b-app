import { authApi } from '@/apis';
import { CommonRouter } from '@/routes';
import { useSetAlert } from '@/states';
import { setAccessToken } from '@/utils';
import {
  ChangeEvent,
  Dispatch,
  FC,
  FormEvent,
  SetStateAction,
  useCallback,
  useState,
} from 'react';
import { useNavigate } from 'react-router-dom';

const LoginPage: FC = () => {
  const navigate = useNavigate();

  const setAlert = useSetAlert();

  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const onChange = useCallback(
    (setState: Dispatch<SetStateAction<string>>) =>
      (e: ChangeEvent<HTMLInputElement>) => {
        setState(e.target.value);
      },
    [],
  );

  const onSubmit = useCallback(
    async (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      try {
        const { data } = await authApi.signIn({
          email,
          password,
        });

        setAccessToken(data.accessToken);
        navigate(CommonRouter.Home.path, { replace: true });
      } catch (e) {
        setAlert((prev) => ({
          ...prev,
          error: '로그인 실패',
        }));
      }
    },
    [email, password, navigate, setAlert],
  );

  return (
    <div>
      <h1>LOGIN</h1>
      <form onSubmit={onSubmit}>
        <input type="text" value={email} onChange={onChange(setEmail)} />
        <input
          type="password"
          value={password}
          onChange={onChange(setPassword)}
        />
        <button type="submit">로그인</button>
      </form>
    </div>
  );
};

export default LoginPage;
