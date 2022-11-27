import { NestFactory, Reflector } from '@nestjs/core';
import { AppModule } from './app';
import { ConfigKey, ServerConfig } from '@/core';
import { ConfigService } from '@nestjs/config';
import { JwtGuard, LogInterceptor, SerializeInterceptor, ValidatePipe } from '@/common';
import { JwtService } from '@nestjs/jwt';
import { DataSource } from 'typeorm';
import { Logger } from '@nestjs/common';

(async () => {
  const app = await NestFactory.create(AppModule);

  const { host, port, helmet, json, urlencoded } = app
    .get(ConfigService)
    .get<ServerConfig>(ConfigKey.Server);

  app.use(helmet);
  app.use(json);
  app.use(urlencoded);
  app.enableCors({
    origin: '*',
  });

  app.useGlobalGuards(
    new JwtGuard(
      app.get(JwtService),
      app.get(ConfigService),
      app.get(DataSource),
      app.get(Reflector),
    ),
  );

  app.useGlobalInterceptors(
    new SerializeInterceptor(app.get(Reflector)),
    new LogInterceptor(app.get(Logger)),
  );

  app.useGlobalPipes(new ValidatePipe());

  await app.listen(port, host);
})();
