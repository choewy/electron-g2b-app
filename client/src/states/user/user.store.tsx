import {
  atom,
  useRecoilState,
  useRecoilValue,
  useSetRecoilState,
} from 'recoil';
import { UserStore } from './types';

export const userStore = atom<UserStore>({
  key: 'userStore',
  default: {
    id: 0,
    name: '',
    email: '',
    imagePath: '',
  },
});

export const useUserState = () => useRecoilState(userStore);
export const useSetUser = () => useSetRecoilState(userStore);
export const useUserValue = () => useRecoilValue(userStore);
