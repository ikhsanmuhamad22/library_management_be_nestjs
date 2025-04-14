import { Loan } from 'src/loan/entities/loan.entity';
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  OneToMany,
} from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column({ unique: true })
  email: string;

  @Column()
  password: string;

  @Column({ default: 'member' })
  role: 'admin' | 'member';

  @CreateDateColumn()
  created_at: Date;

  @OneToMany(() => Loan, (loan) => loan.user)
  loans: Loan[];
}
