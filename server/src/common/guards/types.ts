import { Request } from 'express';

export type JwtPayload = {
  id: number;
};

export type RequestCtx = Request & {
  payload: JwtPayload;
  ctx: string;
  user: any;
};
