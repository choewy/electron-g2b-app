import { Navigate, createBrowserRouter } from 'react-router-dom';

import { App } from '@app/app';

import { RouterPath } from './enums';

import { AuthGuard } from '@module/auth/guards/auth.guard';
import { SignInPage } from '@page/signin/signin.page';
import { SignUpPage } from '@page/signup/signup.page';
import { SignOutPage } from '@page/signout/signout.page';
import { SearchPage } from '@page/search/search.page';
import { DrivePage } from '@page/drive/drive.page';

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
        ],
      },
      {
        element: <AuthGuard requiredAuth={true} />,
        children: [
          {
            path: RouterPath.SignOut,
            element: <SignOutPage />,
          },
          {
            path: RouterPath.Home,
            element: <Navigate to={RouterPath.Search} replace />,
          },
          {
            path: RouterPath.Search,
            element: <SearchPage />,
          },
          {
            path: RouterPath.Drive,
            element: <DrivePage />,
          },
        ],
      },
    ],
  },
]);
