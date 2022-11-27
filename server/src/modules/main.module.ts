import { Module } from '@nestjs/common';
import { AuthModule } from './auth';
import { TodoModule } from './todo';

@Module({
  imports: [AuthModule, TodoModule],
})
export class MainModule {}
