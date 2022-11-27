import { Module } from '@nestjs/common';
import { AuthModule } from './auth';
import { TodoModule } from './todo/todo.module';

@Module({
  imports: [AuthModule, TodoModule],
})
export class MainModule {}
