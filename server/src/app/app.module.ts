import { Module } from '@nestjs/common';
import { CoreModule } from '@/core';
import { MainModule } from '@/modules';

@Module({
  imports: [CoreModule, MainModule],
})
export class AppModule {}
