import { AxiosValidator } from '@core/axios-client';

export class StartSearchDto implements AxiosValidator {
  constructor(readonly startDate: string, readonly endDate: string, readonly types: number[]) {}

  validate(): string | void {
    return;
  }
}
