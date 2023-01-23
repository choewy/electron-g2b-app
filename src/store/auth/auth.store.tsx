import {
  EmailRegExp,
  firebaseAuth,
  PasswordRegExp,
  StoreInstance,
} from '@/core';
import { RouterProps } from '@/router';
import { User } from '@firebase/auth';
import { FormEvent, useCallback, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router';
import { appStore } from '../app';
import { AuthStoreType } from './types';

export class AuthStore extends StoreInstance<AuthStoreType> {
  private useValidation(
    email: string,
    password: string,
    confirmPassword: string,
  ): string | undefined {
    if (!email) {
      return '이메일 계정을 입력하세요.';
    }

    if (!new EmailRegExp().test(email)) {
      return '이메일 형식이 아닙니다.';
    }

    if (!password) {
      return '비밀번호를 입력하세요.';
    }

    if (!new PasswordRegExp().test(password)) {
      return '비밀번호는 8자 이상(숫자, 특수문자 필수 포함)으로 입력하세요.';
    }

    if (password !== confirmPassword) {
      return '비밀번호가 일치하지 않습니다.';
    }
  }

  useAuth(): User | null {
    const location = useLocation();
    const navigate = useNavigate();
    const [{ user }, setState] = this.useState();

    useEffect(() => {
      firebaseAuth.bindStateObserver(setState);
    }, [setState]);

    useEffect(() => {
      if (
        user &&
        [RouterProps.SignIn.path, RouterProps.SignUp.path].includes(
          location.pathname,
        )
      ) {
        return navigate(RouterProps.Home.path, { replace: true });
      }

      if (
        !user &&
        ![
          RouterProps.Home.path,
          RouterProps.SignIn.path,
          RouterProps.SignUp.path,
        ].includes(location.pathname)
      ) {
        return navigate(RouterProps.SignIn.path, { replace: true });
      }
    }, [user, location, navigate]);

    return user;
  }

  useSignUpCallback(email: string, password: string, confirmPassword: string) {
    const setState = this.useSetState();
    const setMessage = appStore.useSetMessage();
    const setLoading = appStore.useSetLoading();

    return useCallback(
      async (e: FormEvent<HTMLElement>) => {
        e.preventDefault();

        const validation = this.useValidation(email, password, confirmPassword);

        if (validation) {
          return setMessage({ warn: validation });
        }

        try {
          setLoading(true);
          await firebaseAuth.signUpWithEmailAndPassword(email, password);
        } catch (e) {
          firebaseAuth.getErrorMessageByCode(setMessage, e);
        } finally {
          setLoading(false);
        }
      },
      [email, password, confirmPassword, setState, setLoading, setMessage],
    );
  }

  useSignInCallback(email: string, password: string) {
    const setState = this.useSetState();
    const setMessage = appStore.useSetMessage();
    const setLoading = appStore.useSetLoading();

    return useCallback(
      async (e: FormEvent<HTMLElement>) => {
        e.preventDefault();

        const validation = this.useValidation(email, password, password);

        if (validation) {
          return setMessage({ warn: validation });
        }

        try {
          setLoading(true);
          await firebaseAuth.signInWithEmailAndPassword(email, password);
          setLoading(false);
        } catch (e) {
          firebaseAuth.getErrorMessageByCode(setMessage, e);
        } finally {
          setLoading(false);
        }
      },
      [email, password, setState, setLoading, setMessage],
    );
  }

  useSignOutCallback() {
    const setState = this.useSetState();
    const setMessage = appStore.useSetMessage();
    const setLoading = appStore.useSetLoading();

    return useCallback(async () => {
      try {
        setLoading(true);
        await firebaseAuth.signOut();
        setMessage({ info: '로그아웃 되었습니다.' });
      } catch (e) {
        firebaseAuth.getErrorMessageByCode(setMessage, e);
      } finally {
        setLoading(false);
      }
    }, [setState]);
  }
}

export const authStore = new AuthStore(AuthStore.name, {
  user: null,
});
