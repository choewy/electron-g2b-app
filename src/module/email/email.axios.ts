import { appConfig } from '@config/app.config';
import { AxiosClient } from '@core/axios-client';

export class EmailAxios extends AxiosClient {
  async getRemainedVerifyEmailSeconds() {
    return this.get<number>('verify/seconds');
  }

  async sendVerifyEmail() {
    return this.post<void>('verify');
  }

  async sendResetPassword() {
    return this.post<void>('reset-password');
  }
}

export const emailAxios = new EmailAxios(appConfig.getServerUrl(), 'email');
