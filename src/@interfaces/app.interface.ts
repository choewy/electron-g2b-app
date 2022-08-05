import { NextFunction, Request, Response } from 'express';
import { ATPayload } from '../@dto';

declare global {
  interface Req extends Request, Record<'user', ATPayload> {}
  interface Res extends Response {}
  interface Next extends NextFunction {}
}

export {};
