import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
import { Book } from './entities/books.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Book])],
})
export class BookModule {}
