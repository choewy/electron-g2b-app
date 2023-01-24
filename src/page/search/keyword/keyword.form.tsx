import { ChangeEvent, FC, useCallback, useState } from 'react';
import { Box } from '@mui/material';
import { keywordStore } from '@/store';
import { KeywordFormType } from './types';

export const KeywordForm: FC<KeywordFormType> = ({ fixedType, onLoad }) => {
  const [keyword, setKeyword] = useState<string>('');

  const onChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      setKeyword(e.target.value);
    },
    [setKeyword],
  );

  const onReset = useCallback(() => {
    setKeyword('');
  }, [setKeyword]);

  const onAppend = keywordStore.useAppendCallback(
    fixedType,
    keyword,
    onLoad,
    onReset,
  );

  return (
    <Box component="form" onSubmit={onAppend}>
      <input value={keyword} onChange={onChange} />
      <button type="submit">추가</button>
    </Box>
  );
};
