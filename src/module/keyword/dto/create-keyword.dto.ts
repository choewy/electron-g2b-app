import { AxiosValidator } from '@core/axios-client';

import { KeywordType } from './enums';

export class CreateKeywordDto implements AxiosValidator {
  constructor(readonly type: KeywordType, readonly text: string) {}

  validate(): string | void {
    if (this.text === '') {
      return '키워드를 입력하세요.';
    }
  }
}
