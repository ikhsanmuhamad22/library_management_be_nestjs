import { Book } from 'src/books/entities/books.entity';
import { User } from 'src/users/entities/user.entity';
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  CreateDateColumn,
} from 'typeorm';

@Entity()
export class Loan {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => User, (user) => user.loans)
  user: User;

  @ManyToOne(() => Book, (book) => book.loans)
  book: Book;

  @Column({ type: 'date' })
  loan_date: Date;

  @Column({ type: 'date', nullable: true })
  return_date: Date;

  @Column({ default: 'borrowed' })
  status: 'borrowed' | 'returned' | 'late';

  @CreateDateColumn()
  created_at: Date;
}
