import {
  atom,
  useRecoilState,
  useRecoilValue,
  useSetRecoilState,
} from 'recoil';

export const sidebarStore = atom<boolean>({
  key: 'sidebarStore',
  default: false,
});

export const useSetSidebar = () => useSetRecoilState(sidebarStore);
export const useSidebarValue = () => useRecoilValue(sidebarStore);
export const useSidebarState = () => useRecoilState(sidebarStore);
