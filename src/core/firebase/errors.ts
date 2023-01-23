import { AppMessageType } from '@/store';
import { FireBaseAuthErrorCode } from './enums';

export class FirebaseAuthErrorMessage implements AppMessageType {
  public readonly warn?: string | undefined;
  public readonly info?: string | undefined;
  public readonly error?: string | undefined;

  constructor(code: FireBaseAuthErrorCode) {
    switch (code) {
      case FireBaseAuthErrorCode.EmailAlreadyInUse:
        this.warn = '이미 등록된 이메일 계정입니다.';
        return;

      case FireBaseAuthErrorCode.UserDisabled:
        this.warn = '비활성 계정입니다. 관리자에게 문의하세요.';
        return;

      case FireBaseAuthErrorCode.WeekPassword:
        this.warn = '비밀번호는 6자 이상으로 입력하세요.';
        return;

      case FireBaseAuthErrorCode.InvalidEmail:
        this.warn = '이메일 형식이 아닙니다.';
        return;

      case FireBaseAuthErrorCode.MissingEmail:
        this.warn = '이메일 계정을 입력하세요.';
        return;

      case FireBaseAuthErrorCode.InternalError:
        this.warn = '비밀번호를 입력하세요.';
        return;

      case FireBaseAuthErrorCode.UserNotFound:
        this.warn = '존재하지 않는 계정입니다.';
        return;

      default:
        this.error = code;
    }
  }
}
