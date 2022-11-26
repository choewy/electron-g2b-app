import { ConfigKey, JwtConfig, User } from '@/core';
import { CanActivate, ExecutionContext, Injectable, UnauthorizedException } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { JwtService } from '@nestjs/jwt';
import { DataSource, IsNull } from 'typeorm';
import { JwtExpiredException } from './exceptions';
import { RequestCtx } from './types';

@Injectable()
export class JwtGuard implements CanActivate {
  private readonly config: JwtConfig;

  constructor(
    private readonly jwtService: JwtService,
    private readonly configService: ConfigService,
    private readonly dataSource: DataSource,
  ) {
    this.config = this.configService.get<JwtConfig>(ConfigKey.Jwt);
  }

  async canActivate(ctx: ExecutionContext): Promise<boolean> {
    const http = ctx.switchToHttp();
    const request = http.getRequest<RequestCtx>();
    const bearer = (request.headers.authorization || 'Bearer ').replace('Bearer ', '');

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

      console.log(request.user);

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
