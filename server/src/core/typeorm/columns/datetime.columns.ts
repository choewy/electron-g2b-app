import { Column, ColumnOptions } from 'typeorm';
import { DateTimeTransformer } from '../transformers';

export const DateTimeColumn = (options: ColumnOptions = {}) => {
  return Column(
    Object.assign<Partial<ColumnOptions>, Partial<ColumnOptions>>(options, {
      type: 'datetime',
      transformer: new DateTimeTransformer(),
    }),
  );
};
