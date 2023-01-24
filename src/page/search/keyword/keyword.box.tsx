import {
  FC,
  Fragment,
  SyntheticEvent,
  useCallback,
  useEffect,
  useState,
} from 'react';
import { Paper } from '@mui/material';
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
    <Fragment>
      <Paper
        elevation={3}
        sx={{
          flex: 1,
          padding: 3,
          marginLeft: 1,
          maxHeight: 'inherit',
        }}
      >
        <KeywordTabs keywordType={keywordType} onChange={onChange} />
        {(['include', 'exclude'] as FirebaseKeywordType[]).map((fixedType) => (
          <KeywordPanel
            key={['keyword', fixedType, 'box'].join('-')}
            fixedType={fixedType}
            keywordType={keywordType}
          />
        ))}
      </Paper>
    </Fragment>
  );
};
