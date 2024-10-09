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
export class CreditCard extends Model {
  @PrimaryKey
  @AutoIncrement
  @Column
  id: number;

  @Unique
  @Column(DataType.STRING(16))
  cardNumber: string;

  @Column(DataType.DATE)
  expiryDate: Date;

  @Column(DataType.STRING(3))
  cvv: string;

  @Column(DataType.STRING(4))
  pin: string;
}
