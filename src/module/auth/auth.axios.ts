import { appConfig } from '@config/app.config';
import { AxiosClient } from '@core/axios-client';

import { ProfileDto } from './dto/profile.dto';
import { SignInDto } from './dto/signin.dto';
import { SignUpDto } from './dto/signup.dto';
import { ResetPasswordDto } from './dto/reset-password.dto';

export class AuthAxios extends AxiosClient {
  async auth() {
    return this.get<ProfileDto>('auth');
  }

  async signin(body: SignInDto) {
    return this.post<ProfileDto>('signin', body);
  }

  async signup(body: SignUpDto) {
    return this.post<ProfileDto>('signup', body);
  }

  async signout() {
    return this.post<void>('signout');
  }

  async verifyEmail(code: string) {
    return this.post<ProfileDto>('verify/email', { code });
  }

  async verifyResetPassword(body: ResetPasswordDto) {
    return this.post<ProfileDto>('verify/reset-password', body);
  }
}

export const authAxios = new AuthAxios(appConfig.getServerUrl(), 'users');
