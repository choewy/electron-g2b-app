import { Global, Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { JwtModule, JwtService } from '@nestjs/jwt';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigKey, configs, JwtConfig, TypeormConfig } from './config';
import { BcryptService } from './service';

@Global()
@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: configs,
    }),
    TypeOrmModule.forRootAsync({
      inject: [ConfigService],
      useFactory(configService: ConfigService) {
        return configService.get<TypeormConfig>(ConfigKey.Typeorm);
      },
    }),
    JwtModule.registerAsync({
      inject: [ConfigService],
      useFactory(configService: ConfigService) {
        return configService.get<JwtConfig>(ConfigKey.Jwt);
      },
    }),
  ],
  providers: [JwtService, BcryptService],
  exports: [JwtService, BcryptService],
})
export class CoreModule {}
