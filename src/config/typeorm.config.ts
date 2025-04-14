import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { Book } from 'src/books/entities/books.entity';
import { Category } from 'src/category/entities/category.entity';
import { Loan } from 'src/loan/entities/loan.entity';
import { User } from 'src/users/entities/user.entity';

export const typeOrmConfig: TypeOrmModuleOptions = {
  type: 'postgres',
  host: process.env.DATABASE_HOST,
  port: Number(process.env.DATABASE_PORT),
  username: process.env.DATABASE_USER,
  password: String(process.env.DATABASE_PASSWORD),
  database: process.env.DATABASE_NAME,
  entities: [User, Loan, Category, Book],
  synchronize: true, // jangan dipakai di production
};
