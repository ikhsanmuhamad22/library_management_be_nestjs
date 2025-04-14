import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { User } from 'src/users/domain/entities/user.entity';

export const typeOrmConfig: TypeOrmModuleOptions = {
  type: 'postgres',
  host: process.env.DATABASE_HOST,
  port: Number(process.env.DATABASE_PORT),
  username: process.env.DATABASE_USER,
  password: String(process.env.DATABASE_PASSWORD),
  database: process.env.DATABASE_NAME,
  entities: [User],
  // synchronize: true, // jangan dipakai di production
};
