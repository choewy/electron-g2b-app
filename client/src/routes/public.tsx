import {
  Login as LoginIcon,
  HowToReg as SignUpIcon,
} from '@mui/icons-material';
import { Router, RouterAbstract } from './class';
import { LoginPage, SignUpPage } from '@/pages';

export class PublicRouter extends RouterAbstract {
  public static readonly Login = new Router(
    '로그인',
    'login',
    LoginIcon,
    LoginPage,
  );

  public static readonly SignUp = new Router(
    '회원가입',
    'signup',
    SignUpIcon,
    SignUpPage,
  );

  public static render() {
    return super.render(false);
  }
}
