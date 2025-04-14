import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { typeOrmConfig } from './config/typeorm.config';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { LoanModule } from './loan/loan.module';
import { BookModule } from './books/book.module';
import { CategoryModule } from './category/category.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true, // bisa dipakai di mana pun
    }),
    TypeOrmModule.forRoot(typeOrmConfig),
    LoanModule,
    UsersModule,
    BookModule,
    AuthModule,
    CategoryModule,
  ],
})
export class AppModule {}
