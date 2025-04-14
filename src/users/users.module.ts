import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './domain/entities/user.entity';
import { UsersService } from './user.service';
import { UserRepository } from './infrastucture/repositories/user-repository.interfaces';
import { UsersController } from './user.controller';

@Module({
  imports: [TypeOrmModule.forFeature([User])],
  providers: [UsersService, UserRepository],
  controllers: [UsersController],
  exports: [UsersService], // supaya bisa dipakai oleh auth
})
export class UsersModule {}
