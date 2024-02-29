import { isEmail } from 'class-validator';

import { AxiosValidator } from '@core/axios-client';

export class SendResetPasswordEmailDto implements AxiosValidator {
  constructor(public email: string = '') {}

  validate(): string | void {
    if (this.email === '') {
      return '이메일을 입력하세요.';
    }

    if (isEmail(this.email) === false) {
      return '이메일 형식에 맞지 않습니다.';
    }
  }
}
