import {
  AccountCircle as MeIcon,
  Logout as LogoutIcon,
  List as ListIcon,
} from '@mui/icons-material';
import { Router, RouterAbstract } from './class';
import { MyPage, SignOutPage, TodoPage } from '@/pages';

export class PrivateRouter extends RouterAbstract {
  public static readonly MyPage = new Router(
    '마이페이지',
    'me',
    MeIcon,
    MyPage,
  );

  public static readonly Todo = new Router(
    '할 일 목록',
    'todo',
    ListIcon,
    TodoPage,
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
