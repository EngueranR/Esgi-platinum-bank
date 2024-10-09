import {
  AutoIncrement,
  Column,
  DataType,
  Model,
  PrimaryKey,
  Table,
  Unique,
  ForeignKey,
} from 'sequelize-typescript';

@Table
export class CreditCard extends Model {
  @PrimaryKey
  @AutoIncrement
  @Column
  id: number;

  @Unique
  @Column(DataType.STRING)
  cardNumber: string;

  @Column(DataType.DATE)
  expiryDate: Date;

  @Column(DataType.STRING)
  cvv: string;

  // @ForeignKey(() => BankAccount)
  // @Column
  // bankAccountId: number;
}
