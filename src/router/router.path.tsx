import { BidSearchPage, HomePage, HrcsSearchPage, SettingPage } from '@/page';
import {
  Home as HomeIcon,
  Settings as SettingIcon,
  Search as SearchIcon,
} from '@mui/icons-material';
import { RouterPropsType } from './types';

export class RouterPropsClass {
  get all(): RouterPropsType[] {
    return [...this.global, ...this.common, ...this.private];
  }

  get global(): RouterPropsType[] {
    return [this.Home];
  }

  get common(): RouterPropsType[] {
    return [this.BidSearch, this.HrcsSearch];
  }

  get private(): RouterPropsType[] {
    return [this.Setting];
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
