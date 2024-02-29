import { FunctionComponent } from 'react';

import { Box } from '@mui/material';

import { PageWideContainer } from '@component/containers/page-wide-container';

import { SearchForm } from './components/search-form';
import { KeywordTabs } from './components/keyword-tabs';
import { sizeStore } from '@module/size/size.store';
import { FileTabs } from './components/file-tabs';
import { searchHook } from '@module/search/search.hook';

export const HomePage: FunctionComponent = () => {
  const flexDirection = sizeStore.useFlexDirection(768);

  searchHook.useHas();
  searchHook.useSocket();

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
