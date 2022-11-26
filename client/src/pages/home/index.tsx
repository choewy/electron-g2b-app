import { FC, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';

const HomePage: FC = () => {
  const navigate = useNavigate();

  const onClick = useCallback(
    (path: string) => () => {
      navigate(path, { replace: true });
    },
    [navigate],
  );

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <h1>HOME PAGE</h1>
      <div>
        <button onClick={onClick('/login')}>로그인</button>
        <button onClick={onClick('/signup')}>회원가입</button>
      </div>
    </div>
  );
};

export default HomePage;
