import { KEYWORD_LABEL_TEXT, KEYWORD_TITLES } from '@/sheet';
import { Box, Tab, Tabs } from '@mui/material';
import { FC } from 'react';
import { KeywordSettingTabsProps } from './types';

export const KeywordSettingTabs: FC<KeywordSettingTabsProps> = ({
  value,
  onChange,
  children,
}) => {
  return (
    <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={onChange}>
          {KEYWORD_TITLES.map((title, i) => (
            <Tab
              key={`keyword-setting-tab-${i}`}
              label={KEYWORD_LABEL_TEXT[title]}
            />
          ))}
        </Tabs>
      </Box>
      {children}
    </Box>
  );
};
