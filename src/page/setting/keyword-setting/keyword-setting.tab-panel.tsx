import { Box } from '@mui/material';
import { FC } from 'react';
import { KeywordSettingTabPanelProps } from './types';

export const KeywordSettingTabPanel: FC<KeywordSettingTabPanelProps> = ({
  children,
  hidden,
}) => {
  return (
    <div hidden={hidden}>
      <Box sx={{ p: 3 }}>{children}</Box>
    </div>
  );
};
