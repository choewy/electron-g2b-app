import { FunctionComponent } from 'react';

import { Box, IconButton, Paper, Tab, Tabs } from '@mui/material';
import { Add } from '@mui/icons-material';

import { CommonTable } from '@component/tables/common-table';
import { keywordHook } from '@module/keyword/keyword.hook';
import { keywordsStore } from '@module/keyword/keyword.store';
import { KeywordType } from '@module/keyword/dto/enums';
import { sizeStore } from '@module/size/size.store';

import { CreateKeywordDialog } from './dialogs/create-keyword-dialog';
import { UpdateKeywordDialog } from './dialogs/update-keyword-dialog';

export const KeywordTabs: FunctionComponent = () => {
  keywordHook.useLoad();

  const height = sizeStore.useHeight(230);

  const [{ query }, setKeywords] = keywordsStore.useState();
  const colums = keywordsStore.useTableColumns();
  const rows = keywordsStore.useTableRows();

  return (
    <>
      <CreateKeywordDialog />
      <UpdateKeywordDialog />
      <Paper sx={{ padding: 2, minWidth: 350, boxSizing: 'border-box' }}>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <Tabs
            value={query.type}
            onChange={(_, type) => setKeywords((prev) => ({ ...prev, query: { ...prev.query, type } }))}
            sx={{ marginBottom: 1 }}
          >
            <Tab value={KeywordType.Include} label="검색어" />
            <Tab value={KeywordType.Exclude} label="제외어" />
          </Tabs>
          <Box sx={{ marginBottom: 1 }}>
            <IconButton
              size="small"
              onClick={() =>
                setKeywords((prev) => ({
                  ...prev,
                  dialog: { ...prev.dialog, create: { open: true } },
                }))
              }
            >
              <Add />
            </IconButton>
          </Box>
        </Box>
        <CommonTable
          id="keyword-table"
          columns={colums}
          rows={rows}
          emptyText={`${query.type === KeywordType.Include ? '검색어' : '제외어'} 정보가 없습니다.`}
          height={height < 200 ? 200 : height}
        />
      </Paper>
    </>
  );
};
