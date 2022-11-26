import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthRepsitory } from './auth.repository';
import { AuthService } from './auth.service';

@Module({
  providers: [AuthRepsitory, AuthService],
  controllers: [AuthController],
})
export class AuthModule {}
