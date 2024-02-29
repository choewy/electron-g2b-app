import { FunctionComponent } from 'react';

import { Paper, Tab, Tabs } from '@mui/material';

import { CommonTable } from '@component/tables/common-table';
import { keywordHook } from '@module/keyword/keyword.hook';
import { keywordsStore } from '@module/keyword/keyword.store';
import { KeywordType } from '@module/keyword/dto/enums';
import { sizeStore } from '@module/size/size.store';

export const KeywordTabs: FunctionComponent = () => {
  keywordHook.useLoad();

  const height = sizeStore.useHeight(230);

  const [{ query }, setKeywords] = keywordsStore.useState();

  const colums = keywordsStore.useTableColumns();
  const rows = keywordsStore.useTableRows();

  return (
    <Paper sx={{ padding: 2, minWidth: 350, boxSizing: 'border-box' }}>
      <Tabs
        value={query.type}
        onChange={(_, type) => setKeywords((prev) => ({ ...prev, query: { ...prev.query, type } }))}
        sx={{ marginBottom: 1 }}
        centered
      >
        <Tab value={KeywordType.Include} label="검색어" />
        <Tab value={KeywordType.Exclude} label="제외어" />
      </Tabs>
      <CommonTable
        id="keyword-table"
        columns={colums}
        rows={rows}
        emptyText={`${query.type === KeywordType.Include ? '검색어' : '제외어'} 정보가 없습니다.`}
        height={height < 200 ? 200 : height}
      />
    </Paper>
  );
};
