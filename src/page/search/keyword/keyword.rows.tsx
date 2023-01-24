import { ChangeEvent, FC, useCallback, useState } from 'react';
import { Box, IconButton, TextField, Typography } from '@mui/material';
import { keywordStore } from '@/store';
import { KeywordRowMode, KeywordChildRowProps, KeywordRowProps } from './types';
import {
  Edit as EditIcon,
  Delete as DeleteIcon,
  Check as SaveIcon,
  Cancel as CancelIcon,
} from '@mui/icons-material';

export const KeywordReadonlyRow: FC<KeywordChildRowProps> = ({
  row,
  setRowMode,
}) => {
  const onEditable = useCallback(() => {
    setRowMode('editable');
  }, [setRowMode]);

  const onModalOpenEvent = keywordStore.useToggleDeleteModalEvent();

  return (
    <Box display="flex" sx={{ height: 40, width: '100%' }}>
      <Typography
        component="div"
        variant="body2"
        flex={1}
        sx={{
          display: 'flex',
          alignItems: 'center',
          width: '100%',
        }}
      >
        {row.keyword}
      </Typography>
      <IconButton onClick={onEditable} size="small">
        <EditIcon />
      </IconButton>
      <IconButton onClick={onModalOpenEvent(row.id)} size="small">
        <DeleteIcon />
      </IconButton>
    </Box>
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
    <Box display="flex" sx={{ height: 40, width: '100%' }}>
      <TextField
        variant="standard"
        value={keyword}
        onChange={onChange}
        autoComplete="off"
        sx={{ flex: 1, marginRight: 2, justifyContent: 'center' }}
        size="small"
        inputProps={{ style: { fontSize: 14 } }}
      />
      <IconButton onClick={onUpdate} size="small">
        <SaveIcon />
      </IconButton>
      <IconButton onClick={onReadonly} size="small">
        <CancelIcon />
      </IconButton>
    </Box>
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
