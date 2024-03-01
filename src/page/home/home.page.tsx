import { FunctionComponent } from 'react';

import { Box } from '@mui/material';

import { sizeStore } from '@module/size/size.store';
import { searchHook } from '@module/search/search.hook';

import { PageWideContainer } from '@component/containers/page-wide-container';

import { SearchForm } from './components/search-form';
import { KeywordTabs } from './components/keyword-tabs';
import { FileTabs } from './components/file-tabs';

export const HomePage: FunctionComponent = () => {
  searchHook.useHas();
  searchHook.useSocket();

  const flexDirection = sizeStore.useFlexDirection(768);

  return (
    <PageWideContainer>
      <Box
        sx={{
          display: 'flex',
          flexDirection,
          gap: 2,
          maxWidth: '768px',
          marginY: 2,
        }}
      >
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
          <SearchForm />
          <FileTabs />
        </Box>
        <KeywordTabs />
      </Box>
    </PageWideContainer>
  );
};
