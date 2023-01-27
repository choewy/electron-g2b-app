import { DateTime } from 'luxon';

export const createFileName = (title: string, exp: 'csv' | 'xlsx'): string => {
  return (
    [title, DateTime.local().toFormat('yyyy-MM-dd-HHmmss')].join('-') + exp
  );
};
