export * from './node-env';
export * from './enums';
export * from './types';

import server from './server.config';
import typeorm from './typeorm.config';
import jwt from './jwt.config';

export const configs = [server, typeorm, jwt];
