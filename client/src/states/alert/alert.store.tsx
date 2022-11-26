import {
  atom,
  useRecoilState,
  useRecoilValue,
  useSetRecoilState,
} from 'recoil';
import { AlertStore } from './types';

export const alertStore = atom<AlertStore>({
  key: 'alertStore',
  default: {
    info: '',
    success: '',
    warning: '',
    error: '',
  },
});

export const useSetAlert = () => useSetRecoilState(alertStore);
export const useAlertState = () => useRecoilState(alertStore);
export const useAlertValue = (key?: keyof AlertStore) => {
  const values = useRecoilValue(alertStore);
  return key ? values[key] : values;
};
