import {
  BidSearchPage,
  HomePage,
  HrcsSearchPage,
  SignInPage,
  SignOutPage,
  SignUpPage,
} from '@/page';
import { User } from '@firebase/auth';
import {
  Home as HomeIcon,
  Login as SignInIcon,
  Logout as SignOutIcon,
  Search as SearchIcon,
} from '@mui/icons-material';
import { RouterPropsMapType, RouterPropsType } from './types';

export class RouterPropsClass {
  selectMapByAuth(user: User | null): Partial<RouterPropsMapType> {
    const routerPropsMap: Partial<RouterPropsMapType> = {
      common: this.common,
    };

    if (user) {
      routerPropsMap.service = this.service;
      routerPropsMap.user = this.user;
    } else {
      routerPropsMap.visitor = this.visitor;
    }

    return routerPropsMap;
  }

  selectByPath(path: string): RouterPropsType | undefined {
    return this.all.find((router) => router.path === path);
  }

  get all(): RouterPropsType[] {
    return [...this.common, ...this.service, ...this.visitor, ...this.user];
  }

  get common(): RouterPropsType[] {
    return [this.Home];
  }

  get service(): RouterPropsType[] {
    return [this.BidSearch, this.HrcsSearch];
  }

  get visitor(): RouterPropsType[] {
    return [this.SignIn, this.SignUp];
  }

  get user(): RouterPropsType[] {
    return [this.SignOut];
  }

  get Home(): RouterPropsType {
    return {
      title: '홈',
      path: '/',
      icon: <HomeIcon />,
      page: <HomePage />,
    };
  }

  get SignUp(): RouterPropsType {
    return {
      title: '회원가입',
      path: '/signup',
      icon: <HomeIcon />,
      page: <SignUpPage />,
      hiddenInSidebar: true,
    };
  }

  get SignIn(): RouterPropsType {
    return {
      title: '로그인',
      path: '/signin',
      icon: <SignInIcon />,
      page: <SignInPage />,
    };
  }

  get SignOut(): RouterPropsType {
    return {
      title: '로그아웃',
      path: '/signout',
      icon: <SignOutIcon />,
      page: <SignOutPage />,
    };
  }

  get BidSearch(): RouterPropsType {
    return {
      title: '입찰 공고 검색',
      path: '/bid-search',
      icon: <SearchIcon />,
      page: <BidSearchPage />,
    };
  }

  get HrcsSearch(): RouterPropsType {
    return {
      title: '사전 규격 검색',
      path: '/hrcs-search',
      icon: <SearchIcon />,
      page: <HrcsSearchPage />,
    };
  }
}

export const RouterProps = new RouterPropsClass();
