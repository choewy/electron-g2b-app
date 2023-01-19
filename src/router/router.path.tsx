import { BidSearchPage, HomePage, SettingPage } from '@/page';
import {
  Home as HomeIcon,
  Settings as SettingIcon,
  Search as BidSearchIcon,
} from '@mui/icons-material';
import { RouterPropsType } from './types';

export class RouterPropsClass {
  get all(): RouterPropsType[] {
    return [this.Home, this.BidSearch, this.Setting];
  }

  get Home(): RouterPropsType {
    return {
      title: '홈',
      path: '/',
      icon: <HomeIcon />,
      page: <HomePage />,
    };
  }

  get BidSearch(): RouterPropsType {
    return {
      title: '입찰 공고 검색',
      path: '/bid-search',
      icon: <BidSearchIcon />,
      page: <BidSearchPage />,
    };
  }

  get Setting(): RouterPropsType {
    return {
      title: '설정',
      path: '/setting',
      icon: <SettingIcon />,
      page: <SettingPage />,
    };
  }

  findByPath(path: string): RouterPropsType | undefined {
    return this.all.find((router) => router.path === path);
  }
}

export const RouterProps = new RouterPropsClass();
