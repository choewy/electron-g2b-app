import { ConfigKey, JwtConfig, User } from '@/core';
import { CanActivate, ExecutionContext, UnauthorizedException } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { Reflector } from '@nestjs/core';
import { JwtService } from '@nestjs/jwt';
import { DataSource, IsNull } from 'typeorm';
import { MetadataKey, Scope } from '../metadata';
import { JwtExpiredException } from './exceptions';
import { RequestCtx } from './types';

export class JwtGuard implements CanActivate {
  private readonly config: JwtConfig;

  constructor(
    private readonly jwtService: JwtService,
    private readonly configService: ConfigService,
    private readonly dataSource: DataSource,
    private readonly reflector: Reflector,
  ) {
    this.config = this.configService.get<JwtConfig>(ConfigKey.Jwt);
  }

  async canActivate(ctx: ExecutionContext): Promise<boolean> {
    if (this.reflector.get<Scope>(MetadataKey.Scope, ctx.getHandler()) === Scope.Public) {
      return true;
    }

    const http = ctx.switchToHttp();
    const request = http.getRequest<RequestCtx>();
    const bearer = (request.headers.authorization || 'Bearer ').replace('Bearer ', '');

    return this.validateRequest(request, bearer);
  }

  async validateRequest(request: RequestCtx, bearer: string) {
    try {
      const payload = this.jwtService.verify(bearer, {
        secret: this.config.secret,
        ...this.config.verifyOptions,
      });

      request.user = await this.dataSource.getRepository(User).findOne({
        where: {
          id: payload.id,
          deletedAt: IsNull(),
        },
      });

      if (!request.user) {
        throw new UnauthorizedException();
      }

      return true;
    } catch (e) {
      switch (e.message) {
        case 'jwt expired':
          throw new JwtExpiredException();

        default:
          throw new UnauthorizedException();
      }
    }
  }
}
