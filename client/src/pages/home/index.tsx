import { FC } from 'react';
import { useOnClickLink } from '@/hooks';
import { useCallAuthApi } from './hooks';
import { PublicRouter } from '@/routes';

const HomePage: FC = () => {
  const user = useCallAuthApi();
  const onClickEvent = useOnClickLink();

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <h1>HOME PAGE</h1>
      {user.id === 0 && (
        <div>
          <button onClick={onClickEvent(PublicRouter.Login.path)}>
            로그인
          </button>
          <button onClick={onClickEvent(PublicRouter.SignUp.path)}>
            회원가입
          </button>
        </div>
      )}
    </div>
  );
};

export default HomePage;
