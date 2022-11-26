import { Injectable } from '@nestjs/common';
import * as bcrypt from 'bcrypt';

@Injectable()
export class BcryptService {
  private readonly SALT_OR_ROUNDS = 10;

  hash(str: string): string {
    return bcrypt.hashSync(str, this.SALT_OR_ROUNDS);
  }

  compare(str: string, hashed: string): boolean {
    return bcrypt.compareSync(str, hashed);
  }
}
