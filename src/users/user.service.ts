// src/users/users.service.ts
import { Injectable, Param } from '@nestjs/common';
import { User } from './domain/entities/user.entity';
import { UserRepository } from './infrastucture/repositories/user-repository.interfaces';

@Injectable()
export class UsersService {
  constructor(private readonly userRepo: UserRepository) {}

  async create(user: Partial<User>) {
    return this.userRepo.createUser(user);
  }

  async findAll(): Promise<User[]> {
    return this.userRepo.findAll();
  }

  async findByEmail(email: string) {
    return this.userRepo.findByEmail(email);
  }

  async findById(id: string) {
    return this.userRepo.findById(Number(id));
  }
}
