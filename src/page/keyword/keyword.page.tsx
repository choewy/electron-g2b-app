import { FirebaseKeywordType } from '@/core';
import { Tab, Tabs } from '@mui/material';
import { FC, SyntheticEvent, useCallback, useState } from 'react';
import { KeywordTab } from './keyword.tab';

export const KeywordPage: FC = () => {
  const [tabContent, setTabContent] = useState<FirebaseKeywordType>('include');

  const onChangeTab = useCallback(
    (_: SyntheticEvent<Element, Event>, value: FirebaseKeywordType) => {
      setTabContent(value);
    },
    [setTabContent],
  );

  return (
    <div>
      <h1>KEYWORD</h1>
      <Tabs value={tabContent} onChange={onChangeTab}>
        <Tab value="include" label="검색 키워드" />
        <Tab value="exclude" label="제외 키워드" />
      </Tabs>
      <KeywordTab value="include" content={tabContent} />
      <KeywordTab value="exclude" content={tabContent} />
    </div>
  );
};
