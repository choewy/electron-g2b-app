import { FC } from 'react';
import { DateTime } from 'luxon';
import { Box } from '@mui/material';
import { DateFormat, DatePicker } from '@/component';
import { hrcsSearchStore } from '@/store';

export const HrcsSearchDate: FC = () => {
  const query = hrcsSearchStore.useValue().query || {
    inqryBgnDt: DateTime.local().startOf('day').toFormat(DateFormat),
    inqryEndDt: DateTime.local().endOf('day').toFormat(DateFormat),
  };

  const onChangeInqryBgnDt = hrcsSearchStore.useSetDateCallback('inqryBgnDt');
  const onChangeInqryEndDt = hrcsSearchStore.useSetDateCallback('inqryEndDt');

  return (
    <Box display="flex" sx={{ alignItems: 'center', justifyContent: 'center' }}>
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
