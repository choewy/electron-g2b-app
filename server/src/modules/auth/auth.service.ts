import { ConfigKey, JwtConfig, User } from '@/core';
import { BcryptService } from '@/core/service';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { JwtService } from '@nestjs/jwt';
import { AuthRepsitory } from './auth.repository';
import { SignInBody, SignResponse, SignUpBody } from './dtos';
import { AlreadyExistUserExeption, IncorrectPasswordException } from './exceptions';

@Injectable()
export class AuthService {
  private readonly config: JwtConfig;

  constructor(
    private readonly configService: ConfigService,
    private readonly jwtService: JwtService,
    private readonly bcryptService: BcryptService,
    private readonly repository: AuthRepsitory,
  ) {
    this.config = this.configService.get<JwtConfig>(ConfigKey.Jwt);
  }

  async signUp(body: SignUpBody): Promise<SignResponse> {
    if (body.password !== body.confirmPassword) {
      throw new IncorrectPasswordException();
    }

    const user = await this.repository.findByEmail(body.email);

    if (user) {
      throw new AlreadyExistUserExeption();
    }

    body.password = this.bcryptService.hash(body.password);

    const { identifiers } = await this.repository.insert(
      Object.assign<User, Partial<User>>(new User(), body),
    );

    return Object.assign<SignResponse, SignResponse>(new SignResponse(), {
      accessToken: this.jwtService.sign(
        { id: identifiers[0].id },
        { secret: this.config.secret, ...this.config.signOptions },
      ),
      refreshToken: this.jwtService.sign(
        { id: identifiers[0].id },
        { secret: this.config.secret, ...this.config.signOptions },
      ),
    });
  }

  async signIn(body: SignInBody): Promise<SignResponse> {
    const user = await this.repository.findByEmail(body.email);

    if (!user || !this.bcryptService.compare(body.password, user.password)) {
      throw new UnauthorizedException();
    }

    return Object.assign<SignResponse, SignResponse>(new SignResponse(), {
      accessToken: this.jwtService.sign(
        { id: user.id },
        { secret: this.config.secret, ...this.config.signOptions },
      ),
      refreshToken: this.jwtService.sign(
        { id: user.id },
        { secret: this.config.secret, ...this.config.signOptions },
      ),
    });
  }
}
