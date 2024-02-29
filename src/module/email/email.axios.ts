import { appConfig } from '@config/app.config';
import { AxiosClient } from '@core/axios-client';
import { SendResetPasswordEmailDto } from './dto/send-reset-password-email.dto';

export class EmailAxios extends AxiosClient {
  async getRemainedVerifyEmailSeconds() {
    return this.get<number>('verify/seconds');
  }

  async sendVerifyEmail() {
    return this.post<void>('verify');
  }

  async sendResetPassword(body: SendResetPasswordEmailDto) {
    return this.post<void>('reset-password', body);
  }
}

export const emailAxios = new EmailAxios(appConfig.getServerUrl(), 'email');
