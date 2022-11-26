import { JwtGuard } from '@/common';
import { Body, Controller, Get, Post, Req, UseGuards } from '@nestjs/common';
import { Request } from 'express';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private readonly service: AuthService) {}

  @Get()
  @UseGuards(JwtGuard)
  async auth(@Req() request: Request) {
    return {
      id: 1,
      name: 'test',
      email: 'test@test.com',
      imagePath: '',
    };
  }

  @Post('signup')
  async signUp(@Body() body: any) {
    return this.service.signUp(body);
  }

  @Post('signin')
  async signIn(@Body() body: any) {
    return this.service.signIn(body);
  }
}
