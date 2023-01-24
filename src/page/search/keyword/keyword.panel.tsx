import { FC } from 'react';
import { Box } from '@mui/material';
import { keywordStore } from '@/store';
import { KeywordTabProps } from './types';
import { KeywordForm } from './keyword.form';
import { KeywordRow } from './keyword.rows';
import { KeywordDeleteModal } from './keyword.modal';

export const KeywordPanel: FC<KeywordTabProps> = ({
  fixedType,
  keywordType,
}) => {
  const hidden = fixedType !== keywordType;
  const rows = keywordStore.useValue()[fixedType] || [];
  const onLoad = keywordStore.useLoadCallback(fixedType);

  return (
    <Box hidden={hidden} sx={{ padding: 1 }}>
      <KeywordDeleteModal hidden={hidden} onLoad={onLoad} />
      <KeywordForm fixedType={fixedType} onLoad={onLoad} />
      <Box sx={{ flex: 1, overflowY: 'scroll', maxHeight: 400 }}>
        {rows.map((row) => (
          <KeywordRow key={row.id} row={row} onLoad={onLoad} />
        ))}
      </Box>
    </Box>
  );
};
