import { ExecutionContext, Logger } from '@nestjs/common';
import { RequestCtx } from '../guards';

export class LogSerializer {
  private readonly request: RequestCtx;

  constructor(private readonly logger: Logger, private readonly ctx: ExecutionContext) {
    this.request = this.ctx.switchToHttp().getRequest<RequestCtx>();
    this.request.ctx = ctx.getClass().name || 'Application';
  }

  log() {
    const { method, ip, path, ctx } = this.request;
    return this.logger.verbose(`(${ip} - ${method} - ${path})`, ctx);
  }
}
