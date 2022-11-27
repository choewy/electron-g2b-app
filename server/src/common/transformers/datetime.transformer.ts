import { Transform } from 'class-transformer';
import { DateTime } from 'luxon';

export const DateTimeToString = () =>
  Transform(({ value }) =>
    DateTime.isDateTime(value)
      ? value.toSQL({
          includeOffset: false,
        })
      : null,
  );
