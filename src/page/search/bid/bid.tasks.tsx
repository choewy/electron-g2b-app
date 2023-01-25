import { FC } from 'react';
import { Checkbox, FormControlLabel, FormGroup } from '@mui/material';
import { bidTasks } from '@/apis';
import { bidSearchStore } from '@/store';

export const BidSearchTasks: FC = () => {
  const tasks = bidSearchStore.useValue().tasks || [];
  const onChangeEvent = bidSearchStore.useChangeTaskEvent();

  return (
    <FormGroup
      sx={{
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 2,
      }}
    >
      {bidTasks.map((task) => (
        <FormControlLabel
          key={JSON.stringify(task)}
          control={<Checkbox size="small" />}
          label={task.text}
          value={task.text}
          checked={!!tasks.find(({ text }) => text === task.text)}
          onChange={onChangeEvent(task.text)}
          componentsProps={{
            typography: { fontSize: 13 },
          }}
        />
      ))}
    </FormGroup>
  );
};
