import { isEmail } from 'class-validator';

import { AxiosValidator } from '@core/axios-client';

export class SignUpDto implements AxiosValidator {
  constructor(
    public name: string = '',
    public email: string = '',
    public password: string = '',
    public confirmPassword: string = '',
  ) {}

  validate(): string | void {
    if (this.name === '') {
      return '이름을 입력하세요.';
    }

    if (this.email === '') {
      return '이메일을 입력하세요.';
    }

    if (isEmail(this.email) === false) {
      return '이메일 형식에 맞지 않습니다.';
    }

    if (this.password === '') {
      return '비밀번호를 입력하세요.';
    }

    if (this.confirmPassword === '') {
      return '비밀번호 확인을 입력하세요.';
    }

    if (this.password !== this.confirmPassword) {
      return '비밀번호가 같지 않습니다.';
    }
  }
}
