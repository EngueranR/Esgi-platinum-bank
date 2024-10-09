import {
  AutoIncrement,
  Column,
  DataType,
  Model,
  PrimaryKey,
  Table,
  Unique,
} from 'sequelize-typescript';

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
}
