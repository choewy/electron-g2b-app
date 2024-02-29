import { ChangeEvent, FunctionComponent, useCallback, useEffect, useRef } from 'react';
import { SetterOrUpdater } from 'recoil';

import { TextField } from '@mui/material';

export const VerifyEmailCodeTextField: FunctionComponent<{
  index: number;
  codes: string[];
  setCodes: SetterOrUpdater<string[]>;
}> = ({ index, codes, setCodes }) => {
  const inputRef = useRef<HTMLInputElement | null>(null);

  const onChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      const value = e.target.value;

      setCodes((prev) => {
        if (value.length === 6) {
          return value.split('');
        }

        const codes = [...prev];

        switch (value.length) {
          case 0:
            if (codes[index] === '') {
              break;
            }

            codes[index] = '';
            return codes;

          case 1:
          case 2:
            const i = value.length - 1;
            if (codes[index] === value.charAt(i)) {
              break;
            }

            codes[index] = value.charAt(i);
            return codes;
        }

        return prev;
      });
    },
    [index, setCodes],
  );

  useEffect(() => {
    if (inputRef.current == null) {
      return;
    }

    const prevIndex = index - 1;

    if (prevIndex < 0) {
      return;
    }

    if (codes[index] || !codes[prevIndex]) {
      return;
    }

    inputRef.current.focus();
  }, [inputRef, codes, index]);

  return (
    <TextField
      inputRef={inputRef}
      fullWidth
      value={codes[index]}
      onChange={onChange}
      inputProps={{ style: { textAlign: 'center' } }}
      focused={codes[index] !== ''}
    />
  );
};
