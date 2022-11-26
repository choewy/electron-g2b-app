import { User } from '@/core';
import { Injectable } from '@nestjs/common';
import { DataSource, InsertResult, IsNull, Repository } from 'typeorm';

@Injectable()
export class AuthRepsitory {
  private readonly userRepo: Repository<User>;

  constructor(private readonly dataSource: DataSource) {
    this.userRepo = this.dataSource.getRepository(User);
  }

  async findByEmail(email: string): Promise<User> {
    return this.userRepo.findOneBy({
      email,
      deletedAt: IsNull(),
    });
  }

  async insert(user: Partial<User>): Promise<InsertResult> {
    return this.userRepo.insert(user);
  }
}
