import { IsSame } from '@/common';
import { Expose } from 'class-transformer';
import { IsNotEmpty, IsString } from 'class-validator';

export class SignInBody {
  @IsNotEmpty()
  @IsString()
  email: string;

  @IsNotEmpty()
  @IsString()
  password: string;
}

export class SignUpBody extends SignInBody {
  @IsNotEmpty()
  @IsString()
  name: string;

  @IsNotEmpty()
  @IsString()
  @IsSame('password')
  confirmPassword: string;
}

export class SignResponse {
  @Expose()
  accessToken: string;

  @Expose()
  refreshToken: string;
}

export class AuthResponse {
  @Expose()
  id: number;

  @Expose()
  name: string;

  @Expose()
  email: string;

  @Expose()
  imagePath: string;
}
