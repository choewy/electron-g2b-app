import { useOnChangeEvent } from '@/hooks';
import { TodoStore } from '@/states';
import { Box, Button, TextField } from '@mui/material';
import { FC, useState } from 'react';
import { useCallCreateTodoItemApi } from './hooks';

type Props = {
  todo: TodoStore;
};

const TodoItemForm: FC<Props> = ({ todo }) => {
  const [name, setName] = useState<string>('');
  const [description, setDescription] = useState<string>('');

  const onChangeEvent = useOnChangeEvent();
  const onSubmitEvent = useCallCreateTodoItemApi();

  return (
    <Box
      component="form"
      sx={{
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
      }}
      onSubmit={onSubmitEvent(todo.id, name, description)}
    >
      <TextField
        type="text"
        label="할 일"
        size="small"
        value={name}
        onChange={onChangeEvent(setName)}
      />
      <TextField
        type="text"
        label="설명"
        size="small"
        value={description}
        onChange={onChangeEvent(setDescription)}
      />
      <Button type="submit">등록</Button>
    </Box>
  );
};

export default TodoItemForm;
