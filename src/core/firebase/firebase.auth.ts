import {
  Auth,
  UserCredential,
  signInWithEmailAndPassword,
  signInWithPopup,
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  User,
} from 'firebase/auth';
import { FireBaseAuthErrorCode } from './enums';
import { firebaseApp } from './firebase.app';

export class FirebaseAuth {
  public auth: Auth;
  private googleAuth: GoogleAuthProvider;

  constructor() {
    this.auth = firebaseApp.auth;
    this.googleAuth = new GoogleAuthProvider();
    this.googleAuth.addScope('profile');
    this.googleAuth.addScope('email');
  }

  getErrorMessageByCode(e: unknown): string {
    const error = e as Record<'code', FireBaseAuthErrorCode>;

    switch (error.code) {
      case FireBaseAuthErrorCode.EmailAlreadyInUse:
        return '이미 등록된 이메일 계정입니다.';

      case FireBaseAuthErrorCode.UserDisabled:
        return '비활성 계정입니다. 관리자에게 문의하세요.';

      case FireBaseAuthErrorCode.WeekPassword:
        return '비밀번호는 6자 이상으로 입력하세요.';

      default:
        return error.code;
    }
  }

  get user(): User | null {
    return this.auth.currentUser;
  }

  async signInWithPopup(provider: 'google'): Promise<UserCredential | null> {
    switch (provider) {
      case 'google':
        return signInWithPopup(this.auth, this.googleAuth);
    }
  }

  async signUpWithEmailAndPassword(
    email: string,
    password: string,
  ): Promise<UserCredential> {
    return createUserWithEmailAndPassword(this.auth, email, password);
  }

  async signInWithEmailAndPassword(
    email: string,
    password: string,
  ): Promise<UserCredential> {
    return signInWithEmailAndPassword(this.auth, email, password);
  }

  async signOut(): Promise<void> {
    return this.auth.signOut();
  }
}

export const firebaseAuth = new FirebaseAuth();
