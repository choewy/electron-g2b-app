import { FC } from 'react';
import { Checkbox, FormControlLabel, FormGroup } from '@mui/material';
import { hrcsTask } from '@/apis';
import { hrcsSearchStore } from '@/store';

export const HrcsSearchTasks: FC = () => {
  const tasks = hrcsSearchStore.useValue().tasks || [];
  const onChangeEvent = hrcsSearchStore.useChangeTaskEvent();

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
      {hrcsTask.values.map((task) => (
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
