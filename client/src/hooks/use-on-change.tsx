import { ChangeEvent, Dispatch, SetStateAction, useCallback } from 'react';
import { SetterOrUpdater } from 'recoil';

export const useOnChangeEvent = () => {
  return useCallback(
    (setState: Dispatch<SetStateAction<string>> | SetterOrUpdater<string>) =>
      (e: ChangeEvent<HTMLInputElement>) => {
        setState(e.target.value);
      },
    [],
  );
};
