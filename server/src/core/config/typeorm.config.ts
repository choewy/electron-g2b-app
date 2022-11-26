import { registerAs } from '@nestjs/config';
import { readFileSync } from 'fs';
import { DateTime } from 'luxon';
import { ConfigKey } from './enums';
import { TypeormConfig } from './types';

export default registerAs(
  ConfigKey.Typeorm,
  (): TypeormConfig => ({
    type: process.env.TYPEORM_TYPE as any,
    host: process.env.TYPEORM_HOST,
    port: parseInt(process.env.TYPEORM_PORT, 10),
    username: process.env.TYPEORM_USERNAME,
    password: process.env.TYPEORM_PASSWORD,
    database: process.env.TYPEORM_DATABASE,
    logging: process.env.TYPEORM_LOGGING === 'true',
    synchronize: process.env.TYPEORM_SYNCHRONIZE === 'true',
    dropSchema: process.env.TYPEORM_DROP_SCHEMA === 'true',
    autoLoadEntities: process.env.TYPEORM_AUTO_LOAD_ENTITIES === 'true',
    entities: [process.cwd() + process.env.TYPEORM_ENTITIES],
    migrations: [process.cwd() + process.env.TYPEORM_MIGRATIONS],
    timezone: process.env.TYPEORM_TIMEZONE,
    extra: {
      typeCast: (field, next) => {
        const { type } = field;

        if (type === 'DATE') {
          const val = field.string();

          return val === null ? null : DateTime.fromFormat(val, 'yyyy-MM-dd');
        } else if (type === 'DATETIME') {
          const val = field.string();

          return val === null ? null : DateTime.fromFormat(val, 'yyyy-MM-dd HH:mm:ss');
        } else {
          return next();
        }
      },
    },
    ssl:
      process.env.TYPEORM_SSL === 'true'
        ? {
            required: true,
            rejectUnauthorized: true,
            ca: readFileSync(process.env.TYPEORM_CA_PATH).toString(),
          }
        : undefined,
  }),
);
