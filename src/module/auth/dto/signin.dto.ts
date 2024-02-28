import { isEmail } from 'class-validator';

import { AxiosValidator } from '@core/axios-client';

export class SignInDto implements AxiosValidator {
  constructor(public email: string = '', public password: string = '') {}

  validate(): string | void {
    if (this.email === '') {
      return '이메일을 입력하세요.';
    }

    if (isEmail(this.email) === false) {
      return '이메일 형식에 맞지 않습니다.';
    }

    if (this.password === '') {
      return '비밀번호를 입력하세요.';
    }
  }
}
