import { Home as HomeIcon } from '@mui/icons-material';
import { HomePage } from '@/pages';
import { Router, RouterAbstract } from './class';

export class CommonRouter extends RouterAbstract {
  public static readonly Home = new Router('홈', '/', HomeIcon, HomePage);

  public static render() {
    return super.render(false);
  }
}
