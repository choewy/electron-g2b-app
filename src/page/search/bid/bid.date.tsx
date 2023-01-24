import { FC } from 'react';
import { DateTime } from 'luxon';
import { DateFormat, DatePicker } from '@/component';
import { bidSearchStore } from '@/store';
import { Box } from '@mui/material';

export const BidSearchDate: FC = () => {
  const query = bidSearchStore.useValue().query || {
    inqryBgnDt: DateTime.local().toFormat(DateFormat),
    inqryEndDt: DateTime.local().toFormat(DateFormat),
  };

  const onChangeInqryBgnDt = bidSearchStore.useSetDateCallback('inqryBgnDt');
  const onChangeInqryEndDt = bidSearchStore.useSetDateCallback('inqryEndDt');

  return (
    <Box display="flex">
      <DatePicker
        label="조회시작일자"
        value={
          query.inqryBgnDt
            ? DateTime.fromFormat(query.inqryBgnDt, DateFormat)
            : undefined
        }
        onChange={onChangeInqryBgnDt}
      />
      <DatePicker
        label="조회종료일자"
        value={
          query.inqryEndDt
            ? DateTime.fromFormat(query.inqryEndDt, DateFormat)
            : undefined
        }
        onChange={onChangeInqryEndDt}
      />
    </Box>
  );
};
