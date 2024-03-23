import { appConfig } from '@config/app.config';
import { AxiosClient } from '@core/axios-client';
import { SendResetPasswordEmailDto } from './dto/send-reset-password-email.dto';
import { ProfileDto } from '@module/auth/dto/profile.dto';
import { ResetPasswordDto } from '@module/auth/dto/reset-password.dto';

export class EmailAxios extends AxiosClient {
  async getSignUpEmailRemainSeconds() {
    return this.get<number>('check/signup');
  }

  async sendSignUpEmail() {
    return this.post<void>('send/signup');
  }

  async sendResetPasswordEmail(body: SendResetPasswordEmailDto) {
    return this.post<void>('send/reset-password', body);
  }

  async verifySignUpEmail(code: string) {
    return this.patch<ProfileDto>('verify/signup', { code });
  }

  async verifyResetPasswordEmail(body: ResetPasswordDto) {
    return this.patch<ProfileDto>('verify/reset-password', body);
  }
}

export const emailAxios = new EmailAxios(appConfig.getServerUrl(), 'email');
