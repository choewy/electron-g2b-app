import { FunctionComponent } from 'react';

import { Paper, Tab, Tabs } from '@mui/material';

import { CommonTable } from '@component/tables/common-table';

import { fileHook } from '@module/file/file.hook';
import { filesStore } from '@module/file/file.store';
import { sizeStore } from '@module/size/size.store';
import { SearchType } from '@module/search/dto/enums';

export const FileTabs: FunctionComponent = () => {
  fileHook.useLoad();

  const height = sizeStore.useHeight(403);

  const [{ query }, setFiles] = filesStore.useState();

  const colums = filesStore.useTableColumns();
  const rows = filesStore.useTableRows();

  return (
    <Paper sx={{ padding: 2, minWidth: 350, boxSizing: 'border-box', maxHeight: height }}>
      <Tabs
        value={query.type}
        onChange={(_, type) => setFiles((prev) => ({ ...prev, query: { ...prev.query, type } }))}
        sx={{ marginBottom: 1 }}
        centered
      >
        <Tab value={SearchType.Bids} label="입찰공고" />
        <Tab value={SearchType.Hrcs} label="사전규격" />
      </Tabs>
      <CommonTable
        id="file-table"
        columns={colums}
        rows={rows}
        emptyText={`${query.type === SearchType.Bids ? '입찰공고' : '사전규격'} 조회 이력이 없습니다.`}
        height={height - 85}
      />
    </Paper>
  );
};
