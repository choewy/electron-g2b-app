import { FC, useEffect } from 'react';
import { Box } from '@mui/material';
import CSVLink from 'react-json-to-csv';

import { BidSearchTasks } from './bid.tasks';
import { BidSearchDate } from './bid.date';
import { bidSearchStore } from '@/store';
import { BidItemRow } from '@/apis';
import { DateTime } from 'luxon';

export const BidSearchForm: FC = () => {
  const rows = bidSearchStore.useValue().rows || [];

  const onSearch = bidSearchStore.useSearchCallback();

  useEffect(() => {
    if (rows.length) {
      document.getElementById('csv-download-link')?.click();
    }
  }, [rows]);

  return (
    <Box flex="5" component="div">
      <BidSearchTasks />
      <BidSearchDate />
      <button onClick={onSearch}>검색</button>
      {
        <CSVLink
          id="csv-download-link"
          hidden={true}
          onLoadedData={console.log}
          data={rows.map((row) => new BidItemRow(row))}
          filename={[
            '나라장터입찰공고',
            DateTime.local().toFormat('yyyy-MM-dd-HHmmss'),
          ].join('-')}
        />
      }
    </Box>
  );
};
