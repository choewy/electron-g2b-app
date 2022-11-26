import { registerAs } from '@nestjs/config';
import { ConfigKey } from './enums';
import { JwtConfig } from './types';

export default registerAs(
  ConfigKey.Jwt,
  (): JwtConfig => ({
    secret: process.env.JWT_SECRET,
    signOptions: {
      expiresIn: process.env.JWT_EXPIRES_IN,
      issuer: process.env.JWT_ISSUER,
      subject: process.env.JWT_SUBJECT,
      audience: process.env.JWT_AUDIENCE,
    },
    verifyOptions: {
      issuer: process.env.JWT_ISSUER,
      subject: process.env.JWT_SUBJECT,
      audience: process.env.JWT_AUDIENCE,
    },
  }),
);
