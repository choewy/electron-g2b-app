import { FC } from 'react';
import { Tab, Tabs } from '@mui/material';
import { KeywordTabsProps } from './types';

export const KeywordTabs: FC<KeywordTabsProps> = ({
  keywordType,
  onChange,
}) => {
  return (
    <Tabs value={keywordType} onChange={onChange} centered>
      <Tab value="include" label="검색 키워드" />
      <Tab value="exclude" label="제외 키워드" />
    </Tabs>
  );
};
