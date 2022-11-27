import { lazy } from 'react';

export const HomePage = lazy(() => import('./home'));
export const LoginPage = lazy(() => import('./login'));
export const SignUpPage = lazy(() => import('./signup'));
export const SignOutPage = lazy(() => import('./signout'));
export const MyPage = lazy(() => import('./mypage'));
export const TodoListPage = lazy(() => import('./todo-list'));
export const TodoDetailPage = lazy(() => import('./todo-detail'));
