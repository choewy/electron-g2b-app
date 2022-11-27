import { Home as HomeIcon, GitHub as GitHubIcon } from '@mui/icons-material';
import { GitHubHref, HomePage } from '@/pages';
import { Router, RouterAbstract } from './class';

export class CommonRouter extends RouterAbstract {
  public static readonly Home = new Router('홈', '/', HomeIcon, HomePage);

  public static readonly GitHub = new Router(
    'GitHub',
    'https://github.com/choewy/electron-todo-app',
    GitHubIcon,
    GitHubHref,
  );

  public static render() {
    return super.render(false);
  }
}
