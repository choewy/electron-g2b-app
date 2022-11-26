import { AccountCircle as MeIcon } from '@mui/icons-material';
import { Router, RouterAbstract } from './class';
import { MyPage } from '@/pages';

export class PrivateRouter extends RouterAbstract {
  public static readonly MyPage = new Router(
    '마이페이지',
    'me',
    MeIcon,
    MyPage,
  );

  public static render() {
    return super.render(true);
  }
}
