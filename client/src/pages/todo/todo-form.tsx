import { useOnChangeEvent } from '@/hooks';
import { Box, Button, TextField } from '@mui/material';
import { useState } from 'react';
import { useCallCreateTodoApi } from './hooks';

const TodoForm = () => {
  const [title, setTitle] = useState<string>('');

  const onChangeEvent = useOnChangeEvent();
  const onSubmitEvent = useCallCreateTodoApi();

  return (
    <Box
      component="form"
      sx={{
        my: 2,
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
      }}
      onSubmit={onSubmitEvent(title, setTitle)}
    >
      <TextField
        type="text"
        label="그룹명"
        value={title}
        onChange={onChangeEvent(setTitle)}
      />

      <Button type="submit">등록</Button>
    </Box>
  );
};

export default TodoForm;
