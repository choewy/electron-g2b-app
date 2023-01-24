import { FC, SyntheticEvent, useCallback, useEffect, useState } from 'react';
import { Box } from '@mui/material';
import { FirebaseKeywordType } from '@/core';
import { KeywordPanel } from './keyword.panel';
import { KeywordTabs } from './keyword.tabs';
import { keywordStore } from '@/store';

export const KeywordBox: FC = () => {
  const [keywordType, setKeywordType] =
    useState<FirebaseKeywordType>('include');

  const onChange = useCallback(
    (_: SyntheticEvent<Element, Event>, keywordType: FirebaseKeywordType) => {
      setKeywordType(keywordType);
    },
    [setKeywordType],
  );

  const onInit = keywordStore.useInitCallback();

  useEffect(() => {
    onInit();
  }, [onInit]);

  return (
    <Box flex="3">
      <KeywordTabs keywordType={keywordType} onChange={onChange} />
      {(['include', 'exclude'] as FirebaseKeywordType[]).map((fixedType) => (
        <KeywordPanel
          key={['keyword', fixedType, 'box'].join('-')}
          fixedType={fixedType}
          keywordType={keywordType}
        />
      ))}
    </Box>
  );
};
