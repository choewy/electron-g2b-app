import { PRIVATE_KEY, PUBLIC_KEY } from '../@constants';
import jwt from 'jsonwebtoken';
import { ATPayload, RTPayload } from '../@dto';

declare global {
  interface JwtDecoded {
    payload: ATPayload | null;
    expired: boolean;
  }
}

export const jwtSign = (
  payload: ATPayload | RTPayload,
  expiresIn: string | number,
): string => {
  return jwt.sign(payload, PRIVATE_KEY, { algorithm: 'RS256', expiresIn });
};

export const jwtVerify = (token: string): JwtDecoded => {
  try {
    return {
      payload: jwt.verify(token, PUBLIC_KEY) as ATPayload,
      expired: false,
    };
  } catch (error) {
    return {
      payload: null,
      expired: error.message.includes('jwt expired'),
    };
  }
};
