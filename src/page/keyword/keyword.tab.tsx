import { ChangeEvent, FC, useCallback, useEffect, useState } from 'react';
import { keywordStore } from '@/store';
import { KeywordTabProps } from './types';
import { KeywordRow } from './keyword.row';

export const KeywordTab: FC<KeywordTabProps> = ({ value, content }) => {
  const hidden = value !== content;
  const [keyword, setKeyword] = useState<string>('');
  const { rows } = keywordStore.useValue();
  const onLoad = keywordStore.useLoadCallback(value);

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
    value,
    keyword,
    onLoad,
    onReset,
  );

  useEffect(() => {
    if (!hidden) {
      onLoad();
    }
  }, [hidden, onLoad]);

  return (
    <div hidden={hidden}>
      <form onSubmit={onAppend}>
        <input value={keyword} onChange={onChange} />
        <button type="submit">추가</button>
      </form>
      {(rows || []).map((row) => (
        <KeywordRow key={row.id} row={row} onLoad={onLoad} />
      ))}
    </div>
  );
};
