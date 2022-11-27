import {
  AccountCircle as MeIcon,
  Logout as LogoutIcon,
} from '@mui/icons-material';
import { Router, RouterAbstract } from './class';
import { MyPage, SignOutPage } from '@/pages';

export class PrivateRouter extends RouterAbstract {
  public static readonly MyPage = new Router(
    '마이페이지',
    'me',
    MeIcon,
    MyPage,
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
