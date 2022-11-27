import { Public, UserParam } from '@/common';
import { User } from '@/core';
import { Body, Controller, Get, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthResponse, SignInBody, SignResponse, SignUpBody } from './dtos';

@Controller('auth')
export class AuthController {
  constructor(private readonly service: AuthService) {}

  @Get()
  async auth(@UserParam() user: User): Promise<AuthResponse> {
    return Object.assign<AuthResponse, User>(new AuthResponse(), user);
  }

  @Public()
  @Post('signup')
  async signUp(@Body() body: SignUpBody): Promise<SignResponse> {
    return this.service.signUp(body);
  }

  @Public()
  @Post('signin')
  async signIn(@Body() body: SignInBody): Promise<SignResponse> {
    return this.service.signIn(body);
  }
}
