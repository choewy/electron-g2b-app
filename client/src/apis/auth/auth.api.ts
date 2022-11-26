import { AxiosInstance } from '@/utils';
import {
  AuthResponse,
  LoginRequestBody,
  SignResponse,
  SignUpRequestBody,
} from './types';

class AuthApi extends AxiosInstance {
  private readonly URL = '/auth';

  async auth(): Promise<AuthResponse> {
    return this.request({
      method: this.method.Get,
      url: this.URL,
    });
  }

  async signIn(data: LoginRequestBody): Promise<SignResponse> {
    return this.request({
      method: this.method.Post,
      url: `${this.URL}/signin`,
      data,
    });
  }

  async signUp(data: SignUpRequestBody): Promise<SignResponse> {
    return this.request({
      method: this.method.Post,
      url: `${this.URL}/signup`,
      data,
    });
  }
}

export const authApi = new AuthApi();
