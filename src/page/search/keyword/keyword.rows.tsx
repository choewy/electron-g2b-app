import { ChangeEvent, FC, Fragment, useCallback, useState } from 'react';
import { Box } from '@mui/material';
import { keywordStore } from '@/store';
import { KeywordRowMode, KeywordChildRowProps, KeywordRowProps } from './types';

export const KeywordReadonlyRow: FC<KeywordChildRowProps> = ({
  row,
  onLoad,
  setRowMode,
}) => {
  const onEditable = useCallback(() => {
    setRowMode('editable');
  }, [setRowMode]);

  const onDelete = keywordStore.useDeleteCallback(row.id, onLoad);

  return (
    <Fragment>
      <div>{row.keyword}</div>
      <button onClick={onEditable}>수정</button>
      <button onClick={onDelete}>삭제</button>
    </Fragment>
  );
};

export const KeywordEditableRow: FC<KeywordChildRowProps> = ({
  row,
  onLoad,
  setRowMode,
}) => {
  const [keyword, setKeyword] = useState<string>(row.keyword);

  const onReadonly = useCallback(() => {
    setRowMode('readonly');
    setKeyword(row.keyword);
  }, [row, setRowMode, setKeyword]);

  const onChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      setKeyword(e.target.value);
    },
    [setKeyword],
  );

  const onUpdate = keywordStore.useUpdateCallback(
    row.id,
    keyword,
    onLoad,
    onReadonly,
  );

  return (
    <Fragment>
      <input
        type="text"
        value={keyword}
        onChange={onChange}
        autoComplete="off"
      />
      <button onClick={onUpdate}>저장</button>
      <button onClick={onReadonly}>취소</button>
    </Fragment>
  );
};

export const KeywordRow: FC<KeywordRowProps> = (props) => {
  const [rowMode, setRowMode] = useState<KeywordRowMode>('readonly');

  return (
    <Box display="flex">
      {rowMode === 'readonly' ? (
        <KeywordReadonlyRow {...props} setRowMode={setRowMode} />
      ) : (
        <KeywordEditableRow {...props} setRowMode={setRowMode} />
      )}
    </Box>
  );
};
