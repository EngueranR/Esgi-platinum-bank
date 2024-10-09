import {
  AutoIncrement,
  Column,
  DataType,
  Model,
  PrimaryKey,
  Table,
  ForeignKey,
} from 'sequelize-typescript';
import { BankAccount } from 'src/bank-account/bank-account.entity';

@Table
export class Transaction extends Model<Transaction> {
  @PrimaryKey
  @AutoIncrement
  @Column
  id: number;

  @Column(DataType.FLOAT)
  amount: number;

  @Column(DataType.STRING)
  transactionType: string;

  @Column(DataType.DATE)
  transactionDate: Date;

  @ForeignKey(() => BankAccount)
  @Column
  sourceAccountId: number;

  @ForeignKey(() => BankAccount)
  @Column
  destinationAccountId: number;
}
