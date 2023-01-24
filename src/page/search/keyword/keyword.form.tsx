import { ChangeEvent, FC, useCallback, useState } from 'react';
import { Box, TextField } from '@mui/material';
import { keywordStore } from '@/store';
import { KeywordFormType } from './types';

export const KeywordForm: FC<KeywordFormType> = ({ fixedType, onLoad }) => {
  const [keyword, setKeyword] = useState<string>('');

  const onChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      setKeyword(e.target.value.trim());
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
    <Box component="form" onSubmit={onAppend} sx={{ paddingY: 2 }}>
      <TextField
        label="새 키워드"
        value={keyword}
        onChange={onChange}
        size="small"
        placeholder="엔터(Enter)를 누르면 등록됩니다."
        autoComplete="off"
        fullWidth
      />
    </Box>
  );
};
