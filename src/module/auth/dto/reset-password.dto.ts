import { isEmail } from 'class-validator';

import { AxiosValidator } from '@core/axios-client';

export class ResetPasswordDto implements AxiosValidator {
  constructor(
    public email: string,
    public tempPassword: string,
    public newPassword: string,
    public confirmPassword: string,
  ) {}

  validate(): string | void {
    if (this.email === '') {
      return '이메일을 입력하세요.';
    }

    if (isEmail(this.email) === false) {
      return '이메일 형식에 맞지 않습니다.';
    }

    if (this.tempPassword === '') {
      return '임시 비밀번호를 입력하세요.';
    }

    if (this.newPassword === '') {
      return '새 비밀번호를 입력하세요.';
    }

    if (this.confirmPassword === '') {
      return '새 비밀번호 확인을 입력하세요.';
    }

    if (this.newPassword !== this.confirmPassword) {
      return '새 비밀번호가 같지 않습니다.';
    }
  }
}
