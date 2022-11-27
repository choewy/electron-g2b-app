import { BadRequestException } from '@nestjs/common';
import { Transform } from 'class-transformer';

class IsSamePipeException extends BadRequestException {}

export const IsSame = (key: string) =>
  Transform(({ obj, value }) => {
    if (obj[key] === value) {
      return value;
    }

    throw new IsSamePipeException();
  });
