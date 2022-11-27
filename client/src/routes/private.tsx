import {
  AccountCircle as MeIcon,
  Logout as LogoutIcon,
  List as ListIcon,
} from '@mui/icons-material';
import { Router, RouterAbstract } from './class';
import { MyPage, SignOutPage, TodoDetailPage, TodoListPage } from '@/pages';

export class PrivateRouter extends RouterAbstract {
  public static readonly MyPage = new Router(
    '마이페이지',
    'me',
    MeIcon,
    MyPage,
  );

  public static readonly TodoList = new Router(
    '할 일 목록',
    'todo',
    ListIcon,
    TodoListPage,
  );

  public static readonly TodoDetail = new Router(
    '',
    'todo/:todoId',
    ListIcon,
    TodoDetailPage,
  );

  public static readonly SignOut = new Router(
    '로그아웃',
    'signout',
    LogoutIcon,
    SignOutPage,
  );

  public static render() {
    return super.render(true);
  }
}
