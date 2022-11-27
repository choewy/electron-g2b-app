import { User } from '@/core';
import { createParamDecorator, ExecutionContext } from '@nestjs/common';
import { RequestCtx } from '../guards';

export const UserParam = createParamDecorator<string>(
  (data: string, ctx: ExecutionContext): User | Partial<User> => {
    const request = ctx.switchToHttp().getRequest<RequestCtx>();
    const user = request.user;
    return data ? (user?.[data] as Partial<User>) : user;
  },
);
