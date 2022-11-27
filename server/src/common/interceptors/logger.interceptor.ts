import { CallHandler, ExecutionContext, Logger, NestInterceptor } from '@nestjs/common';
import { Observable, tap } from 'rxjs';
import { LogSerializer } from '../serializers';

export class LogInterceptor implements NestInterceptor {
  constructor(private readonly logger: Logger) {}

  intercept(ctx: ExecutionContext, next: CallHandler): Observable<any> {
    return next.handle().pipe(tap(() => new LogSerializer(this.logger, ctx).log()));
  }
}
