import { FC } from 'react';
import { Box } from '@mui/material';
import { keywordStore } from '@/store';
import { KeywordTabProps } from './types';
import { KeywordForm } from './keyword.form';
import { KeywordRow } from './keyword.rows';

export const KeywordPanel: FC<KeywordTabProps> = ({
  fixedType,
  keywordType,
}) => {
  const hidden = fixedType !== keywordType;
  const rows = keywordStore.useValue()[fixedType] || [];
  const onLoad = keywordStore.useLoadCallback(fixedType);

  return (
    <Box hidden={hidden}>
      <KeywordForm fixedType={fixedType} onLoad={onLoad} />
      {rows.map((row) => (
        <KeywordRow key={row.id} row={row} onLoad={onLoad} />
      ))}
    </Box>
  );
};
