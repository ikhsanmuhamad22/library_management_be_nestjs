import { Category } from 'src/category/entities/category.entity';
import { Loan } from 'src/loan/entities/loan.entity';
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  OneToMany,
  CreateDateColumn,
} from 'typeorm';

@Entity()
export class Book {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  author: string;

  @Column()
  publisher: string;

  @Column()
  year: number;

  @Column()
  stock: number;

  @CreateDateColumn()
  created_at: Date;

  @ManyToOne(() => Category, (category) => category.books)
  category: Category;

  @OneToMany(() => Loan, (loan) => loan.book)
  loans: Loan[];
}
