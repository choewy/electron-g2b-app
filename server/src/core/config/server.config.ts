import { registerAs } from '@nestjs/config';
import { json, urlencoded } from 'express';

import helmet from 'helmet';

import { ConfigKey } from './enums';
import { ServerConfig } from './types';

export default registerAs(
  ConfigKey.Server,
  (): ServerConfig => ({
    port: parseInt(process.env.SERVER_PORT, 10),
    host: process.env.SERVER_HOST,
    helmet: helmet(),
    json: json({ limit: process.env.SERVER_LIMIT }),
    urlencoded: urlencoded({ limit: process.env.SERVER_LIMIT, extended: true }),
  }),
);
