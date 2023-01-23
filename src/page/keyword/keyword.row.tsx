import { ChangeEvent, FC, Fragment, useCallback, useState } from 'react';
import { keywordStore } from '@/store';
import { KeywordRowProps, KeywordRowDetailProps } from './types';

const KeywordViewRow: FC<KeywordRowDetailProps> = ({
  row,
  onLoad,
  setEditable,
}) => {
  const onEditable = useCallback(() => {
    setEditable(true);
  }, [setEditable]);

  const onDelete = keywordStore.useDeleteCallback(row.id, onLoad);

  return (
    <div style={{ display: 'flex' }}>
      <div>{row.keyword}</div>
      <button onClick={onEditable}>수정</button>
      <button onClick={onDelete}>삭제</button>
    </div>
  );
};

const KeywordEditRow: FC<KeywordRowDetailProps> = ({
  row,
  onLoad,
  setEditable,
}) => {
  const [keyword, setKeyword] = useState<string>(row.keyword);

  const onEditadisble = useCallback(() => {
    setEditable(false);
  }, [setEditable]);

  const onUpdate = keywordStore.useUpdateCallback(
    row.id,
    keyword,
    onLoad,
    onEditadisble,
  );

  const onChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      setKeyword(e.target.value);
    },
    [setKeyword],
  );

  return (
    <div style={{ display: 'flex' }}>
      <input
        type="text"
        value={keyword}
        onChange={onChange}
        autoComplete="off"
      />
      <button onClick={onUpdate}>저장</button>
      <button onClick={onEditadisble}>취소</button>
    </div>
  );
};

export const KeywordRow: FC<KeywordRowProps> = (props) => {
  const [editable, setEditable] = useState<boolean>(false);

  return (
    <Fragment>
      {editable ? (
        <KeywordEditRow {...props} setEditable={setEditable} />
      ) : (
        <KeywordViewRow {...props} setEditable={setEditable} />
      )}
    </Fragment>
  );
};
