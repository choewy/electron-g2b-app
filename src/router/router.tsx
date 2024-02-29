import { Navigate, createBrowserRouter } from 'react-router-dom';

import { App } from '@app/app';

import { RouterPath } from './enums';

import { AuthGuard } from '@module/auth/guards/auth.guard';
import { EmailVerifyGuard } from '@module/auth/guards/email-verify.guard';

import { SignInPage } from '@page/signin/signin.page';
import { SignUpPage } from '@page/signup/signup.page';
import { SignOutPage } from '@page/signout/signout.page';
import { HomePage } from '@page/home/home.page';
import { EmailVerificationPage } from '@page/email-verification/email-verification.page';
import { ResetPasswordPage } from '@page/reset-password/reset-password.page';

export const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      {
        element: <AuthGuard requiredAuth={false} />,
        children: [
          {
            path: RouterPath.SignIn,
            element: <SignInPage />,
          },
          {
            path: RouterPath.SignUp,
            element: <SignUpPage />,
          },
          {
            path: RouterPath.ResetPassword,
            element: <ResetPasswordPage />,
          },
        ],
      },
      {
        element: (
          <>
            <AuthGuard requiredAuth={true} />
            <EmailVerifyGuard />
          </>
        ),
        children: [
          {
            path: RouterPath.Home,
            element: <HomePage />,
          },
          {
            path: RouterPath.EmailVerification,
            element: <EmailVerificationPage />,
          },
          {
            path: RouterPath.SignOut,
            element: <SignOutPage />,
          },
        ],
      },
      {
        path: '*',
        element: <Navigate to={RouterPath.Home} replace />,
      },
    ],
  },
]);
