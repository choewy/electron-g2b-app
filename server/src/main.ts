import { NestFactory } from '@nestjs/core';
import { AppModule } from './app';
import { ConfigKey, ServerConfig } from '@/core';
import { ConfigService } from '@nestjs/config';

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

  await app.listen(port, host);
})();
