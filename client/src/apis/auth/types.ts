import { AxiosResponse } from 'axios';

export type AuthResponse = AxiosResponse<{
  id: number;
  email: string;
  name: string;
  imagePath: string;
}>;

export type SignResponse = AxiosResponse<{
  accessToken: string;
  refreshToken: string;
}>;

export type LoginRequestBody = {
  email: string;
  password: string;
};

export type SignUpRequestBody = LoginRequestBody & {
  name: string;
  confirmPassword: string;
};
