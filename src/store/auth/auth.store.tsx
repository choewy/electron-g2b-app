import { firebaseAuth, StoreInstance } from '@/core';
import { RouterProps } from '@/router';
import { User } from '@firebase/auth';
import { FormEvent, useCallback, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router';
import { appStore } from '../app';
import { AuthStoreType } from './types';

export class AuthStore extends StoreInstance<AuthStoreType> {
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
    const setError = appStore.useSetError();
    const setLoading = appStore.useSetLoading();

    return useCallback(
      async (e: FormEvent<HTMLElement>) => {
        e.preventDefault();

        try {
          setLoading(true);
          await firebaseAuth.signUpWithEmailAndPassword(email, password);
        } catch (e) {
          setError(firebaseAuth.getErrorMessageByCode(e));
        } finally {
          setLoading(false);
        }
      },
      [email, password, confirmPassword, setState, setLoading, setError],
    );
  }

  useSignInCallback(email: string, password: string) {
    const setState = this.useSetState();
    const setError = appStore.useSetError();
    const setLoading = appStore.useSetLoading();

    return useCallback(
      async (e: FormEvent<HTMLElement>) => {
        e.preventDefault();

        try {
          setLoading(true);
          await firebaseAuth.signInWithEmailAndPassword(email, password);
          setLoading(false);
        } catch (e) {
          setError(firebaseAuth.getErrorMessageByCode(e));
        } finally {
          setLoading(false);
        }
      },
      [email, password, setState, setLoading, setError],
    );
  }

  useSignOutCallback() {
    const setState = this.useSetState();

    return useCallback(async () => {
      try {
        setState((prev) => ({ ...prev, loading: true }));

        await firebaseAuth.signOut();

        setState((prev) => ({ ...prev, loading: false }));
      } catch (e) {
        setState((prev) => ({
          ...prev,
          loading: false,
          error: firebaseAuth.getErrorMessageByCode(e),
        }));
      }
    }, [setState]);
  }
}

export const authStore = new AuthStore(AuthStore.name, {
  user: null,
});
