import { FC, Fragment } from 'react';
import { bidTasks } from '@/apis';
import { Box } from '@mui/material';
import { bidSearchStore } from '@/store';

export const BidSearchTasks: FC = () => {
  const tasks = bidSearchStore.useValue().tasks || [];
  const onChange = bidSearchStore.useSetTaskCallback();

  return (
    <Box display="flex">
      {bidTasks.map((task) => {
        const key = JSON.stringify(task);
        return (
          <Fragment key={key}>
            <input
              id={key}
              type="checkbox"
              value={task.text}
              checked={!!tasks.find(({ text }) => text === task.text)}
              onChange={onChange}
            />
            <label htmlFor={key}>{task.text}</label>
          </Fragment>
        );
      })}
    </Box>
  );
};
