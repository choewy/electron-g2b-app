import {
  atom,
  useRecoilState,
  useRecoilValue,
  useSetRecoilState,
} from 'recoil';

export const loadingStore = atom<boolean>({
  key: 'loadingStore',
  default: false,
});

export const useLoadingState = () => useRecoilState(loadingStore);
export const useSetLoading = () => useSetRecoilState(loadingStore);
export const useLoadingValue = () => useRecoilValue(loadingStore);
