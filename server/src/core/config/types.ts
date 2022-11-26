import { JwtModuleOptions } from '@nestjs/jwt';
import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { NextHandleFunction } from 'connect';

export type ServerConfig = {
  port: number;
  host: string;
  helmet: NextHandleFunction;
  json: NextHandleFunction;
  urlencoded: NextHandleFunction;
};

export type TypeormConfig = TypeOrmModuleOptions;
export type JwtConfig = JwtModuleOptions;
