import { Request } from 'express';

export type JwtPayload = {
  id: number;
};

export type RequestCtx = Request & {
  payload: JwtPayload;
  user: any;
};
