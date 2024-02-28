import { appConfig } from '@config/app.config';
import { AxiosClient } from '@core/axios-client';

import { ProfileDto } from './dto/profile.dto';
import { SignInDto } from './dto/signin.dto';
import { SignUpDto } from './dto/signup.dto';

export class AuthAxios extends AxiosClient {
  async auth() {
    return this.get<ProfileDto>('auth');
  }

  async signin(body: SignInDto) {
    return this.post<void>('signin', body);
  }

  async signup(body: SignUpDto) {
    return this.post<void>('signup', body);
  }

  async signout() {
    return this.post<void>('signout');
  }
}

export const authAxios = new AuthAxios(appConfig.getServerUrl(), 'users');
