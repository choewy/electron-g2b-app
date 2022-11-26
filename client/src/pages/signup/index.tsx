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

const SignUpPage: FC = () => {
  const navigate = useNavigate();

  const setAlert = useSetAlert();

  const [email, setEmail] = useState<string>('');
  const [name, setName] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [confirmPassword, setConfirmPassword] = useState<string>('');

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
        const { data } = await authApi.signUp({
          name,
          email,
          password,
          confirmPassword,
        });

        setAccessToken(data.accessToken);
        navigate(CommonRouter.Home.path, { replace: true });
      } catch (e) {
        console.log(e);
        setAlert((prev) => ({
          ...prev,
          error: '회원가입 실패',
        }));
      }
    },
    [name, email, password, confirmPassword, navigate, setAlert],
  );

  return (
    <div>
      <h1>SIGN-UP</h1>
      <form onSubmit={onSubmit}>
        <input type="text" value={name} onChange={onChange(setName)} />
        <input type="text" value={email} onChange={onChange(setEmail)} />
        <input
          type="password"
          value={password}
          onChange={onChange(setPassword)}
        />
        <input
          type="password"
          value={confirmPassword}
          onChange={onChange(setConfirmPassword)}
        />
        <button type="submit">회원가입</button>
      </form>
    </div>
  );
};

export default SignUpPage;
