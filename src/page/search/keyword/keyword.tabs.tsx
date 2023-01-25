import { FC } from 'react';
import { Tab, Tabs } from '@mui/material';
import { KeywordTabsProps } from './types';
import { keywordStore } from '@/store';

export const KeywordTabs: FC<KeywordTabsProps> = ({
  keywordType,
  onChange,
}) => {
  const keywords = keywordStore.useValue();
  const includes = (keywords.include || []).length;
  const excludes = (keywords.exclude || []).length;

  return (
    <Tabs value={keywordType} onChange={onChange} centered>
      <Tab value="include" label={`검색 키워드(${includes})`} />
      <Tab value="exclude" label={`제외 키워드(${excludes})`} />
    </Tabs>
  );
};
