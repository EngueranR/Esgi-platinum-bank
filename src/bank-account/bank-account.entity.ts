import {
  AutoIncrement,
  Column,
  DataType,
  Model,
  PrimaryKey,
  Table,
  Unique,
} from 'sequelize-typescript';
import { BankAccountType } from './bank-account-type.enum';

@Table
export class BankAccount extends Model {
  @PrimaryKey
  @AutoIncrement
  @Column
  id: number;

  @Unique
  @Column(DataType.STRING)
  accountNumber: string;

  @Column(DataType.FLOAT)
  balance: number;

  @Column(DataType.DATE)
  openedDate: Date;

  @Column
  type: BankAccountType;
}
